---
description: >-
  Efficiently synchronize in-store orders from OMS to NetSuite with Apache NiFi
  integration.
---

# POS Cash Sale Orders

This integration flow is responsible to send the In-Store Orders information from OMS to NetSuite.

When using Shopify POS, these orders are fetched in OMS using Shopify Orders import, and these type of orders have the shipping method set as "POS\_COMPLETED" in OMS.

## Technical Implementation

This feed is generated in the integration layer using Apache NiFi.

In NiFi, the required POS Cash Sales order data is fetched by connecting to the OMS transactional database, and this data is prepared in the format required by NetSuite.

Some of the important conditions for POS Cash sales order data are:

1. To identify sales order, order\_type\_id = 'SALES\_ORDER' in OrderHeader entity is used.
2. The order status should be 'ORDER\_COMPLETED'.
3. The Sales Channel for the order is 'POS\_SALES\_CHANNEL'.
4. The Shipment Method set on Order Item Ship group is 'POS\_COMPLETED'.
5. The sales order for which value for order\_identification\_type\_id = 'NETSUITE\_ORDER\_ID' are fetched to be sent to NetSuite, so that same order is not sent once created in NetSuite.

<details>

<summary>SQL to fetch customer data from OMS</summary>

```SQL
SELECT
  oh.order_name AS 'Order Id',
  os.status_datetime,
  oi.order_item_seq_id AS 'Order Line Id',
  oh.order_id AS 'External Id',
  e.description AS 'Sales Channel',
  p.product_type_id AS 'Product Type Id',
  CASE
    WHEN itm_gift_card.integration_type_id = 'NETSUITE_GIFT_CARD' THEN itm_gift_card.mapping_value
    ELSE gid.id_value
    END AS 'Item',
     oi.unit_price AS 'Price',
  adj.item_disc_amount AS 'Item Discount Amount',
  oi.quantity AS 'Quantity',
  'AVATAX' AS 'Tax Code',
  f.external_id AS 'Location',
  DATE_FORMAT(oh.order_date, '%c/%e/%Y') AS 'Date',
  pi.id_value AS 'Customer',
  CASE WHEN EXISTS (
    SELECT
      promo_name
    FROM
      product_promo
    WHERE
      promo_name = adj.discount_code
  ) THEN adj.discount_code WHEN adj.rate IS NOT NULL THEN 'SHOPIFY DISCOUNT' END AS 'Discount Item',
  adj.rate AS 'Rate',
  CASE WHEN f.external_id IN ('376', '415') THEN '5' ELSE '1' END AS 'Subsidiary',
  pa.address1 AS 'Address 1',
  pa.address2 AS 'Address 2',
  pa.city AS 'City',
  g.geo_code AS 'Country',
  pa.state_province_geo_id AS 'State',
  pa.postal_code AS 'Zip',
  CASE
    WHEN order_type.id_value IS NULL THEN e.enum_code
    ELSE order_type.id_value
  END AS 'Order Type',
  department.id_value AS 'Department',
  sales_channel.id_value AS 'Krewe Sales Channel',
  CASE WHEN itm_gift_card.integration_type_id = 'NETSUITE_GIFT_CARD' THEN 'Custom' ELSE (
    SELECT
      setting_value
    FROM
      product_store_setting pss
    WHERE
      setting_type_enum_id = 'PRICE_LEVEL_NETSUITE'
      AND (
        thru_date IS NULL
        OR thru_date > now()
      )
      AND pss.product_store_id = oh.product_store_id
    ORDER BY
      from_date DESC
    LIMIT
      1
  ) END AS 'Price Level',
  (
    SELECT
      id_value
    FROM
      order_identification
    WHERE
      oh.order_id = order_id
      AND order_identification_type_id = 'SHOPIFY_ORD_ID'
      AND (thru_date IS NULL OR thru_date > now()) LIMIT 1
  ) AS "HC Shopify POS Order Id",
  SUBSTRING_INDEX(
    oi_shopify_order_no.id_value,
    '-',
    -1
  )  as "Shopify Order Number"
FROM
  order_header oh
  INNER JOIN order_item oi ON oh.order_id = oi.order_id
  LEFT JOIN product p on oi.product_id = p.product_id
  LEFT JOIN integration_type_mapping itm_gift_card ON p.product_type_id = itm_gift_card.mapping_key
  AND itm_gift_card.integration_type_id = 'NETSUITE_GIFT_CARD'
  LEFT JOIN enumeration e ON e.enum_id = oh.sales_channel_enum_id
  AND e.enum_type_id = 'ORDER_SALES_CHANNEL'
  LEFT JOIN order_identification oid ON oh.order_id = oid.order_id
  AND oid.order_identification_type_id = 'NETSUITE_ORDER_ID' AND (oid.thru_date IS NULL OR oid.thru_date > now())
  JOIN good_identification gid ON gid.product_id = oi.product_id
  and gid.good_Identification_Type_Id = 'NETSUITE_PRODUCT_ID' and (gid.thru_date IS NULL OR gid.thru_date > now())
  INNER JOIN order_item_ship_group_assoc oisga ON oi.order_id = oisga.order_id
  AND oi.order_item_seq_id = oisga.order_item_seq_id
  INNER JOIN order_status os ON oi.order_id = os.order_id
  AND oi.order_item_seq_id = os.order_item_seq_id
  AND oi.status_id = os.status_id
  INNER JOIN order_item_ship_group oisg ON oisga.order_id = oisg.order_id
  AND oisga.ship_group_seq_id = oisg.ship_group_seq_id
  INNER JOIN facility AS f ON oisg.order_facility_id = f.facility_id
  LEFT JOIN facility_contact_mech_purpose fcmp ON fcmp.facility_id = f.facility_id
  AND fcmp.contact_mech_purpose_type_id = 'PRIMARY_LOCATION'
  AND fcmp.thru_date IS NULL
  LEFT JOIN postal_address pa ON pa.contact_mech_id = fcmp.contact_mech_id
  LEFT JOIN geo g ON g.geo_id = pa.country_geo_id
  LEFT JOIN order_role odr ON oh.order_id = odr.order_id
  AND odr.role_type_id = 'BILL_TO_CUSTOMER'
  AND odr.thru_date IS NULL
  INNER JOIN party_identification pi ON odr.party_id = pi.party_id
  AND party_identification_type_id = 'NETSUITE_CUSTOMER_ID'
  LEFT JOIN order_item_assoc oia ON oia.to_order_id = oi.order_id
  AND oia.to_order_item_seq_id = oi.order_item_seq_id
  AND oia.order_item_assoc_type_id = 'KIT_COMPONENT'
  LEFT JOIN(
    SELECT
      ori.order_id 'order_id',
      ori.order_item_seq_id 'order_item_seq_id',
      (
        SELECT
          SUM(oa.amount)
        FROM
          order_adjustment oa
          LEFT JOIN order_adjustment_attribute oaa ON oa.order_adjustment_id = oaa.order_adjustment_id
        WHERE
          oa.order_id = ori.order_id
          AND oa.order_item_seq_id = ori.order_item_seq_id
          AND oa.order_adjustment_type_id IN ('EXT_PROMO_ADJUSTMENT')
          AND oaa.order_adjustment_id IS NULL
      ) 'item_disc_amount',
      (
        SELECT
          GROUP_CONCAT(oaa.attr_value)
        FROM
          order_adjustment oa
          LEFT JOIN order_adjustment_attribute oaa ON oa.order_adjustment_id = oaa.order_adjustment_id
        WHERE
          oa.order_id = ori.order_id
          AND oa.order_item_seq_id = ori.order_item_seq_id
          AND oa.order_adjustment_type_id = 'EXT_PROMO_ADJUSTMENT'
          AND oaa.attr_name = 'discount_code'
      ) 'discount_code',
      (
        SELECT
          SUM(oa.amount)
        FROM
          order_adjustment oa
          JOIN order_adjustment_attribute oaa ON oa.order_adjustment_id = oaa.order_adjustment_id
        WHERE
          oa.order_id = ori.order_id
          AND oa.order_adjustment_type_id = 'EXT_PROMO_ADJUSTMENT'
          AND oaa.attr_name = 'discount_code'
      ) 'rate'
    FROM
      order_item ori
      INNER JOIN order_header orh ON ori.order_id = orh.order_id
    WHERE
      ori.status_id = 'ITEM_COMPLETED'
  ) adj ON oi.order_id = adj.order_id
  AND oi.order_item_seq_id = adj.order_item_seq_id
  LEFT JOIN(
    SELECT
      facility_id,
      id_value
    FROM
      facility_identification
    WHERE
      facility_iden_type_id = 'ORDR_ORGN_DPT'
      AND (
          THRU_DATE IS NULL
          OR THRU_DATE > now()
      )
  ) department ON f.facility_id = department.facility_id
  LEFT JOIN(
    SELECT
      facility_id,
      id_value
    FROM
      facility_identification
    WHERE
      facility_iden_type_id = 'ORDR_ORGN_SLS_CHNL'
      AND (
          THRU_DATE IS NULL
          OR THRU_DATE > now()
      )
  ) sales_channel ON f.facility_id = sales_channel.facility_id
  LEFT JOIN(
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
  LEFT JOIN order_identification oi_shopify_order_no ON oi_shopify_order_no.order_id = oh.order_id AND oi_shopify_order_no.order_identification_type_id = 'SHOPIFY_ORD_NAME'
  LEFT JOIN (
    SELECT
        distinct
        oh.order_id
    FROM
        order_header oh
        JOIN order_item oi ON oh.order_id = oi.order_id
    LEFT JOIN good_identification gi ON oi.product_id = gi.product_id
            AND gi.good_identification_type_id = 'NETSUITE_PRODUCT_ID' and (gi.thru_date IS NULL OR gi.thru_date > now())
    WHERE
    good_identification_type_id is null
    AND oh.status_id = 'ORDER_COMPLETED'
    AND oh.order_type_id = 'SALES_ORDER'
    ) AS invalid_orders ON oh.order_id = invalid_orders.order_id
WHERE
  oh.status_id = 'ORDER_COMPLETED'
  AND oia.order_item_assoc_type_id IS NULL
  AND oh.sales_channel_enum_id = 'POS_SALES_CHANNEL'
  AND oisg.shipment_method_type_id = 'POS_COMPLETED'
  AND oh.order_type_id = 'SALES_ORDER'
  AND oid.order_id IS NULL
  AND invalid_orders.order_id IS NULL
order by
  oi.order_id,
  oi.order_item_seq_id
```

