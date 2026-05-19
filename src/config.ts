export const config = {
  "number": 6,
  "slug": "booking-flow-kit",
  "title": "Booking Flow Kit",
  "category": "Digital Presence",
  "tagline": "A practical decision kit for choosing, configuring, and QA-testing booking flows for small service businesses.",
  "persona": "Students wiring up appointments for salons, tutors, clinics, and repair shops.",
  "gap": "Booking tools exist, but choosing the right setup and avoiding broken flows is the hard part for nontechnical owners.",
  "niche": "Low-cost appointment conversion for service-based local businesses.",
  "metric": "successful test bookings before launch",
  "modules": [
    "Tool selection matrix",
    "Booking UX checklist",
    "Reminder message patterns",
    "End-to-end QA script"
  ],
  "theme": {
    "accent": "#2563eb",
    "accent2": "#60a5fa",
    "emoji": "\ud83c\udf10",
    "metricLabel": "Presence readiness",
    "workflow": [
      "Capture public evidence",
      "Score the digital gap",
      "Prioritize owner-safe fixes",
      "Export handoff packet"
    ],
    "privacy": "Only public business information and project notes should be entered. Do not store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "tool-selection-matrix",
      "label": "Tool selection matrix",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify tool selection matrix with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "booking-ux-checklist",
      "label": "Booking UX checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify booking ux checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "reminder-message-patterns",
      "label": "Reminder message patterns",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify reminder message patterns with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "end-to-end-qa-script",
      "label": "End-to-end QA script",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify end-to-end qa script with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Booking Flow Kit and capture baseline evidence.",
      "Complete the tool selection matrix workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Riverside Community Bakery",
    "chapter": "Jacksonville",
    "studentLead": "Volta Student Lead",
    "notes": "Digital presence sprint for an under-digitized local storefront. Booking Flow Kit sample.",
    "evidencePrefix": "Booking Flow Kit",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
