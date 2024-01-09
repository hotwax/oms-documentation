# Created Orders Feed 
To successfully create a sales order in NetSuite, it is a prerequisite to have the customer information pre-existing within NetSuite's database. Therefore, it is important to synchronize customer data from OMS to NetSuite before order creation.
This integration flow is responsible to send the sales orders information from OMS to NetSuite. To ensure that the sales orders data is not repeatedly sent to NetSuite, this flow uses the NetSuite Item Line Id to filter out the sales orders which are already sent to NetSuite.
The NetSuite Item Line Id gets assigned once this file is successfully consumed and sales order created in NetSuite. A separate job takes care to export these sales order from NetSuite and record the attr name in Order Item Attribute entity on OMS. The Attr Name used for this is 'NetsuiteItemLineId'.

## Technical Implementation

This feed is generated in the integration layer using Apache NiFi. 

In NiFi, the required sales order data is fetched by connecting to the OMS transactional database, and this data is prepared in the format required by NetSuite.

Some of the important conditions for sales order data are:
1. To identify sales order, order_type_id = 'SALES_ORDER' in OrderHeader entity is used
2. The sales order which already have attr_name = 'NetsuiteItemLineId' in Order_Item_Attribute entity are excluded since they are already synced to NetSuite and so should not be included again in the feed

<details>
  <summary>SQL to fetch customer data from OMS</summary>

