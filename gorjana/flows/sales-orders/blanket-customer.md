---
description: >-
  Explore how gorjana handles unregistered POS Cash Order by mapping them to a
  blanket customer in HotWax for seamless order processing and integration with
  NetSuite.
---

# Blanket Customer

## Blanket Customer

When creating POS Cash Order in store, high traffic can lead to customers not being registered against the sale. Though most of the time the staff will log the customer details right after entering the order, it's possible that the customer is not added at all. In this case the order is mapped to a blanket customer in HotWax. When posting this order to NetSuite, gorjana has a many blanket customer's that orders without customers should be mapped to.

### How gorjana Manages the Blanket Customers?

In case of blanket customers, gorjana has a default customer in Netsuite for each store.

While syncing the POS sale orders with blanket customers from HotWax to NetSuite, we need to send the `NETSUITE_CUSTOMER_ID` for the store where the order was completed.

### How this is setup in HotWax?

For orders lacking specific customer details, they are associated with the `_NA_` party_ID in HotWax. However, to ensure these orders can be synced with NetSuite, the corresponding customer must have a `NETSUITE_CUSTOMER_ID` in NetSuite.

The `_NA_` party_ID doesn't have a `NETSUITE_CUSTOMER_ID`, making such orders ineligible for synchronization. To address this, it's crucial to create a party identification `_NA_` ID with the type `NETSUITE_CUSTOMER_ID` and assign it a dummy value. This ensures that orders with an `_NA_` party_ID are eligible for POS order feed synchronization.

To accurately populate the Customer field, the correct store-specific `NETSUITE_CUSTOMER_ID` must be retrieved. This mapping between facilities and their respective values is managed using Facility Identification.

In Facility Identification, each facility's `NETSUITE_CUSTOMER_ID` is stored using the Facility Identification Type: `FAC_BLKT_CUST`.

During the POS orders feed process, if an order's party_Id is `_NA_`, the system fetches the appropriate from the Facility Identification of the store where the order was fulfilled. This ensures the correct customer information is included in the synchronization feed to NetSuite.

<details>

<summary>Facility Identification for Netsuite Blanket Customers</summary>

**Enumeration**

```xml
<Enumeration description="Facility Blanket Customer" enumId="FAC_BLKT_CUST" enumCode="FACILITY_BLANKET_CUSTOMER" enumTypeId="FACILITY_IDENTITY"/>
```

**Facility Identification Mapping with Blanket Netsuite Customer Id**

```xml
<FacilityIdentification facilityId="42" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="2535274"/>
<FacilityIdentification facilityId="96" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="16055852"/>
<FacilityIdentification facilityId="56" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="8167391"/>
<FacilityIdentification facilityId="64" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="10006038"/>
<FacilityIdentification facilityId="67" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="10386657"/>
<FacilityIdentification facilityId="106" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18139002"/>
<FacilityIdentification facilityId="124" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18652247"/>
<FacilityIdentification facilityId="95" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="15411233"/>
<FacilityIdentification facilityId="105" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18652248"/>
<FacilityIdentification facilityId="49" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="5399817"/>
<FacilityIdentification facilityId="72" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12203219"/>
<FacilityIdentification facilityId="122" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="17904866"/>
<FacilityIdentification facilityId="76" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="1169282"/>
<FacilityIdentification facilityId="102" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="17093449"/>
<FacilityIdentification facilityId="136" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19897104"/>
<FacilityIdentification facilityId="92" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="14400505"/>
<FacilityIdentification facilityId="58" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="8167393"/>
<FacilityIdentification facilityId="89" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="14338862"/>
<FacilityIdentification facilityId="53" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="6856598"/>
<FacilityIdentification facilityId="83" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="14269697"/>
<FacilityIdentification facilityId="127" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18652246"/>
<FacilityIdentification facilityId="81" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="27819031"/>
<FacilityIdentification facilityId="28" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="703147"/>
<FacilityIdentification facilityId="135" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19876186"/>
<FacilityIdentification facilityId="126" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18652349"/>
<FacilityIdentification facilityId="98" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="16055853"/>
<FacilityIdentification facilityId="125" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18652350"/>
<FacilityIdentification facilityId="65" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="10006039"/>
<FacilityIdentification facilityId="69" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="11448848"/>
<FacilityIdentification facilityId="107" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18139303"/>
<FacilityIdentification facilityId="91" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="14400504"/>
<FacilityIdentification facilityId="78" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12469764"/>
<FacilityIdentification facilityId="29" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="769487"/>
<FacilityIdentification facilityId="74" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="8671"/>
<FacilityIdentification facilityId="48" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="4811602"/>
<FacilityIdentification facilityId="46" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="3877476"/>
<FacilityIdentification facilityId="57" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="10386656"/>
<FacilityIdentification facilityId="54" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="7935215"/>
<FacilityIdentification facilityId="123" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18139404"/>
<FacilityIdentification facilityId="70" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12203217"/>
<FacilityIdentification facilityId="75" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="520649"/>
<FacilityIdentification facilityId="131" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19315023"/>
<FacilityIdentification facilityId="80" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="27819433"/>
<FacilityIdentification facilityId="104" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="18506190"/>
<FacilityIdentification facilityId="82" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12913175"/>
<FacilityIdentification facilityId="68" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="11448847"/>
<FacilityIdentification facilityId="94" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="14400506"/>
<FacilityIdentification facilityId="79" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12913577"/>
<FacilityIdentification facilityId="71" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12203218"/>
<FacilityIdentification facilityId="132" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19315024"/>
<FacilityIdentification facilityId="134" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19844546"/>
<FacilityIdentification facilityId="97" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="16055854"/>
<FacilityIdentification facilityId="43" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="2535168"/>
<FacilityIdentification facilityId="101" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="17093448"/>
<FacilityIdentification facilityId="100" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="16055855"/>
<FacilityIdentification facilityId="99" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="16055856"/>
<FacilityIdentification facilityId="109" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="17007997"/>
<FacilityIdentification facilityId="47" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="4813007"/>
<FacilityIdentification facilityId="77" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="12913578"/>
<FacilityIdentification facilityId="130" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19315025"/>
<FacilityIdentification facilityId="52" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="6855997"/>
<FacilityIdentification facilityId="93" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="14400507"/>
<FacilityIdentification facilityId="26" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="667320"/>
<FacilityIdentification facilityId="51" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="5485960"/>
<FacilityIdentification facilityId="73" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="8672"/>
<FacilityIdentification facilityId="50" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="5399711"/>
<FacilityIdentification facilityId="133" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="19758119"/>
<FacilityIdentification facilityId="14" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="8673"/>
<FacilityIdentification facilityId="103" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="17093047"/>
<FacilityIdentification facilityId="None" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="None"/>
<FacilityIdentification facilityId="31" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="None"/>
<FacilityIdentification facilityId="20" facilityIdenTypeId="FAC_BLKT_CUST" fromDate="2024-05-01 05:31:34.056" idValue="None"/>
```

</details>