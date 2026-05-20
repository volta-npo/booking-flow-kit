export const domain = {
    "kind": "decision-matrix",
    "title": "Booking Flow Kit Decision Matrix",
    "purpose": "A purpose-built decision matrix interface for a practical decision kit for choosing, configuring, and qa-testing booking flows for small service businesses.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Booking requirements",
    "metricLabels": [
        "Scheduler Fit",
        "Booking Friction",
        "QA Confidence"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "successful test bookings before launch",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "rows-people",
            "label": "Rows / people",
            "type": "number",
            "sample": 18,
            "placeholder": "Enter rows / people"
        },
        {
            "id": "columns-skills",
            "label": "Columns / skills",
            "type": "number",
            "sample": 12,
            "placeholder": "Enter columns / skills"
        },
        {
            "id": "coverage-target-percent",
            "label": "Coverage target percent",
            "type": "number",
            "sample": 90,
            "placeholder": "Enter coverage target percent"
        },
        {
            "id": "max-load",
            "label": "Max load",
            "type": "number",
            "sample": 3,
            "placeholder": "Enter max load"
        }
    ],
    "rows": [
        "Service catalog entered",
        "Duration/pricing valid",
        "Tool comparison completed",
        "Reminder cadence selected",
        "Cancellation policy written",
        "Fallback contact path present",
        "Test booking completed",
        "Launch checklist exported",
        "Vendor shortlist scored",
        "Intake form questions drafted",
        "Reminder templates approved",
        "No-show recovery path defined"
    ],
    "artifacts": [
        "Vendor decision matrix",
        "Reminder copy pack",
        "QA script",
        "Vendor scoring sheet",
        "Booking intake form",
        "No-show recovery playbook"
    ],
    "checks": [
        "Test booking required",
        "Cancellation/reschedule policy required",
        "Fallback contact path required",
        "Vendor choice must match service duration needs",
        "Reminder copy needs owner approval",
        "No-show recovery must include phone fallback"
    ],
    "modules": [
        {
            "name": "Requirements intake board",
            "description": "Captures service types, staff capacity, locations, payments, reminders, cancellation rules, and edge cases.",
            "metrics": [
                "Requirements covered",
                "Edge cases logged",
                "Owner constraints"
            ],
            "deliverable": "Booking requirements brief"
        },
        {
            "name": "Vendor scoring matrix",
            "description": "Weights booking tools against cost, usability, integrations, reminders, owner capacity, and risk.",
            "metrics": [
                "Vendors compared",
                "Weighted score",
                "Risk flags"
            ],
            "deliverable": "Vendor recommendation matrix"
        },
        {
            "name": "Flow QA script builder",
            "description": "Generates test-booking, reschedule, cancellation, fallback, reminder, and owner-notification scripts.",
            "metrics": [
                "Scenarios covered",
                "QA pass rate",
                "Fallback clarity"
            ],
            "deliverable": "Booking QA script"
        },
        {
            "name": "Launch operations planner",
            "description": "Creates staff training, inbox routing, quiet-hours, no-show, and post-launch review rituals.",
            "metrics": [
                "Training tasks",
                "Ops cadence",
                "Launch confidence"
            ],
            "deliverable": "Booking launch runbook"
        }
    ],
    "plays": [
        {
            "name": "Tool selection sprint",
            "trigger": "Client needs a booking system but has not picked a vendor.",
            "outcome": "A weighted vendor recommendation with risks and assumptions."
        },
        {
            "name": "Booking flow QA",
            "trigger": "A booking tool is configured and must be tested before launch.",
            "outcome": "Passed test-booking evidence and fallback procedures."
        },
        {
            "name": "No-show reduction setup",
            "trigger": "Bookings exist but reminders/cancellations are weak.",
            "outcome": "Reminder cadence, cancellation copy, and follow-up plan."
        }
    ],
    "economics": {
        "buyer": "Service business owner, clinic admin, or operations student pod",
        "valueMetric": "Booking flows launched without manual rework",
        "priceHint": "$129 decision kit or $599 booking launch implementation",
        "northStar": "Successful test bookings before owner handoff"
    },
    "exportSuite": [
        "Vendor comparison matrix",
        "Booking QA script",
        "Reminder/cancellation copy pack",
        "Fallback contact runbook",
        "Staff training checklist"
    ],
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Booking flow consultant", "Service business owner", "Front desk operator"],
        "stages": [
            { "name": "Requirements mapping", "goal": "Translate service catalog, durations, policies, and staff constraints into booking requirements.", "rowPatterns": ["Service|Duration|pricing|Intake"] },
            { "name": "Vendor decision", "goal": "Compare booking tools against friction, reminders, fallback, and owner workflow.", "rowPatterns": ["Tool comparison|Vendor|Reminder|Cancellation"] },
            { "name": "Launch QA", "goal": "Run test bookings and export launch scripts for the owner team.", "rowPatterns": ["Test booking|Launch|No-show|Fallback"] }
        ],
        "sampleValues": { "primary-goal": "launch a tested booking flow with reminders and fallback" },
        "sampleRows": { "Services requiring booking listed": "Consultations, classes, and follow-ups listed with durations", "Booking owner identified": "Owner, staff backup, and inbox routing responsibility assigned", "Preferred channels captured": "Website, phone, SMS, Google profile, and walk-in paths documented", "Reminder/cancellation rules drafted": "24-hour reminder, 2-hour reminder, cancellation window, and no-show response drafted", "Vendor options compared": "Calendly, Square, Acuity, and Google appointment options scored", "Test booking completed": "End-to-end test booking completed with owner notification proof", "Fallback contact path documented": "Phone/email fallback and manual override procedure written", "Owner launch checklist approved": "Owner approved staff training, public links, and first-week review tasks", "Payment/deposit requirement mapped": "Deposit, cancellation fee, and pay-later rules documented", "Timezone/availability QA passed": "Timezone, holidays, buffers, staff capacity, and double-booking checked", "Reminder copy variants drafted": "SMS/email reminders drafted in owner voice with opt-out language", "Post-launch review cadence set": "Day 1, day 7, and day 30 booking review rituals scheduled" }
    }
};
//# sourceMappingURL=domain.js.map