``` SQL SELECT 
  distinct oh.order_name AS "Order Id", 
  p.product_type_id AS "Product Type Id", 
  oi.order_item_seq_id AS "Order Line Id", 
  oh.order_id AS "External Id", 
  e.description AS "Sales Channel", 
  CASE WHEN itm_gift_card.integration_type_id = 'NETSUITE_GIFT_CARD' THEN itm_gift_card.mapping_value ELSE gid.id_value END AS 'Item', 
  oi.unit_price AS "Price", 
  adj.item_disc_amount AS "Item Discount Amount", 
  oi.quantity AS "Quantity", 
  CASE WHEN f.external_id IN ('376', '415') THEN "2-Day Shipping 67G" ELSE IFNULL(
    itm.mapping_value, 
    (
      select 
        mapping_value 
      from 
        integration_type_mapping 
      where 
        mapping_key = 'STANDARD'
    )
  ) END AS "Shipping Method", 
  CASE WHEN adj.shipping_charges IS NULL THEN 0.00 ELSE adj.shipping_charges END AS "Shipping Cost", 
  "AVATAX" AS "Tax Code", 
  -- This default value may change in production
  "AVATAX" AS "Shipping Tax Code", 
  -- This default value may change in production
  DATE_FORMAT(oh.order_date, "%c/%e/%Y") AS "Date", 
  pi.id_value AS "Customer", 
  pa.to_name AS "Addressee", 
  pa.address1 AS "Address 1", 
  pa.address2 AS "Address 2", 
  pa.city AS "City", 
  pa.state_province_geo_id AS "State", 
  g.geo_code AS "Country", 
  pa.postal_code AS "Zip", 
  (
    SELECT 
      cm.info_string 
    FROM 
      contact_mech cm 
      JOIN order_contact_mech ocm ON ocm.contact_mech_id = cm.contact_mech_id 
    WHERE 
      ocm.contact_mech_purpose_type_id = "SHIPPING_EMAIL" 
      AND ocm.order_id = oi.order_id 
    LIMIT 
      1
  ) AS "Email", 
  CONCAT_WS(
    " ", tn.country_code, tn.area_code, 
    tn.contact_number
  ) AS "Phone", 
  -- Check the format of phone number
  "" AS "Tag", 
  "" AS "Closed", 
  CASE WHEN EXISTS (
    SELECT 
      promo_name 
    FROM 
      product_promo 
    WHERE 
      promo_name = adj.discount_code
  ) THEN adj.discount_code WHEN adj.rate IS NOT NULL THEN "SHOPIFY DISCOUNT" END AS "Discount Item", 
  adj.rate AS "Rate", 
  CASE WHEN f.external_id IN ('376', '415') THEN "5" ELSE "1" END AS "Subsidiary", 
  CASE WHEN oh.sales_channel_enum_id = "POS_SALES_CHANNEL" THEN CASE WHEN order_type.id_value IS NULL THEN e.enum_code ELSE order_type.id_value END ELSE e.enum_code END AS 'Order Type', 
  CASE WHEN oh.sales_channel_enum_id = "POS_SALES_CHANNEL" THEN department.id_value ELSE "203" END AS "Department", 
  CASE WHEN oh.sales_channel_enum_id = "POS_SALES_CHANNEL" THEN sales_channel.id_value ELSE "1" END AS "Krewe Sales Channel", 
  CASE WHEN itm_gift_card.integration_type_id = 'NETSUITE_GIFT_CARD' THEN 'Custom' ELSE (
    SELECT 
      setting_value 
    FROM 
      product_store_setting pss 
    WHERE 
      setting_type_enum_id = "PRICE_LEVEL_NETSUITE" 
      AND (
        thru_date IS NULL 
        OR thru_date > now()
      ) 
      AND pss.product_store_id = oh.product_store_id 
    ORDER BY 
      from_date DESC 
    LIMIT 
      1
  ) END AS "Price Level", 
  pa_billing_location.contact_mech_id AS "billToContactMechId", 
  pa_billing_location.to_name AS "Billing Addressee", 
  pa_billing_location.address1 AS "Billing Address1", 
  pa_billing_location.address2 AS "Billing Address 2", 
  pa_billing_location.city AS "Billing City", 
  pa_billing_location.state_province_geo_id AS "Billing State", 
  g_billing_location.geo_code AS "Billing Country", 
  pa_billing_location.postal_code AS "Billing Zip", 
  CASE WHEN tn_phone_billing.country_code IS NULL 
  AND tn_phone_billing.area_code IS NULL 
  AND tn_phone_billing.contact_number IS NULL THEN '504-684-2939' ELSE CONCAT_WS(
    " ", tn_phone_billing.country_code, 
    tn_phone_billing.area_code, tn_phone_billing.contact_number
  ) END AS "Billing Phone", 
  oid.id_value AS "HC Shopify Sales Order Id", 
  (
    SELECT 
      ce.content 
    From 
      communication_event_order ceo 
      JOIN communication_event ce ON ce.communication_event_id = ceo.communication_event_id 
    Where 
      ceo.order_id = oh.order_id 
      AND ce.communication_event_type_id = "ORDER_NOTE"
  ) AS 'Order Note' 
FROM 
  order_header oh 
  JOIN order_item oi ON oh.order_id = oi.order_id 
  AND oh.status_id = "ORDER_CREATED" 
  JOIN order_role odr ON oh.order_id = odr.order_id 
  AND odr.role_type_id = "BILL_TO_CUSTOMER" 
  AND (
    odr.thru_date IS NULL 
    OR odr.thru_date > now()
  ) 
  JOIN party_identification pi ON odr.party_id = pi.party_id 
  AND pi.party_identification_type_id = "NETSUITE_CUSTOMER_ID" 
  JOIN order_item_ship_group_assoc oisga ON oisga.order_id = oh.order_id 
  AND oisga.order_item_seq_id = oi.order_item_seq_id 
  JOIN order_item_ship_group oisg ON oh.order_id = oisg.order_id 
  AND oisg.ship_group_seq_id = oisga.ship_group_seq_id 
  LEFT JOIN integration_type_mapping itm ON oisg.shipment_method_type_id = itm.mapping_key 
  AND itm.integration_type_id = 'NETSUITE_SHP_MTHD' 
  LEFT JOIN postal_address pa ON pa.contact_mech_id = oisg.contact_mech_id 
  LEFT JOIN telecom_number tn ON tn.contact_mech_id = oisg.telecom_contact_mech_id 
  LEFT JOIN geo g ON g.geo_id = pa.country_geo_id 
  JOIN enumeration e ON e.enum_id = oh.sales_channel_enum_id 
  AND e.enum_type_id = 'ORDER_SALES_CHANNEL' 
  AND e.enum_id <> 'LOOP_EXCH' 
  JOIN good_identification gid ON gid.product_id = oi.product_id 
  and gid.good_Identification_Type_Id = 'NETSUITE_PRODUCT_ID' 
  and (
    gid.thru_date IS NULL 
    OR gid.thru_date > now()
  ) 
  LEFT JOIN facility f ON f.facility_id = oisg.order_facility_id 
  LEFT JOIN order_item_assoc oia ON oia.to_order_id = oi.order_id 
  AND oia.to_order_item_seq_id = oi.order_item_seq_id 
  AND oia.order_item_assoc_type_id = "KIT_COMPONENT" 
  LEFT JOIN order_contact_mech ocm_billing_location on ocm_billing_location.order_id = oh.order_id 
  and ocm_billing_location.contact_mech_purpose_type_id = 'BILLING_LOCATION' 
  LEFT JOIN order_contact_mech ocm_billing_phone on ocm_billing_phone.order_id = oh.order_id 
  and ocm_billing_phone.contact_mech_purpose_type_id = 'PHONE_BILLING' 
  LEFT JOIN postal_address pa_billing_location on pa_billing_location.contact_mech_id = ocm_billing_location.contact_mech_id 
  LEFT JOIN telecom_number tn_phone_billing ON tn_phone_billing.contact_mech_id = ocm_billing_phone.contact_mech_id 
  LEFT JOIN geo g_billing_location ON g_billing_location.geo_id = pa_billing_location.country_geo_id 
  LEFT JOIN (
    SELECT 
      ori.order_id "order_id", 
      ori.order_item_seq_id "order_item_seq_id", 
      (
        SELECT 
          SUM(oa.amount) 
        FROM 
          order_adjustment oa 
          LEFT JOIN order_adjustment_attribute oaa ON oa.order_adjustment_id = oaa.order_adjustment_id 
        WHERE 
          oa.order_id = ori.order_id 
          AND oa.order_item_seq_id = ori.order_item_seq_id 
          AND oa.order_adjustment_type_id IN ("EXT_PROMO_ADJUSTMENT") 
          AND oaa.order_adjustment_id IS NULL
      ) "item_disc_amount", 
      (
        SELECT 
          SUM(amount) 
        FROM 
          order_adjustment 
        WHERE 
          order_id = ori.order_id 
          AND order_item_seq_id = "_NA_" 
          AND order_adjustment_type_id IN ("SHIPPING_CHARGES") 
        GROUP BY 
          order_id
      ) "shipping_charges", 
      (
        SELECT 
          GROUP_CONCAT(oaa.attr_value) 
        FROM 
          order_adjustment oa 
          LEFT JOIN order_adjustment_attribute oaa ON oa.order_adjustment_id = oaa.order_adjustment_id 
        WHERE 
          oa.order_id = ori.order_id 
          AND oa.order_item_seq_id = ori.order_item_seq_id 
          AND oa.order_adjustment_type_id = "EXT_PROMO_ADJUSTMENT" 
          AND oaa.attr_name = "discount_code"
      ) "discount_code", 
      (
        SELECT 
          SUM(oa.amount) 
        FROM 
          order_adjustment oa 
          JOIN order_adjustment_attribute oaa ON oa.order_adjustment_id = oaa.order_adjustment_id 
        WHERE 
          oa.order_id = ori.order_id 
          AND oa.order_adjustment_type_id = "EXT_PROMO_ADJUSTMENT" 
          AND oaa.attr_name = "discount_code"
      ) "rate" 
    FROM 
      order_item ori 
      INNER JOIN order_header orh ON ori.order_id = orh.order_id 
    WHERE 
      orh.status_id = "ORDER_CREATED"
  ) adj ON oi.order_id = adj.order_id 
  AND oi.order_item_seq_id = adj.order_item_seq_id 
  LEFT JOIN (
    SELECT 
      facility_id, 
      id_value 
    FROM 
      facility_identification 
    WHERE 
      facility_iden_type_id = "ORDR_ORGN_DPT" 
      AND (
        THRU_DATE IS NULL 
        OR THRU_DATE > now()
      )
  ) department ON f.facility_id = department.facility_id 
  LEFT JOIN (
    SELECT 
      facility_id, 
      id_value 
    FROM 
      facility_identification 
    WHERE 
      facility_iden_type_id = "ORDR_ORGN_SLS_CHNL" 
      AND (
        THRU_DATE IS NULL 
        OR THRU_DATE > now()
      )
  ) sales_channel ON f.facility_id = sales_channel.facility_id 
  LEFT JOIN (
    SELECT 
      facility_id, 
      id_value 
    FROM 
      facility_identification 
    WHERE 
      facility_iden_type_id = 'NETSUITE_ORDR_TYPE' 
      AND (
        THRU_DATE IS NULL 
        OR THRU_DATE > now()
      )
  ) order_type ON f.facility_id = order_type.facility_id 
  LEFT JOIN order_identification oid ON oh.order_id = oid.order_id 
  AND oid.order_identification_type_id = 'SHOPIFY_ORD_ID' 
  AND (
    oid.thru_date IS NULL 
    OR oid.thru_date > now()
  ) 
  LEFT JOIN product p on oi.product_id = p.product_id 
  LEFT JOIN integration_type_mapping itm_gift_card ON p.product_type_id = itm_gift_card.mapping_key 
  AND itm_gift_card.integration_type_id = 'NETSUITE_GIFT_CARD' 
  LEFT JOIN order_item_attribute order_item_attr ON oi.order_id = order_item_attr.order_id 
  AND order_item_attr.order_item_seq_id = oi.order_item_seq_id 
  AND order_item_attr.attr_name = 'NetsuiteItemLineId' 
  LEFT JOIN (
    SELECT 
      distinct oh.order_id 
    FROM 
      order_header oh 
      JOIN order_item oi ON oh.order_id = oi.order_id 
      LEFT JOIN good_identification gi ON oi.product_id = gi.product_id 
      AND gi.good_identification_type_id = 'NETSUITE_PRODUCT_ID' 
      and (
        gi.thru_date IS NULL 
        OR gi.thru_date > now()
      ) 
    WHERE 
      good_identification_type_id is null 
      AND oh.status_id = 'ORDER_CREATED' 
      AND oh.order_type_id = 'SALES_ORDER'
  ) AS invalid_orders ON oh.order_id = invalid_orders.order_id 
WHERE 
  oia.order_item_assoc_type_id IS NULL 
  AND oh.order_type_id = "SALES_ORDER" 
  AND order_item_attr.order_id is NULL 
  AND order_item_attr.order_item_seq_id is NULL 
  AND oisg.shipment_method_type_id <> 'POS_COMPLETED' 
  AND oi.status_id <> 'ITEM_CANCELLED' 
  AND invalid_orders.order_id IS NULL 
order by 
  oi.order_id, 
  oi.order_item_seq_id
```
</details>

