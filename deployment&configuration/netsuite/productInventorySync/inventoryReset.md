# Schedule Inventory import
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