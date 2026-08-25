# Scope Discussion Checklist Builder

A small, no-build web app for building buyout scope discussion checklists —
the kind used to walk a subcontractor's bid line-by-line before award
(pricing, inclusions/exclusions, alternates, clarifications, general terms)
and track what got confirmed, excluded, or still needs to be resolved.

## Running it

No build step or server-side code required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder statically, e.g. `python3 -m http.server 8000` then visit
  `http://localhost:8000`

Data is saved to the browser's `localStorage`, per browser/device.

## Usage

- **+ New Checklist** — starts a blank checklist with project / GC / bidder
  info fields and one empty section.
- **Load Example** — loads a fully populated example built from a real
  concrete subcontractor buyout package (Alta Vista / RCC), showing pricing
  questions, scope Q&A, inclusions/exclusions, alternates, clarifications,
  and general terms & conditions, each with a status and notes field.
- Each scope item has a **status** (Confirmed Included / Confirmed Excluded /
  Needs Clarification / Alternate-Credit / Acknowledged), the **bidder's
  original response or proposal language**, and a free-text **discussion
  notes** field to capture what was resolved during the meeting.
- Sections and items can be added, retitled, reordered by editing, and
  removed freely; everything autosaves.
- **Export CSV** / **Export JSON** / **Print / PDF** for sharing outside the
  app; **Import JSON** to bring a previously exported checklist back in.
- **Duplicate** an existing checklist as a starting point for the next bid.
