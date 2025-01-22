# Removing Stuck Orders from the Fulfillment App

### Problem:
Support requests occasionally arise where orders remain stuck in a store’s queue, even after being fulfilled by the store itself or another facility.

### Error Identification:
These issues are typically reported by stores to the customer support team. The team then escalates the issue to HotWax support for resolution, as the affected orders remain in the store queue despite being fulfilled. Consequently, the store continues to see these orders in their queue, even when there are no active orders assigned to them.

### Cause Analysis:
Orders become stuck because they are repeatedly rejected and reassigned (re-brokered) to the same facility.

### Solution:
1. Log in to WebTools and navigate to the **Service Engine**.
2. Search for the service: `deleteSolrDocumentByQuery`.
3. Schedule the service with the following parameters:
   - `coreName`: **enterpriseSearch**
   - `query`: `docType:OISGIR AND orderId:[HcOrderId] AND orderItemSeqId:[orderItemSeqId]`
   
   **Note:** Replace `orderId` and `orderItemSeqId` with the relevant values for the specific order you are addressing.
4. Execute the service.

This will delete the **OISGIR Solr** document and remove the order from the store’s queue.
