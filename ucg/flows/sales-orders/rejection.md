---
description: Documentation page for rejection workflow in Frank and Oak.
---

# Rejections

Frank and Oak will use HotWax's native rejection workflow. To read more about how rejections work in HotWax OMS, click here.

The NetSuite facility ID that will be used for rejections are:

**Testing:**

**Production:** 157

## For store rejections, the following reasons are configured:

| Status                      | Effect on Inventory       |
| --------------------------- | ------------------------- |
| Cannot fulfill entire order | Will not affect inventory |
| Should not be ATP           | Will not affect inventory |
| Not found                   | Zero out inventory        |
| Damaged                     | Zero out inventory        |

### To configure these reasons, import the below data from web tools:

```xml

<Enumeration enumId="CN_FL_EO" enumTypeId="REPORT_NO_VAR" enumName="Cannot fulfill entire order - Will not affect inventory" enumCode="CN_FL_EO" description="Cannot Fulfill Entire Order" />
<VarianceReason varianceReasonId="CN_FL_EO" description="Cannot fulfill entire order" />

<Enumeration enumId="NOT_BE_ATP" enumTypeId="REPORT_NO_VAR" enumName="Item should not be ATP - Zero out ATP inventory" enumCode="NOT_BE_ATP" description="Not be ATP" />
<VarianceReason varianceReasonId="NOT_BE_ATP" description="Should not be ATP" />

<Enumeration enumId="NOT_FOUND" enumTypeId="REPORT_ALL_VAR" enumName="Not found" enumCode="NOT_FOUND" description="Not found - Zero out ATP inventory" />
<VarianceReason varianceReasonId="NOT_FOUND" description="Inventory not found hence rejected order" />

```

Also, change the `enumTypeId` for Damaged reason already in OMS to REPORT\_ALL\_VAR and `description` to `Damaged - Zero out ATP inventory`
