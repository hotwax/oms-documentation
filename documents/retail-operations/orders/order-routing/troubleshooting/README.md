---
description: Diagnose common order routing schedule, facility, inventory, and shipping-method issues.
---

# Troubleshoot order routing

Start with the routing group that should have processed the order. Confirm that you selected the correct Product Store in the app footer, then use the symptom table to continue.

```mermaid
flowchart TD
    accTitle: Choose the right order routing troubleshooting guide
    accDescr: Use routing group history to distinguish a missing run from a completed run. For a completed run, investigate order selection, facility configuration, or inventory according to the observed symptom.
    A["Confirm Product Store and intended routing group"] --> B["Open group History"]
    B --> C{"Did the expected run occur?"}
    C -->|No| D["Check routing schedule and job status"]
    C -->|Yes| E{"What went wrong?"}
    E -->|Order did not match| F["Check shipping-method mapping and order filters"]
    E -->|Unexpected facility| G["Check facility configuration"]
    E -->|No or partial allocation| H["Check inventory availability and routing rules"]
```

| Symptom | Check |
| --- | --- |
| A routing group did not run | [Troubleshoot a routing schedule](scheduling-error.md) |
| A facility was skipped or selected unexpectedly | [Troubleshoot facility configuration](incorrect-facility-configurations.md) |
| An order did not match the intended shipping-method filter | [Troubleshoot shipping-method mapping](incorrect-shipping-method-mapping.md) |
| A routing rule found no inventory or allocated only part of an order | [Troubleshoot inventory availability](inventory-unavailability.md) |

Use `History` on the routing group detail page to separate schedule problems from routing outcomes. A completed run with no allocation usually points to the routing, routing-rule, inventory, or reference-data configuration rather than the schedule.

See [Order routing](../README.md) for the routing group, routing, and routing-rule hierarchy.
