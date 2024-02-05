# Returns

## Cross Subsidiary Returns
Krewe operates between two subsidiaries within the same overarching company structure. When returns span across these subsidiaries, a unique approach is required to ensure accurate posting to NetSuite accounting.

If Subsidiary 67G has participated in the sales order or return, a specialized flow is triggered to populate custom return subsidiary and return location fields in NetSuite.

1. **Custom Return Subsidiary Field:**
   - Captures the true subsidiary of the return.

2. **Custom Return Location Field:**
   - Records the true location where the order was returned.

The native location field in NetSuite always reflects the location from which the original order was dispatched. Whereas the custom return location field always captures the location where the order was returned.

If there is a difference in the subsidiary that the order was placed from and returned to, a script will automatically be triggered in NetSuite to initiate a transfer inventory between them and balance inventory.

The phased implementation begins with HotWax only posting cross-subsidiary returns to NetSuite. Subsequently, the intention is to expand the capability to encompass all returns.