---
description: >-
  Explore how Krewe handles unregistered POS Cash Sales by mapping them to a
  blanket customer in HotWax for seamless order processing and integration with
  NetSuite.
---

# Blanket Customer

## Blanket Customer

When creating POS Cash Sales in store, high traffic can lead to customers not being registered against the sale. Though most of the time the staff will log the customer details right after entering the order, it's possible that the customer is not added at all. In this case the order is mapped to a blanket customer in HotWax. When posting this order to NetSuite, Krewe has a blanket customer that orders without customers should be mapped to.

### How this is setup in HotWax

HotWax's default customer "NA" will have a NetSuite party identification added to them that is the same type of identification as regular customers. By adding this default identification, the normal order sync with NetSuite works without modification.

```xml
<PartyIdentification partyId="_NA_" partyIdentificationTypeId="NETSUITE_CUSTOMER_ID" idValue="686522" />
```