### NiFi flow

In the NiFi flow set up to sync Create Sales Order Feed, below processors are used.

1. **ExecuteSQLRecord**\
    1. This processor is used to fetch sales order details using the SQL query from OMS database. The processor runs at regular intervals, ensuring updated data is fetched in each feed.

2. **RouteOnAttribute**\
   1. This processor is used to determine the count of rows fetched from OMS database using which it ensures that the flow is further executed only if the rows returned are greater than 0. This is done to avoid creation of empty sales order feeds.
   
3. **QueryRecord**\
   1. The QueryRecord processor limits the number of orders in a single file. This is required as the Netsuite system can not accept more than 25 thousands records.

4. **JoltTransformJSON**\
   1. The JoltTransformJSON processor introduces an additional JOSN object in cases where there is a discount on an item beyond the discount associated with a discount code. 

5. **QueryRecord**\
   1. This processor is used to filter records into two flow files, the ones which are valid and having data for all the required fields of NetSuite. The second is for the records which have 1 or more data missing for the required fields.

6. **UpdateAttribute**\
   1. Here the file name is prepared for the valid records feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.

7. **PutSFTP**\
   Three PutSFTP processors are used here: the first for eligible records, the second for logging the eligible records for OMS, and the third for invalid records.

8. **PutEmail**\
   1. This processor is used to send an email notification for the invalid records which are are missing some required fields the Sales Order Feed. This helps in notifying invalid records for further data correction and processing if required.
   
