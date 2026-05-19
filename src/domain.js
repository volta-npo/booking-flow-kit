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
        "Launch checklist exported"
    ],
    "artifacts": [
        "Vendor decision matrix",
        "Reminder copy pack",
        "QA script"
    ],
    "checks": [
        "Test booking required",
        "Cancellation/reschedule policy required",
        "Fallback contact path required"
    ],
    "sampleClient": "Riverside Community Bakery"
};
//# sourceMappingURL=domain.js.map