# Created Orders Feed 

## Requirement

The objective of this requirement is to implement an automated system for sending the Created Orders Feed to Netsuite. The feed should include information about all the sales orders in created status with Netsuite customer type party identification.

This is a sample CSV containing records of a Created Orders feed-

| Order Id      | Order Line Id | External Id | Sales Channel         | Item  | Price | Amount | Quantity | Shipping Method     | Shipping Cost | Tax Code | Shipping Tax Code | Date      | Customer | Addressee   | Address 1                     | Address 2 | City       | State | Country | Zip   | Email                             | Phone          | Tag | Closed | Discount Item         | Rate | Subsidiary | Order Type | Department | Krewe Sales Channel | Price Level | Billing Addressee | Billing Address1                 | Billing Address 2 | Billing City | Billing State | Billing Country | Billing Zip | Billing Phone  | HC Shopify Sales Order Id | Order Note               |
|---------------|---------------|-------------|-----------------------|-------|-------|--------|----------|----------------------|---------------|----------|---------------------|-----------|----------|-------------|------------------------------|-----------|------------|-------|---------|-------|-----------------------------------|----------------|-----|--------|------------------------|------|------------|------------|------------|----------------------|-------------|-------------------|-----------------------------------|-------------------|--------------|---------------|------------------|-------------|-----------------|-----------------------------|--------------------------|
| "#KREWE37479" | 00101         | KRWE10181   | Draft Orders Channel  | 110   |       |        | 1.000000 | FedEx Home Delivery | 0.000         | AVATAX   | AVATAX             | 12/6/2023 | 5320866  | Shruti K    | 18327 Johnnie B Hall Memorial Highway |           | Rosepine    | LA    | US      | 70659 | shruti.khandelwal@hotwax.co       |               |     |        |                        | 1    | 1          | 203        | 1          | Base Price (MSRP)    | Shruti K       | 18327 Johnnie B Hall Memorial Highway |                   | Rosepine      | LA            | US               | 70659       | 504-684-2939    | 5497412354248               |                           |
| "#KREWE37478" | 00101         | KRWE10182   | Draft Orders Channel  | 3115  | 50.000| 1.000  | 1.000000 | FedEx Home Delivery | 0.000         | AVATAX   | AVATAX             | 11/28/2023| 5313850  | Sonam Vohra | Baker City                     |           | Baker City  | OR    | US      | 97814 | sovohra12@gmail.com              | 1 831 6265757  |     |        | Custom                 | 1    | 1          | 203        | 1          | Custom              | Sonam Vohra    | Baker City         |                               |                   | Baker City    | OR            | US               | 97814       | 504-684-2939    | 5480949219528               |                           |
| "#KREWE37478" | 00102         | KRWE10182   | Draft Orders Channel  | 40677 |       |        | 1.000000 | FedEx Home Delivery | 0.000         | AVATAX   | AVATAX             | 11/28/2023| 5313850  | Sonam Vohra | Baker City                     |           | Baker City  | OR    | US      | 97814 | sovohra12@gmail.com              | 1 831 6265757  |     |        |                        | 1    | 1          | 203        | 1          | Base Price (MSRP)    | Sonam Vohra    | Baker City         |                               |                   | Baker City    | OR            | US               | 97814       | 504-684-2939    | 5480949219528               |                           |

## Design and Decisions

Created orders feed is generated using NiFi. Since we already have Brokered Order Items feed in Moqui, having an another feed for created orders will lead to repetetive code and another history entity will have to be maintained. Also the requirement is very specific to Netsuite Integration. Thus the new feed is created in NiFi instead of Moqui.

An extra row is sent for an order item if the item sent has an extra discount amount other than the discount due to discount_code. This row does not contain line id field and price level is sent as "custom" for these fields.

## Implementation flow 
The generation of the feed begins with the retrieval of data from HotWax using SQL, which outputs the feed in JSON format. To comply with Netsuite's limitations, the feed is restricted to a maximum of 25,000 records per file. 

Subsequently, a JOLT transformation is applied to the JSON feed, introducing an additional JOSN object in cases where there is a discount on an item beyond the discount associated with a discount code. 

Following this, the feed undergoes a check for required fields, ensuring that each order item contains all the mandatory information necessary for synchronization with Netsuite. Any order item lacking essential details is excluded from further processing, and a report detailing these discrepancies is generated.

The format of the feed is then converted from JSON to CSV before being transmitted to a predefined SFTP location for further handling.

## NiFi Flow

Below is the step wise NiFi processors configuration-

#### 1. ExecuteSQLRecord

The ExecuteSQLRecord processor uses SQL query to fetch data to prepare Created Orders Feed.

#### 2. RouteOnAttribute

This processor discards the files with zero records. Zero records files are generated when there are no eligble records for the feed.

#### 3. QueryRecord

The QueryRecord processor limits the number of orders in a single file. This is required as the Netsuite system can not accept more than 25 thousands records.

#### 4. JoltTransformJSON

The JoltTransformJSON processor introduces an additional JOSN object in cases where there is a discount on an item beyond the discount associated with a discount code. 

#### 5. QueryRecord

The QueryRecord processor separates the orders with mandatory fields and orders without mandatory fields required by Netsuite.

#### 6. UpdateAttribute

The UpdateAttribute processor is used to update the file name of Created Orders Feed file.

#### 7. PutSFTP

The PutSFTP processor is used to put the Created Orders Feed file at the SFTP.


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