### NetSuite create sales order Feed File details

#### FTP location

```text
/home/${sftpUsername}/netsuite/salesorder/export
```

#### Sample Feed file Name format

```text
KREWE_CreatedOrderItemsFeed_2023-12-28-22_15_02_792.csv
```

#### Sample Feed File

| Order Id      | Order Line Id | External Id | Sales Channel         | Item  | Price | Amount | Quantity | Shipping Method     | Shipping Cost | Tax Code | Shipping Tax Code | Date      | Customer | Addressee   | Address 1                     | Address 2 | City       | State | Country | Zip   | Email                             | Phone          | Tag | Closed | Discount Item         | Rate | Subsidiary | Order Type | Department | Krewe Sales Channel | Price Level | Billing Addressee | Billing Address1                 | Billing Address 2 | Billing City | Billing State | Billing Country | Billing Zip | Billing Phone  | HC Shopify Sales Order Id | Order Note               |
|---------------|---------------|-------------|-----------------------|-------|-------|--------|----------|----------------------|---------------|----------|---------------------|-----------|----------|-------------|------------------------------|-----------|------------|-------|---------|-------|-----------------------------------|----------------|-----|--------|------------------------|------|------------|------------|------------|----------------------|-------------|-------------------|-----------------------------------|-------------------|--------------|---------------|------------------|-------------|-----------------|-----------------------------|--------------------------|
| "#KREWE37479" | 00101         | KRWE10181   | Draft Orders Channel  | 110   |       |        | 1.000000 | FedEx Home Delivery | 0.000         | AVATAX   | AVATAX             | 12/6/2023 | 5320866  | Shruti K    | 18327 Johnnie B Hall Memorial Highway |           | Rosepine    | LA    | US      | 70659 | shruti.khandelwal@hotwax.co       |               |     |        |                        | 1    | 1          | 203        | 1          | Base Price (MSRP)    | Shruti K       | 18327 Johnnie B Hall Memorial Highway |                   | Rosepine      | LA            | US               | 70659       | 504-684-2939    | 5497412354248               |                           |
| "#KREWE37478" | 00101         | KRWE10182   | Draft Orders Channel  | 3115  | 50.000| 1.000  | 1.000000 | FedEx Home Delivery | 0.000         | AVATAX   | AVATAX             | 11/28/2023| 5313850  | Sonam Vohra | Baker City                     |           | Baker City  | OR    | US      | 97814 | sovohra12@gmail.com              | 1 831 6265757  |     |        | Custom                 | 1    | 1          | 203        | 1          | Custom              | Sonam Vohra    | Baker City         |                               |                   | Baker City    | OR            | US               | 97814       | 504-684-2939    | 5480949219528               |                           |
| "#KREWE37478" | 00102         | KRWE10182   | Draft Orders Channel  | 40677 |       |        | 1.000000 | FedEx Home Delivery | 0.000         | AVATAX   | AVATAX             | 11/28/2023| 5313850  | Sonam Vohra | Baker City                     |           | Baker City  | OR    | US      | 97814 | sovohra12@gmail.com              | 1 831 6265757  |     |        |                        | 1    | 1          | 203        | 1          | Base Price (MSRP)    | Sonam Vohra    | Baker City         |                               |                   | Baker City    | OR            | US               | 97814       | 504-684-2939    | 5480949219528               |                           |

