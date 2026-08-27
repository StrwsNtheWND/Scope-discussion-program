// Scope Discussion Checklist Builder
// Vanilla JS, no build step. State persists to localStorage.

const STORAGE_KEY = "scopeChecklists.v1";
const LAST_OPEN_KEY = "scopeChecklists.lastOpenId";

let state = {
  checklists: [], // array of checklist objects
  activeId: null,
};

function uid() {
  return "id-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

// ---------- persistence ----------

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state.checklists = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to load checklists from storage", e);
    state.checklists = [];
  }
  state.activeId = localStorage.getItem(LAST_OPEN_KEY) || null;
  if (state.activeId && !state.checklists.find((c) => c.id === state.activeId)) {
    state.activeId = null;
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.checklists));
  if (state.activeId) {
    localStorage.setItem(LAST_OPEN_KEY, state.activeId);
  }
  flashSaved();
}

let saveFlashTimer = null;
function flashSaved() {
  const el = document.getElementById("save-indicator");
  if (!el) return;
  el.textContent = "Saved just now";
  clearTimeout(saveFlashTimer);
  saveFlashTimer = setTimeout(() => {
    el.textContent = "Saved";
  }, 1500);
}

function getActive() {
  return state.checklists.find((c) => c.id === state.activeId) || null;
}

// ---------- checklist CRUD ----------

function blankChecklist() {
  const now = new Date().toISOString();
  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: { name: "New Project", location: "", jobNo: "", date: "", preparedBy: "" },
    gc: { company: "", contact: "", phone: "", email: "" },
    bidder: { company: "", trade: "", contact: "", phone: "", email: "", amount: "" },
    generalNotes: "",
    sections: [
      {
        id: uid(),
        title: "Scope Confirmation",
        items: [],
      },
    ],
  };
}

function createChecklist(checklist) {
  state.checklists.unshift(checklist);
  state.activeId = checklist.id;
  persist();
  renderAll();
}

function deleteChecklist(id) {
  const cl = state.checklists.find((c) => c.id === id);
  if (!cl) return;
  const label = cl.project.name || "this checklist";
  if (!confirm(`Delete "${label}"? This cannot be undone.`)) return;
  state.checklists = state.checklists.filter((c) => c.id !== id);
  if (state.activeId === id) {
    state.activeId = state.checklists[0] ? state.checklists[0].id : null;
  }
  persist();
  renderAll();
}

function duplicateChecklist(id) {
  const cl = state.checklists.find((c) => c.id === id);
  if (!cl) return;
  const copy = JSON.parse(JSON.stringify(cl));
  copy.id = uid();
  copy.project.name = (cl.project.name || "Untitled") + " (copy)";
  copy.createdAt = new Date().toISOString();
  copy.updatedAt = copy.createdAt;
  // reassign nested ids so edits don't collide with the original
  copy.sections.forEach((s) => {
    s.id = uid();
    s.items.forEach((it) => (it.id = uid()));
  });
  state.checklists.unshift(copy);
  state.activeId = copy.id;
  persist();
  renderAll();
}

function touchActive() {
  const cl = getActive();
  if (cl) cl.updatedAt = new Date().toISOString();
  persist();
}

// ---------- rendering: sidebar ----------

function renderSidebarList() {
  const list = document.getElementById("checklist-list");
  list.innerHTML = "";

  if (state.checklists.length === 0) {
    const hint = document.createElement("div");
    hint.className = "empty-list-hint";
    hint.textContent = "No checklists yet.";
    list.appendChild(hint);
    return;
  }

  const sorted = [...state.checklists].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  for (const cl of sorted) {
    const el = document.createElement("div");
    el.className = "checklist-item" + (cl.id === state.activeId ? " active" : "");
    const title = document.createElement("div");
    title.className = "cl-title";
    title.textContent = cl.project.name || "Untitled project";
    const sub = document.createElement("div");
    sub.className = "cl-sub";
    sub.textContent = [cl.bidder.company, cl.bidder.trade].filter(Boolean).join(" – ") || "No bidder set";
    el.appendChild(title);
    el.appendChild(sub);
    el.addEventListener("click", () => {
      state.activeId = cl.id;
      localStorage.setItem(LAST_OPEN_KEY, cl.id);
      renderAll();
    });
    list.appendChild(el);
  }
}

// ---------- rendering: editor ----------

function statusLabel(status) {
  const map = {
    confirmed_included: "Confirmed Included",
    confirmed_excluded: "Confirmed Excluded",
    needs_clarification: "Needs Clarification",
    alternate_credit: "Alternate / Credit",
    acknowledged: "Acknowledged",
  };
  return map[status] || status;
}

