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