</details>

## Implementation flow

1. This feed will be generated using a SQL to fetch data from HotWax. SQL outputs the feed in JSON format
2. The generated feed has a limit on total number of Orders in each file as external system can not accept more than 25k records in a single file.
3. Then the feed undergoes a JOLT transformation where an extra object is added to the JSON if there is any discount on the same item other than the discount due to discount\_code.
4. JOLT also does the mapping for fields- Order Type, Department and Sales channel based on the value of Source name field fetche through SQL from HC.
5. Then the format of feed is converted from JSON to CSV.
6. Then the feed is sent to an sftp location.

## NetSuite POS Cash Sale Feed Sample

| Order Id      | Order Line Id | External Id | Sales Channel | Item                                  | Price | Amount | Quantity | Tax Code | Location | Date     | Customer | Discount Item    | Rate    | Subsidiary | Address 1             | Address 2 | City        | Country | State | Zip   | Order Type | Department | Krewe Sales Channel | Price Level       | Shopify Order Number | Order Note                                                             |
| ------------- | ------------- | ----------- | ------------- | ------------------------------------- | ----- | ------ | -------- | -------- | -------- | -------- | -------- | ---------------- | ------- | ---------- | --------------------- | --------- | ----------- | ------- | ----- | ----- | ---------- | ---------- | ------------------- | ----------------- | -------------------- | ---------------------------------------------------------------------- |
| "#KREWE37312" | 00101         | KR10236     | POS Channel   | 19-08S BRETON \| Matte Oyster 24K     |       |        | 1.000000 | AVATAX   | 254      | 9/8/2023 | 5313849  |                  |         | 1          | 1,818 Magazine Street |           | New Orleans | US      | LA    | 70130 | 6          | 212        | 12                  | Base Price (MSRP) | 36,167               | New Exchange order @ 2023-12-14 11:27:56 exchange for order KR10236    |
| "#KREWE37312" | 00102         | KR10236     | POS Channel   | RX12-03 ORLEANS II \| Titanium        |       |        | 1.000000 | AVATAX   | 254      | 9/8/2023 | 5313849  |                  |         | 1          | 1,818 Magazine Street |           | New Orleans | US      | LA    | 70130 | 6          | 212        | 12                  | Base Price (MSRP) | 36,179               |                                                                        |
| "#KREWE37310" | 00101         | KR10237     | POS Channel   | 19-08S BRETON \| Matte Oyster 24K     |       |        | 1.000000 | AVATAX   | 372      | 9/8/2023 | 5313850  |                  |         | 1          | 619 Royal Street      |           | New Orleans | US      | LA    | 70130 | 6          | 317        | 156                 | Base Price (MSRP) |                      |                                                                        |
| "#KREWE37307" | 00101         | KR10238     | POS Channel   | 30-01S OCTAVIA \| Crystal + Black 24K |       |        | 1.000000 | AVATAX   | 376      | 9/8/2023 | 5313849  | SHOPIFY DISCOUNT | -82.500 | 5          | Gansevoort Street     |           | New York    | US      | NY    | 10014 | 6          | 335        | 144                 | Base Price (MSRP) | 36,123               |                                                                        |
| "#KREWE37307" | 00102         | KR10238     | POS Channel   | 19-08S BRETON \| Matte Oyster 24K     |       |        | 1.000000 | AVATAX   | 376      | 9/8/2023 | 5313849  | SHOPIFY DISCOUNT | -82.500 | 5          | Gansevoort Street     |           | New York    | US      | NY    | 10014 | 6          | 335        | 144                 |                   |                      | New Exchange order @ 2023-12-14 11:27:56 exchange for order KREWE37307 |

