# Shipsi

This document outlines the integrated workflow between Shipsi, a hyperlocal delivery solution, Shopify, an e-commerce platform, and our upcoming Order Management System (OMS). The focus is on the streamlined purchase-to-fulfillment journey for customers selecting Shipsi's same-day delivery option directly from Shopify stores.

## Shipsi Configuration

- **Shipsi Rules:** Delivery parameters will continue to be defined within the dedicated Shipsi app on Shopify.
- **Store Setup:** Store operating hours and communication preferences will remain configurable through the Shipsi app.

## Order Process

1. **Customer Selection:** During checkout on Shopify, customers choose Shipsi as their preferred delivery method.
2. **Store Notification:** Upon order confirmation, an automated notification (email or text) is sent to the store team, prompting them to prepare the order for pickup by a designated Shipsi driver.
3. **Fulfillment:** When the driver collects the order, it is marked as fulfilled within the Shopify Point-of-Sale (POS) system.
4. **Inventory Synchronization:** Shipsi maintains real-time inventory levels by directly accessing data from Shopify.

## Current Fulfillment Process

1. **Fulfillment Location:** Shipsi identifies the designated fulfillment location based on pre-configured settings.
2. **Email Notification:** An email containing the order details is sent to the relevant store for fulfillment purposes.
3. **Celigo Integration:** Stores are mapped to unique location identifiers within Celigo, a data integration platform.
4. **Shopify Order Data:** The Shopify Order JSON file includes the associated Shipsi location ID under the "shipping_lines" field. **(A sample JSON structure will be added)**
5. **Fulfillment Update:** Once the driver completes delivery, Shipsi marks the order as fulfilled, and this update is reflected within Shopify.

## Proposed OMS Fulfillment Process

1. **OMS Fulfillment App:** Orders placed with the Shipsi delivery option are automatically displayed within the designated fulfillment application of the OMS.
2. **Store Fulfillment:** Store associates utilize the OMS fulfillment app to mark orders as picked, packed, and shipped.
3. **Fulfillment Posting:** The OMS records the order as fulfilled and transmits the pertinent data to NetSuite, the enterprise resource planning (ERP) system.
4. **Shopify Fulfillment:** Shipsi maintains its role of marking orders as fulfilled within Shopify.

## Exclusions

- **Bespoke Edition Products:** Products designated as "Bespoke Edition" will remain ineligible for fulfillment through Shipsi.

## Conclusion

This integrated approach between Shipsi, Shopify, and the upcoming OMS aims to streamline the purchase-to-fulfillment journey for customers selecting Shipsi's same-day delivery option. By leveraging automation and real-time data exchange, this collaboration enhances efficiency and customer satisfaction.

<details>

<summary>Facility Identification mappings for Shipsi Location</summary>

**Enumeration**

```xml
<Enumeration description="Shipsi Unique code" enumId="SHIPSI_FULFMENT_LOC" enumCode="SHIPSI_FULFILLMENT_LOCATION" enumTypeId="FACILITY_IDENTITY"/>
```

**Facility Mapping with Shipsi Locations**

