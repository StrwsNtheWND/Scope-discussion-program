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
