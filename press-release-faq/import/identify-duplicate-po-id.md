# Identify duplicate PO ID

## The Import App will display a warning message in case a duplicate PO ID is uploaded.

Purchase orders are created based on external reference IDs. By showing when a merchandiser is uploading a PO with an external reference ID that already exists in their OMS, the Import App helps users ensure that they don’t overwrite their existing on order inventory in the OMS. Additionally, editing the reference ID inline lets users quickly resolve conflicting IDs before uploading without leaving the app.

Merchandisers split their POs based on product and arrival date during upload. If the subsequent parts of the PO are uploaded using the same reference ID, matching SKU line items will be overwritten rather than appended as a new PO and item. Overwriting running PO items, replaces their arrival date and on-order inventory level, effectively reducing the products on-order inventory to the last uploaded PO part and pushing inaccurate dates to Shopify. Validating PO IDs before every upload and then re-uploading with correct PO IDs is a tedious process and increases the chances of uploading a PO with a duplicate ID. 

By automatically identifying duplicate PO IDs during review and before they are uploaded into the OMS, the Import App will help merchandisers make sure they are updating their on-order inventory exactly how they expect to. Merchandisers will be able to identify if they are about to overwrite their on order inventory when they actually mean to add additional units to their lot. Additionally, this will help prevent unintended changes to promise dates, by making sure that PO items for a SKU don’t overlap and instead are created in their own purchase orders.

Merchandisers using HotWax Commerce Import App for managing their purchase orders will receive the feature to get the warning against a duplicate PO ID on the review PO page.

### Testimony

*Internal quote*: The feature gives more autonomy to HotWax’s clients in correctly managing their purchase orders.

*Customer quote*: PO Id once used cannot be used again while uploading new PO.
If a purchase order has been uploaded once, the PO Id cannot be used again to override or upload a new PO after canceling the first one.

### FAQs

**Question 1: Do we need to remap the PO fields after receiving a warning message for uploading PO with the same reference ID?**

Answer: No, Import App users can directly rename the PO without having to remap the PO fields.

**Question 2: Would there be a warning in case a PO has been renamed but a user unknowingly uses a duplicate PO ID again?**

Answer:  Yes, the review PO screen displays the warning message every time a PO ID is entered with an ID that already exists in the OMS.

**Question 3: Would review PO screen also auto suggest PO namings?**

Answer: Currently the feature is not available but HotWax can implement auto-naming suggestions for POs.

### Internal FAQs

**Question 1: Which APIs will be used to identify the duplicate PO ID and display the warning message?**

Answer: The app will run a SOLR query to identify a duplicate PO ID. The query looks up if a PO ID already exists in its index and reads the results. If the search response hits a matching PO ID, the Import App displays the warning message.
