# Save CSV maps for POs

## When uploading purchase orders in the Import App, merchandisers would like to auto-save their frequently used PO CSV maps. 

Saving PO CSV formats lets users upload purchase orders quickly, without the added effort of mapping each PO field to fields in the Import App each time. Merchandisers can add and save their custom PO layouts, or they may use the pre-loaded PO CSV maps that HotWax Commerce provides by default. 

Merchandisers are required to map their existing purchase order fields according to the format set by the app for uploading POs every time. Remapping the same PO formats over and over again is tedious especially for merchandisers handling several purchase orders on a daily basis. If a company has multiple teams managing purchase orders, training users how to map PO fields in the Import App can also take an extended period of time while also introducing discrepancies from mismatched fields.

Merchandisers will be able to auto-save their PO CSV maps right into the app. Custom mappings will be saved at the company level to ensure everyone has access to the same templates. Additionally, the app will also include pre-loaded CSV maps from commonly used ERP systems like NetSuite and ORSI. Users can select a readily available PO CSV format or may create and save their unique mappings to upload purchase orders.

Merchandisers will automatically receive the feature to save their preferable CSV mappings in the Import App or they may also use pre-loaded formats present in the app.

### Testimony 

*Internal quote*: Most of HotWax client’s upload multiple purchase orders on an everyday basis. Saving CSV mappings will definitely help them quickly upload their POs.

*Customer quote*: When uploading multiple POs, we need to remap all PO fields every time, is there a way we can save these PO mappings?

To start using the feature, merchants can get in touch with an account manager at HotWax Commerce. 

### FAQs

**Question 1: Is it possible to save different CSV maps POs in case of multiple vendors?**

Answer: The Import App supports saving multiple mappings. Therefore, merchants can list their vendor specific CSV maps and accordingly name them.

**Question 2: How can we delete a custom PO mapping?**

Answer: At present, custom PO mappings can be removed using hard refresh. In future, these mappings will be saved on the server and users will also have an option to delete their saved mappings.

### Internal FAQs

**Question 1: How will we manage the backend support for this feature?**

Answer: HotWax has introduced the DataManagerMapping entity, mapping data can be stored in its mapping preference value.

**Question 2: Which APIs will be exposed to create this feature?** 

Answer: The DataManagerMapping services are automatically created by entity auto for creating, updating or deleting PO mappings.