function renderEditor() {
  const cl = getActive();
  const emptyState = document.getElementById("empty-state");
  const editor = document.getElementById("editor");

  if (!cl) {
    emptyState.hidden = false;
    editor.hidden = true;
    return;
  }
  emptyState.hidden = true;
  editor.hidden = false;

  // Toolbar / title
  setVal("f-project-name", cl.project.name);

  // Info grid
  setVal("f-project-location", cl.project.location);
  setVal("f-project-jobno", cl.project.jobNo);
  setVal("f-project-date", cl.project.date);
  setVal("f-project-preparedby", cl.project.preparedBy);

  setVal("f-gc-company", cl.gc.company);
  setVal("f-gc-contact", cl.gc.contact);
  setVal("f-gc-phone", cl.gc.phone);
  setVal("f-gc-email", cl.gc.email);

  setVal("f-bidder-company", cl.bidder.company);
  setVal("f-bidder-trade", cl.bidder.trade);
  setVal("f-bidder-contact", cl.bidder.contact);
  setVal("f-bidder-phone", cl.bidder.phone);
  setVal("f-bidder-email", cl.bidder.email);
  setVal("f-bidder-amount", cl.bidder.amount);

  setVal("f-general-notes", cl.generalNotes);
  autoResize(document.getElementById("f-general-notes"));

  renderSections(cl);
}

function setVal(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value || "";
}

function renderSections(cl) {
  const container = document.getElementById("sections-container");
  container.innerHTML = "";
  const sectionTpl = document.getElementById("tpl-section");
  const rowTpl = document.getElementById("tpl-item-row");

  for (const section of cl.sections) {
    const node = sectionTpl.content.cloneNode(true);
    const sectionEl = node.querySelector(".scope-section");
    sectionEl.dataset.sectionId = section.id;

    const titleInput = node.querySelector(".section-title");
    titleInput.value = section.title;
    titleInput.addEventListener("input", () => {
      section.title = titleInput.value;
      touchActive();
      renderSidebarList();
    });

    node.querySelector(".btn-add-item").addEventListener("click", () => {
      section.items.push({ id: uid(), text: "", status: "needs_clarification", bidderResponse: "", notes: "" });
      touchActive();
      renderEditor();
    });

    node.querySelector(".btn-delete-section").addEventListener("click", () => {
      if (!confirm(`Remove section "${section.title || "Untitled"}" and all its items?`)) return;
      cl.sections = cl.sections.filter((s) => s.id !== section.id);
      touchActive();
      renderEditor();
    });

    const tbody = node.querySelector(".items-body");
    for (const it of section.items) {
      const rowNode = rowTpl.content.cloneNode(true);
      const row = rowNode.querySelector(".item-row");
      row.dataset.itemId = it.id;

      const textArea = rowNode.querySelector(".cell-item");
      textArea.value = it.text;
      autoResize(textArea);
      textArea.addEventListener("input", () => {
        it.text = textArea.value;
        autoResize(textArea);
        touchActive();
      });

      const statusSelect = rowNode.querySelector(".cell-status");
      statusSelect.value = it.status;
      statusSelect.dataset.status = it.status;
      statusSelect.addEventListener("change", () => {
        it.status = statusSelect.value;
        statusSelect.dataset.status = it.status;
        touchActive();
      });

      const responseArea = rowNode.querySelector(".cell-response");
      responseArea.value = it.bidderResponse;
      autoResize(responseArea);
      responseArea.addEventListener("input", () => {
        it.bidderResponse = responseArea.value;
        autoResize(responseArea);
        touchActive();
      });

      const notesArea = rowNode.querySelector(".cell-notes");
      notesArea.value = it.notes;
      autoResize(notesArea);
      notesArea.addEventListener("input", () => {
        it.notes = notesArea.value;
        autoResize(notesArea);
        touchActive();
      });

      rowNode.querySelector(".btn-delete-item").addEventListener("click", () => {
        section.items = section.items.filter((x) => x.id !== it.id);
        touchActive();
        renderEditor();
      });

      tbody.appendChild(rowNode);
    }

    container.appendChild(node);
    sectionEl.querySelectorAll("textarea").forEach(autoResize);
  }
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function renderAll() {
  renderSidebarList();
  renderEditor();
}

// ---------- info field bindings ----------

function bindInfoField(id, getObj, key) {
  const el = document.getElementById(id);
  el.addEventListener("input", () => {
    const cl = getActive();
    if (!cl) return;
    getObj(cl)[key] = el.value;
    if (id === "f-project-name") renderSidebarList();
    if (el.tagName === "TEXTAREA") autoResize(el);
    touchActive();
  });
}

function bindInfoFields() {
  bindInfoField("f-project-name", (cl) => cl.project, "name");
  bindInfoField("f-project-location", (cl) => cl.project, "location");
  bindInfoField("f-project-jobno", (cl) => cl.project, "jobNo");
  bindInfoField("f-project-date", (cl) => cl.project, "date");
  bindInfoField("f-project-preparedby", (cl) => cl.project, "preparedBy");

  bindInfoField("f-gc-company", (cl) => cl.gc, "company");
  bindInfoField("f-gc-contact", (cl) => cl.gc, "contact");
  bindInfoField("f-gc-phone", (cl) => cl.gc, "phone");
  bindInfoField("f-gc-email", (cl) => cl.gc, "email");

  bindInfoField("f-bidder-company", (cl) => cl.bidder, "company");
  bindInfoField("f-bidder-trade", (cl) => cl.bidder, "trade");
  bindInfoField("f-bidder-contact", (cl) => cl.bidder, "contact");
  bindInfoField("f-bidder-phone", (cl) => cl.bidder, "phone");
  bindInfoField("f-bidder-email", (cl) => cl.bidder, "email");
  bindInfoField("f-bidder-amount", (cl) => cl.bidder, "amount");

  bindInfoField("f-general-notes", (cl) => cl, "generalNotes");
}

// ---------- export ----------

function csvEscape(value) {
  const s = (value ?? "").toString();
  if (/[",\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function exportCsv() {
  const cl = getActive();
  if (!cl) return;

  const rows = [];
  rows.push(["Project", cl.project.name]);
  rows.push(["Location", cl.project.location]);
  rows.push(["Job No.", cl.project.jobNo]);
  rows.push(["Date", cl.project.date]);
  rows.push(["GC", cl.gc.company, cl.gc.contact, cl.gc.phone, cl.gc.email]);
  rows.push(["Bidder", cl.bidder.company, cl.bidder.trade, cl.bidder.contact, cl.bidder.phone, cl.bidder.email, cl.bidder.amount]);
  rows.push([]);
  rows.push(["Section", "Scope Item", "Status", "Bidder Response / Proposal Language", "Discussion Notes / Resolution"]);

  for (const section of cl.sections) {
    for (const it of section.items) {
      rows.push([section.title, it.text, statusLabel(it.status), it.bidderResponse, it.notes]);
    }
  }

  rows.push([]);
  rows.push(["General Meeting Notes", cl.generalNotes]);

  const csv = rows.map((r) => r.map(csvEscape).join(",")).join("\n");
  downloadFile(csv, fileSafeName(cl) + ".csv", "text/csv");
}

function exportJson() {
  const cl = getActive();
  if (!cl) return;
  downloadFile(JSON.stringify(cl, null, 2), fileSafeName(cl) + ".json", "application/json");
}

function fileSafeName(cl) {
  const base = [cl.project.name, cl.bidder.trade].filter(Boolean).join("_") || "scope-checklist";
  return base.replace(/[^a-z0-9_\-]+/gi, "_");
}

function downloadFile(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importJsonFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data.project || !data.sections) throw new Error("Not a valid checklist file");
      data.id = uid();
      data.sections.forEach((s) => {
        s.id = s.id || uid();
        s.items.forEach((it) => (it.id = it.id || uid()));
      });
      data.createdAt = new Date().toISOString();
      data.updatedAt = data.createdAt;
      createChecklist(data);
    } catch (e) {
      alert("Could not import file: " + e.message);
    }
  };
  reader.readAsText(file);
}

