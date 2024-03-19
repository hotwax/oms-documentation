---
description: >-
  Discover how HotWax Commerce manages invoicing from multiple locations and
  inventory transfers, ensuring accurate records in Retail Pro.
---

# Technical Workflow of Invoicing from Multiple Location

### Technical workflow of Invoice from multiple location

In the context of invoicing from multiple locations, all items are invoiced from the location where the last item is fulfilled, aligning with Retail Pro's constraint of allowing invoicing from a single location. The technical workflow for synchronizing orders closely mirrors the process of invoicing from a single location.

The order invoicing workflow initiates with the creation of a feed of completed orders, which includes only those orders where all items have been fulfilled. The subsequent transformation of this feed into JSON format, tailored for the Order to Invoice API, ensures that all items are invoiced from the location of the last item fulfillment. The steps, including feed preparation, transformation, API calls for invoicing, failure reporting, and inventory synchronization, closely parallel the technical workflow for invoicing from a single location.

### Technical workflow of Inventory transfer

The inventory transfer workflow is a pivotal process aimed at addressing challenges introduced by single-location invoicing, effectively mitigating inventory discrepancies in Retail Pro. This specialized solution ensures accurate inventory records by strategically transferring inventory between fulfillment locations.

#### Transformation Process

Initiating the process, a dedicated job in the HotWax Commerce Integration Platform reads the "Complete Order" feed from the SFTP location and seamlessly transforms it into a structured JSON file tailored to meet the specifications of Retail Pro's "Manual Slip" API.

#### API calling for inventory transfer

Following the transformation, the JSON file contains detailed inventory records specifying the quantity to be moved within the Retail Pro system. The subsequent step involves the calling of the "Manual Slip" API in Retail Pro, creating inventory transfer records and ensuring the necessary inventory adjustments within Retail Pro's system to effectively resolve discrepancies introduced during the invoicing process.

#### Failure reporting

To maintain transparency and expedite issue resolution, the HotWax Commerce Integration Platform generates a detailed report of any failures encountered during the "Manual Slip" API calls. This proactive reporting mechanism ensures swift identification and resolution of any issues, enhancing the overall efficiency of the inventory transfer workflow.
