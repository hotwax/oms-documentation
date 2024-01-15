# Requirement
1. Prepare the POS cash sale orders Feed CSV from HotWax to NetSuite.

   This is a sample JSON containing records of a POS cash sale orders feed-

   | Order Id        | Order Line Id | External Id   | Sales Channel   | Item                                      | Price | Amount | Quantity | Tax Code | Location           | Date       | Customer | Discount Item     | Rate    | Subsidiary | Address 1             | Address 2 | City            | Country | State | Zip   | Order Type | Department | Krewe Sales Channel | Price Level        | Shopify Order Number | Order Note                                                             |
   | --------------- | ------------- |---------------|-----------------|-------------------------------------------|-------|--------|----------|----------|--------------------| ---------- | -------- | ------------------| ------- |------------| --------------------- | --------- | --------------- | ------- | ----- | ----- | -----------| -----------| --------------------|--------------------|----------------------|------------------------------------------------------------------------|
   | "#KREWE37312"   | 00101         | KR10236       | POS Channel     | 19-08S BRETON &#124; Matte Oyster 24K     |       |        | 1.000000 | AVATAX   | 254                | 9/8/2023   | 5313849  |                   |         | 1          | 1,818 Magazine Street |           | New Orleans     | US      | LA    | 70130 | 6          | 212        | 12                  | Base Price (MSRP)  | 36,167               | New Exchange order @ 2023-12-14 11:27:56 exchange for order KR10236    |
   | "#KREWE37312"   | 00102         | KR10236       | POS Channel     | RX12-03 ORLEANS II &#124; Titanium        |       |        | 1.000000 | AVATAX   | 254                | 9/8/2023   | 5313849  |                   |         | 1          | 1,818 Magazine Street |           | New Orleans     | US      | LA    | 70130 | 6          | 212        | 12                  | Base Price (MSRP)  | 36,179               |                                                                        |
   | "#KREWE37310"   | 00101         | KR10237       | POS Channel     | 19-08S BRETON &#124; Matte Oyster 24K     |       |        | 1.000000 | AVATAX   | 372                | 9/8/2023   | 5313850  |                   |         | 1          | 619 Royal Street      |           | New Orleans     | US      | LA    | 70130 | 6          | 317        | 156                 | Base Price (MSRP)  |                      |                                                                        |
   | "#KREWE37307"   | 00101         | KR10238       | POS Channel     | 30-01S OCTAVIA &#124; Crystal + Black 24K |       |        | 1.000000 | AVATAX   | 376                | 9/8/2023   | 5313849  | SHOPIFY DISCOUNT  | -82.500 | 5          | Gansevoort Street     |           | New York        | US      | NY    | 10014 | 6          | 335        | 144                 | Base Price (MSRP)  | 36,123               |                                                                        |
   | "#KREWE37307"   | 00102         | KR10238       | POS Channel     | 19-08S BRETON &#124; Matte Oyster 24K     |       |        | 1.000000 | AVATAX   | 376                | 9/8/2023   | 5313849  | SHOPIFY DISCOUNT  | -82.500 | 5          | Gansevoort Street     |           | New York        | US      | NY    | 10014 | 6          | 335        | 144                 |                    |                      | New Exchange order @ 2023-12-14 11:27:56 exchange for order KREWE37307 |

## Implementation flow 
1. This feed will be generated using a SQL to fetch data from HotWax. SQL outputs the feed in JSON format
2. The generated feed has a limit on total number of Orders in each file as external system can not accept more than 25k records in a single file.
3. Then the feed undergoes a JOLT transformation where an extra object is added to the JSON if there is any discount on the same item other than the discount due to discount_code.
4. JOLT also does the mapping for fields- Order Type, Department and Sales channel based on the value of Source name field fetche through SQL from HC.
5. Then the format of feed is converted from JSON to CSV.
6. Then the feed is sent to an sftp location.

## Mapping of the fields of HC to NetSuite 
| Fields                        | Data Type | Description                                   | HC Field Mapping                 |
|-------------------------------|-----------|-----------------------------------------------|---------------------------------|
| Order Id                      | String    | Order ID                                      | OrderHeader.ORDER_NAME                    |
| Order Line Id                 | String    | Order Line ID                                 | OrderItem.ORDER_ITEM_SEQ_ID             |
| External Id                   | String    | External Order ID                             | OrderHeader.ORDER_ID                      |
| Sales Channel                 | String    | Description of the sales channel              | Enumeration.DESCRIPTION                    |
| Item                          | String    | Concatenated product and item description     | CONCAT(P.INTERNAL_NAME, OI.ITEM_DESCRIPTION) |
| Price                         | String    | Empty field (price calculated externally)     | Default empty                    |
| Amount          | Unknown   | Adjustments where discount is due to reason other than discount_code | adjustment.ITEM_DISC_AMOUNT             |
| Quantity                      | Unknown   | Quantity of items                             | OrderItem.QUANTITY                      |
| Tax Code                      | String    | Tax code                                      | "AVATAX"                         |
| Location                      | Number    | Location external ID                          | Facility.EXTERNAL_ID                    |
| Date                          | Date      | order date                                    | OrderHeader.ORDER_DATE in format D/M/YYYY |
| Customer                      | Unknown   | Customer ID                                   | PartyIdentification.ID_VALUE  where party_identification_type_id = 'NETSUITE_CUSTOMER_ID'|
| Discount Item                 | String    | Discount Code                                 | orderAdjustmentAttribute.ATTR_VALUE where ORDER_ADJUSTMENT_TYPE_ID = 'EXT_PROMO_ADJUSTMENT'|
| Rate                          | Numbwe    | Adjustments where discount is due to discount_code | order_adjustment.Rate                         |
| Subsidiary                    | String    | Subsidiary based on external ID               | Mapping based on Facility external id        |
| Address 1                     | String    | Address line 1                                | postalAddress.address1                      |
| Address 2                     | String    | Address line 2                                | PostalAddress.address2                      |
| City                          | String    | City                                          | PostalAddress.city                          |
| Country                       | String    | Country                                       | geo.geo_code                       |
| State                         | Unknown   | State or province                             | PostalAddress.state_province_geo_id         |
| Zip                           | String    | Postal code                                   | PostalAddress.postal_code                   |
| Order Type                    | Number    | Order Type                                    | Mapping based on Source           |
| Department                    | Number    | Department                                    | Mapping based on Source Name |
| Krewe Sales Channel           | Number    | Sales Channel                                 | Mapping based on Source   |
| Price Level                   | String    | Price level sent as custom for duplicate fields created due to discount other than discount code| default value "custom" for discount details rows and ProductStoreSetting.SettingValue where SettingTypeEnumId = 'PRICE_LEVEL_NETSUITE' for rest of the rows |


## Special handling
1. **Duplicate row**- 
    1. An extra row is sent for an order item if the item sent has an extra discount amount other than the discount due to discount_code.
    2. This row does not contain line id field and price level is sent as "custom" for these fields.

2. **Reattempt for the failed records**-
    1. There is an extra processor added that runs on daily frequency (once a day) to check for all the records that failed to sync with NetSuite.

3. **Discard flowfiles with zero records**-
    1. If the SQL generates an output with zero records, the empty flowfile goes forward.
    2. But in this flow it is handled that if the flowfile is empty then it gets terminated.

4. **Limit on number of orders**-
    1. This flow returns only a limited number orders. If the external system has some limit on total number of orders in the output. It can be configured from the queryRecord processor.