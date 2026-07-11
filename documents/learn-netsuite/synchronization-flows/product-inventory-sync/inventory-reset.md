---
description: Learn how to efficiently manage inventory resets between HotWax and NetSuite.
---

# Inventory Reset

NetSuite is often the system of record for inventory at all locations. The OMS usually syncs a full inventory reset from the OMS once a day. This requires a scheduled export from NetSuite and an import job into the OMS be scheduled.

To learn more about the inventory sync integration with NetSuite read the full documentation

**Generate inventory items from NetSuite**

```
HC_generateCSV_InventoryItems
```

**Place inventory items at SFTP**

```
HC_uploadCSV_InventoryItems
```

**Import inventory into HotWax**

```
Import inventory
FTP Config: RESET_INVENTORY
```

## Reset inventory by quantity on hand

Use a quantity-on-hand (QOH) reset when NetSuite is the source of truth for a facility's physical inventory and the reset file contains the physical count. The OMS compares the QOH in the file with its current QOH, then applies the difference to both QOH and available to promise (ATP). This calculation does not preserve existing reservations.

For example, if the OMS has QOH of 10 and ATP of 5, and NetSuite sends QOH of 4, the OMS applies a delta of -6. The resulting QOH is 4 and ATP is -1.

Use this method only when the file represents a physical inventory count. For the field-level configuration and alternative reset methods, see [inventory reset configurations](../../../system-admin/administration/data-manager/freq-used-configurations.md#reset-inventory-by-qoh).
