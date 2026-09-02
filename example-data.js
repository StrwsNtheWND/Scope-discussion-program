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
// including ESI's separate site concrete bid), CTF Construction's Phase 1
// proposal (dated 6/3/2026, expires 7/3/2026 - including its exclusions,
// inclusions, qualifications, price-increase terms, and cold weather rate
// table), and the civil (CD6) and landscape (LC.4/LC.5) construction plans
// showing the Rain Garden exclusion and clubhouse/pool amenity quantities.

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
      jobNo: "RC26015",
      date: "2026-06-03",
      preparedBy: "",
    },
    gc: {
      company: "Garrett Construction",
      contact: "",
      phone: "317.886.7923",
      email: "AltaVista@TheGarrettCo.com",
    },
    bidder: {
      company: "CTF Construction",
      trade: "32 1600 - Site Concrete",
      contact: "Michael Bukowski, Estimator",
      phone: "720.790.1600 / 720.532.3554",
      email: "MichaelB@CTFconst.com",
      amount: "$1,121,137.36 - Phase 1 Estimate Total, per 6/3/2026 proposal (Proposal Exp. 7/3/2026).",
    },
    generalNotes:
      "PRIORITY: this proposal expired 7/3/2026 and today's date is well past that - get updated, current pricing " +
      "from CTF before contract, especially given the 12/31/2026 supplier pricing escalator and the open-ended price " +
      "increase clauses for inflation/tariffs/shortages. Also flag: (1) CTF's bid is conditioned on the AIA A401-1997 " +
      "subcontract form and excludes any requirement to name additional insureds or waive subrogation rights - this " +
      "needs GC risk/legal review before using Garrett's standard subcontract form. (2) Rubberized Play Surface is on " +
      "the master Site Concrete scope checklist but is not a line item anywhere in CTF's proposal - ESI's separate " +
      "site concrete bid (per the same bid tracker) priced this at $28,518; confirm which bidder is actually carrying " +
      "it. (3) A number of CTF's line items are qualified \"ASSUMED\" (no structural/civil detail was available when " +
      "priced) - see the Assumed / Unconfirmed Details section; get real detail sheets to CTF and have them re-confirm " +
      "pricing once available, since assumptions on rebar and dimensions are a common source of change orders. " +
      "(4) CTF's default position is no retainage unless mutually agreed - confirm Garrett's retainage requirement " +
      "up front.",
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
            "Rubberized Play Surface",
            "needs_clarification",
            "Listed as a PRICING line on the master Site Concrete scope checklist, but no rubberized play surface item appears anywhere in CTF's itemized proposal.",
            "ESI's separate site concrete bid on the same tracker priced this at $28,518 - confirm which bidder carries it, or get CTF to add it."
          ),
          item(
            "Proposal pricing validity",
            "needs_clarification",
            "Proposal Date 6/3/2026, Proposal Exp. 7/3/2026. \"Concrete Suppliers Guarantee Pricing for 30 Days Only. Pricing Can Vary After. There Will Be A General Pricing Escalator As Of 12.31.2026.\"",
            "Proposal has expired as of today - get current, re-confirmed pricing from CTF before issuing a subcontract."
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
            "Winter Time Service Charge $4.16/CY; NCA $9.88/CY per 1%; Subgrade Blanket Covering $1.00/LF; Concrete Blanket Covering $3.13/LF; Saw Cutting Blanket Covering $1.00/LF.",
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
            "Full Phase 1 itemized take-off provided (34 line items), Estimate Total $1,121,137.36.",
            ""
          ),
          item(
            "Includes all site concrete (curb & gutter, sidewalks, stairs, pans, etc.)",
            "confirmed_included",
            "Itemized: 6\" Vertical Curb w/ 2' and 1' Pan, Mountable CG w/ 2' Pan, multiple sidewalk widths, HCR w/ Truncated Domes, Crosspan 12\", Valley Pan 4'/2', ADA Parking Paving, Step Concrete, Check Wall @ Stairs.",
            ""
          ),
          item(
            "Includes pool deck per Civil & Landscape Drawings - colored, as specified",
            "confirmed_included",
            "\"Enhanced Concrete Paving 4\", Davis Outback 677, Top Cast 05 Exposed, Saw Cut (LC.A)\" - 4,315 SF @ $7.51 = $32,405.65.",
            "Confirm this line item is in fact the pool deck area shown on LC.4/LC.5 and that the Davis Outback 677 color/finish matches spec."
          ),
          item(
            "Includes concrete footings for trash compactor, monument sign, light poles, bollards, and amenity items",
            "needs_clarification",
            "Trash Pad + Footer, Light Pole Base, Kitchen Wall Footer, and BBQ Pit Footer are itemized. No monument sign or bollard footing line item found.",
            "Confirm monument sign and bollard footings are covered elsewhere (bollards themselves are explicitly excluded below - see Exclusions) or get them added."
          ),
          item(
            "Includes pavers (flat slab included in site concrete; pavers included in landscaping)",
            "confirmed_included",
            "\"Concrete Base @ Pavers 4\", #3 @ 18\" OCEW (EXCLUEDES GeoTextile Fabric)\" - 3,906 SF @ $6.16 = $24,060.96.",
            "Confirms the split: CTF provides the concrete base under pavers only; the paver units/setting are carried by the landscaping trade, per the tracker note."
          ),
          item(
            "Includes dumpster pad and foundations",
            "confirmed_included",
            "\"Trash Pad 6\", No Rebar (ASSUMED NO DETAIL)\" 2,514 SF @ $6.26, plus \"Trash Pad Footer\" 173 LF @ $105.00.",
            "Trash pad rebar is an assumption - see Assumed / Unconfirmed Details."
          ),
          item(
            "Includes foundations for CMU perimeter walls and columns",
            "needs_clarification",
            "No line item explicitly labeled CMU perimeter wall or column foundation appears in CTF's proposal.",
            "Confirm whether \"Decorative Concrete Wall\" or \"Check Wall @ Stairs\" covers this, or whether it's a genuine gap."
          ),
          item(
            "Includes all reinforcement, as outlined in the plans",
            "needs_clarification",
            "Inclusions state \"Furnish and Install wire mesh and rebar per plan,\" but 6 separate line items qualify reinforcement/dimensions as \"ASSUMED\" due to missing detail.",
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
            "Excluded - \"Rain Garden Concrete\" is listed under CTF's excluded items, and the CD6 civil paving plan itself calls out \"EXCLUSION - RAIN GARDEN A\" directly on the plan near the unit 3H area.",
            "Consistent between the proposal and the civil plan - confirm which trade/scope carries the rain garden concrete instead."
          ),
          item(
            "Offsite / ROW",
            "needs_clarification",
            "Not addressed in CTF's Phase 1 take-off, which appears to be entirely on-site.",
            "Confirm whether any offsite/ROW concrete is anticipated and, if so, get it priced separately."
          ),
          item(
            "Site decorative wall / free standing wall",
            "confirmed_included",
            "\"Decorative Concrete Wall 1'-6\"x4'-6\", Board Form, Rebar (F/LWF.2)\" 68 LF @ $214.00 = $14,552.00.",
            ""
          ),
          item(
            "Offsite Storm Sewer Exhibit",
            "needs_clarification",
            "Not addressed in CTF's proposal.",
            "Confirm whether this applies to the site concrete package or is being tracked under a different trade's cost code."
          ),
        ],
      },
      {
        id: uid(),
        title: "Assumed / Unconfirmed Details (per CTF Proposal)",
        items: [
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
            "\"Stem Wall @ Paver Base @ Pool 6\"x3'-0\", #3@18\" OCEW (ASSUMED MISSING)\" - 280 LF.",
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
            "\"Transformer Pad (ASSUMED 8\" NO DETAIL)\" - 22 EA @ $538.65.",
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
          item("Concrete pump as needed", "confirmed_included"),
        ],
      },
      {
        id: uid(),
        title: "Exclusions (per CTF Proposal)",
        items: [
          item(
            "10 Mil vapor barrier & reinforcement @ sidewalks; bollard light concrete bases; rain garden concrete; hammock footer; emergency switch footer; topping slab concrete (C/LCD.4); road base under concrete",
            "confirmed_excluded",
            "\"Items Below Can Be Added Upon Direct Request.\"",
            "Review this list against spec - anything required gets added by change order, not assumed included."
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
            "\"This Bid Is Conditioned Upon The Use Of The AIA A401-1997 Subcontract Form, And Upon The Exclusion Of Any Requirement To Name Additionally Insured Parties, Or To Waive Rights Of Subrogation... If An Alternate Contract Form Is To Be Executed, All Terms Shall Be Mutually Agreed Upon Prior To Start Of Any Work.\"",
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