// ---------- wiring ----------

function wireStaticButtons() {
  document.getElementById("btn-new").addEventListener("click", () => {
    createChecklist(blankChecklist());
  });

  document.getElementById("btn-example").addEventListener("click", () => {
    createChecklist(buildExampleChecklist());
  });

  document.getElementById("btn-example-esi").addEventListener("click", () => {
    createChecklist(buildEsiExampleChecklist());
  });

  document.getElementById("btn-add-section").addEventListener("click", () => {
    const cl = getActive();
    if (!cl) return;
    cl.sections.push({ id: uid(), title: "New Section", items: [] });
    touchActive();
    renderEditor();
  });

  document.getElementById("btn-export-csv").addEventListener("click", exportCsv);
  document.getElementById("btn-export-json").addEventListener("click", exportJson);
  document.getElementById("btn-print").addEventListener("click", () => window.print());
  document.getElementById("btn-duplicate").addEventListener("click", () => {
    if (state.activeId) duplicateChecklist(state.activeId);
  });
  document.getElementById("btn-delete").addEventListener("click", () => {
    if (state.activeId) deleteChecklist(state.activeId);
  });

  document.getElementById("btn-import").addEventListener("click", () => {
    document.getElementById("file-import").click();
  });
  document.getElementById("file-import").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) importJsonFile(file);
    e.target.value = "";
  });
}

function init() {
  loadState();
  bindInfoFields();
  wireStaticButtons();

  if (state.checklists.length === 0) {
    const concreteExample = buildExampleChecklist();
    const esiExample = buildEsiExampleChecklist();
    state.checklists.push(concreteExample, esiExample);
    state.activeId = concreteExample.id;
    persist();
  }

  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
