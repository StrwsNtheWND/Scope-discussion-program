// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista (Centennial, CO) - 446 Units - Building Concrete (CSI 03 3800)
// GC: Garrett Construction | Bidder: RCC - Reinforced Concrete Contractor
//
// Built from: the bid comparison ("scope grid") tracker, RCC's Bidder's Proposal
// Form + General Terms & Conditions, and the GC/subcontractor email thread
// (site-config Q&A on 6/3-6/4/26, revised proposal on 7/4/26, and the radon
// credit-back discussion on 6/30-7/4/26).

function buildExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO 80112",
      jobNo: "RC26015",
      date: "2026-06-02",
      preparedBy: "VNJ",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "RCC - Reinforced Concrete Contractor",
      trade: "03 3800 - Building Concrete",
      contact: "Abhishek Kashid, PE, PMP - General Manager",
      phone: "682-256-8201",
      email: "estimating@rccontractorusa.com",
      amount: "$2,825,725 turnkey lump sum (6/2/26 proposal) -> $2,907,325 per 7/4/26 revised proposal",
    },
    generalNotes:
      "Two items are driving the delta between the 6/2 base bid ($2,825,725) and the 7/4 revised bid " +
      "($2,907,325): (1) radon mitigation credit-back RCC is requesting since it was only offered as a " +
      "courtesy on the original bid, and (2) monument sign / outdoor kitchen foundations, which Nathan " +
      "flagged as missing on 6/30 and RCC added into the 7/4 revised proposal. Resolve both, plus rigid " +
      "insulation and townhome patio/step scope, before issuing the subcontract. Note RCC also submitted " +
      "a separate Site Work proposal via Building Connected on 6/3/26 - confirm whether that is being " +
      "carried/evaluated separately from this building concrete package.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Base bid amount confirmed",
            "needs_clarification",
            "$2,825,725 turnkey lump sum (6/2/26). Revised to $2,907,325 in 7/4/26 proposal after adding monument sign / amenity footings.",
            "Confirm which figure is being carried to contract and that it reconciles with the radon credit request below."
          ),
          item(
            "Sales tax applied at correct rate on materials only (4%)",
            "needs_clarification",
            "",
            "Bid tracker flags this as unresolved (\"Y?\") across nearly every bidder - verify with RCC directly."
          ),
          item(
            "Change order labor / equipment rates",
            "acknowledged",
            "Change order labor rate $60/hr and equipment rate $150/hr, plus 15% overhead & profit, per General Terms #11.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Confirmation (GC Q&A, 6/3-6/4/26 email)",
        items: [
          item(
            "Radon mitigation matting included in bid?",
            "confirmed_included",
            "\"Yes\" - RCC email response, 6/4/26.",
            "Later disputed - see Alternates section. RCC says this was offered as a courtesy/favor on the original bid, not priced as ongoing scope."
          ),
          item(
            "Admixture waterproofing at elevator pits included?",
            "confirmed_included",
            "\"Yes\" - RCC email response, 6/4/26. Also shown as \"Confirmed on 6/4\" in bid tracker.",
            ""
          ),
          item(
            "Vapor barrier thickness per plans?",
            "confirmed_included",
            "\"Yes\" - RCC email response, 6/4/26.",
            ""
          ),
          item(
            "Bid per reinforced concrete specifications (PSI) per structural drawings?",
            "confirmed_included",
            "\"Yes\" - RCC email response, 6/4/26.",
            ""
          ),
          item(
            "Rigid insulation at foundation - where shown on plans / is it included?",
            "needs_clarification",
            "6/4/26: \"Sorry the verbiage has been copied from previous projects. No rigid included in this project.\" Bid tracker later shows \"Included per 7/3 Email.\"",
            "Response changed between 6/4 and 7/3 - get written confirmation of current position before contract execution."
          ),
          item(
            "Townhome patios / steps included?",
            "needs_clarification",
            "6/4/26: \"Can you please specify where exactly you see the steps. I don't have it included right now.\" Bid tracker assumes patios/stoops excluded, by Division 32 (landscaping).",
            "Send RCC the specific plan sheets/details showing the steps in question; confirm inclusion or exclusion in writing."
          ),
          item(
            "Structural PT concrete walls at rain garden (Qty 2) included?",
            "needs_clarification",
            "Bid tracker: \"Y?\" with a $82,200 plug figure noted separately.",
            "Confirm whether $82,200 is already inside the base bid or is additive."
          ),
          item(
            "Building pads included per plans/exhibit?",
            "needs_clarification",
            "Bid tracker: \"Y?\"",
            ""
          ),
          item(
            "Placement of wet-set framing anchors (material furnished by others)?",
            "needs_clarification",
            "Not directly addressed in proposal. Proposal Exclusion #8 excludes furnishing/installing threaded bars, rods, dowel baskets, embeds, and anchor bolts.",
            "Clarify placement labor vs. furnishing - GC to confirm anchor bolts/embeds are furnished by others per proposal."
          ),
          item(
            "Necessary shop drawings included?",
            "confirmed_included",
            "",
            ""
          ),
          item(
            "Hauling of spoils to designated on-site location included?",
            "needs_clarification",
            "",
            ""
          ),
          item(
            "Concrete stem walls / grade beams per plans included?",
            "needs_clarification",
            "",
            ""
          ),
          item(
            "Elevator pit concrete per plans included?",
            "needs_clarification",
            "",
            ""
          ),
          item(
            "Trash compactor pad included (Qty 3)?",
            "needs_clarification",
            "Bid tracker: \"Y?\" - one competing bidder itemized this separately at $25,635.",
            ""
          ),
          item(
            "Full building foundation count included per plan?",
            "confirmed_included",
            "(3) Type I, (2) Type IA, (2) Type II, (1) Type III, (5) Type IV, (1) Clubhouse, (1) Maintenance Bldg, (3) Trash Enclosure - per Bidder's Proposal Form.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Inclusions (per Bidder's Proposal Form)",
        items: [
          item("Foundation layout from building corners (provided by others)", "acknowledged"),
          item("Grade beam earth forming (trenching)", "confirmed_included"),
          item("Furnish & install all PT / rebar / vapor barrier / rigid insulation", "confirmed_included"),
          item("Placement of all anchor bolts (bolts provided by others)", "confirmed_included"),
          item("Furnish, place, and finish concrete slab on grade", "confirmed_included"),
          item("Strip all formwork; break back ties", "confirmed_included"),
          item("Stress PT cables; cut & patch", "confirmed_included"),
        ],
      },
      {
        id: uid(),
        title: "Exclusions (per Bidder's Proposal Form)",
        items: [
          item("Site retaining wall", "confirmed_excluded"),
          item("Pool area amenity structure foundations", "confirmed_excluded"),
          item("Site concrete (curbs / sidewalks / light pole bases)", "confirmed_excluded"),
          item("Shoring for slab on metal deck / bracing for wall backfill", "confirmed_excluded"),
          item("Curbs/pads not shown on structural or architectural plans", "confirmed_excluded"),
          item("Drilling rebar & epoxy grouting", "confirmed_excluded"),
          item("Any survey for building foundation", "confirmed_excluded"),
          item("Furnishing/installing threaded bars, rods, dowel baskets, embeds, anchor bolts", "confirmed_excluded"),
          item("Foundation drains and stone backfill", "confirmed_excluded"),
          item(
            "Monument sign / outdoor kitchen foundations",
            "needs_clarification",
            "Originally excluded (\"See Div 32\") in 6/2/26 base bid. Nathan flagged as missing on 6/30/26; RCC issued a revised proposal 7/4/26 adding this scope.",
            "Confirm this is now fully carried in the $2,907,325 revised figure with no further adder."
          ),
        ],
      },
      {
        id: uid(),
        title: "Alternates / Open Credits",
        items: [
          item(
            "Radon mitigation installation",
            "needs_clarification",
            "Confirmed \"Yes\" on original bid (6/4/26 email). RCC's 6/30/26 email: offered as a favor/courtesy, \"was extra a couple of extra labor hours for each building and is quite negligible in the grand scheme,\" now requesting it be removed with a credit back. GC asked 7/1/26 what the credit value would be; asked whether install would move to Garrett or stay with prior ownership's scope - unanswered as of 7/4/26.",
            "Get a firm credit number from RCC in writing, or confirm scope stays with RCC at no credit, before contract."
          ),
          item(
            "Anchor bolts - furnish & install",
            "needs_clarification",
            "Proposal inclusions say anchor bolt placement is included (bolts provided by others), but Exclusion #8 excludes furnishing/installing anchor bolts - appears consistent (install only), but confirm no conflict.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Clarifications & Schedule (per Proposal)",
        items: [
          item("Pricing based on Construction Drawings by Integrity Structural Corp, dated 05/07/2026", "acknowledged"),
          item("Pricing valid for 30 days from proposal date", "acknowledged"),
          item("Straight-time pricing only; no overtime allowance included", "needs_clarification"),
          item("Based on an 8-hour workday, 5-day workweek", "acknowledged"),
          item("Requires continuous, non-interrupted work per a mutually agreed sequence/schedule", "needs_clarification"),
          item("(+/-) 0.1 ft net-zero subgrade at bottom of slab (incl. mass excavation & backfill) provided by others", "acknowledged"),
          item("Schedule of Values (SOV) is for tracking/accounting only, not to be used to set change-order unit rates", "acknowledged"),
          item("Billing for materials on hand payable within 30 days of procurement", "needs_clarification"),
        ],
      },
      {
        id: uid(),
        title: "General Terms & Conditions",
        items: [
          item("RCC authorized to proceed prior to fully executed subcontract; proposal governs until subcontract is executed", "acknowledged"),
          item("RCC's own general conditions/terms to be incorporated as an exhibit to the subcontract", "needs_clarification"),
          item("No change-order work performed without a written GC directive", "acknowledged"),
          item("RCC not responsible for rebar cost fluctuations due to shortages/unavailability of material", "needs_clarification"),
          item("Retention withheld not to exceed 5%; any retention paid no later than 30 days after completion", "needs_clarification"),
          item("General liability insurance aggregate capped at $1,000,000", "needs_clarification"),
          item("RCC follows its own OSHA safety program; additional/specialized safety training beyond that provided by GC at no cost to RCC", "acknowledged"),
          item("Indemnification / hold harmless limited to the extent of RCC's own negligence", "needs_clarification"),
          item("Monthly progress payments due no later than 30 days after billing deadline", "acknowledged"),
        ],
      },
    ],
  };
}

// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista (Centennial, CO) - CSI 32 1216 Asphalt Paving
// GC: Garrett Construction | Bidder: ESI - Elite Surface Infrastructure
//
// Built from: the "32-1216 Asphalt Paving" bid comparison tracker, the
// Division 32-Asphalt Paving scope checklist (with its checked/unchecked
// boxes), the Asphalt portion of ESI's proposal (Bid #TJ26074, 6/2/26 -
// ESI's proposal also prices Site Concrete work, which is a different
// scope/cost code and is tracked on its own checklist, not here), and
// ESI's 2026 Time & Material rate sheet.

function buildEsiExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "7400 S Alton Ct, Centennial, CO 80112",
      jobNo: "RC26015",
      date: "2026-06-02",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Estimating Department",
      phone: "(317) 886-7923",
      email: "",
    },
    bidder: {
      company: "ESI - Elite Surface Infrastructure",
      trade: "32 1216 - Asphalt Paving",
      contact: "Tyler Jacovetti",
      phone: "720-556-1070",
      email: "tyler.jacovetti@elitesi.com",
      amount: "$723,030.32 per Div 32-1216 Asphalt Paving bid tracker (Bid #TJ26074, 6/2/26). ESI's proposal itself prices two mutually exclusive pavement section options: Base/Option A (direct FD asphalt) $873,569.85, or Alternate/Option B (Class 6 ABC + thinner FD asphalt + patch-back) $901,153.20 - neither matches the tracker figure exactly. See Pricing section for reconciliation.",
    },
    generalNotes:
      "This form covers ESI's Asphalt Paving scope only (Division 32-1216). ESI's proposal also prices Site Concrete " +
      "work, but that is a different scope/cost code and should be tracked on its own, separate checklist. Two items " +
      "to resolve before award: (1) the bid tracker total of $723,030.32 doesn't match either of ESI's two priced " +
      "pavement section options ($873,569.85 Base/Option A vs $901,153.20 Alternate/Option B) - get the reconciliation " +
      "and confirm which option the GC is carrying to contract. (2) The bid tracker shows Traffic Control marked \"Y\" " +
      "(included), but ESI's asphalt exclusions list explicitly excludes traffic control - get this reconciled in " +
      "writing; T&M rates are available if it needs to be added by others. Also note the tracker shows Colorado " +
      "Asphalt Services (CASI, Bid 7) also marked \"Selected Bidder\" on this same cost code - confirm the scope split " +
      "between ESI and CASI, if any, before issuing a subcontract to either.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Bid tracker total vs. proposal pavement-option totals reconciled",
            "needs_clarification",
            "Div 32-1216 Asphalt Paving bid tracker shows $723,030.32 for ESI. ESI's proposal prices two options: Base/Option A (items 10-90) = $873,569.85; Alternate/Option B (items 200-250) = $901,153.20.",
            "Confirm how $723,030.32 was derived and which pavement option (or subset of items) it corresponds to."
          ),
          item(
            "Sales tax applied at correct rate on materials only (4%)",
            "confirmed_included",
            "Marked \"Y\" on the Division 32-Asphalt Paving scope checklist.",
            ""
          ),
          item(
            "Contract is unit-price, not lump sum",
            "acknowledged",
            "\"ALL CONTRACTS TO BE NEGOTIATED UPON AWARD. THE FINAL CONTRACT PRICE WILL BE DETERMINED FROM ACTUAL FIELD MEASUREMENTS OF COMPLETED WORK AT THE UNIT PRICES SHOWN ABOVE.\"",
            "Confirm GC is comfortable with unit-price/field-measured billing vs. the turnkey lump-sum structure used on other trade packages."
          ),
          item(
            "Pricing valid through 07/02/2026; renegotiated at market rates after",
            "needs_clarification",
            "\"Pricing Valid through 07/02/2026. Pricing past 7/02/2026 to be negotiated based on market rates.\" Also subject to liquid AC oil price increases if the market moves significantly; firm pricing available at the start of each month.",
            "Confirm current validity relative to today's date and get updated firm pricing if the window has lapsed."
          ),
          item(
            "Pricing based on Monday-Friday, 50-hour work week",
            "acknowledged",
            "Any Saturday or Sunday work is subject to escalation for additional overtime and material supplier surcharges.",
            ""
          ),
          item(
            "Time & Material rates provided",
            "confirmed_included",
            "2026 rate sheet provided, effective January 2026 - see the T&M Rate Reference section below.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Asphalt Scope Confirmation (per Division 32-Asphalt Paving checklist)",
        items: [
          item(
            "Geotechnical report reviewed & acknowledged",
            "confirmed_included",
            "Checked \"Y\" on the Division 32-Asphalt Paving scope checklist.",
            ""
          ),
          item(
            "Includes scarification / subgrade prep",
            "confirmed_included",
            "Assumes the Earthwork Contractor carries 24\" moisture-conditioned subgrade prep; ESI scarifies 12\" deep, moisture-conditions, re-compacts, fine grades, and proof-rolls prior to paving. Grade received at +/-1/10' and within 3% of optimum moisture, dirt to balance on site.",
            "Confirm the Earthwork Contractor's scope actually includes the assumed 24\" moisture-conditioned subgrade prep - if not, this is a gap."
          ),
          item(
            "Includes all water valve adjustments",
            "confirmed_included",
            "31 EA @ $420.00 = $13,020.00, priced into the Asphalt Base Bid.",
            "Confirm plan quantity matches 31; final/additional adjustments beyond this count billed at the same $420/ea rate."
          ),
          item(
            "Includes all manhole adjustments",
            "confirmed_included",
            "28 EA @ $665.00 = $18,620.00, priced into the Asphalt Base Bid.",
            "Confirm plan quantity matches 28; final/additional adjustments beyond this count billed at the same $665/ea rate."
          ),
          item(
            "Includes both options per Civil ALT Narrative",
            "confirmed_included",
            "ESI priced the full-depth base section (6\"/6.5\" FD Asphalt, items 60/70 = $873,569.85 base) AND a thinner alternate section (4\"/4.5\" FD Asphalt over 7\"/8\" Class 6 ABC, items 200-230 = $901,153.20 alternates).",
            "Confirm which pavement section option the GC intends to carry to contract - the two options are priced ~$27K apart."
          ),
          item(
            "Take-off completed per plans",
            "confirmed_included",
            "",
            ""
          ),
          item(
            "Offsite work if required - alternate",
            "needs_clarification",
            "No specific plug price identified from ESI on the bid tracker for this line, unlike some competing bidders who carried a Y-Plug figure.",
            "Confirm whether any offsite paving is anticipated and, if so, get a specific number from ESI."
          ),
        ],
      },
      {
        id: uid(),
        title: "Inclusions / Assumptions (per ESI Proposal)",
        items: [
          item("Haul, place and compact HMA Grade S-75 (lower layers) and Grade SX-75 (top layer); tack coat included as required", "confirmed_included"),
          item(
            "Mobilizations priced as quoted",
            "confirmed_included",
            "Four separate asphalt mobilization line items: Subgrade Prep x2 ($2,540 + $2,570), Asphalt Paving ($3,050), Asphalt Patching ($1,550).",
            "Additional mobilizations beyond these will be charged at the quoted unit prices per scope and occurrence."
          ),
        ],
      },
      {
        id: uid(),
        title: "Exclusions (per ESI Proposal - Asphalt)",
        items: [
          item(
            "Traffic control",
            "needs_clarification",
            "Excluded per the Asphalt exclusions list, but the bid tracker shows ESI marked \"Y\" (included) for the Traffic Control line item.",
            "Get this reconciled in writing before contract. T&M rate sheet has a Traffic Control Supervisor with Truck ($130/hr) and Flagger ($60/hr) if it needs to be added by T&M."
          ),
          item("Polymer asphalt / additives, sawcutting, removals, ADA compliance", "confirmed_excluded"),
          item("Engineering permits, inspection fees, testing, surveying, staking", "confirmed_excluded"),
          item("Bond (2.0% rate if required); Textura fees; special insurance policies/programs & associated fees", "confirmed_excluded"),
          item("De-watering, pavement markings, latrines", "confirmed_excluded"),
          item(
            "Soil sterilant",
            "alternate_credit",
            "Excluded by default; available at $0.24/SY if requested (minimum charge $500.00).",
            ""
          ),
          item("Prime coat, joint sealant, concrete backfill", "confirmed_excluded"),
          item(
            "Subgrade prep other than specified",
            "needs_clarification",
            "Only the 12\" scarify/recompact/fine-grade/proof-roll scope described above is included.",
            "Confirm any subgrade work beyond that scope (e.g. if the Earthwork Contractor's 24\" prep assumption doesn't hold) is not silently expected of ESI."
          ),
          item("Import or export of subgrade material", "confirmed_excluded"),
          item("Frost mitigation, winter protection, or winter paving", "confirmed_excluded"),
        ],
      },
      {
        id: uid(),
        title: "Alternates / Open Items",
        items: [
          item(
            "Verify full depth to the geotechnical report / civil plans",
            "needs_clarification",
            "Bid tracker shows composite-option figures for several bidders on this line; ESI's specific figure and which pavement section it corresponds to needs confirming directly.",
            ""
          ),
          item(
            "Offsite storm sewer exhibit",
            "needs_clarification",
            "Bid tracker marks \"Y\" for ESI with no matching line item found in the proposal.",
            "Confirm scope and get a specific price if this is a real add."
          ),
          item(
            "AC water main patch back",
            "needs_clarification",
            "Bid tracker marks \"Y\" for ESI. Closest proposal match is item 250, \"8\" ROW Patch-Back at New C&G/Pans W/T-Patch\" (290 SY @ $78.50 = $22,765.00), but that may not be the same scope.",
            "Confirm whether this is the same item or a separate AC water main patch-back scope."
          ),
          item(
            "Pavement failure / drainage liability",
            "acknowledged",
            "\"We shall not be responsible for pavement failures due to unstable subgrade and/or frost beneath and/or adjacent to our work. We cannot guarantee positive drainage on existing or proposed areas less than two percent (2%) slope. Any soft or unstable areas will be corrected on an hourly basis at the direction of the Owner's Representative or by others.\"",
            "Flag for GC awareness - this shifts subgrade/drainage risk and unplanned T&M cost onto the GC/Owner."
          ),
        ],
      },
      {
        id: uid(),
        title: "Time & Material Rate Reference (effective January 2026)",
        items: [
          item("Key labor: Superintendent $125/hr, Foreman $115/hr, Operator $80/hr, Labor $60/hr, Finisher/Formsetter $80/hr", "acknowledged"),
          item("Key equipment: Large paver $220/hr, double drum roller $135/hr, distributor tack truck $235/hr (excludes tack), 7' rotomill $550/hr", "acknowledged"),
          item(
            "$20.00/hr upcharge on all T&M labor and equipment for Davis-Bacon or City & County of Denver projects",
            "needs_clarification",
            "",
            "Confirm whether this project is subject to Davis-Bacon or Denver prevailing wage requirements."
          ),
          item("Overtime rates are 1.5x the standard hourly labor rate", "acknowledged"),
          item(
            "Rates do NOT include overhead/profit unless specified; OH/P added as margin",
            "needs_clarification",
            "",
            "Confirm the OH/P percentage that will apply to any T&M work performed on this project."
          ),
          item("Minimum 1-hour move-in for self-propelled equipment; 2-hour minimum if lowboy-transported", "acknowledged"),
          item("Fuel surcharge added if fuel prices exceed $4.50/gallon", "acknowledged"),
        ],
      },
    ],
  };
}


// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista Apartments (Centennial, CO) - CSI 32 1600 Site Concrete
// GC: Garrett Construction | Bidder: CTF Construction
//
// Built from: the "32-1600 Site Concrete" bid comparison tracker (9 bidders,
// including ESI's separate site concrete bid), the civil (CD6) and landscape
// (LC.4/LC.5) construction plans, and CTF Construction's REVISED Phase 1
// proposal (Job #260207, dated 7/8/2026, expires 8/8/2026 - superseding an
// earlier version dated 6/3/2026 that had been reviewed first). Notes below
// flag what changed between the two CTF proposal versions where relevant.

function buildCtfExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "7400 S Alton St, Centennial, CO",
      jobNo: "260207",
      date: "2026-07-08",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes",
      phone: "317.886.7923",
      email: "AltaVista@TheGarrettCo.com",
    },
    bidder: {
      company: "CTF Construction",
      trade: "32 1600 - Site Concrete",
      contact: "Michael Bukowski, Estimator",
      phone: "720.790.1600 / 720.532.3554",
      email: "MichaelB@CTFconst.com",
      amount: "$1,103,685.51 - REVISED proposal, 7/8/2026 (Job #260207, Exp. 8/8/2026). Phase 1 $1,018,131.02 + ROW $64,030.31 + Alternate-Offsite $21,524.18. Supersedes the original 6/3/2026 proposal, which totaled $1,121,137.36.",
    },
    generalNotes:
      "This checklist has been updated to CTF's REVISED proposal (received 7/8/26, Job #260207), which supersedes the " +
      "6/3/26 version reviewed earlier. PRIORITY: this revised proposal has ALSO now expired (Exp. 8/8/2026, today is " +
      "well past that) - a third, current pricing confirmation will be needed before contract, on top of the existing " +
      "12/31/2026 supplier escalator and open-ended inflation/tariff/shortage clauses. Net effect of the revision: the " +
      "Estimate Total actually DECREASED by $17,451.85 ($1,121,137.36 -> $1,103,685.51) even though CTF added newly " +
      "priced ROW and Offsite Alternate scope that wasn't broken out before - driven by lower per-unit costs on curb, " +
      "sidewalk, and paving items; get an explanation for the swing before relying on it. New in this revision: (1) two " +
      "additional \"ASSUMED\" wall items, one of which explicitly flags that the civil wall detail sheet and the " +
      "landscape plans CONTRADICT each other on wall material (concrete vs. CMU) - this is a real design conflict that " +
      "needs architect/civil resolution before it can be accurately scoped or priced; (2) Garage Apron now explicitly " +
      "excludes rebar, which wasn't called out in the original version - confirm the structural requirement; (3) " +
      "Hammock Footer and Emergency Switch Footer dropped off the written exclusions list - confirm whether they're " +
      "now intended to be included or were just omitted. Carried over unchanged from the original: Rubberized Play " +
      "Surface is still not addressed anywhere in CTF's proposal despite being on the master scope checklist (ESI's " +
      "separate site concrete bid priced it at $28,518); several line items remain priced on ASSUMED details pending " +
      "real structural sheets (A/LWF.2, S7.0); and the AIA A401 conditioning plus no-retainage-by-default position " +
      "still need GC risk/legal review.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Correct sales tax percentage on materials only at 4%",
            "confirmed_included",
            "Tax Rate: 4.00% shown directly on the proposal header.",
            ""
          ),
          item(
            "Estimate Total reconciled across Phase 1 / ROW / Offsite Alternate",
            "needs_clarification",
            "Phase 1 Sub-Total $1,018,131.02 + ROW Sub-Total $64,030.31 + Alternate-Offsite Sub-Total $21,524.18 = Estimate Total $1,103,685.51. Down $17,451.85 from the original 6/3/26 proposal's $1,121,137.36, despite ROW and Offsite being newly broken out as priced scope.",
            "Get CTF to explain the net decrease - largely lower unit costs on curb/sidewalk/paving items - before carrying this number to contract."
          ),
          item(
            "Rubberized Play Surface",
            "needs_clarification",
            "Listed as a PRICING line on the master Site Concrete scope checklist, but no rubberized play surface item appears anywhere in CTF's itemized proposal (original or revised).",
            "ESI's separate site concrete bid on the same tracker priced this at $28,518 - confirm which bidder carries it, or get CTF to add it."
          ),
          item(
            "Proposal pricing validity",
            "needs_clarification",
            "Revised Proposal Date 7/8/2026, Proposal Exp. 8/8/2026 (up from Exp. 7/3/2026 on the original 6/3/26 version). \"Concrete Suppliers Guarantee Pricing for 30 Days Only. Pricing Can Vary After. There Will Be A General Pricing Escalator As Of 12.31.2026.\"",
            "This revised proposal has itself now expired - get current, re-confirmed pricing from CTF before issuing a subcontract."
          ),
          item(
            "Mobilization & Administration pricing",
            "needs_clarification",
            "Reduced from $15,000.00 to $4,800.00 between the two proposal versions.",
            "Confirm this reduction is intentional and not an error, given every other mobilization-adjacent cost stayed flat or dropped only modestly."
          ),
          item(
            "Change-order labor rate",
            "acknowledged",
            "\"Any Items Not Contained Herein & Required Will Be Handled As Change Order With The Developer Before Any Additional Work Will Be Performed. Labor Will Be Billed At $110/Hour Per Laborer Unless Otherwise Noted.\"",
            ""
          ),
          item(
            "Price escalation for inflation/tariffs/shortages",
            "needs_clarification",
            "\"Any Remaining Work In Scope Past The First Year Of Contract Execution Will Incur A Price Adjustment Equal To Inflation & Supplier Increases.\" \"An Increase Will Be Applied If Supplies Increase Due To HyperInflation, Tariffs, Natural Disaters & Shortages.\"",
            "Open-ended escalation risk - confirm whether Garrett will accept this or wants a capped/defined escalation clause instead."
          ),
          item(
            "Cold weather pricing (Nov 1 - Mar 31)",
            "acknowledged",
            "Winter Time Service Charge $4.16/CY; NCA $9.88/CY per 1%; Subgrade Blanket Covering $1.00/LF; Concrete Blanket Covering $3.04/LF (was $3.13/LF); Saw Cutting Blanket Covering $1.00/LF.",
            "Relevant if any Phase 1 concrete placement falls within the cold weather window per the project schedule."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Confirmation (per 32-1600 Site Concrete bid tracker)",
        items: [
          item(
            "Take-off completed per plans",
            "confirmed_included",
            "Full itemized take-off across three sub-sections (Phase 1, ROW, Alternate-Offsite), 40 line items total.",
            ""
          ),
          item(
            "Includes all site concrete (curb & gutter, sidewalks, stairs, pans, etc.)",
            "confirmed_included",
            "Itemized: 6\" Vertical Curb w/ 2' and 1' Pan, Mountable CG w/ 2' Pan, multiple sidewalk widths, HCR w/ Truncated Domes, Crosspan, Valley Pan 4'/2', ADA Parking Paving, Step Concrete, Check Wall @ Stairs.",
            ""
          ),
          item(
            "ROW scope",
            "confirmed_included",
            "Now separately broken out: Mobilization, HCR w/ Truncated Domes (4 EA), Crosspan (1,055 SF), Sidewalk 6'-0\"x6\" (544 LF), 6\" Vertical Curb w/ 2' Pan (510 LF) - ROW Sub-Total $64,030.31.",
            "Resolves the \"Offsite/ROW\" open item flagged against the original proposal, which didn't break this out separately."
          ),
          item(
            "Alternate - Offsite paving",
            "confirmed_included",
            "Now separately priced as an alternate: Mobilization, 6\" Vertical Curb w/ 2' Pan (108 LF), Sidewalk 6'-0\"x6\" (117 LF), Crosspan 12\" (762 SF) - Alternate-Offsite Sub-Total $21,524.18.",
            "Confirm whether Garrett wants this alternate carried into the base contract or held as a true alternate."
          ),
          item(
            "Offsite Storm Sewer Exhibit",
            "needs_clarification",
            "Still not addressed in either CTF proposal version, even with ROW and Offsite Alternate now separately priced.",
            "Confirm whether this applies to the site concrete package or is being tracked under a different trade's cost code."
          ),
          item(
            "Vehicular Paving 6\", Rebar",
            "needs_clarification",
            "New line item in the revised proposal - 267 SF @ $8.42 = $2,248.14. Not present in the original 6/3/26 version.",
            "Confirm what area this covers and why it was added in the revision."
          ),
          item(
            "Includes pool deck per Civil & Landscape Drawings - colored, as specified",
            "confirmed_included",
            "\"Enhanced Concrete Paving 4\", Davis Outback 677, Top Cast 05 Exposed, Saw Cut (LC.A)\" - 4,315 SF @ $7.21 = $31,111.15 (unit cost reduced from $7.51 in the original).",
            "Confirm this line item is in fact the pool deck area shown on LC.4/LC.5 and that the Davis Outback 677 color/finish matches spec."
          ),
          item(
            "Garage Apron rebar",
            "needs_clarification",
            "Revised description now explicitly reads \"EXCLUDES Expansion & Sealing @ BLDG EXCLUDES REBAR (CD6)\" - the original proposal only excluded expansion/sealing, with rebar status ambiguous.",
            "Confirm whether the garage apron requires rebar per the structural plans and, if so, who is now furnishing/installing it."
          ),
          item(
            "Includes concrete footings for trash compactor, monument sign, light poles, bollards, and amenity items",
            "needs_clarification",
            "Trash Pad + Footer, Light Pole Base, Kitchen Wall Footer, and BBQ Pit Footer are itemized. No monument sign or bollard footing line item found in either proposal version.",
            "Confirm monument sign and bollard footings are covered elsewhere (bollards themselves are explicitly excluded below - see Exclusions) or get them added."
          ),
          item(
            "Includes pavers (flat slab included in site concrete; pavers included in landscaping)",
            "confirmed_included",
            "\"Concrete Base @ Pavers 4\", #3 @ 18\" OCEW (EXCLUEDES GeoTextile Fabric)\" - 3,906 SF @ $5.90 = $23,045.40 (unit cost reduced from $6.16).",
            "Confirms the split: CTF provides the concrete base under pavers only; the paver units/setting are carried by the landscaping trade, per the tracker note."
          ),
          item(
            "Includes dumpster pad and foundations",
            "confirmed_included",
            "\"Trash Pad 6\", No Rebar (ASSUMED NO DETAIL)\" 2,514 SF @ $5.94 (was $6.26), plus \"Trash Pad Footer\" 173 LF @ $105.00 (unchanged).",
            "Trash pad rebar is an assumption - see Assumed / Unconfirmed Details."
          ),
          item(
            "Includes foundations for CMU perimeter walls and columns",
            "needs_clarification",
            "No line item explicitly labeled CMU perimeter wall or column foundation appears in either proposal version. Notably, the revised proposal's new Low Decorative Wall item flags that the landscape plans call for CMU where the civil detail shows concrete - see Assumed / Unconfirmed Details.",
            "Confirm whether \"Decorative Concrete Wall,\" \"Check Wall @ Stairs,\" or the new low wall items cover this, or whether it's a genuine gap."
          ),
          item(
            "Includes all reinforcement, as outlined in the plans",
            "needs_clarification",
            "Inclusions state \"Furnish and Install wire mesh and rebar per plan,\" but 9 separate line items now qualify reinforcement/dimensions/material as \"ASSUMED\" due to missing or contradictory detail (up from 6 in the original version).",
            "See Assumed / Unconfirmed Details section - get actual structural sheets to CTF for re-confirmation."
          ),
          item(
            "Steps/Patios at Townhomes",
            "needs_clarification",
            "\"Step Concrete 5'-0\" Wide (ASSUMED NO DETAIL)\" 70 EA @ $178.75 = $12,512.50 is the closest match; no townhome-specific patio line item found.",
            "Confirm this covers all townhome steps/patios shown on the landscape plans."
          ),
          item(
            "Rain Garden",
            "acknowledged",
            "Still excluded - \"Rain Garden Concrete\" remains on CTF's excluded items list in the revised proposal, and the CD6 civil paving plan itself calls out \"EXCLUSION - RAIN GARDEN A\" directly on the plan near the unit 3H area.",
            "Consistent between the proposal and the civil plan - confirm which trade/scope carries the rain garden concrete instead."
          ),
          item(
            "Site decorative wall / free standing wall",
            "confirmed_included",
            "\"Decorative Concrete Wall 1'-6\"x4'-6\", Board Form, Rebar (F/LWF.2)\" 68 LF @ $214.00 = $14,552.00 (unchanged). Two additional wall items added in the revision - see Assumed / Unconfirmed Details for the CMU conflict on one of them.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Assumed / Unconfirmed Details (per CTF Proposal)",
        items: [
          item(
            "Low Decorative Wall - material conflict between civil and landscape plans",
            "needs_clarification",
            "NEW in the revised proposal: \"Low Decorative Wall 1'-6\"x4'-0\"Max, #4@12\" OCEW EF, Board Form Finish (F/LWF.2)(Plans Contradict Lanscape Plans State CMU)(ASSUMED MISSING DETAIL)\" - 67 LF @ $190.00 = $12,730.00. CTF is flagging, in its own words, that the civil wall detail sheet and the landscape plans disagree on wall material (concrete vs. CMU masonry).",
            "This needs architect/civil resolution before it can be accurately scoped or priced - a material change (concrete to CMU) would likely also change which trade performs this work entirely."
          ),
          item(
            "Concrete Wall 1'-0\"x6'-0\" - detail missing",
            "needs_clarification",
            "NEW in the revised proposal: \"Concrete Wall 1'-0\"x6'-0\", #4@12\" OCEW (6)#4 Cont (A/LWF.2)(ASSUMED MISSING DETAILS)\" - 22 LF @ $190.00 = $4,180.00.",
            ""
          ),
          item(
            "Trash Pad reinforcement",
            "needs_clarification",
            "\"Trash Pad 6\", No Rebar (ASSUMED NO DETAIL)\" - 2,514 SF.",
            ""
          ),
          item(
            "Step Concrete detail",
            "needs_clarification",
            "\"Step Concrete 5'-0\" Wide (ASSUMED NO DETAIL)\" - 70 EA.",
            ""
          ),
          item(
            "Check Wall @ Stairs footer/rebar",
            "needs_clarification",
            "\"Check Wall @ Stairs 8\"x3'-2\" w. 1'-0\"x3'-0\" Footer ASSUMED, Board Form Finish, Rebar ASSUMED (A/LWF.2)\" - 173 LF. References sheet A/LWF.2, which was not among the drawings provided for this review.",
            ""
          ),
          item(
            "Stem Wall @ Paver Base @ Pool",
            "needs_clarification",
            "\"Stem Wall @ Paver Base @ Pool 6\"x3'-0\", #3@18\" OCEW (ASSUMED MISSING)\" - still 280 LF, unchanged between proposal versions.",
            "Landscape plan (LC.5) quantity call-out for this area appears meaningfully lower than 280 LF - verify the take-off quantity against the actual civil/structural detail once available."
          ),
          item(
            "Light Pole Base detail",
            "needs_clarification",
            "\"Light Pole Base (ASSUMED NO DETAIL)\" - 29 EA @ $1,200.00.",
            ""
          ),
          item(
            "Kitchen Wall Footer detail",
            "needs_clarification",
            "\"Kitchen Wall Footer 4'-0\"x1'-0\", (2)#4 L-Bar X5'-0\"x24\" OC, #5 Trans @ 12\" OC (ASSUMED NO DETAIL)\" - 33 LF.",
            ""
          ),
          item(
            "Transformer Pad detail",
            "needs_clarification",
            "\"Transformer Pad (ASSUMED 8\" NO DETAIL)\" - 22 EA @ $516.95 (unit cost reduced from $538.65).",
            ""
          ),
          item(
            "Trash Pad Footer structural detail",
            "needs_clarification",
            "\"Trash Pad Footer 3'-0\"x1'-0\", (4)#4 Cont, #5 L-bar x 6'-11\" @ 16\" OC (1/S7.0)\" references structural sheet S7.0, which was not among the drawings provided for this review.",
            "Confirm sheet S7.0 matches what was priced."
          ),
        ],
      },
      {
        id: uid(),
        title: "Inclusions (per CTF Proposal)",
        items: [
          item("Furnish and install concrete per plan", "confirmed_included"),
          item("Furnish and install wire mesh and rebar per plan", "confirmed_included"),
          item("Furnish and install truncated domes per plan", "confirmed_included"),
          item("Drilling of light pole bases and bollards", "confirmed_included"),
          item("Tooled or saw control joints", "confirmed_included"),
          item(
            "Fine grade (grade to be within 1/10' by others)",
            "acknowledged",
            "",
            "Confirm which trade is providing the 1/10' fine grade - same assumption pattern seen on the concrete and asphalt packages."
          ),
          item("Concrete pump as needed", "confirmed_included", "Concrete Pumping line item reduced from $8,000.00 to $5,000.00 between proposal versions.", "Confirm this reduction reflects an updated pump-hour estimate, not a scope cut."),
        ],
      },
      {
        id: uid(),
        title: "Exclusions (per CTF Proposal)",
        items: [
          item(
            "10 Mil vapor barrier & reinforcement @ sidewalks; bollard light concrete bases; rain garden concrete; topping slab concrete (C/LCD.4); road base under concrete",
            "confirmed_excluded",
            "\"Items Below Can Be Added Upon Direct Request.\" Note: \"Hammock Footer\" and \"Emergency Switch Footer\" were on this excluded list in the original 6/3/26 proposal but do not appear in the revised 7/8/26 version.",
            "Confirm whether Hammock Footer and Emergency Switch Footer are now intended to be included, or were just dropped from the list in error - get this in writing either way."
          ),
          item("Removals, saw cutting, washout and traffic control", "confirmed_excluded"),
          item("Sealers, hardeners, and joint sealant", "confirmed_excluded"),
          item(
            "Blankets for cold weather protection",
            "alternate_credit",
            "Excluded from base bid; priced separately - see Cold Weather Pricing in the Pricing section.",
            ""
          ),
          item("Testing, engineering, survey, permits, fees, and inspection fees", "confirmed_excluded"),
          item("Adjustment of water valves and manholes, pavement markings, and soil sterilant", "confirmed_excluded"),
          item("Subgrade prep, excavation, and backfill", "confirmed_excluded"),
          item(
            "Aggregate base under concrete",
            "confirmed_excluded",
            "CD6 civil plan legend separately notes \"PAVEMENT SECTIONS (BY OTHERS),\" consistent with this exclusion.",
            ""
          ),
          item("Furnishing embeds, anchor bolts, and pipe for bollards", "confirmed_excluded", "", "CTF drills bollard bases (see Inclusions) but does not furnish the embeds/bolts/pipe themselves - confirm who does."),
          item("Performance bond", "confirmed_excluded"),
        ],
      },
      {
        id: uid(),
        title: "Qualifications & Risk Terms (per CTF Proposal)",
        items: [
          item(
            "Bid conditioned on AIA A401-1997 subcontract form",
            "needs_clarification",
            "\"This Bid Is Conditioned Upon The Use Of The AIA A401-1997 Subcontract Form, And Upon The Exclusion Of Any Requirement To Name Additionally Insured Parties, Or To Waive Rights Of Subrogation... If An Alternate Contract Form Is To Be Executed, All Terms Shall Be Mutually Agreed Upon Prior To Start Of Any Work.\" Unchanged from the original proposal.",
            "Needs GC risk/legal review - this conflicts with a typical requirement to name the GC/owner as additional insured and waive subrogation."
          ),
          item("No Saturday/Sunday/holiday/night work in base bid; such work billed at separately agreed rates", "acknowledged"),
          item(
            "Not liable for delays/damages from causes beyond CTF's control",
            "acknowledged",
            "Weather, labor strikes/unrest, riots, acts of God, accidents, material/supply shortages, supplier shipping delays.",
            ""
          ),
          item(
            "One-year defect warranty from completion; not responsible for pavement failure from unstable subgrade/frost",
            "acknowledged",
            "Materials warranted per manufacturer, not CTF. Cannot guarantee positive drainage on areas under 2% slope; soft/unstable areas corrected hourly at Owner's Rep direction or by others.",
            ""
          ),
          item(
            "ADA walk/ramp slopes must be inspected within 24 hours of installation",
            "needs_clarification",
            "Unsatisfactory work must be reported within 24 hours; inspections not completed in that window are considered approved.",
            "Confirm Garrett has an inspection process that can realistically meet this 24-hour window, or negotiate a longer one."
          ),
          item("Salt deicer use voids warranty; kitty litter/sand must be removed within 24 hours", "acknowledged", "", "Coordinate with the project's snow removal contractor."),
          item(
            "Retainage not accepted unless mutually agreed terms stated",
            "needs_clarification",
            "Monthly progress payments due on/before the 25th of each month for work completed through the prior period. Final payment due 30 days after substantial completion.",
            "Confirm Garrett's retainage requirement with CTF up front, since their default position is none."
          ),
          item("Change orders require signed approval before work proceeds", "acknowledged"),
        ],
      },
    ],
  };
}

// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista (Centennial, CO) - CSI Division 05 Metals (Structural Steel,
// Metal Stairs, Ladders, Handrails & Railings, Misc. Metals)
// GC: Garrett Construction | Bidder: W Baker Steel LLC
//
// Built primarily from W Baker Steel's own itemized proposal (dated
// 6/2/2026, valid through 8/31/2026 - covering stairs, balcony/Juliet
// rails, elevator steel, dog park and pool fencing/gates, handrails,
// amenity steel, and trash enclosure gates/bollards), cross-referenced
// against the Division 5 Metals bid comparison tracker's master scope
// checklist questions (Structural Steel, Metal Stairs, Ladders, and
// Handrails & Railings cost codes) and its Kone elevator credit notes.

function buildBakerExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "7400 S Alton St, Centennial, CO",
      jobNo: "RC26015",
      date: "2026-06-02",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes",
      phone: "317.886.7923",
      email: "AltaVista@TheGarrettCo.com",
    },
    bidder: {
      company: "W Baker Steel LLC",
      trade: "05 1200 - Structural Steel, Stairs, Railings & Misc. Metals",
      contact: "Victor Montoya, Project Manager",
      phone: "(281) 741-3064 Ext. 105 / (346) 313-1247",
      email: "Victor@wbakersteel.com",
      amount: "$766,074.91 - Sub Total $741,064.00 + Sales Tax (6.75%) $25,010.91, per 6/2/2026 proposal, valid through 8/31/2026.",
    },
    generalNotes:
      "PRIORITY: Baker's proposal applies 6.75% sales tax to the entire $741,064.00 subtotal (which includes labor and " +
      "fabrication), but the master Division 5 checklist calls for the correct rate to be 4% on materials only - this " +
      "looks like a real overcharge on both rate and base, and is worth resolving before contract; it alone accounts " +
      "for $25,010.91 of the total. Also: this proposal expired 8/31/2026 and today's date is past that - get current " +
      "pricing before award. Baker explicitly states \"This bid is not a GMP quote to cover all steel items. It is " +
      "limited to what is specifically listed here with items and quantities\" - given the sheer number of building- " +
      "type-specific line items, do a careful cross-check against the full drawing set for anything not itemized, " +
      "since nothing implied is included. Three flagged gaps: (1) Metal Canopies are excluded entirely - the bid " +
      "tracker shows Baker marked \"Plug - NO Metal Canopies\" - a separate bidder or allowance is needed. (2) Juliet " +
      "Rails are priced two ways, Option A (Per Detail) and Option B (Per Exterior Elevations), both totaling exactly " +
      "$53,300 - the GC needs to pick one before this can go to contract, since both are currently live in the " +
      "proposal as alternates. (3) The bid tracker notes \"Kone does not need hoistbeams credit\" (-$16,800) and " +
      "\"Ladders by Kone\" (-$8,400) against a different bidder's pricing, but Baker's own proposal includes full " +
      "elevator hoist beam and pit ladder pricing per building type with no credit taken - confirm whether Kone " +
      "(the elevator installer) is picking up this scope from Baker, and if so get the credit applied. Minor: the bid " +
      "tracker lists Baker's contact as \"Brent Franklin/Victor Mendoza\" at 281-541-0389, while the signed proposal " +
      "itself is from \"Victor Montoya\" at (281) 741-3064 - confirm the correct current contact before the scope call.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Correct sales tax percentage on materials only at 4%",
            "needs_clarification",
            "Baker's proposal instead applies 6.75% Sales Tax to the full $741,064.00 subtotal (labor + fabrication + material) = $25,010.91, arriving at a $766,074.91 total.",
            "This is both the wrong rate and the wrong base per the master checklist - get this corrected before contract; could meaningfully reduce the total."
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $)",
            "needs_clarification",
            "No T&M rate sheet included with this proposal.",
            "Request T&M rates for any add/change-order work, consistent with what other trades on this project have provided."
          ),
          item(
            "Proposal pricing validity",
            "needs_clarification",
            "\"The validity of this proposal expires at the end of business day of 08/31/2026.\" Based on Bidding Set dated 05-07-2026.",
            "Proposal has expired - get current, re-confirmed pricing from Baker before issuing a subcontract."
          ),
          item(
            "Proposal is not divisible; must be accepted in its entirety",
            "acknowledged",
            "\"This Proposal is not divisible and is to be accepted in its entirety. Reduction of the scope of work may involve a change in unit price.\"",
            "Confirm Garrett is prepared to award the full package as-is, since removing any single area may reprice the rest."
          ),
          item(
            "Proposal will be revised upon new construction drawings",
            "acknowledged",
            "\"W Baker Steel LLC will revise the proposal when receiving a new set(s) of construction drawings\" and \"any change to specifications will affect the unit price(s) and a new revised proposal will be issued.\"",
            "If drawings have revised since the 05-07-2026 bidding set, expect a repriced proposal - check for a newer version before contract, per the pattern seen on other trade packages."
          ),
          item(
            "Machinery rental included, except elevator shaft scaffolding and cranes",
            "confirmed_included",
            "\"W Baker Steel LLC will rent any machinery necessary to lift up material and erect steel items without an additional charge with the exception of Scaffolding for elevator shafts steel and any cranes.\" Man lift and forklift listed as included equipment.",
            "Confirm who is providing scaffolding for elevator shaft steel work and any cranes required, since both are carved out."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Confirmation (per Division 5 Metals bid tracker)",
        items: [
          item(
            "Take-off completed per plans",
            "confirmed_included",
            "Full itemized take-off across every building type and amenity area, based on the 05-07-2026 bidding set.",
            ""
          ),
          item(
            "Engineered shop drawings included",
            "needs_clarification",
            "Not explicitly addressed as a line item in Baker's proposal.",
            "Confirm engineered shop drawings (and any associated engineering/stamp fees) are included in the quoted price."
          ),
          item(
            "Verified beam dimensions with wood framing and overall ceiling plan",
            "needs_clarification",
            "Not explicitly addressed in Baker's proposal.",
            "Confirm this coordination step has actually been done, particularly for elevator hoist/life line beams."
          ),
          item(
            "Includes elevator hoist beam, as required",
            "confirmed_included",
            "Elevator Hoist Beams, Pit Ladders, Grating Decks for Sum Pits, Life Line Beams, and Sill Angles itemized per building type (Types I, IA, II) - Elevator section total $56,560.00.",
            "See the Kone credit flag in the general notes - confirm this scope is still with Baker and not moving to the elevator installer."
          ),
          item(
            "Includes wet-set embeds / bolts, as required",
            "confirmed_included",
            "Covers embeds Baker needs for its own connections.",
            "Distinct from \"Embeds for other trades,\" which is explicitly excluded below - don't conflate the two."
          ),
          item(
            "Includes all stair flights, as per plans",
            "confirmed_included",
            "Stair 1 and Stair 2 towers itemized for Building Types I, IA, and II (steel stairs); Types III and IV use wood treads/stringers by others with Baker providing only wall-mounted handrails.",
            "Confirm the Type III/IV wood-stair-by-others split matches the architectural intent."
          ),
          item(
            "Includes pre-cast stair treads with metal closures",
            "confirmed_included",
            "Tread material specified as \"42\" x 12\" x 2 1/4\" P.C.T.\" (precast concrete tread) throughout the stair sections.",
            ""
          ),
          item(
            "Includes rails for stair landings, guardrails, cane rails, and stairs",
            "confirmed_included",
            "Full Stair Rails w/Grab Bar and Connecting Rails, Wall Mounted Hand Rails w/exts, Return Rails, Public Rails, and Cane Detection all itemized per stair tower.",
            ""
          ),
          item(
            "Includes elevator pit grates and elevator ladders",
            "needs_clarification",
            "Bid tracker's Ladders cost code shows Baker's answer as \"SEE Structural Steel $13,341.00\" - i.e. priced under a different cost code than the tracker expected.",
            "Confirm this scope isn't being double-counted or dropped between cost codes when the budget is reconciled."
          ),
          item(
            "Roof Access Ladders (19/A6020)",
            "confirmed_included",
            "\"Roof Access Ladder\" itemized once per stair tower for Building Types I and IA (3 and 2 towers respectively), and once per Building Type II (\"Roof Access Ladder @ Stair 1 Only\").",
            ""
          ),
          item(
            "Includes all balcony railings",
            "confirmed_included",
            "\"3'-6\"H Balcony Rails\" itemized with embeds for Building Types I, IA, II, III, and IV - section total $211,858.00.",
            ""
          ),
          item(
            "Fabricated materials prime painted",
            "confirmed_included",
            "\"All materials to receive one coat of shop primer - Red Oxide,\" listed as \"Coated: Red Primer\" throughout.",
            ""
          ),
          item(
            "Includes all roof railings at mechanical",
            "needs_clarification",
            "No line item for roof-level railings at mechanical equipment/screening found anywhere in Baker's itemized proposal.",
            "Confirm whether this scope exists on this project and, if so, get it added or confirm it's carried by another trade."
          ),
          item(
            "Includes mobilizations for field measure and multiple phase installation",
            "needs_clarification",
            "Unlike the concrete, asphalt, and site concrete packages, Baker's proposal has no explicit mobilization line item anywhere.",
            "Confirm mobilization/remobilization for field measurement and phased installation across 14 buildings is baked into the unit prices, not billed as an extra."
          ),
          item(
            "Verify railings for slopes, as per plans",
            "needs_clarification",
            "Not explicitly addressed in Baker's proposal.",
            "Confirm sloped-condition railings (stairs, ramps) have been verified against the plans, not just flat-condition assumptions."
          ),
          item(
            "3'-6\" H Juliet Rails",
            "needs_clarification",
            "Priced twice as alternates: Option A (Per Detail) and Option B (Per Exterior Elevations) - both total exactly $53,300.00 across the same building types.",
            "GC must select Option A or B before contract - only one should be carried, not both."
          ),
          item(
            "Includes bollards",
            "confirmed_included",
            "\"3'-6\"H Bollards,\" 6\" Sch. 40, itemized under Trash Enclosure - 6 pcs @ $410.00 = $2,460.00.",
            ""
          ),
          item(
            "Metal Canopies",
            "confirmed_excluded",
            "Bid tracker shows Baker marked \"Plug - NO Metal Canopies.\" No canopy line items anywhere in Baker's proposal.",
            "This scope needs a separate bidder or allowance - it is not part of Baker's package at all."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Areas & Totals (per W Baker Steel Proposal)",
        items: [
          item("Stairs (Building Types I, IA, II - steel stairs; III, IV - wood stairs by others, Baker rails only)", "confirmed_included", "Section Total $240,068.00", ""),
          item("3'-6\"H Balcony Rails (all building types)", "confirmed_included", "Section Total $211,858.00", ""),
          item("3'-6\"H Juliet Rails - Option A and Option B (alternates, select one)", "needs_clarification", "Each option totals $53,300.00", "See Scope Confirmation - only one option should be carried to contract."),
          item("Elevator steel (hoist beams, pit ladders, grating decks, life line beams, sill angles)", "confirmed_included", "Section Total $56,560.00", "See Kone credit flag in general notes."),
          item("Dog Park Fence & Gate", "confirmed_included", "Section Total $26,360.00", ""),
          item("5'-0\"H Pool Fence & Gate", "confirmed_included", "Section Total $23,715.00", ""),
          item("3'-0\"H Step Handrails / Core Drilling", "confirmed_included", "Section Total $6,548.00", ""),
          item("3'-6\"H Guardrails at Retaining Walls", "confirmed_included", "Section Total $54,970.00", ""),
          item("Pool safety signage post, pool safety equipment posts, hose bib post, fire table controls/emergency switch post, hammock posts", "confirmed_included", "Combined total $5,450.00 ($450 + $900 + $1,400 + $900 + $1,800)", ""),
          item("Bike Rack, VE Option", "needs_clarification", "Section Total $1,290.00 - a shop-built value-engineering substitute \"similar to Metro 40 Ride Bike Rack by Landscape Forms.\"", "Confirm this VE substitution is acceptable to the design team/owner if a specific product was originally specified."),
          item("Steel at Outdoor Kitchen (countertop frame, posts, barbecue/bar top steel plate)", "confirmed_included", "Section Total $6,290.00", ""),
          item("Steel Frame at Inset of TV Recess", "confirmed_included", "Priced within the Outdoor Kitchen section per Detail D/LWF.3; no separate subtotal shown.", "Confirm this line item's price is captured correctly since it has no standalone total."),
          item("Steel at Spa Accent Wall", "confirmed_included", "Section Total $12,645.00 (plus a related $1,700.00 steel frame item).", ""),
          item("Trellis (15'-0\"x24'-0\"x9'-9\"H)", "confirmed_included", "Section Total $8,000.00. Faux wood roof slats and their connection clips are by others.", ""),
          item("Trash Enclosure (bollards and gates)", "confirmed_included", "Section Total $32,310.00. Concrete and crown cap for bollards by others.", ""),
          item("Fireplace / kitchen accent wall steel (per LC.B note)", "needs_clarification", "Bid tracker note references \"Spa accent wall, fire place, kitchen accent wall - See LC.B.\" Baker's proposal covers the spa accent wall and outdoor kitchen steel, but no line item clearly addresses a fireplace.", "Confirm whether any fireplace steel scope exists on LC.B and, if so, who is carrying it."),
        ],
      },
      {
        id: uid(),
        title: "Exclusions & Qualifications (per W Baker Steel Proposal)",
        items: [
          item("This bid is not a GMP quote - limited strictly to items and quantities listed", "acknowledged", "", "Cross-check the full drawing set for any steel scope not explicitly itemized - nothing implied is included."),
          item("Simpson hanger installation not included", "alternate_credit", "\"We can provide a price to weld a hanger provided by others if requested.\"", ""),
          item("Flitch plates not included", "alternate_credit", "\"We can provide if requested.\"", ""),
          item("Embeds for other trades not included", "alternate_credit", "\"We can provide if requested.\" Distinct from Baker's own wet-set embeds, which are included.", ""),
          item("No light gauge materials, specialty metals, holes for other trades, masonry anchors, or louvers", "confirmed_excluded"),
          item("No aluminum, stainless steel, or their components (unless specifically noted)", "confirmed_excluded"),
          item("No vinyl railing/fencing, standard steel doors and frames, or flashing/sheet metal", "confirmed_excluded"),
          item("No third-party testing or inspections", "confirmed_excluded"),
          item("Permits not included unless specified", "confirmed_excluded"),
          item("No access control locks/card readers at gates; standard single-hole boxes and standard hinges only", "confirmed_excluded", "", "Coordinate with the access-control vendor for all gates (dog park, pool)."),
          item("No blocking or waterproofing", "confirmed_excluded", "\"Provided by others.\"", ""),
          item("Awning/canopy roofs bid as standard PBU panel only - no standing seam or wood component; no exotic/composite woods", "confirmed_excluded"),
          item("Specialty roofing, wood-slat roofing, and wood columns for trellis/cabanas not included unless otherwise noted", "confirmed_excluded"),
          item("Removal of temporary stairs, silt fencing, lintels (unless noted), and carports not included", "confirmed_excluded"),
          item(
            "Any Powdercoat items are standard Gloss/Flat Black",
            "acknowledged",
            "\"Any other colors will require an additional cost component.\" Bike rack is the only item specified as powder coated in this proposal.",
            "Confirm Gloss/Flat Black matches the specified color, or budget for the upcharge."
          ),
        ],
      },
      {
        id: uid(),
        title: "General Terms",
        items: [
          item("Change orders must be approved in writing and executed before any work is performed", "acknowledged"),
          item("Not a bid for Design/Build features; submittals based on current documents only", "acknowledged", "", "Confirm no design/build steel scope is expected of Baker - additional cost if so."),
          item("Compensation includes all applicable sales tax and duties as required by law", "needs_clarification", "", "See the Pricing section - the tax calculation itself needs correcting, so this statement needs to be re-verified once fixed."),
          item("Term of agreement runs from date of agreement through completion of drawings & fabrication services", "acknowledged"),
        ],
      },
    ],
  };
}

// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista (Centennial, CO) - CSI 07 2100 Building Insulation
// GC: Garrett Construction | Bidder: Diversified Insulation, LLC
//
// Built from: the "07-2100 Insulation" bid comparison tracker's master
// scope checklist, Diversified's two revised proposals dated 6/12/2026
// (Apartments $693,915.00 and Townhomes $279,747.00), and the 6/3-6/12/26
// email thread between Nathan Orfanedes and Jason Gattis, which contains
// Nathan's exact base-bid scope directive by building type, an unanswered
// pricing question, and five priced alternates.

function buildInsulationExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-08-07",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "Diversified Insulation, LLC",
      trade: "07 2100 - Building Insulation",
      contact: "Jason Gattis, Estimator/Project Manager",
      phone: "936.900.3201",
      email: "Jason.Gattis@diversified-insulation.com",
      amount: "$952,000.00 combined (Apartments $681,000.00 + Townhomes $271,000.00), per REVISED 8/7/2026 proposals (Rev 1.2) - down from $973,662.00 on the 6/12/26 version. Now matches the bid tracker's TOTAL figure exactly.",
    },
    generalNotes:
      "Updated to Diversified's REVISED proposal (Rev 1.2, dated 8/7/26), which lowered pricing on both phases - " +
      "Apartments $693,915.00 -> $681,000.00, Townhomes $279,747.00 -> $271,000.00, combined $973,662.00 -> " +
      "$952,000.00 - with no change to scope, specs, or exclusions, and no email explaining the reduction was " +
      "provided with this revision. This resolves the earlier reconciliation flag: the new combined total now " +
      "matches the bid tracker's TOTAL figure exactly (the tracker's separate $1,125,219.40 Prepared Amount still " +
      "doesn't match either version - likely Garrett's own internal check figure, worth a quick confirmation but " +
      "lower priority). Everything else carries forward unresolved: PRIORITY - the Exclusions list still excludes " +
      "\"Tenting,\" directly conflicting with the master 07-2100 checklist's expectation that tenting of fire " +
      "suppression lines is included - resolve before contract given the life-safety relevance. Nathan's question " +
      "\"What's the credit for coming down to the R-49 insulation per plans on A0040?\" was never answered in the " +
      "6/12/26 thread and nothing in this revision addresses it either. This revised proposal has its own 15-day " +
      "acceptance window (from 8/7/26) which has also since expired - get current pricing reconfirmed. Also confirm " +
      "whether the five alternates quoted 6/12/26 are still valid at these lower base numbers, since they were " +
      "priced against the prior base bid. Finally, get Jason's written confirmation that NFPA 13R/D does not require " +
      "full-fill insulation at the townhome interstitial space or attic, since the GC is relying on that code " +
      "reading to exclude significant scope there, and confirm all of Jason's originally-flagged \"discrepancies in " +
      "the plans\" were actually resolved, not just the interstitial/attic items Nathan's directive addressed.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Correct sales tax percentage on materials only at 4%",
            "needs_clarification",
            "Marked \"Y?\" on the bid tracker - not affirmatively confirmed.",
            ""
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $)",
            "needs_clarification",
            "No T&M rate sheet included with either proposal.",
            "Request rates for any add/change-order work."
          ),
          item(
            "Combined proposal total reconciled against bid tracker",
            "confirmed_included",
            "Rev 1.2 (8/7/26): Apartments $681,000.00 + Townhomes $271,000.00 = $952,000.00 combined - matches the bid tracker's TOTAL for Diversified exactly.",
            "Resolved by the 8/7/26 revision (down from $973,662.00 on the 6/12/26 version). The tracker's separate $1,125,219.40 Prepared Amount still doesn't match - likely Garrett's own internal check figure, worth a quick confirmation but lower priority."
          ),
          item(
            "Proposal pricing validity",
            "needs_clarification",
            "\"This proposal may be withdrawn by us if not accepted within 15 days\" of the 8/7/2026 proposal date (Rev 1.2), up from the 6/12/2026 date on the prior version.",
            "That acceptance window has also since closed - get current, re-confirmed pricing from Diversified before issuing a subcontract."
          ),
          item(
            "Payment terms and late charges",
            "needs_clarification",
            "\"PAYMENT IS DUE AFTER COMPLETION OF WORK. JOBS NOT PAID IN 30 DAYS ARE SUBJECT TO A LATE CHARGE OF 1.5%, ANNUAL LATE CHARGE OF 18%.\" Mechanic's lien filed after 45 days unpaid.",
                "Confirm this payment structure (due on completion, not progress payments) works with Garrett's standard billing cycle - it differs from the monthly progress payment terms seen on other trade packages."
          ),
        ],
      },
      {
        id: uid(),
        title: "Base Bid Scope Directive & Open Items (per 6/11-6/12/26 email exchange)",
        items: [
          item(
            "Apartments: interstitial space (between floors) fully filled",
            "confirmed_included",
            "Proposal: \"Between Floors R-60 'Full Fill' W/ Netting.\" Matches Nathan's 6/11/26 directive: \"Include the apartments areas interstitial space as fully filled.\"",
            ""
          ),
          item(
            "Apartments: attic full-fill excluded from base bid",
            "confirmed_excluded",
            "Proposal base bid only includes \"R-49 Batt Insulation - Laid on RC Channel @ Perimeter Attic Areas ONLY,\" not a full fill. Matches Nathan's directive to exclude fully-filled attic from the base bid.",
            "Full attic fill is priced separately as an add alternate - see Alternates section."
          ),
          item(
            "Townhomes: interstitial space and attic full-fill excluded from base bid",
            "needs_clarification",
            "Proposal shows standard batt (R-11 between floors, R-49 batt at attic), not full-fill, consistent with Nathan's directive. Nathan's stated rationale: \"My understanding is that you do not have to sprinkle or fully fill the interstitial space or attic in NFPA 13R/D - Please let me know if you believe differently.\"",
            "No written confirmation from Jason on this NFPA 13R/D reading was found in the thread - get Diversified's written agreement, since the GC is relying on this code interpretation to exclude significant scope."
          ),
          item(
            "Credit for reducing to R-49 insulation per plan A0040",
            "needs_clarification",
            "Nathan asked this directly in his 6/11/26 email. Jason's 6/12/26 reply listed five alternates but did not address this question.",
            "Get an explicit answer - the proposal's attic scope already appears to reflect R-49, so confirm whether any credit is still owed or the pricing already accounts for it."
          ),
          item(
            "Prior \"discrepancies in the plans\"",
            "needs_clarification",
            "Jason's 6/11/26 email: \"There's some discrepancies in the plans, can you call me when you're available?\" - raised before Nathan's directive on interstitial/attic scope.",
            "Confirm with Jason that all plan discrepancies were resolved by Nathan's directive, not just the specific interstitial/attic items it addressed."
          ),
        ],
      },
      {
        id: uid(),
        title: "Alternates (per 6/12/26 email)",
        items: [
          item(
            "Add Alternate - Apartments: fully fill attic space, roof assembly 1R1",
            "needs_clarification",
            "Add $173,219.40. Per Nathan's email, this depends on cost versus installing a dry fire sprinkler system instead - hence why it's an alternate rather than base scope.",
            "Confirm with the design team/fire protection engineer which approach (full-fill insulation vs. dry sprinkler) is being carried forward."
          ),
          item(
            "R-49 Blown Insulation w/ netting in lieu of Poly Iso @ roof deck, roof assembly 1R1",
            "needs_clarification",
            "Add $113,554.94 per the 6/12/26 email, but the bid tracker notes this figure as \"Included in above\" - i.e. already bundled inside the $173,219.40 attic full-fill alternate, not additive on top of it.",
            "Confirm this is bundled, not double-counted, if both alternates are being considered together."
          ),
          item(
            "Deduct Alternate - Apartments: R-21 Kraft Faced @ Exterior Walls in lieu of R-21 Unfaced w/ 6 Mil Vapor Barrier",
            "needs_clarification",
            "Deduct $13,869.18.",
            "Confirm which wall facing option (unfaced + vapor barrier, base bid, vs. kraft-faced, deduct alternate) is being carried to contract."
          ),
          item(
            "Deduct Alternate - Townhomes: delete R-11 Between Floors",
            "needs_clarification",
            "Deduct $17,554.00 - matches the bid tracker's figure for this line exactly.",
            ""
          ),
          item(
            "Deduct Alternate - Townhomes: R-21 Kraft Faced @ Exterior Walls in lieu of R-21 Unfaced w/ 6 Mil Vapor Barrier",
            "needs_clarification",
            "Deduct $7,280.10.",
            "Confirm which wall facing option is being carried to contract, consistent with the apartments decision above."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Confirmation (per 07-2100 Insulation bid tracker)",
        items: [
          item("Take-off completed per plans", "confirmed_included", "", ""),
          item("Material quoted per plan insulation chart", "confirmed_included", "", ""),
          item(
            "Option for Kraft Faced insulation (or vapor barrier equivalent) for exterior walls",
            "confirmed_included",
            "Base bid is unfaced with 6 mil vapor barrier; kraft-faced is offered as a deduct alternate on both Apartments and Townhomes - see Alternates.",
            ""
          ),
          item(
            "Includes sound insulation at resident separation walls, floors, ceilings",
            "confirmed_included",
            "Party Walls (both sides) and Corridor Walls are itemized as unfaced batt at both properties.",
            ""
          ),
          item(
            "Excludes insulation at Mechanical/Laundry room walls within same unit",
            "needs_clarification",
            "Not explicitly called out as a separate work area in either proposal.",
            "Confirm both parties understand this exclusion boundary the same way."
          ),
          item(
            "Includes tenting of fire suppression lines in soffit areas",
            "needs_clarification",
            "Proposal Exclusions state: \"Tenting, Fire Caulking & Rigid Insulation\" (both Apartments and Townhomes proposals).",
            "Direct conflict with the master scope checklist, which expects tenting to be included - resolve before contract."
          ),
          item(
            "Includes installing materials to fill voids and cavity spaces, as detailed on plans",
            "confirmed_included",
            "",
            ""
          ),
          item(
            "Fire caulking and rigid insulation",
            "needs_clarification",
            "Both explicitly excluded on both proposals: \"Tenting, Fire Caulking & Rigid Insulation.\"",
            "Confirm whether fire caulking and rigid insulation are required anywhere in this scope per spec, and if so, get them priced from Diversified or another source."
          ),
        ],
      },
      {
        id: uid(),
        title: "Inclusions - Wall & Ceiling Assemblies (per Diversified Proposals)",
        items: [
          item("Apartments - Exterior Walls: 9' R-21x15\"x105\" Unfaced w/ 6 Mil Vapor Barrier", "confirmed_included"),
          item("Apartments - Corridor Walls: 9' R-11x15\"x105\" Unfaced", "confirmed_included"),
          item("Apartments - Party Walls: 9' R-11x15\"x105\" Unfaced, both sides", "confirmed_included"),
          item("Apartments - Between Floors: R-60 \"Full Fill\" w/ Netting", "confirmed_included"),
          item("Apartments - Corridor Ceilings: R-60 \"Full Fill\" w/ Netting", "confirmed_included"),
          item("Apartments - Garage Ceilings: R-60 \"Full Fill\" w/ Netting", "confirmed_included"),
          item("Apartments - Air Seal Package: Foam Can/Each", "confirmed_included"),
          item("Apartments - Attic: R-49 Batt, laid on RC Channel @ perimeter attic areas ONLY", "confirmed_included", "", "Full attic fill is a separate add alternate - see Alternates section."),
          item("Townhomes - Exterior Walls: 9' R-21x15\"x105\" Unfaced w/ 6 Mil Vapor Barrier", "confirmed_included"),
          item("Townhomes - Garage Walls: 9' R-21x15\"x105\" Unfaced w/ 6 Mil Vapor Barrier", "confirmed_included"),
          item("Townhomes - Party Walls: 9' R-11x15\"x105\" Unfaced, both sides", "confirmed_included"),
          item("Townhomes - Between Floors: R-11x24\"x48\" Unfaced, laid on RC Channel", "confirmed_included", "", "Deletable via deduct alternate - see Alternates section."),
          item("Townhomes - Garage Ceilings: R-38x24\"x48\" Unfaced, laid on RC Channel", "confirmed_included"),
          item("Townhomes - Air Seal Package: Foam Can/Each", "confirmed_included"),
          item("Townhomes - Attic: R-49 Batt Insulation, laid on RC Channel", "confirmed_included", "", "Unlike Apartments, not limited to \"perimeter areas only\" in the proposal language - confirm this is intentional."),
        ],
      },
      {
        id: uid(),
        title: "Exclusions (per Diversified Proposal)",
        items: [
          item(
            "Tenting",
            "needs_clarification",
            "\"Exclusions: Tenting, Fire Caulking & Rigid Insulation\" (both proposals).",
            "See the conflict flagged in Scope Confirmation and General Notes."
          ),
          item("Fire caulking", "confirmed_excluded"),
          item("Rigid insulation", "confirmed_excluded"),
        ],
      },
      {
        id: uid(),
        title: "General Terms",
        items: [
          item(
            "Proposal withdrawal after 15 days if not accepted",
            "needs_clarification",
            "",
            "Window has expired relative to today's date - reconfirm pricing before award."
          ),
          item("Alterations/deviations only upon written change order, at extra charge", "acknowledged"),
          item("Work contingent upon strikes, accidents, or delays beyond Diversified's control", "acknowledged"),
          item("Workers covered by workers' compensation insurance", "confirmed_included"),
          item("All material guaranteed as specified; work completed per standard workmanlike practices", "acknowledged"),
        ],
      },
    ],
  };
}

// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista (Centennial, CO) - CSI 21 1100 Fire Protection / Fire Suppression
// GC: Garrett Construction | Bidder: Viking Fire Protection
//
// Built from: the "21-1100 Fire Protection" bid comparison tracker's master
// scope checklist (Division 21 Fire Suppression, 9 bidders), and Viking Fire
// Protection's Bid #0000042 (dated 5/25/2026, $1,579,100.00 turnkey for 7
// apartment buildings, 7 townhome buildings, and the clubhouse).

function buildFireProtectionExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-05-25",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "Viking Fire Protection",
      trade: "21 1100 - Fire Protection / Fire Suppression",
      contact: "",
      phone: "",
      email: "vikingfireprotections@gmail.com",
      amount: "$1,579,100.00 - Bid #0000042, 5/25/2026 (7 apartment buildings $1,275,300.00 + 7 townhome buildings $210,000.00 + Fire Caulking Alt $42,000.00 + Clubhouse Dry System $51,800.00). Bid tracker shows Current Selected Bid for this cost code at $1,710,000.00 - see Pricing for reconciliation.",
    },
    generalNotes:
      "PRIORITY: the bid tracker shows Viking's NFPA 13 @ apartments figure as $1,100,300.00, but Viking's own " +
      "proposal prices the same scope (7 four-story apartment buildings) at $1,275,300.00 - a ~$175,000 discrepancy " +
      "that needs reconciling before contract. Also flag: \"Clubhouse Tenting\" is on the master scope checklist as " +
      "an item to confirm included (with a $10,000 GC plug figure), but Viking's own Exclusions list excludes " +
      "\"Tenting of CPVC Pipe\" outright with no clubhouse carve-out - the same tenting gap pattern seen on the " +
      "insulation trade package, worth resolving holistically rather than trade-by-trade. The tracker also shows a " +
      "separate \"NFPA 13R @ Townhomes\" line ($15,897.00) that Viking's own proposal never mentions - it only lists " +
      "\"NFPA 13D for townhomes\" as included - confirm whether 13R is additive scope or a code-path question, since " +
      "13R and 13D are different sprinkler standards. Two attic dry-system alternates ($280,000.00 for the 4-story " +
      "attic, and a $100,000.00 GC plug for the tall/5th-level attic) don't clearly reconcile with Viking's base-bid " +
      "language of \"dry systems in all 4 story apartment building (High areas only)\" - get firm, itemized pricing " +
      "and confirm what's already bundled versus additive. Viking's proposal states no pricing validity/expiration " +
      "period at all (unlike every other trade on this project) - get current pricing reconfirmed given how much " +
      "time has passed since the 5/25/26 bid date. Finally, Viking's total ($1,579,100.00) doesn't clearly match the " +
      "tracker's $1,710,000.00 Current Selected Bid figure even after adding the alternates - get an itemized " +
      "reconciliation showing exactly what sums to the number being carried forward, and get a complete contact " +
      "(named person, phone, and company email) on file, since only a generic gmail address is currently listed.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Correct sales tax percentage on materials only at 4%",
            "needs_clarification",
            "Marked \"Y?\" on the bid tracker - not affirmatively confirmed.",
            ""
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $)",
            "needs_clarification",
            "Bid tracker marks this \"Y\" for Viking, but no rate sheet is included with the proposal itself.",
            "Get the actual rate sheet in writing for any add/change-order work."
          ),
          item(
            "Total bid amount reconciled against bid tracker",
            "needs_clarification",
            "Viking's proposal totals $1,579,100.00. The bid tracker's \"Current Selected Bids\" for this cost code shows $1,710,000.00 - doesn't clearly match Viking's total even after adding the priced alternates.",
            "Get an itemized reconciliation from Viking/GC showing exactly which base and alternate line items sum to the number being carried to contract."
          ),
          item(
            "Pricing validity period",
            "needs_clarification",
            "No expiration or validity clause is stated anywhere in Viking's proposal, unlike every other trade proposal reviewed on this project.",
            "Given the time elapsed since the 5/25/26 bid date, get current pricing reconfirmed regardless of the absence of a stated deadline."
          ),
          item(
            "Complete contact information on file",
            "needs_clarification",
            "Bid tracker lists Viking's phone as a placeholder (\"XXX-XXX-XXXX\") and email as a generic gmail address; Viking's own proposal letterhead lists no phone number or named contact at all.",
            "Get a named contact, direct phone number, and company-domain email on file before contract."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Confirmation (per 21-1100 Fire Protection bid tracker)",
        items: [
          item("Take-off completed per plans", "confirmed_included", "", ""),
          item(
            "Design-Build contract to furnish design, installation, and commissioning",
            "confirmed_included",
            "Matches Viking's note that this is a \"turn key system\" and its Inclusions list, which includes Design.",
            ""
          ),
          item(
            "Includes shop drawings and permit fees",
            "confirmed_included",
            "Matches Viking's Inclusions: Permits.",
            ""
          ),
          item(
            "Includes installation in interstitial space where required",
            "confirmed_excluded",
            "Marked \"Y\\N\" (unconfirmed) for every bidder on the tracker, including Viking. Viking's own Exclusions list excludes \"Interstitial Coverage in floor trusses.\"",
            "Confirm which trade, if any, is providing interstitial fire protection coverage."
          ),
          item(
            "Includes heat trace for unacclimated areas & crossings",
            "needs_clarification",
            "Bid tracker marks this \"Y\" for Viking, but heat trace is not mentioned anywhere in Viking's own proposal document.",
            "Confirm this is genuinely included and get it added to a revised written proposal."
          ),
          item(
            "NFPA 13 @ apartments",
            "needs_clarification",
            "Bid tracker shows $1,100,300.00; Viking's own proposal prices \"7 four story apartment buildings\" at $1,275,300.00 - a ~$175,000 discrepancy.",
            "Reconcile which figure is current and correct before carrying a number to contract."
          ),
          item(
            "NFPA 13 @ clubhouse",
            "confirmed_included",
            "Bid tracker shows $51,800.00, matching Viking's own \"Clubhouse Dry system\" line item exactly.",
            ""
          ),
          item(
            "NFPA 13D @ townhomes",
            "confirmed_included",
            "Bid tracker shows $210,003.00, closely matching Viking's own \"7 town home buildings\" line item of $210,000.00.",
            ""
          ),
          item(
            "NFPA 13R @ Townhomes",
            "needs_clarification",
            "Bid tracker shows a separate line item at $15,897.00. Viking's own proposal only mentions \"NFPA 13D for townhomes\" and never references NFPA 13R.",
            "NFPA 13R and 13D are different sprinkler standards - confirm whether this is additive scope above the base 13D system or a code-path question, and get Viking to address it in a revised written proposal."
          ),
          item(
            "Clubhouse Tenting",
            "needs_clarification",
            "Bid tracker shows a GC plug figure of $10,000.00 (\"Y-Plug\") expecting this confirmed included, but Viking's Exclusions list excludes \"Tenting of CPVC Pipe\" outright with no clubhouse-specific carve-out.",
            "Direct conflict - resolve before contract. Same tenting gap pattern flagged on the insulation trade package."
          ),
        ],
      },
      {
        id: uid(),
        title: "Alternates",
        items: [
          item(
            "Fire pumps",
            "confirmed_excluded",
            "Excluded per Viking's proposal (\"Fire Pumps\" is the last item on the Not Included list). Bid tracker shows a $364,000.00 figure attributed to a different bidder for this alternate.",
            "If fire pumps are required for this project, price them from another source."
          ),
          item(
            "Fire Caulking",
            "confirmed_included",
            "$42,000.00 - exact match between Viking's own proposal (\"Fire Caulking for apartments and town homes ALT\") and the bid tracker.",
            ""
          ),
          item(
            "Dry system at attic of 4-story",
            "needs_clarification",
            "Bid tracker shows $280,000.00 for Viking, but Viking's proposal has no separate line item at this price - it only bundles \"dry systems in all 4 story apartment building (High areas only)\" into the base apartments price, while separately excluding \"Dry System in lower attic spaces.\"",
            "Confirm what this $280,000.00 alternate actually covers, and whether it's genuinely additive or already bundled into the base bid."
          ),
          item(
            "Dry system at the tall attic/5th level attic ceilings",
            "needs_clarification",
            "Bid tracker shows \"Y-Plug $100,000.00 - Not Included\" for Viking - reads as the GC's own placeholder estimate, not a firm quote from Viking.",
            "Get an actual firm number from Viking for this scope, or confirm it's genuinely not included and needs a different source."
          ),
        ],
      },
      {
        id: uid(),
        title: "Inclusions (per Viking Fire Protection Bid #0000042)",
        items: [
          item("Design", "confirmed_included"),
          item("Permits", "confirmed_included"),
          item("Labor", "confirmed_included"),
          item("Materials", "confirmed_included"),
          item("NFPA 13 for apartments", "confirmed_included", "", "See pricing discrepancy flagged in Scope Confirmation."),
          item("NFPA 13D for townhomes", "confirmed_included"),
          item("NFPA 13 for Clubhouse", "confirmed_included"),
          item("Fire Caulking", "confirmed_included", "", "Per the base Inclusions list; also separately priced as an Alternate at $42,000.00 - confirm these aren't double-counted."),
          item("Dry systems in all 4-story apartment buildings (high areas only)", "confirmed_included", "", "\"High areas only\" - confirm exactly what this excludes relative to the attic dry-system alternates."),
        ],
      },
      {
        id: uid(),
        title: "Exclusions (per Viking Fire Protection Bid #0000042)",
        items: [
          item("VS1 dry heads", "confirmed_excluded"),
          item("Interstitial coverage in floor trusses", "confirmed_excluded"),
          item("Insulation", "confirmed_excluded"),
          item("Soffits", "confirmed_excluded"),
          item("Concealed heads", "confirmed_excluded"),
          item(
            "Tenting of CPVC pipe",
            "needs_clarification",
            "",
            "See the Clubhouse Tenting conflict flagged in Scope Confirmation."
          ),
          item("Dry system in lower attic spaces in apartment buildings", "confirmed_excluded", "", "Confirm this doesn't conflict with the \"Dry system at attic of 4-story\" alternate."),
          item("Galvanized pipe on attic dry systems", "confirmed_excluded"),
          item("Dry systems in townhomes", "confirmed_excluded"),
          item("Wet system for clubhouse", "confirmed_excluded", "", "Consistent - clubhouse is fully a dry system per the Inclusions list."),
          item("Fire pumps", "confirmed_excluded", "", "See Alternates section."),
        ],
      },
    ],
  };
}