```xml
<FacilityIdentification facilityId="42" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa1e191c545cd91588b456d"/>
<FacilityIdentification facilityId="96" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="63f37d3fc545cd9c318e1da6"/>
<FacilityIdentification facilityId="56" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="60cb7ba0c545cddc5eb8f5f0"/>
<FacilityIdentification facilityId="64" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6164b821c545cdac2c44fa71"/>
<FacilityIdentification facilityId="67" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6182c349c545cd791d2c7ad8"/>
<FacilityIdentification facilityId="106" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="64e365a5c545cd027c67184c"/>
<FacilityIdentification facilityId="124" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6549f2c8c545cd1408e10952"/>
<FacilityIdentification facilityId="95" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="63ad88aac545cdb52a02c7a3"/>
<FacilityIdentification facilityId="105" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6549f392c545cd8b14e10942"/>
<FacilityIdentification facilityId="49" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa1e249c545cd08598b4567"/>
<FacilityIdentification facilityId="72" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="62350e6ec545cd860c88c6b7"/>
<FacilityIdentification facilityId="122" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="64c271b2c545cd0728dd8171"/>
<FacilityIdentification facilityId="76" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5f8748dcc545cd97688b4583"/>
<FacilityIdentification facilityId="102" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="646b645bc545cddf1805d9e4"/>
<FacilityIdentification facilityId="136" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6619122fc545cd1217f4a2f8"/>
<FacilityIdentification facilityId="92" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a4169c545cdba57f5a782"/>
<FacilityIdentification facilityId="58" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="60f59b49c545cd5d26c16c97"/>
<FacilityIdentification facilityId="89" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a4197c545cd1e58f5a77f"/>
<FacilityIdentification facilityId="53" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa1e316c545cdd8588b4569"/>
<FacilityIdentification facilityId="83" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a40cfc545cdba57f5a781"/>
<FacilityIdentification facilityId="127" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6549f526c545cd8014e10947"/>
<FacilityIdentification facilityId="81" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="62fa6c5ec545cde7243c43f2"/>
<FacilityIdentification facilityId="28" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2ce5fc545cd8f788b4567"/>
<FacilityIdentification facilityId="135" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6614fe97c545cd287ff4a2f4"/>
<FacilityIdentification facilityId="126" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6549f41bc545cd6d14e10943"/>
<FacilityIdentification facilityId="98" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="63f38203c545cd762f8e1dba"/>
<FacilityIdentification facilityId="125" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6549f4b4c545cd6d14e1094d"/>
<FacilityIdentification facilityId="65" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6164b7eec545cdac2c44fa70"/>
<FacilityIdentification facilityId="69" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="61e1ae9ec545cdce6e8b4567"/>
<FacilityIdentification facilityId="107" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="64e365f6c545cdf97b671850"/>
<FacilityIdentification facilityId="91" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a4136c545cd9757f5a782"/>
<FacilityIdentification facilityId="78" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6267016cc545cdf130587ffd"/>
<FacilityIdentification facilityId="29" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5f91ba27c545cd180a8b457b"/>
<FacilityIdentification facilityId="74" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2d42cc545cdaa798b456b"/>
<FacilityIdentification facilityId="48" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2d512c545cd557a8b4567"/>
<FacilityIdentification facilityId="46" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2d692c545cd527a8b4568"/>
<FacilityIdentification facilityId="57" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="6182c392c545cd941d2c7ad8"/>
<FacilityIdentification facilityId="54" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="604f7f68c545cda659970248"/>
<FacilityIdentification facilityId="123" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="64e36630c545cd137c67184b"/>
<FacilityIdentification facilityId="70" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="62350d79c545cd0d0c88c6b9"/>
<FacilityIdentification facilityId="75" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2d793c545cdbc7a8b4567"/>
<FacilityIdentification facilityId="131" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="65afc6a3c545cdef62accf4c"/>
<FacilityIdentification facilityId="80" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="62fa6ccac545cd00253c43f2"/>
<FacilityIdentification facilityId="104" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="65296e6ac545cd376e8b4580"/>
<FacilityIdentification facilityId="82" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a407bc545cd9357f5a77f"/>
<FacilityIdentification facilityId="68" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="61e1af7ec545cdd16f8b4567"/>
<FacilityIdentification facilityId="94" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a41c3c545cd8d57f5a785"/>
<FacilityIdentification facilityId="79" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="627ef47ec545cdb644e25f4b"/>
<FacilityIdentification facilityId="71" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="62350dafc545cd810c88c6b5"/>
<FacilityIdentification facilityId="132" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="65b12a71c545cd3d7baccf6b"/>
<FacilityIdentification facilityId="134" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="660ed919c545cd65262c98f9"/>
<FacilityIdentification facilityId="97" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="63f3828ec545cd9c318e1dbe"/>
<FacilityIdentification facilityId="43" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5f91baacc545cda90a8b456c"/>
<FacilityIdentification facilityId="101" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="646b64aac545cd020205da0c"/>
<FacilityIdentification facilityId="100" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="63f383bac545cd75358e1da9"/>
<FacilityIdentification facilityId="99" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="63f38423c545cd02398e1da5"/>
<FacilityIdentification facilityId="109" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="646627c4c545cd0049e0d286"/>
<FacilityIdentification facilityId="47" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5f91bb71c545cd470b8b4567"/>
<FacilityIdentification facilityId="77" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="627ef533c545cd1845e25f4c"/>
<FacilityIdentification facilityId="130" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="65b12b1cc545cdaa7faccf52"/>
<FacilityIdentification facilityId="52" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2da46c545cd1a7c8b4568"/>
<FacilityIdentification facilityId="93" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="633a40fbc545cdc657f5a77f"/>
<FacilityIdentification facilityId="26" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2dbfdc545cd707c8b4567"/>
<FacilityIdentification facilityId="51" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2dcbbc545cd6b7c8b4568"/>
<FacilityIdentification facilityId="73" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2dd3fc545cd3c7c8b456d"/>
<FacilityIdentification facilityId="50" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5fa2de70c545cde67c8b4567"/>
<FacilityIdentification facilityId="133" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="65ccf064c545cd093acc9687"/>
<FacilityIdentification facilityId="14" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5f91bc93c545cda80a8b4571"/>
<FacilityIdentification facilityId="103" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="646b6500c545cdff1805d9e7"/>
<FacilityIdentification facilityId="31" facilityIdenTypeId="SHIPSI_FULFMENT_LOC" fromDate="2024-05-01 05:31:34.056" idValue="5f848764c545cd27148b456e"/>
```

</details>