### Special handling for Create Sales Order Feed HotWax to NetSuite

   1. JOLT transformation is applied to the JSON feed, introducing an additional JOSN object in cases where there is a discount on an item beyond the discount associated with a discount code. 


### Data model mapping

## Mapping of the fields of HC to NetSuite 
| Fields               | Data Type | Description                                                     | HC Field Mapping                         |
|----------------------|-----------|-----------------------------------------------------------------|------------------------------------------|
| Order Id             | String    | Order ID                                                        | OrderHeader.ORDER_NAME                   |
| Order Line Id        | Number    | Order Line ID                                                   | OrderItem.ORDER_ITEM_SEQ_ID              |
| External Id          | Number    | External Order ID                                               | OrderHeader.ORDER_ID                     |
| Sales Channel        | String    | Description of the sales channel                                | Enumeration.DESCRIPTION                  |
| Item                 | String    | Concatenated product and item description                       | CONCAT(P.INTERNAL_NAME, OI.ITEM_DESCRIPTION) |
| Price                | Number    | unit price                       | OrderItem.UnitPrice                            |
| Amount               | Number   | Adjustments where discount is due to reason other than discount_code | adjustment.ITEM_DISC_AMOUNT         |
| Quantity             | Number    | Quantity of items                                               | OrderItem.QUANTITY                       |
| Shipping Method      | String    | Shipping Method                                                 | orderItemShipGroup.ShippingMehodTypeId   |
| Shipping Cost        | Number    | Shipping Cost                                                   | orderAdjustment.amount                   |
| Tax Code             | String    | Tax code                                                        | "AVATAX"                                 |
| Shipping Tax Code    | String    | Shipping Tax Code                                               | "AVATAX"                                 |
| Date                 | Date      | Order date                                                      | OrderHeader.ORDER_DATE in format D/M/YYYY|
| Customer             | Number   | Customer ID                                                     | PartyIdentification.ID_VALUE where party_identification_type_id = 'NETSUITE_CUSTOMER_ID' |
| Addressee            | String    | Name of addressee                                               | postalAddress.to_name                     |
| Address 1            | String    | Address line 1                                                  | postalAddress.address1                    |
| Address 2            | String    | Address line 2                                                  | PostalAddress.address2                    |
| City                 | String    | City                                                            | PostalAddress.city                        |
| Country              | String    | Country                                                         | geo.geo_code                              |
| State                | String   | State or province                                               | PostalAddress.state_province_geo_id       |
| Zip                  | String    | Postal code                                                     | PostalAddress.postal_code                 |
| Email                | String    | Email address                                                   | contactMech.InfoString                    |
| Phone                | Number    | Phone Number                                                    | TelecomNumber.countryCode + TelecomNumber.area_code + TelecomNumber.contact_number |
| Tag                  | String    | Tags                                                            | "" empty value                            |
| Closed               | String    | Indicates if orders is cancelled or not                         | "" empty value                            |
| Discount Item        | String    | Discount Code                                                   | orderAdjustmentAttribute.ATTR_VALUE where ORDER_ADJUSTMENT_TYPE_ID = 'EXT_PROMO_ADJUSTMENT' |
| Rate                 | Number    | Adjustments where discount is due to discount_code              | order_adjustment.Rate                     |
| Subsidiary           | Number    | Subsidiary based on external ID                                 | Mapping based on Facility external id     |
| Order Type           | String    | Order Type                                                      | FacilityIdentification.idValue where facility_iden_type_id = 'NETSUITE_ORDR_TYPE'                   |
| Department           | String    | Department                                                      | FacilityIdentification.idValue where facility_iden_type_id = 'ORDR_ORGN_DPT'              |
| Krewe Sales Channel  | String    | Sales Channel                                                   | FacilityIdentification.idValue where facility_iden_type_id = 'ORDR_ORGN_SLS_CHNL'                   |
| Price Level          | String    | Price level sent as custom for duplicate fields created due to discount other than discount code | default value "custom" for duplicate and ProductStoreSetting.SettingValue where SettingTypeEnumId = 'PRICE_LEVEL_NETSUITE' |
| Billing Addressee            | String    | Name of addressee                                               | postalAddress.to_name                     |
| Billing Address 1            | String    | Address line 1                                                  | postalAddress.address1                    |
| Billing Address 2            | String    | Address line 2                                                  | PostalAddress.address2                    |
| Billing City                 | String    | City                                                            | PostalAddress.city                        |
| Billing Country              | String    | Country                                                         | geo.geo_code                              |
| Billing State                | String   | State or province                                               | PostalAddress.state_province_geo_id       |
| Billing Zip                  | String    | Postal code                                                     | PostalAddress.postal_code                 |
| Email                | String    | Email address                                                   | contactMech.InfoString                    |
| Phone                | Number    | Phone Number                                                    | TelecomNumber.countryCode + TelecomNumber.area_code + TelecomNumber.contact_number |
