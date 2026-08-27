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