## Data Model Mapping

| Fields              | Data Type | Description                                                                                      | HC Field Mapping                                                                                                                                              |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Order Id            | String    | Order ID                                                                                         | OrderHeader.ORDER\_NAME                                                                                                                                       |
| Order Line Id       | String    | Order Line ID                                                                                    | OrderItem.ORDER\_ITEM\_SEQ\_ID                                                                                                                                |
| External Id         | String    | External Order ID                                                                                | OrderHeader.ORDER\_ID                                                                                                                                         |
| Sales Channel       | String    | Description of the sales channel                                                                 | Enumeration.DESCRIPTION                                                                                                                                       |
| Item                | String    | Concatenated product and item description                                                        | CONCAT(P.INTERNAL\_NAME, OI.ITEM\_DESCRIPTION)                                                                                                                |
| Price               | String    | Empty field (price calculated externally)                                                        | Default empty                                                                                                                                                 |
| Amount              | Unknown   | Adjustments where discount is due to reason other than discount\_code                            | adjustment.ITEM\_DISC\_AMOUNT                                                                                                                                 |
| Quantity            | Unknown   | Quantity of items                                                                                | OrderItem.QUANTITY                                                                                                                                            |
| Tax Code            | String    | Tax code                                                                                         | "AVATAX"                                                                                                                                                      |
| Location            | Number    | Location external ID                                                                             | Facility.EXTERNAL\_ID                                                                                                                                         |
| Date                | Date      | order date                                                                                       | OrderHeader.ORDER\_DATE in format D/M/YYYY                                                                                                                    |
| Customer            | Unknown   | Customer ID                                                                                      | PartyIdentification.ID\_VALUE where party\_identification\_type\_id = 'NETSUITE\_CUSTOMER\_ID'                                                                |
| Discount Item       | String    | Discount Code                                                                                    | orderAdjustmentAttribute.ATTR\_VALUE where ORDER\_ADJUSTMENT\_TYPE\_ID = 'EXT\_PROMO\_ADJUSTMENT'                                                             |
| Rate                | Numbwe    | Adjustments where discount is due to discount\_code                                              | order\_adjustment.Rate                                                                                                                                        |
| Subsidiary          | String    | Subsidiary based on external ID                                                                  | Mapping based on Facility external id                                                                                                                         |
| Address 1           | String    | Address line 1                                                                                   | postalAddress.address1                                                                                                                                        |
| Address 2           | String    | Address line 2                                                                                   | PostalAddress.address2                                                                                                                                        |
| City                | String    | City                                                                                             | PostalAddress.city                                                                                                                                            |
| Country             | String    | Country                                                                                          | geo.geo\_code                                                                                                                                                 |
| State               | Unknown   | State or province                                                                                | PostalAddress.state\_province\_geo\_id                                                                                                                        |
| Zip                 | String    | Postal code                                                                                      | PostalAddress.postal\_code                                                                                                                                    |
| Order Type          | Number    | Order Type                                                                                       | Mapping based on Source                                                                                                                                       |
| Department          | Number    | Department                                                                                       | Mapping based on Source Name                                                                                                                                  |
| Krewe Sales Channel | Number    | Sales Channel                                                                                    | Mapping based on Source                                                                                                                                       |
| Price Level         | String    | Price level sent as custom for duplicate fields created due to discount other than discount code | default value "custom" for discount details rows and ProductStoreSetting.SettingValue where SettingTypeEnumId = 'PRICE\_LEVEL\_NETSUITE' for rest of the rows |

## Special handling

1. **Order Item Discount**-
   1. An extra record is sent for an order item if the item sent has an extra discount amount other than the discount due to discount\_code.
   2. This row does not contain line id field and price level is sent as "custom" for these fields.
2. **Limit on number of orders**-
   1. This flow returns only a limited number orders. If the external system has some limit on total number of orders in the output. It can be configured from the queryRecord processor.