// Example checklist seeded from a real buyout scope discussion package:
// Alta Vista (Centennial, CO) - Electrical, EV Infrastructure & Low Voltage
// GC: Garrett Construction | Bidder: SCE (SCE Power Plus)
//
// SCE appears as a bidder across three separate bid-tab "entries" spanning
// two divisions: Division 26 Electrical (cost code 26-0500, where SCE is
// BID1), Division 26 EV Infrastructure (cost code 26-6000, listed as
// "SCE - infrastructure"), and Division 27 Communications/Low Voltage
// (cost code 27-0513 Cable/Phone Service, where SCE is BID2). No standalone
// SCE proposal letter was provided - all figures and scope notes below are
// sourced from the GC's own bid comparison trackers for these three cost
// codes, split into their own sections per the source entry.

function buildSceExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-07-07",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "SCE (SCE Power Plus)",
      trade: "26 0500 / 26 6000 / 27 0513 - Electrical, EV Infrastructure & Low Voltage",
      contact: "Jonathan Brannan",
      phone: "832-706-0194",
      email: "jbrannan@scepowerplus.com",
      amount: "Approx. $4,930,500.00 (Division 26 Electrical, per bid tracker Proposal Amount) + $52,000.00 (Division 26 EV Infrastructure) = ~$4,982,500.00 combined. SCE also bids Division 27 Cable/Phone Service (27-0513), but at least two of those line items are noted as already included in the Division 26 number - see Pricing and Cross-Division sections before treating any Division 27 figure as additive.",
    },
    generalNotes:
      "SCE shows up as three separate bid-tab entries: Division 26 Electrical Sub (26-0500, BID1), Division 26 EV " +
      "Infrastructure (26-6000, listed as \"SCE - infrastructure\"), and Division 27 Cable/Phone Service (27-0513, " +
      "BID2). No standalone SCE proposal letter was provided for this trade, unlike every other trade package built " +
      "so far - everything here is sourced from the GC's own bid trackers, so get an actual signed proposal/scope " +
      "letter from SCE for the file. PRIORITY: two Division 27 line items - \"Conduits from MDF to IDF throughout " +
      "the property\" and \"Site Telecom Plug\" - are explicitly annotated on the tracker as \"Included in DIV 26,\" " +
      "meaning their cost already sits inside SCE's Division 26 number rather than being additive under Division 27. " +
      "Get an itemized, single reconciled number from SCE across all three entries before carrying a combined total " +
      "to contract, so nothing gets double-counted or dropped. Also flag: SCE explicitly EXCLUDES primary conduit " +
      "furnish/install under Division 26 - that needs a separate source (likely the utility or a site utility " +
      "contractor). The Emergency Responder System (DAS) is excluded from SCE's Division 26 scope with a note to " +
      "\"See DIV 28\" - confirm it's being carried under Division 28 Electronic Safety & Security instead. Lighting " +
      "fixtures/material are sourced through a separate Division 26-5100 Light Fixtures bid (Lonestar/Integris/etc.) " +
      "- SCE's number only covers handling and installation labor. Finally, a large block of base Division 26 scope " +
      "items (panel/breaker/device rough-in, paddle switches, HVAC relays, unit heaters, smoke detectors, trash " +
      "compactor power, pool/spa bonding, and more) was left unconfirmed by every single bidder on the tracker, " +
      "including SCE - this isn't a gap specific to SCE, but it means none of it has actually been confirmed by " +
      "anyone and needs a direct written answer before award.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Combined total reconciled across all three entries",
            "needs_clarification",
            "Division 26 Electrical Proposal Amount ~$4,930,500.00 (tracker's adjusted/Prepared figure runs closer to $5,404,500.00) + Division 26 EV Infrastructure $52,000.00. Division 27 Cable/Phone Service total not clearly attributable from the tracker, and at least two of its line items are noted as already included in Division 26.",
            "Get a single itemized reconciliation from SCE covering all three entries before carrying a combined number to contract."
          ),
          item(
            "Correct sales tax percentage on materials only at 4% - Division 26 Electrical",
            "confirmed_included",
            "Marked plain \"Y\" for SCE on the Division 26 Electrical Sub tracker.",
            ""
          ),
          item(
            "Correct sales tax percentage on materials only at 4% - Division 27 Cable/Phone",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for SCE on the Division 27 tracker - inconsistent with their confirmed answer under Division 26.",
            ""
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $)",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for SCE on both the Division 26 and Division 27 trackers.",
            "Request rates for any add/change-order work across all three entries."
          ),
        ],
      },
      {
        id: uid(),
        title: "Division 26 - Electrical (per 26-0500 Electrical Sub bid tracker)",
        items: [
          item(
            "Includes secondary conduit & wire furnish and installed + grounding",
            "confirmed_included",
            "$166,850.00.",
            ""
          ),
          item(
            "Includes primary conduit furnish and installed",
            "confirmed_excluded",
            "Marked \"N - Excluded.\"",
            "Get this priced from another source - likely the utility (Xcel) or a site utility contractor."
          ),
          item(
            "Includes firestopping | provide deduct option",
            "confirmed_included",
            "Marked \"Y\" - included. No specific deduct-alternate dollar figure quoted by SCE.",
            "If the deduct option is being pursued, get a firm number from SCE."
          ),
          item(
            "Includes installation of unit lighting and site lighting",
            "confirmed_included",
            "$111,500.00, with a tracker note: \"Lonestar pref SCE.\"",
            "Fixtures/material are sourced via the separate Division 26-5100 Light Fixtures bid (Lonestar/Integris/etc.) - SCE's number covers installation labor only."
          ),
          item(
            "Excludes any lighting material (handling/install included)",
            "acknowledged",
            "",
            "Consistent with the above - lighting material is a separate procurement, not part of SCE's electrical scope."
          ),
          item(
            "Pathways for access control, telecom, AOR, fire alarm, etc. (ME 101)",
            "confirmed_included",
            "$189,585.00.",
            ""
          ),
          item(
            "Emergency Responder System (DAS) testing/pathways & backbone",
            "confirmed_excluded",
            "Marked \"N - See DIV 28.\"",
            "Confirm this is being carried under Division 28 Electronic Safety & Security instead."
          ),
          item(
            "CREEP Fault Current Limiters/Gear scope modifications - Xcel requirement",
            "confirmed_included",
            "$199,629.93.",
            "Utility (Xcel Energy) driven requirement - confirm this stays current if utility requirements change before construction."
          ),
          item(
            "EV scope (included in 26-6000)",
            "needs_clarification",
            "Marked \"Y? No Charging stations\" - i.e. EV-related work is priced elsewhere (cost code 26-6000) and charging stations themselves are not included.",
            "See the Division 26 - EV Infrastructure section below."
          ),
          item(
            "Site Telecom/data conduits (trenching, empty conduits/pull string, and backfill)",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for SCE. A separate \"Site Telecom - Allowance\" bidder also appears on this tracker.",
            "Confirm whether this is SCE's scope or covered by the separate allowance bidder."
          ),
          item(
            "Includes low voltage homerun wiring per service provider (e.g. RG6) IDF to unit",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for SCE. One competing bidder's row references \"DIV 27 - 604000\" for this same scope item.",
            "Confirm whether this sits under SCE's Division 26 entry or their Division 27 (Low Voltage) entry - don't let it fall through the gap between the two."
          ),
          item(
            "Parcel Pending power",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for SCE.",
            ""
          ),
          item(
            "Base rough-in scope left unconfirmed by every bidder on the tracker",
            "needs_clarification",
            "Every bidder, including SCE, left the following marked \"Y\\N\" (unconfirmed): unit/building panels, breakers, devices, wiring, trim plates; paddle switches; trenching/sleeving/boring; mechanical HVAC relay (Kidde SM120X or equivalent); unit and common area heaters (supply & install); unit smoke/CO detector combos; trash compactor power; access control gate conduit; lighted vanity mirrors; pool & spa bonding/equipment hook-up; exterior power pedestals; SOHO enclosure; USB outlets; door bell chime kit; temporary power & lighting; unit fan coil/hood shutdown relay; and occupancy-sensor/photovoltaic lighting controls.",
            "This isn't specific to SCE - nobody on the tracker confirmed this scope. Get explicit written confirmation from SCE on all of it before award, since none of it can be assumed included."
          ),
        ],
      },
      {
        id: uid(),
        title: "Division 26 - EV Infrastructure (per 26-6000 EV bid tracker)",
        items: [
          item(
            "EV infrastructure (rough-in J-boxes)",
            "confirmed_included",
            "$52,000.00. Tracker note: \"Included rough in J-boxes per plans. #40 in the building and corridors sections in base electrical. Count 33 [additional] locations.\"",
            ""
          ),
          item(
            "EV chargers (actual charging equipment/stations)",
            "confirmed_excluded",
            "Tracker note: \"chargers themselves excluded.\"",
            "Confirm who is furnishing/installing the actual charging equipment - likely owner-furnished or a separate EV-specialty bidder."
          ),
          item(
            "EV Ready (dedicated 240V branch circuit for a future charger)",
            "needs_clarification",
            "Other bidders on this tracker show figures of $37,800.00 and $48,000.00 for this scope; not clearly attributable to SCE from the tracker.",
            "Confirm directly with SCE whether EV Ready circuits are included in their $52,000.00 infrastructure number or priced separately."
          ),
        ],
      },
      {
        id: uid(),
        title: "Division 27 - Cable/Phone Service (per 27-0513 Low Voltage bid tracker)",
        items: [
          item("Take-off completed per plans", "needs_clarification", "Marked \"Y\\N\" (unconfirmed) for SCE.", ""),
          item(
            "Units (low-voltage rough-in per unit)",
            "needs_clarification",
            "Tracker shows dollar figures for this line, but attribution to SCE specifically isn't clear from the raw data.",
            "Get a firm, written per-unit number directly from SCE."
          ),
          item(
            "Fiber backbone",
            "needs_clarification",
            "Tracker shows a figure of approximately $320,312.00 that may correspond to SCE, but attribution is uncertain given the tracker's formatting.",
            "Confirm this figure directly with SCE in writing."
          ),
          item(
            "Commons plug",
            "needs_clarification",
            "\"Y-Plug $25,000.00\" - reads as the GC's own placeholder estimate, not SCE's firm quote.",
            "Get an actual number from SCE."
          ),
          item(
            "Conduits from MDF to IDF throughout the property",
            "confirmed_included",
            "\"Y - $97,100 - Included in DIV 26.\"",
            "Confirmed included, but the cost is already inside SCE's Division 26 number - not a separate additive charge here."
          ),
          item(
            "Site Telecom Plug",
            "needs_clarification",
            "\"Y-Plug $75,000 - Included in DIV 26\" - a GC plug figure noted as already bundled into Division 26.",
            "Get SCE's own written confirmation that this is genuinely already covered, rather than relying on the GC's plug note alone."
          ),
        ],
      },
      {
        id: uid(),
        title: "Cross-Division Coordination / Open Items",
        items: [
          item(
            "Double-counting risk between Division 26 and Division 27 entries",
            "needs_clarification",
            "Two Division 27 line items (Conduits from MDF to IDF, and Site Telecom Plug) are noted as already included in the Division 26 total.",
            "Get SCE to confirm, in writing, the full scope split across both divisions so nothing is paid for twice or missed."
          ),
          item(
            "Lighting fixture supply vs. installation split",
            "acknowledged",
            "",
            "Fixtures/material come from the separate Division 26-5100 Light Fixtures bid; SCE's Division 26 number covers handling and installation labor only."
          ),
          item(
            "DAS (Emergency Responder System) carried under Division 28",
            "acknowledged",
            "",
            "Confirm a Division 28 bidder is actually carrying this scope, since SCE explicitly excludes it from Division 26."
          ),
          item(
            "No standalone SCE proposal letter on file",
            "needs_clarification",
            "Unlike every other trade package reviewed on this project, no signed SCE proposal/scope letter was provided - only the GC's bid tracker entries.",
            "Request SCE's actual proposal document for the file before contract."
          ),
        ],
      },
    ],
  };
}

function buildPjdExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-06-04",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "Colorado Gypsum LLC (DBA Paul Johnson Drywall)",
      trade: "03 5319 / 03 5413 - Lightweight Concrete/Hardrock & Waterproofing + Gypcrete Underlayment",
      contact: "Brandon Hauswald",
      phone: "615-295-6699",
      email: "bhauswald@pauljohnsondrywall.com",
      amount: "$760,543.00 total before options (Gypsum $659,252.00 + Hardrock/Waterproofing $101,291.00), plus a $1,673.19 Textura fee = $762,216.19. Two priced options on top: +$224,020.00 for a 1-1/4\" GYP assembly alternate, and +$20,510.00 to add sealer (furnish only) to the gypcrete. Proposal dated 6/4/2026 (drawings dated 5/7/2026); the GC's bid tracker instead shows a $825,000.00/$855,000.00 figure sourced from an earlier 3/17/2026 submission - see Pricing section, this needs reconciling before carrying a number to contract.",
    },
    generalNotes:
      "Colorado Gypsum LLC does business as Paul Johnson Drywall (PJD) - the proposal and license are issued under the " +
      "Colorado Gypsum LLC name, so expect both names on contract documents. Their combo scope splits cleanly into two " +
      "cost codes on the GC's bid tracker: 03-5319 (Lightweight Concrete, which on PJD's own proposal is actually their " +
      "Hardrock & Waterproofing @ Balconies line) and 03-5413 (Gypcrete/Gypsum Underlayment). PRIORITY: the bid tracker's " +
      "Gypcrete pricing ($825,000.00 / $855,000.00) does not reconcile with the current signed proposal's gypsum total " +
      "of $659,252.00 - the tracker shows a 3/17/2026 submission date, well before this proposal's 6/4/2026 date, so it " +
      "is very likely carrying stale, superseded numbers. Get a current reconciled figure from PJD in writing before " +
      "using either number. Also flag: PJD's proposal explicitly bids Regular Weight concrete (~150 PCF) at the elevated " +
      "balconies and explicitly EXCLUDES True Lightweight Concrete (~115 PCF) - if the spec or plans call out lightweight " +
      "concrete by name, confirm that substitution is acceptable to the design team before award. The proposal also " +
      "excludes sheet-applied waterproofing entirely, yet the bid tracker carries a $25,000.00 placeholder (\"Y-Plug\") " +
      "for sheet waterproofing against PJD - that placeholder should not be relied on as PJD's actual number. On the " +
      "gypcrete side, sealer and the 1-1/4\" GYP assembly are both priced as adds/alternates, not base bid - confirm " +
      "which (if either) the GC intends to carry before finalizing scope. Finally, the bid tracker carries a clean, " +
      "attributable note tied to PJD's exact gypsum total: \"De-duct $94,590 from $659,252 if no gypcrete is required " +
      "on the townhomes\" - worth pursuing if townhome gypcrete scope is in question.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Gypsum (gypcrete) total, all building types",
            "needs_clarification",
            "Proposal: $659,252.00 (Bldg I $232,431 / IA $158,716 / II $120,130 / III $29,960 / IV $118,015). Bid tracker's \"Proposal Amount\" row instead shows $825,000.00, with a second row of $855,000.00, sourced from a 3/17/2026 submission.",
            "Reconcile the tracker's $825,000.00/$855,000.00 figures against the current 6/4/2026 proposal's $659,252.00 before carrying a number to contract - the tracker is very likely stale."
          ),
          item(
            "Hardrock & Waterproofing @ Balconies Over Conditioned Space total",
            "confirmed_included",
            "$101,291.00 (Bldg III $10,378 + Bldg IV $16,107... proposal totals this line at $101,291.00). Matches the bid tracker's 03-5319 category, where PJD's base Proposal Amount is listed as $101,291.00.",
            ""
          ),
          item(
            "Total before options (Gypsum + Hardrock/Waterproofing)",
            "confirmed_included",
            "$760,543.00, plus a $1,673.19 Textura (payment application) fee.",
            ""
          ),
          item(
            "Option: 1-1/4\" GYP w/ 1/4\" @ hard surfaces & 1-1/4\" GYP (no SCM) @ carpet areas, in lieu of base bid assembly",
            "needs_clarification",
            "ADD: $224,020.00 over base bid.",
            "Confirm whether the GC intends to carry this alternate assembly or the base bid assembly before award."
          ),
          item(
            "Option: furnish sealer (furnish only) at gypcrete",
            "confirmed_excluded",
            "Base bid excludes sealer/topcoat. ADD: $20,510.00 to furnish only (does not include install). Bid tracker confirms: PJD marked \"N\" with a note \"20,510.00 - By DIV 03,\" consistent with the proposal's priced add.",
            "Confirm who installs the sealer if this add is carried - PJD's option is furnish-only."
          ),
          item(
            "Correct sales tax percentage on materials only at 4% - Lightweight Concrete/Hardrock (03-5319)",
            "needs_clarification",
            "Marked \"Y?\" for PJD on the bid tracker.",
            ""
          ),
          item(
            "Correct sales tax percentage on materials only at 4% - Gypcrete (03-5413)",
            "confirmed_included",
            "Marked \"Y\" for PJD on the bid tracker. Proposal's Bid Includes list also states \"Sales Tax\" as included.",
            ""
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $) - both cost codes",
            "confirmed_included",
            "Marked \"Y\" for PJD on the Gypcrete tracker; marked blank/unconfirmed on the Lightweight Concrete tracker.",
            "Get written T&M rates covering the Hardrock/Waterproofing scope as well, not just Gypcrete."
          ),
          item(
            "Deduct if no gypcrete required on townhomes",
            "needs_clarification",
            "Bid tracker note: \"De-duct $94,590 from $659,252 if no gypcrete is required on the townhomes\" - the $659,252 reference matches PJD's exact proposal gypsum total, so this deduct is clearly attributable to PJD.",
            "Confirm with PJD in writing whether townhome gypcrete is required by the current plan set, and if not, execute this deduct."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - Hardrock & Waterproofing @ Balconies (03-5319 bid tracker / A0040 details)",
        items: [
          item(
            "Includes lightweight concrete at applicable balconies over occupied spaces",
            "needs_clarification",
            "Proposal bids Regular Weight concrete (~150 PCF), not True Lightweight Concrete (~115 PCF), which is explicitly excluded.",
            "If plans/specs call for lightweight concrete by name, confirm the regular-weight substitution is acceptable to the design team."
          ),
          item(
            "Includes lightweight concrete at breezeways",
            "needs_clarification",
            "Not addressed in the proposal's Bid Includes list; bid tracker row left unconfirmed for PJD.",
            "Confirm directly with PJD whether breezeways are included or need to be added."
          ),
          item(
            "Includes waterproofing at all exterior lightweight concrete installations",
            "needs_clarification",
            "Proposal includes waterproofing only at the specific A0040/1F4 balcony condition described below; general exterior waterproofing scope is not confirmed beyond that.",
            ""
          ),
          item(
            "A0040/1F4 - Balconies Over Conditioned Spaces: 2\" Average Regular Weight Concrete (~150 PCF) & 90mil waterproofing system, base flashing, drain mat, T-bar & drip edge",
            "confirmed_included",
            "Included per proposal - 62 elevated balconies over conditioned spaces, Bldgs III & IV, 2nd floor only. Marked \"Y - Regular Weight\" on the bid tracker.",
            ""
          ),
          item(
            "3\" polyethylene foam perimeter isolation",
            "confirmed_included",
            "Included, but only where sound mat is installed - not a blanket perimeter isolation scope.",
            ""
          ),
          item(
            "Sheet-applied waterproofing per A6030 detail 17/22",
            "confirmed_excluded",
            "Proposal's Bid Excludes list explicitly lists \"Sheet Applied waterproofing.\" Bid tracker nonetheless carries a \"Y-Plug $25,000.00\" placeholder against PJD for this line.",
            "The $25,000.00 on the tracker reads as a GC placeholder estimate, not PJD's number - treat sheet waterproofing as excluded and price it separately, or get PJD to confirm in writing if they will add it."
          ),
          item(
            "Hardrock, waterproofing and/or flashing at Balconies & Juliet (0F2 - composite decking)",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Confirm who is carrying this scope - a composite decking installer, not PJD."
          ),
          item(
            "Hot-applied waterproofing",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Sloping of concrete",
            "confirmed_excluded",
            "Explicitly excluded - proposal states framing must be sloped, not the concrete topping.",
            "Confirm framing scope carries the required slope before PJD's topping goes down."
          ),
          item(
            "Vertical or balcony fascia waterproofing",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Pre-molded drainage panel per A6030 detail 17/22",
            "needs_clarification",
            "Not addressed in the proposal's Bid Includes/Excludes lists; bid tracker row left unconfirmed for PJD.",
            "Get explicit written confirmation from PJD."
          ),
          item(
            "Extruded aluminum T-bar, fastened at 12\" OC w/ fasteners & bead of sealant, per A6030 detail 17/22",
            "needs_clarification",
            "Marked \"Y?\" for PJD on the bid tracker - referenced generally within the proposal's balcony assembly description (\"...Drain mat, T-Bar & Drip Edge...\") but not itemized to this fastening detail specifically.",
            ""
          ),
          item(
            "Flashing included - 26 GA sheet metal flashing w/ hemmed edge, per A6030 detail 17/22",
            "confirmed_included",
            "Marked \"Y - 4-EA\" for PJD on the bid tracker.",
            ""
          ),
          item(
            "Traffic coatings, transition strips, door pans at balcony closets",
            "confirmed_excluded",
            "All explicitly excluded per proposal.",
            ""
          ),
          item(
            "Scuppers / water testing patios/decks",
            "confirmed_excluded",
            "Both explicitly excluded per proposal.",
            ""
          ),
          item(
            "Z flashing",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Stair treads (precast) per A6060/11",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Mobilizations included",
            "confirmed_included",
            "4 mobs included for hardrock @ patios. Additional hardrock mobilization priced at $3,500.00 each if more are needed.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - Gypcrete / Gypsum Underlayment (03-5413 bid tracker / A0040 details)",
        items: [
          item(
            "3/4\" gypsum underlayment (2500 PSI) w/ 1/8\" sound mat at all unit areas except units over garages and townhomes (A0040/1F2, per email)",
            "confirmed_included",
            "Included per proposal. Marked \"Y\" for PJD on the bid tracker for the related 1/8\" sound mat / units-only scope statement.",
            ""
          ),
          item(
            "3/4\" gypsum underlayment at units over garages, townhomes L2 & L3, corridors and landings (A0040/1F3, per email)",
            "confirmed_included",
            "Included per proposal.",
            ""
          ),
          item(
            "3/4\" gypcrete at units and hallway",
            "confirmed_included",
            "Marked \"Y\" for PJD on the bid tracker.",
            ""
          ),
          item(
            "Sound mat directly over garages",
            "confirmed_excluded",
            "Explicitly excluded per proposal - consistent with the 1F2/1F3 split above (garage units get gypsum underlayment without the 1/8\" sound mat).",
            ""
          ),
          item(
            "Sound mat at townhomes",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Sound mat at tubs",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Excludes acoustical matting at locations with no living space below",
            "confirmed_excluded",
            "Marked \"Y\" for PJD on the bid tracker, confirming this exclusion applies.",
            ""
          ),
          item(
            "Furnish and installation of sealer",
            "confirmed_excluded",
            "Excluded from base bid; priced separately as a $20,510.00 furnish-only add (see Pricing section). Marked \"N - 20,510.00 - By DIV 03\" for PJD on the bid tracker.",
            ""
          ),
          item(
            "1-1/4\" sound mat - alternate assembly",
            "needs_clarification",
            "Tied to the proposal's priced alternate (\"1-1/4\\\" GYP w/ 1/4\\\" @ hard surfaces & 1-1/4\\\" GYP (no SCM) @ carpet areas ILO base bid assembly,\" ADD $224,020.00). Bid tracker's exact figure for PJD on this alternate line is not clearly legible/attributable.",
            "Confirm the $224,020.00 add price directly with PJD if this alternate assembly is being considered."
          ),
          item(
            "1/4\" sound mat - alternate",
            "needs_clarification",
            "Related to the same 1-1/4\" GYP alternate assembly above; bid tracker figure for PJD not clearly attributable.",
            "Confirm directly with PJD."
          ),
          item(
            "Includes mobilizations for pre-pours, tubs, showers, and party walls",
            "confirmed_included",
            "1 mob included for pre-pours; remaining pre-pours to be done with the unit pours. Bid tracker shows \"Y - 1-EA; remaining units\" for PJD, consistent with the proposal.",
            ""
          ),
          item(
            "Includes mobilizations for production pours",
            "needs_clarification",
            "Proposal states 22 total mobs for gyp @ units + corridors + landings. Bid tracker shows a figure that doesn't clearly reconcile to 22 for PJD's column.",
            "Confirm the 22-mob count in writing and get the per-mob or additional-mobilization rate confirmed ($2,500.00 additional gypcrete mobilization per the proposal)."
          ),
          item(
            "Material meets Specification PSI",
            "needs_clarification",
            "Bid tracker row left unconfirmed for PJD. Proposal states 2500 PSI gypsum underlayment.",
            "Confirm 2500 PSI is the correct spec requirement and that it's what's being provided project-wide, not just at the unit areas called out."
          ),
          item(
            "Includes acoustical matting at hard surfaces",
            "confirmed_included",
            "Marked \"Y\" for PJD on the bid tracker.",
            ""
          ),
          item(
            "Includes trimming of isolation strips prior to finish carpentry",
            "confirmed_excluded",
            "Proposal's Bid Excludes list states \"Independent mobilizations for trimming ISO strip\" - trimming itself may occur, but a separate mobilization to do it is not included.",
            "Confirm whether trimming is included as part of the standard install sequence or needs its own coordinated mobilization."
          ),
          item(
            "Takeoff completed per plans",
            "needs_clarification",
            "Bid tracker row left unconfirmed for PJD.",
            ""
          ),
          item(
            "Sloping of concrete / W.W.M. reinforcement at hardrock / reinforcement at gypsum",
            "confirmed_excluded",
            "All explicitly excluded per proposal - framing must be pre-sloped, and no wire mesh or reinforcement is included in either the hardrock or gypsum scope.",
            ""
          ),
          item(
            "Onsite water supply",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Confirm GC or another trade provides water supply to PJD's work areas."
          ),
          item(
            "Ramps in areas receiving gypcrete",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Metal combo pockets",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Painting/powdercoating T-bar",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Scrapping/cleaning floors prior to install (required by GC)",
            "confirmed_excluded",
            "Explicitly excluded per proposal, despite being noted as GC-required - meaning this needs a separate party to perform it before PJD mobilizes.",
            "Confirm who performs floor prep/cleaning ahead of PJD's crews."
          ),
          item(
            "Remove and/or replace damaged plywood prior to install",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Confirm framing/carpentry trade is responsible for subfloor repair ahead of PJD."
          ),
          item(
            "Protection of floors after install",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Confirm which trade protects finished gypcrete/hardrock from subsequent trades."
          ),
          item(
            "Reinforcement lath",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
          item(
            "Scrap haul off / scrapping to GC-supplied dumpsters",
            "confirmed_included",
            "Scrapping to GC-supplied dumpsters is included per proposal, but general \"scrap haul off\" is separately listed as excluded.",
            "Confirm GC dumpsters will be staged and serviced - PJD is not responsible for hauling scrap off site."
          ),
          item(
            "Out-of-sequence work",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Coordinate schedule carefully - re-mobilizations due to out-of-sequence work will be a change order."
          ),
          item(
            "Vapor barrier",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Cross-Trade / General Conditions",
        items: [
          item(
            "Pricing valid through",
            "acknowledged",
            "Material & labor pricing valid through 12/31/2026.",
            ""
          ),
          item(
            "Retention",
            "acknowledged",
            "10% retention on labor only, released per building, within 60 days of Certificate of Occupancy.",
            ""
          ),
          item(
            "Payment terms",
            "acknowledged",
            "Monthly progress payments. A separate Textura (payment application platform) fee of $1,673.19 applies.",
            ""
          ),
          item(
            "Insurance",
            "needs_clarification",
            "PJD carries $2MM excess/umbrella insurance. Proposal notes any coverage required above that limit will require additional cost, and excludes financial participation in an OCIP or WRAP insurance program.",
            "Confirm project insurance requirements against PJD's $2MM umbrella limit, and confirm whether the project carries an OCIP/WRAP that PJD would need to be added to at additional cost."
          ),
          item(
            "Payment or performance bonds",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Confirm whether bonding is required by contract and, if so, get a bond premium quote as an add."
          ),
          item(
            "Radiant flooring",
            "confirmed_excluded",
            "Explicitly excluded per proposal.",
            "Confirm whether the project includes radiant flooring in any units, and if so, who provides it."
          ),
        ],
      },
    ],
  };
}

function buildKgExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-05-15",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "KG Exterior Solutions, Inc.",
      trade: "07 4000 - Siding & Trim (labor/install only)",
      contact: "Eva M. Barraza, President",
      phone: "720.203.2537 / 720.334.9093",
      email: "exteriorsolutions@outlook.com (per bid tracker - address is truncated in the source, confirm exact spelling)",
      amount: "$803,832.00 for siding install (267,944 SF @ $3.00/SF), per the 07-4000 Siding & Trim bid tracker - matches KG's own proposal exactly. Tracker's second row adds a $25,000.00 caulking plug for $828,832.00 tracked on this cost code. KG's own signed proposal, however, totals $1,227,764.00 combined: Siding $803,832.00 + House Wrap $161,482.00 + Windows $177,700.00 + Patio Rails $84,750.00 - see Pricing section, roughly $424K of that combined proposal total is not reflected on the Siding & Trim bid tracker.",
    },
    generalNotes:
      "KG's proposal is explicit that this is a LABOR-ONLY installation contract: \"KG Exterior Solutions, Inc. will " +
      "provide labor only installation for fiber cement lap siding, fiber cement panel siding, soffits, fascia, " +
      "house wrap and windows. This includes fasteners, equipment, and primer.\" Materials themselves (siding panels, " +
      "flashing, house wrap material, window units, primer coverage beyond what's listed) are furnished by others " +
      "unless otherwise noted - keep this install-only framing in mind across every scope line below. PRIORITY: " +
      "KG's own proposal totals $1,227,764.00 (Siding + House Wrap + Windows + Patio Rails), but the 07-4000 Siding " +
      "& Trim bid tracker used to compare bidders only captures the $803,832.00/$828,832.00 siding figure - roughly " +
      "$423,932.00 of House Wrap, Windows, and Patio Rails scope from KG's own signed proposal doesn't appear on this " +
      "tracker at all. Confirm whether that scope is being awarded to KG under different cost codes (with its own " +
      "bid comparison) or whether it's redundant with other trades already carrying that scope - Patio Rails in " +
      "particular needs cross-checking against W Baker Steel's balcony/Juliet rail and guardrail scope so nothing is " +
      "priced twice. Also flag: the bid tracker's Notes row for this cost code just shows the number \"567975\" with " +
      "no label or context - unclear whether this is a PO number, an internal reference, or something else; confirm " +
      "what it refers to before relying on it. Finally, KG's proposal itself is unsigned/undated in the signature " +
      "block (no date filled in next to \"Date\") despite being typed 5/15/2026 at the top - get an executed copy on " +
      "file.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Siding install pricing reconciled",
            "confirmed_included",
            "267,944 SF (approx., all buildings) @ $3.00/SF = $803,832.00 - matches exactly between KG's proposal and the bid tracker's base Proposal Amount.",
            ""
          ),
          item(
            "Caulking between components and dissimilar materials",
            "needs_clarification",
            "Bid tracker: \"Y-Plug $25,000.00\" - reads as a GC placeholder estimate, not a firm KG quote. Not itemized separately in KG's own proposal.",
            "Get an actual number from KG, or confirm caulking is already folded into the $3.00/SF install rate."
          ),
          item(
            "House Wrap - all buildings",
            "needs_clarification",
            "$161,482.00 per KG's proposal. Not reflected on the 07-4000 Siding & Trim bid tracker at all.",
            "Confirm whether house wrap is being awarded to KG as part of this package or tracked/bid separately under a different cost code."
          ),
          item(
            "Windows - all buildings",
            "needs_clarification",
            "$177,700.00 per KG's proposal (install of window units - material furnished by others per the labor-only scope statement). Not reflected on the 07-4000 Siding & Trim bid tracker at all.",
            "Confirm whether window installation is being awarded to KG as part of this package or tracked/bid separately."
          ),
          item(
            "Patio Rails",
            "needs_clarification",
            "$84,750.00 per KG's proposal. Not reflected on the 07-4000 Siding & Trim bid tracker, and not mentioned anywhere else in KG's scope-of-work description (which only lists siding, soffits, fascia, house wrap, and windows).",
            "Cross-check against W Baker Steel's balcony rail, Juliet rail, and guardrail scope (Division 5 Metals) to confirm patio rails aren't being priced by two different trades."
          ),
          item(
            "Combined proposal total",
            "needs_clarification",
            "$1,227,764.00 (Siding $803,832.00 + House Wrap $161,482.00 + Windows $177,700.00 + Patio Rails $84,750.00).",
            "Get a single reconciled figure and confirm which line items are actually being carried to contract with KG before using this total."
          ),
          item(
            "Correct sales tax percentage on materials only at 4%",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG. KG's proposal doesn't address sales tax at all - consistent with being a labor-only contract, but worth confirming explicitly since a materials tax line could still apply to fasteners/primer.",
            ""
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $)",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG. No rate sheet included with the proposal.",
            "Request T&M rates for any add/change-order work."
          ),
          item(
            "Proposal signature/date",
            "needs_clarification",
            "Signature block lists \"Eva M. Barraza, President\" with a blank \"Date\" line, despite the proposal being typed 5/15/2026.",
            "Get a fully executed, dated copy of the proposal on file before contract."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - Siding, Trim & Flashing (per 07-4000 bid tracker)",
        items: [
          item(
            "Labor-only installation of fiber cement lap siding, fiber cement panel siding, soffits, and fascia",
            "confirmed_included",
            "\"KG Exterior Solutions, Inc. will provide labor only installation for fiber cement lap siding, fiber cement panel siding, soffits, fascia, house wrap and windows. This includes fasteners, equipment, and primer.\"",
            "Materials (siding panels, soffit/fascia material) are furnished by others - confirm the material supplier/procurement path is separately covered."
          ),
          item(
            "Take-off completed per plans",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG.",
            ""
          ),
          item(
            "Includes exterior trim for doors, windows, accents",
            "confirmed_included",
            "Marked \"Y - Install ONLY\" for KG on the bid tracker - consistent with the proposal's labor-only framing.",
            "Confirm trim material is furnished by others, not KG."
          ),
          item(
            "Includes materials/metal flashing/flashing for fascia, rake, soffit",
            "confirmed_excluded",
            "Bid tracker row left blank/unconfirmed for KG, but KG's proposal is explicit this is a labor-only contract - flashing material would fall outside that unless separately called out.",
            "Confirm who furnishes flashing material for fascia, rake, and soffit conditions, since KG's own scope statement doesn't list flashing material as included."
          ),
          item(
            "Includes caulking between components and dissimilar materials",
            "needs_clarification",
            "See Pricing section - \"Y-Plug $25,000.00\" is a GC placeholder, not a confirmed KG number.",
            ""
          ),
          item(
            "Includes metal flashing for base, windows, & doors",
            "needs_clarification",
            "Marked \"Y?\" for KG on the bid tracker - not affirmatively confirmed.",
            "Confirm whether this is furnish-and-install or install-only, consistent with the labor-only scope elsewhere."
          ),
          item(
            "Includes complete system as detailed on plans (lap, panel, board & batten, etc.)",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG. Proposal only specifically names \"fiber cement lap siding, fiber cement panel siding\" - board & batten or other system types aren't explicitly addressed.",
            "Confirm every siding system type shown on the elevations (not just lap and panel) is covered by KG's install pricing."
          ),
          item(
            "Preferred materials \"ready for paint\"",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG. Proposal includes primer as part of KG's labor-only scope, which may address this.",
            "Confirm whether primer application satisfies the \"ready for paint\" requirement or whether factory-primed/prefinished material is still expected."
          ),
          item(
            "Includes mock-up material and labor",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG. Mock-up material would fall outside a labor-only contract unless separately addressed.",
            "Confirm who furnishes mock-up material, and that KG's labor for the mock-up install is included at no extra charge."
          ),
          item(
            "Includes fasteners, equipment, and primer",
            "confirmed_included",
            "Explicitly stated in KG's proposal scope-of-work paragraph.",
            ""
          ),
          item(
            "Alternate - Blue Horseshoe Framing, 6% markup",
            "acknowledged",
            "Marked \"n/a\" for KG on the bid tracker.",
            "Confirm this alternate genuinely doesn't apply to KG's scope rather than being an overlooked line."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Creep / Amenity Items (per bid tracker)",
        items: [
          item(
            "Prefinished materials",
            "needs_clarification",
            "Bid tracker row left unconfirmed for KG.",
            ""
          ),
          item(
            "Fiber cement siding at back of outdoor kitchen wall / faux wood at barbeque area",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for KG on the bid tracker.",
            "Confirm whether this amenity-area siding/faux wood work is included in KG's $3.00/SF rate or needs separate pricing."
          ),
          item(
            "Decorative metal panel - spa accent wall, fireplace, kitchen accent wall (see LC.B)",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for KG. This is a metal panel scope, not fiber cement siding - may not belong to KG at all.",
            "Confirm whether this is KG's scope or W Baker Steel's (who separately prices steel at the spa accent wall and outdoor kitchen) - avoid a gap or double-award between the two."
          ),
          item(
            "Stucco panel siding",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for KG. Not a material type mentioned in KG's proposal, which only lists fiber cement lap and panel siding.",
            "Confirm whether stucco panel siding exists on this project and, if so, whether it's KG's scope or a separate stucco subcontractor's."
          ),
          item(
            "Primer for cut ends at PK2 - cost per Matt Anderson on 9/14",
            "needs_clarification",
            "Marked \"Y\\N\" (unconfirmed) for KG, with a note referencing a cost conversation with \"Matt Anderson\" on 9/14 that isn't otherwise documented here.",
            "Get the actual cost/resolution from that 9/14 conversation with Matt Anderson in writing."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - House Wrap, Windows & Patio Rails (per KG Proposal - not on the Siding & Trim bid tracker)",
        items: [
          item(
            "House wrap installation, all buildings",
            "needs_clarification",
            "$161,482.00. Included in KG's proposal scope-of-work paragraph (\"...house wrap and windows...\") and its pricing, but not itemized or compared on the 07-4000 Siding & Trim bid tracker.",
            "Confirm this cost code/comparison exists elsewhere, or get it added to the Siding & Trim tracker so it's properly competitively reviewed."
          ),
          item(
            "Window installation, all buildings",
            "needs_clarification",
            "$177,700.00. Included in KG's proposal scope-of-work paragraph and pricing, but not itemized or compared on the 07-4000 Siding & Trim bid tracker.",
            "Confirm window units themselves are furnished by others (consistent with the labor-only framing) and that this figure is installation labor only."
          ),
          item(
            "Patio rails",
            "needs_clarification",
            "$84,750.00. Priced in KG's proposal total, but never mentioned in the scope-of-work paragraph (which only lists siding, soffits, fascia, house wrap, and windows) and not on the Siding & Trim bid tracker.",
            "This looks like it may not actually be KG's trade - get written confirmation of exactly what \"Patio Rails\" covers and cross-check against W Baker Steel's metals scope before treating this as additive."
          ),
        ],
      },
    ],
  };
}

function buildBfsExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-06-08",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "Builders FirstSource (BFS Group LLC)",
      trade: "06 1753 - Wood Trusses & EWP (Roof/Floor Trusses, Beams)",
      contact: "Ronnie Snow, National Multi Family Truss Sales",
      phone: "(936) 581-5972",
      email: "ronnie.snow@bldr.com",
      amount: "$2,164,838.92 total ($2,027,952.15 delivered to job site + $136,886.77 Sales Tax at 6.750%), per BFS's signed 6/8/2026 proposal (AW# 5453030, Bid# 5453043) for \"Cityview - Alta Vista\" - 446 units, 16 structures, 552,132 SF, matching the project exactly. PRIORITY: BFS applied the full 6.750% combined sales tax rate to the entire delivered price, but the project's own Invitation to Bid instructs bidders to include only 4.00% sales tax (the remaining 2.75% is paid separately by development) - see Pricing section, this is roughly $55,768.68 overstated as submitted.",
    },
    generalNotes:
      "REVISED with BFS's correct, current, Alta-Vista-specific proposal (AW# 5453030, dated 6/8/2026, forwarded by " +
      "Ronnie Snow with subject \"RE: [External] Alta Vista | Centennial, Colorado - 446 Units - ITB\") - this replaces " +
      "the earlier checklist, which was built on a proposal for an unrelated project (\"Garrett Parker II\") sent in " +
      "error. This new proposal checks out as genuinely Alta Vista's: 446 units, 16 structures, and the (3) Type I / " +
      "(2) Type IA / (2) Type II / (2) Type III / (5) Type IV / Club / Maintenance building breakdown all match the " +
      "project, and the proposal date (6/8/2026) matches the bid tracker's Date Submitted exactly. PRIORITY: the " +
      "Alta Vista ITB explicitly instructs \"All bids are to include 4.00% sales tax (please note the remaining 2.75% " +
      "sales tax will be paid by development)\" - BFS instead applied the full 6.750% rate to the entire " +
      "$2,027,952.15 delivered price ($136,886.77), rather than 4% ($81,118.09) - an overstatement of roughly " +
      "$55,768.68. BFS's own proposal even flags \"Customer to verify applicable tax rate\" as a qualification, so " +
      "this should be an easy, uncontroversial correction. Several items flagged as open/conflicting on the prior " +
      "checklist are now resolved by this real proposal: EWP beams and columns are firm, itemized BASE BID scope " +
      "(not an alternate, and not excluded/\"in loose\" as the bid tracker's master scope statement had suggested) - " +
      "Flush EWP $124,628.02 + Dropped EWP $56,491.51; the fire-barrier-wall truss bearing question is answered with " +
      "a real distinction - floor trusses include \"firewall hangers or top-chord bearing... at fire-barriers " +
      "(1,6/SD2-2),\" while roof trusses explicitly EXCLUDE firewall hangers and hold-down hardware; the roof pitch " +
      "(0.25/12) matches the bid tracker's \"structural sloping of the roof at 1/4\"/12\" item exactly; and BFS's " +
      "correct phone number is confirmed as (936) 581-5972 - the bid tracker's \"336-581-5374\" was very likely an " +
      "OCR/data-entry error. Still open: the bid tracker's own dollar figures for this cost code ($1,846,832.63 / " +
      "$1,320,705.34 base rows, $2,262,080.00 category total) still don't cleanly reconcile against this proposal's " +
      "actual $2,027,952.15 (pre-tax) or $2,164,838.92 (as-quoted) - the tracker needs updating to this current " +
      "proposal. Also: roof truss blocking is explicitly NOT included (\"not shown\"), while floor truss blocking IS " +
      "included at interior shearwalls - confirm this asymmetry is intentional and get roof blocking priced from " +
      "elsewhere if it's actually needed. Cricket framing and 2x conventional balcony framing (non-conditioned space) " +
      "are both excluded - confirm who carries those. The VE option qualification (EWP beams/columns not meeting " +
      "plan-stated values are subject to EOR approval, with the customer bearing any cost difference if not approved) " +
      "is a real risk item worth flagging to the design team. Finally, this proposal's validity (\"Bid is valid for " +
      "30 Days\") expired 7/8/2026, well before today - get current, re-confirmed pricing before issuing a " +
      "subcontract, and wood species (Douglas Fir vs. Southern Yellow Pine) is still not specified by name (only " +
      "\"min #2 Chords, #3 Webs or better\").",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Correct sales tax percentage on materials only at 4%",
            "needs_clarification",
            "BFS applied 6.750% Sales Tax to the entire $2,027,952.15 delivered price = $136,886.77, for a $2,164,838.92 total.",
            "The Alta Vista ITB explicitly caps bidder-included sales tax at 4.00% (\"the remaining 2.75% sales tax will be paid by development\"). At 4%, tax should be $81,118.09, not $136,886.77 - a ~$55,768.68 overstatement. BFS's own proposal flags \"Customer to verify applicable tax rate\" - get this corrected before contract."
          ),
          item(
            "Roof Trusses total",
            "confirmed_included",
            "$691,165.02, per the 6/8/2026 proposal - itemized with loading, deflection, spacing, and pitch criteria.",
            ""
          ),
          item(
            "Floor Trusses total",
            "confirmed_included",
            "$1,155,667.61, per the 6/8/2026 proposal - itemized with loading, deflection, and depth/spacing criteria.",
            ""
          ),
          item(
            "EWP Beams total (Flush + Dropped)",
            "confirmed_included",
            "Flush EWP Beams $124,628.02 + Dropped EWP Beams $56,491.51 = $181,119.53, priced directly in the base delivered total - not an alternate.",
            "Resolves the prior conflict between the bid tracker's \"Excludes EWP (Included in Loose)\" scope row and its separate \"EWP Included as an alternate\" line - EWP is firm base-bid scope per BFS's actual proposal."
          ),
          item(
            "Total delivered to job site (pre-tax) reconciled against bid tracker",
            "needs_clarification",
            "Proposal: $2,027,952.15 pre-tax. Bid tracker's Proposal Amount rows show $1,846,832.63 and $1,320,705.34; the tracker's category TOTAL shows $2,262,080.00. None of these three tracker figures match the current proposal's pre-tax total.",
            "Update the bid tracker to reflect this current, signed proposal - the gap is smaller than before (when the tracker was being compared against a mismatched project) but still needs reconciling."
          ),
          item(
            "Proposal pricing validity",
            "needs_clarification",
            "\"Bid is valid for 30 Days and expires after 6/8/2027\" - wait, read literally the proposal states validity expires 7/8/2026 (30 days from the 6/8/2026 proposal date), while \"6/8/2027\" appears as the separate \"price based on delivery on or before\" date.",
            "This 30-day validity window has expired - get current, re-confirmed pricing from BFS before issuing a subcontract."
          ),
          item(
            "Provide T&M rates (hourly labor $; equipment $; material $)",
            "needs_clarification",
            "Not addressed anywhere in BFS's proposal.",
            "Request T&M rates for any add/change-order work, consistent with other trades on this project."
          ),
          item(
            "VE Option risk - EWP beams/columns not meeting plan-stated values",
            "needs_clarification",
            "\"VE Option EWP Beams and Columns do not meet plan stated values are subject to EOR approval. Customer will incur cost difference if EOR does not approve.\"",
            "Flag to the design team/EOR before relying on VE substitutions - Garrett bears the cost risk if the EOR rejects them."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - Roof Trusses (per BFS Proposal)",
        items: [
          item(
            "Loading: Roof 40psf, Mech Roof 80psf, Amenity 45psf, Roof Snow 28psf, Wind 107mph",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            "Resolves the bid tracker's \"Roof Trusses rated wind exposure rating per structural drawings\" item - 107mph is the stated design wind speed."
          ),
          item(
            "Deflection: Live Load L/240 (0.75\"), Total Load L/180 (Absolute 1\")",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Roof truss spacing and pitch: 24\" oc, 0.25/12 (1/4\":12)",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            "Matches the bid tracker's \"Included structural sloping of the roof at 1/4\"/12\" item exactly."
          ),
          item(
            "Truss-to-truss and truss-to-beam connections included",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Firewall hangers and hold-down hardware",
            "confirmed_excluded",
            "\"Firewall hangers and hold down hardware are not included\" - explicit exclusion for roof trusses specifically.",
            "Contrast with floor trusses, where firewall hangers/top-chord bearing ARE included - confirm who furnishes firewall hangers at the roof level if required by the fire-barrier-wall design."
          ),
          item(
            "Parapets, parapet jacks, horizontal projections, and tower framing",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Gable trusses at endwalls and draftstops, studded 24\" oc",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Truss/shear blocks",
            "confirmed_excluded",
            "\"Truss/shear blocks not included (not shown).\" Drag trusses at parallel shearwalls ARE included.",
            "Confirm this exclusion is intentional and, if roof-level shear blocking is required, get it priced from BFS or another source. Contrast with floor trusses, where truss/shear blocks are included."
          ),
          item(
            "Cricket framing",
            "confirmed_excluded",
            "\"Cricket framing is not included.\"",
            "Confirm who provides roof cricket framing."
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - Floor Trusses (per BFS Proposal)",
        items: [
          item(
            "Loading: Unit 74psf, Balcony 98psf, Corridor 74psf, Public 134psf, Stair 139psf",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Deflection: Live Load L/480 (0.5\"), Total Load L/240 (Absolute 0.875\")",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Depth & spacing per area: Unit 18\"/24\" D @ 24\"/16\"/12\" oc, Balcony 15\" D @ 24\" oc, Corridor/Public/Stair 18\" D @ 24\" oc",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Truss-to-truss and truss-to-beam connections included",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Firewall hangers or top-chord bearing at fire-barriers (1,6/SD2-2)",
            "confirmed_included",
            "\"Firewall hangers or top-chord bearing included at fire-barriers (1,6/SD2-2).\"",
            "Resolves the bid tracker's prior \"Firewall Hangers ???\" and \"Top cord bearing truss condition ILO Fire Wall Hangers (SD2-2)\" open questions - both approaches are available and covered at the floor-truss fire-barrier condition. Roof trusses explicitly exclude this - see Roof Trusses section."
          ),
          item(
            "Continuous bearing trusses matching wall width; 4x studs at balconies (7/SD2-1)",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
          item(
            "Truss/shear blocks at interior shearwalls, per shearwall schedule; drag trusses at parallel shearwalls",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            "Contrast with roof trusses, where truss/shear blocks are explicitly excluded."
          ),
          item(
            "2x4 sloping top-chord balcony trusses, conditioned space only",
            "confirmed_included",
            "\"2x4 Sloping top-chord balcony trusses included over conditioned space only. 2x balcony framing is not included.\"",
            "Confirm who frames balconies over non-conditioned space, since that condition is explicitly excluded."
          ),
          item(
            "24\" deep trusses over HC garages; triple top-chords at cantilevered balcony joists (8/SD2-2)",
            "confirmed_included",
            "Per the 6/8/2026 proposal.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope - EWP Beams & Columns (per BFS Proposal)",
        items: [
          item(
            "Flush EWP beams as shown (labeled) on framing plans",
            "confirmed_included",
            "$124,628.02.",
            ""
          ),
          item(
            "Dropped EWP beams as shown (labeled) on framing plans",
            "confirmed_included",
            "$56,491.51.",
            ""
          ),
          item(
            "EWP columns per plan",
            "confirmed_included",
            "Included per the 6/8/2026 proposal; no separate line-item price shown (folded into the beam pricing).",
            ""
          ),
          item(
            "Hangers supporting BFS-supplied material",
            "confirmed_included",
            "\"Hangers supporting BFS supplied material are included (if required).\" Beam-to-beam hangers provided for BFS-supplied beams only, if noted.",
            ""
          ),
          item(
            "VE Option substitution risk",
            "needs_clarification",
            "\"VE Option EWP Beams and Columns do not meet plan stated values are subject to EOR approval. Customer will incur cost difference if EOR does not approve.\"",
            "See Pricing section - flag to the design team before relying on any VE-substituted beam/column sizing."
          ),
        ],
      },
      {
        id: uid(),
        title: "Cross-Reference / Open Items",
        items: [
          item(
            "Bid tracker figures need updating to this current proposal",
            "needs_clarification",
            "",
            "The 06-1753 Wood Trusses bid tracker's dollar figures for BFS ($1,846,832.63 / $1,320,705.34 / $2,262,080.00 category total) don't match this signed proposal's $2,027,952.15 pre-tax total - get the tracker updated."
          ),
          item(
            "Collation adder",
            "needs_clarification",
            "Listed as a distinct line on the master bid tracker scope statement; not addressed anywhere in BFS's signed proposal.",
            "Confirm whether a truss collation adder applies to BFS's pricing."
          ),
          item(
            "Wood species: Douglas Fir or Southern Yellow Pine",
            "needs_clarification",
            "BFS's proposal only specifies \"min #2 Chords, #3 Webs or better\" - it does not name a species. At least one competing bidder's tracker column specified Douglas Fir.",
            "Confirm the actual species directly with BFS - it affects allowable spans and design values."
          ),
          item(
            "Building type count cross-check",
            "acknowledged",
            "BFS: (3) Type I, (2) Type IA, (2) Type II, (2) Type III, (5) Type IV, Club, Maintenance = 16 structures, matching the proposal's own \"Total Structures: 16.\" RCC's building-concrete proposal (reviewed separately) listed only (1) Type III rather than (2).",
            "Minor cross-trade discrepancy on Type III count (1 vs. 2) - worth a quick check against the current building count/plan set, though not specific to BFS's scope."
          ),
          item(
            "BFS contact information confirmed",
            "confirmed_included",
            "(936) 581-5972 / ronnie.snow@bldr.com, consistent across this proposal, the earlier (mismatched-project) proposal, and BFS's email signature.",
            "Resolves the earlier flag that the bid tracker's \"336-581-5374\" didn't match - that tracker entry was very likely an OCR/data-entry error."
          ),
        ],
      },
    ],
  };
}


function buildKoneExampleChecklist() {
  const now = new Date().toISOString();

  const item = (text, status, bidderResponse, notes) => ({
    id: uid(),
    text,
    status,
    bidderResponse: bidderResponse || "",
    notes: notes || "",
  });

  return {
    id: uid(),
    createdAt: now,
    updatedAt: now,
    project: {
      name: "Alta Vista",
      location: "Centennial, CO",
      jobNo: "RC26015",
      date: "2026-07-07",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "Nathan Orfanedes, Preconstruction Manager",
      phone: "O: 317.886.7923 / M: 303.827.5515",
      email: "norfanedes@thegarrettco.com",
    },
    bidder: {
      company: "KONE Inc.",
      trade: "14 2100 - Elevators (7 Traction Passenger Elevators)",
      contact: "Karen Waite, New Construction Sales Consultant",
      phone: "303-874-8429",
      email: "karen.waite@kone.com",
      amount: "$924,000.00 total (7 elevators @ $132,000.00 each), net including 4% CO sales tax, per KONE's REVISED \"CityView-Alta Vista\" proposal (Proposal No. T-0009742562, Rev 1 dated 7/7/2026) - down from $936,250.00 ($133,750.00/elevator) on the original 6/2/2026 version. This revised total now matches the bid tracker's base Proposal Amount row exactly. The tracker's second row ($924,700.00) and category TOTAL ($991,000.00) still don't reconcile - see Pricing section. REV1 also adds a quantified tariff exposure: KONE states that if the elevators shipped as of 7/7/2026, an additional $6,030.00/elevator ($42,210.00 total) in tariffs would apply on top of the price above.",
    },
    generalNotes:
      "REVISED to KONE's Rev 1 proposal (dated 7/7/2026, same Proposal No. T-0009742562), which lowered the price " +
      "from $133,750.00/elevator ($936,250.00 total) to $132,000.00/elevator ($924,000.00 total) - a $12,250.00 " +
      "reduction with no accompanying explanation letter and, as far as can be told, no scope change driving it. " +
      "This revision resolves the earlier pricing-reconciliation flag: the new $924,000.00 total now matches the " +
      "bid tracker's base Proposal Amount row exactly (the tracker's second figure, $924,700.00, and its separate " +
      "$991,000.00 category TOTAL still don't reconcile - lower priority). REV1 also adds a new, quantified tariff " +
      "disclosure not present in the original: \"if the elevators were to ship today (7/7/2026) an additional " +
      "$6,030.00 per elevator in tariffs would be applied for a total of $42,210.00\" - budget for this as a real, " +
      "near-term exposure rather than the original's generic tariff-risk language. One scope item was also quietly " +
      "removed between versions: \"Protection pads\" changed from \"KONE standard pads and hooks included\" (original) " +
      "to \"Not included\" (REV1) - confirm this was intentional and, if pads are still needed for move-in/construction " +
      "protection, get them priced. PRIORITY (carried over, unchanged in REV1): KONE's proposal explicitly substitutes " +
      "150 fpm car speed \"in lieu of 200fpm,\" noting the KONE MonoSpace 300 model \"is similar to BOD Schindler 3300 " +
      "which only allows for maximum speed of 150fpm\" - the master scope statement's own wording (\"Rated Speed: " +
      "150 fpm, ALTERNATE FOR 200 fpm - 14 2100 - 3 states 200 fpm\") confirms 200 fpm is what the spec/basis-of-design " +
      "actually calls for. This is a real functional deviation and needs design-team sign-off before award. Related: " +
      "the bid tracker marks \"Bid is per spec 14-21-00 Electric Traction Elevators\" as \"N - $50,000.00 - Excluding\" " +
      "for KONE - get written clarification on what that $50,000 figure represents and whether the KONE MonoSpace 300 " +
      "DX substitution is an acceptable or-equal. KONE also proposes stainless steel 441 in lieu of 304, and 12 months " +
      "of manufacturer warranty specifically because \"KONE manufacturer warranty of 24 months is not available\" - if " +
      "24 months was expected, flag this gap to ownership. This REV1 proposal's own 30-day validity window (from " +
      "7/7/2026) has also since expired - get current, re-confirmed pricing before issuing a subcontract. Given the " +
      "project's extended schedule (construction runs into 2029 per the original ITB), watch Alternate No. 1 (2029 " +
      "installation labor rate escalation, +$1,350/elevator) and the temporary construction use / operator time " +
      "exclusions closely, since both are highly likely to come into play on a multi-year, phased job. Finally, KONE " +
      "requires the hoistway width reduced to a maximum of 8'-8\" and 13'-2\" clear overhead (inclusive of KONE's own " +
      "8\" fixed hoistbeam) - confirm this is achievable against Drawing A3130 and the current framing/structural " +
      "design, and confirm the Integrated Control System's 8.65\" minimum wall depth requirement at the top floor " +
      "entrance is accommodated.",
    sections: [
      {
        id: uid(),
        title: "Pricing",
        items: [
          item(
            "Total price reconciled against bid tracker",
            "confirmed_included",
            "REV1 proposal (dated 7/7/2026): $924,000.00 (7 elevators @ $132,000.00, net including 4% CO tax) - down from the original 6/2/2026 proposal's $936,250.00. This REV1 total matches the bid tracker's base Proposal Amount row for KONE exactly.",
            "Resolved for the base row. The tracker's second figure ($924,700.00) and its separate category TOTAL ($991,000.00) still don't reconcile - get those explained, but this is now a lower-priority cleanup item rather than a base-price discrepancy."
          ),
          item(
            "Correct sales tax percentage on materials only at 4%",
            "confirmed_included",
            "REV1 proposal states \"Total Sales Price, net including 4% CO TAX: $924,000.00\" directly.",
            ""
          ),
          item(
            "Hoist beam amounts included",
            "needs_clarification",
            "Bid tracker shows \"Y $(16,800.00)\" for KONE - a negative/credit figure whose basis isn't explained in the proposal itself (the proposal states the hoist beam and safety beam are furnished by KONE and cut to size per approved layout drawings, with no separate credit called out).",
            "Get KONE to explain what the $(16,800.00) figure represents before relying on it."
          ),
          item(
            "Cart Operation, Fire Caulking, Grout, etc.",
            "needs_clarification",
            "Bid tracker shows \"Plug $17,500.00\" for KONE - reads as a GC placeholder estimate, not a KONE quote. KONE's proposal states no additional time or cost is included for coordination with life safety, security, or other trades.",
            "Get an actual number from KONE if this scope belongs to them, or confirm it's carried by another trade/allowance."
          ),
          item(
            "Proposal pricing validity",
            "needs_clarification",
            "\"This Proposal is valid for 30 days\" from the REV1 proposal date of 7/7/2026.",
            "This window has since expired - get current, re-confirmed pricing from KONE before issuing a subcontract."
          ),
          item(
            "Tariff exclusion / price adjustment risk",
            "needs_clarification",
            "REV1 quantifies this for the first time: \"If the elevators were to ship today (7/7/2026) an additional $6,030.00 per elevator in tariffs would be applied for a total of $42,210.00.\" The proposal separately states \"KONE shall be entitled to an equitable adjustment in the Price... resulting from any change in law... or any increase in duties or tariffs on imported materials.\"",
            "This is now a concrete, near-term number rather than an open-ended risk - confirm whether Garrett wants to carry the $42,210.00 (or an updated figure as of actual ship date) as a contingency allowance."
          ),
          item(
            "Payment terms",
            "acknowledged",
            "30% Engineering & Site Management, 50% Material, 20% Installation. Payment due 30 days net from KONE's electronic invoice date.",
            ""
          ),
        ],
      },
      {
        id: uid(),
        title: "Scope Confirmation (per 14-2100 Elevators bid tracker)",
        items: [
          item(
            "Design-Build contract to furnish design, installation, and commissioning",
            "confirmed_included",
            "\"The KONE solution includes design, manufacturing, supply and installation of the following...\"",
            ""
          ),
          item(
            "Includes fire-rated belts",
            "needs_clarification",
            "Not addressed anywhere in KONE's proposal.",
            "Confirm with KONE whether fire-rated belts are included or need to be added."
          ),
          item(
            "Includes furnish and install elevator pit ladders",
            "needs_clarification",
            "Bid tracker row present; KONE's specific answer isn't clearly attributable from the source table, and pit ladders aren't mentioned in the proposal.",
            "Get explicit written confirmation from KONE."
          ),
          item(
            "Includes current and upcoming code changes",
            "needs_clarification",
            "Not explicitly addressed in the proposal beyond the stated regulation baseline (ASME A17.1-2022).",
            "Confirm KONE's responsibility for code changes that occur between now and installation, given the multi-year project schedule."
          ),
          item(
            "Includes all labor rate for 24 months from bid",
            "confirmed_included",
            "\"Through 2028 ONLY\" per the bid tracker. Matches the proposal directly: price is based on KONE completing its work by 12/31/2028, with 2028 installation labor rates included in the project total.",
            "See Alternates - if installation slips into 2029, a $1,350.00/elevator labor rate escalation applies."
          ),
          item(
            "Verified building power matches proposed elevation",
            "needs_clarification",
            "Bid tracker marks this \"?\" for KONE. Proposal specifies 208V/60Hz power supply for machinery at every building.",
            "Confirm the actual building electrical design matches 208V/60Hz before proceeding."
          ),
          item(
            "As-equal for the basis of design - verify with Division 14 specification",
            "needs_clarification",
            "Not affirmatively confirmed on the tracker. KONE's proposal itself flags several deviations from what reads as the base spec: 150 fpm in lieu of 200 fpm, stainless steel 441 in lieu of 304, and integrated control system requiring a minimum 8.65\" wall depth at the top floor entrance.",
            "This needs a formal as-equal/substitution review by the design team given the number of flagged deviations - don't treat this as a simple checkbox."
          ),
          item(
            "Elevator type: geared traction with no machine room",
            "needs_clarification",
            "KONE proposes the KONE MonoSpace 300 DX, a machine-room-less (MRL) traction elevator - satisfies the \"no machine room\" requirement, but MonoSpace models typically use a gearless (not geared) hoisting machine.",
            "Confirm with KONE whether \"geared\" vs. \"gearless\" traction matters to the spec intent (e.g. for future serviceability/parts) before treating this as a like-for-like match."
          ),
          item(
            "Rated load: 3,500 lbs",
            "confirmed_included",
            "\"Y - 3500 Included\" on the bid tracker. Matches the proposal's Capacity/Speed spec for all 7 elevators.",
            ""
          ),
          item(
            "Rated speed: 150 fpm (alternate for 200 fpm per 14 2100-3, states 200 fpm)",
            "confirmed_excluded",
            "\"Y - 150 FPM Included\" on the bid tracker, but this itself is the deviation - KONE's proposal explicitly states \"150 fpm has been proposed in lieu of 200fpm... KONE Monospace 300 product model... only allows for maximum speed of 150fpm.\"",
            "The master scope statement's own language confirms 200 fpm is the design intent - get explicit design-team sign-off on the 150 fpm substitution before award."
          ),
          item(
            "Bid is per architectural drawings for shaft size - see Drawing A3130",
            "needs_clarification",
            "Not affirmatively confirmed on the tracker. KONE's proposal states hoistway width \"will need to be reduced to 8'-8\" which is KONE maximum width allowed,\" with 13'-2\" clear overhead required (inclusive of KONE's own 8\" fixed hoistbeam).",
            "Confirm the current shaft dimensions on Drawing A3130 already reflect KONE's 8'-8\" maximum width and 13'-2\" clear overhead requirement, or that framing will be adjusted to match."
          ),
          item(
            "Bid is per spec 14-21-00 Electric Traction Elevators",
            "needs_clarification",
            "\"N - $50,000.00 - Excluding\" on the bid tracker for KONE.",
            "PRIORITY - get KONE to clarify in writing what the $50,000.00 figure represents (credit vs. cost to comply with the base spec) and whether their proposed machine-room-less substitution is an acceptable or-equal."
          ),
          item(
            "Bid included 7 elevators with 28 stops total",
            "confirmed_included",
            "7 buildings x 4 stops each = 28 stops, matching the proposal's building-by-building landing count exactly.",
            ""
          ),
          item(
            "Included battery backup power and hall position indicator",
            "confirmed_included",
            "\"Y - Included\" on the bid tracker. Matches the proposal: Hall Lantern/Position Indicator at every landing, plus 4-hour battery backup for in-car communication devices, wireless data, and voice network as part of the 24/7 Emergency Communications package.",
            ""
          ),
          item(
            "Do you require a working platform? Or additional disconnect?",
            "needs_clarification",
            "\"Y - Included\" on the bid tracker for KONE, but the proposal's own Site Preparation section lists \"permanent or temporary three-phase and single-phase power... with disconnect switches\" as a customer-furnished requirement, not something KONE supplies.",
            "Resolve this apparent conflict directly with KONE before assuming disconnects are in their scope."
          ),
        ],
      },
      {
        id: uid(),
        title: "Technical Specification (per KONE Proposal)",
        items: [
          item("KONE MonoSpace 300 DX, machine-room-less traction, all 7 buildings", "confirmed_included", "", ""),
          item("Machinery location: guiderail-mounted in overhead of hoistway", "confirmed_included", "", ""),
          item("Travel height 31'-11.25\"; 4 stops; 4 front entrances, 0 rear entrances per elevator", "confirmed_included", "", ""),
          item("Control system: Full Collective Control Simplex", "confirmed_included", "", ""),
          item(
            "IBC seismic design category: Non-Seismic B",
            "needs_clarification",
            "Stated across all 7 buildings.",
            "Confirm this matches the project's actual structural/seismic design category before relying on it."
          ),
          item("Regulations: ASME A17.1-2022", "acknowledged", "", ""),
          item("Shaft size 8'-8\" x 6'-11.75\"; pit depth 5'-0\"; clear height under ceiling 13'-2\"", "confirmed_included", "", "See the shaft-size/Drawing A3130 flag in Scope Confirmation."),
          item("Car size 7' W x 3'-6\" D; door opening 3'-6\" x 7'", "confirmed_included", "", ""),
          item(
            "Integrated Control Solution (ICS), controller located at 4th floor",
            "needs_clarification",
            "Proposal notes: \"Integrated control system (jamb mounted on top floor entrance) has been included, the wall depth on the top floor must be a minimum of 8.65\" in order to accommodate controller.\"",
            "Confirm the top-floor wall design accommodates this 8.65\" minimum depth requirement."
          ),
          item(
            "Stainless steel 441 in lieu of 304",
            "needs_clarification",
            "\"Stainless steel 441 has been proposed in lieu of 304\" - applies to front wall, ceiling, handrail, skirting, door, and signalization finishes.",
            "Confirm this substitution is acceptable to the design team/spec, consistent with the broader as-equal review."
          ),
          item("Car walls: KONE Standard Applied laminate selections (non-removable)", "confirmed_included", "", "Removable panels available as Alternate No. 3 - see Alternates section."),
          item("24/7 Emergency Communications (audio + text-based two-way, video verification)", "confirmed_included", "", "Requires customer-provided LAN/internet with 4-hour battery backup and DHCP service; router delivery/configuration and cabling to KONE's installed location are NOT in KONE's scope."),
          item("Priority call in car: independent service", "confirmed_included", "", ""),
          item("Car ventilation: KONE standard fan", "confirmed_included", "", ""),
          item(
            "Protection pads",
            "confirmed_excluded",
            "REV1 (7/7/2026) states protection pads are \"Not included.\" The original 6/2/2026 proposal stated \"KONE standard pads and hooks included.\"",
            "Scope reduction between proposal versions - confirm this removal was intentional, and if pads are still needed for move-in/construction protection, get them priced separately."
          ),
        ],
      },
      {
        id: uid(),
        title: "Alternates (per KONE Proposal)",
        items: [
          item(
            "Alternate No. 1 - 2029 installation labor rate escalation",
            "needs_clarification",
            "2028 installation labor rates are included in the base price. If installation occurs in 2029, ADD $1,350.00 per elevator.",
            "Given the project's known multi-year schedule, confirm whether installation is realistically expected to complete within 2028 or budget for this escalation."
          ),
          item(
            "Alternate No. 2 - emergency battery lowering",
            "needs_clarification",
            "NOT included in the base price. To add: $3,250.00 per elevator. Not code-required; without it, a power outage lowers the elevator to the nearest floor only (not necessarily ground level) and it remains inoperable until power is restored.",
            "Flag to ownership/GC as a life-safety and tenant-experience decision, not just a cost line."
          ),
          item(
            "Alternate No. 3 - removable cab interior panels",
            "needs_clarification",
            "Base price includes non-removable KONE applied laminate. To add removable panels: $1,500.00 per elevator.",
            "Confirm whether removable panels are desired/required for future ease of refinishing or damage repair."
          ),
          item(
            "Alternate No. 4 - temporary construction use",
            "needs_clarification",
            "NOT included in the base price. If added: $2,500.00/month plus $1,500.00 per re-inspection (required every 90 days); change-order rates increase to $3,500.00/month and $2,500.00/re-inspection if added later. GC must provide protection, temporary car enclosure, electrical service, an operator, and two-way voice communication boxes at each landing. A minimum two-week refurbishment to \"like new\" condition is required before final turnover.",
            "Given the extended construction schedule, evaluate whether temporary elevator use for material handling is worth the ongoing monthly cost and refurbishment requirement."
          ),
        ],
      },
      {
        id: uid(),
        title: "Site Preparation & Coordination (per KONE Proposal)",
        items: [
          item("Adequate access for delivery + clean/dry 21' x 56' storage space per elevator", "acknowledged", "", "Customer/GC responsibility."),
          item(
            "Hoistway, pit, and machine room clean, dry, and constructed per approved KONE final layout drawings",
            "acknowledged",
            "Guide rail bracket, divider beam, and divider screen support (pit floor to top of hoistway) provided by others; hoistway must be plumb per KONE tolerances.",
            ""
          ),
          item("OSHA-approved removable barricades/entrance protection at all hoistway openings", "acknowledged", "", "Customer/GC to provide and install per OSHA 1926.502(j)."),
          item(
            "Permanent or temporary three-phase and single-phase power with disconnect switches",
            "needs_clarification",
            "Listed as a customer/GC responsibility in KONE's Site Preparation section.",
            "Cross-reference against the bid tracker's \"working platform / additional disconnect\" item, which shows KONE marked \"Included\" - resolve which party actually provides disconnects."
          ),
          item(
            "Hoist beam and safety beam furnished by KONE, cut to size and installed per approved layout",
            "confirmed_included",
            "\"A hoist beam and safety beam (furnished by KONE) must be cut to size and installed in the elevator overhead per the approved KONE final layout drawings.\"",
            "See the $(16,800.00) hoist beam credit flagged in Pricing - confirm how it relates to this furnished scope."
          ),
          item("Adequate lighting at applicable work areas", "acknowledged", "", "Customer/GC responsibility."),
          item("Finished floor marks visible from hoistway openings at all landings", "acknowledged", "", "Customer/GC responsibility."),
          item(
            "Operator time",
            "confirmed_excluded",
            "\"No operator time is included in this proposal.\" If GC or another trade needs shaft/platform access before Final Acceptance, KONE will provide an operator at $250/hr straight time or $500/hr overtime, availability permitting.",
            "Coordinate with other trades' schedules (e.g. any overhead work near the shaft) to anticipate this cost."
          ),
          item(
            "Other trade coordination",
            "needs_clarification",
            "\"No additional time or costs... have been included in this proposal for coordination with the life safety system, security system, or any other trades.\" KONE is entitled to a time/cost extension for delays caused by such coordination.",
            "Flag as a schedule and cost risk if life-safety/security trade coordination runs long."
          ),
          item(
            "Storage/delivery/remobilization risk",
            "needs_clarification",
            "If the site isn't ready on the agreed date, off-site storage costs $3,000/month per unit plus $4,000 double-handling labor charge; remobilization is $4,000 per crew.",
            "Confirm site readiness milestones are realistic given the overall project schedule to avoid triggering these charges."
          ),
          item(
            "Final inspection",
            "confirmed_included",
            "One final inspection by the elevator code authority (AHJ) per elevator is included, during normal working hours. Building life safety (fire alarm, dedicated phone lines) must be fully operational first.",
            "If re-inspection is required due to deficiencies by others, GC is responsible for that cost."
          ),
        ],
      },
      {
        id: uid(),
        title: "General Terms & Risk Items",
        items: [
          item(
            "Warranty",
            "needs_clarification",
            "\"12 months Manufacturer warranty is included (KONE manufacturer warranty of 24 months is not available).\" 12 months of KONE standard maintenance with 24/7 Connected Services and regular time callback service is included.",
            "If a 24-month manufacturer warranty was expected/specified, this is a real gap - confirm with the design team/ownership whether the 12-month term is acceptable."
          ),
          item(
            "Completion date condition",
            "needs_clarification",
            "\"The price is based on KONE completing its work by December 31, 2028,\" with a material manufacturing start no later than 6 months from the proposal date. If KONE's on-site work isn't completed within that calendar year due to delays by others, the customer is responsible for the resulting labor rate increase.",
            "See Alternate No. 1 - track this date closely given the project's overall schedule."
          ),
          item(
            "Proposal supersedes conflicting contract documents",
            "acknowledged",
            "\"In the event of conflicts or inconsistencies between this Proposal and any other contract document... this Proposal shall supersede and prevail.\"",
            "Legal/risk review recommended given how many technical deviations (speed, warranty, materials) are embedded in this proposal."
          ),
          item(
            "Changes to the work",
            "acknowledged",
            "KONE not required to proceed with Extra Work until a mutually acceptable Change Order is signed, with some exceptions for Construction Change Directives/Field Orders up to 10% of the subcontract price.",
            ""
          ),
        ],
      },
    ],
  };
}
