---
description: >-
  Discover how New Era Caps Japan handles fulfillment with carrier E-Hidden 3,
  utilizing manual CSV generation for shipping label creation.
---

# E Hidden 3 Feed

New Era Caps store fulfillment carrier is E-Hidden 3. This carrier does not offer a file based or API based interface for the OMS to fetch shipping labels from. Instead New Era Caps generates a CSV of packed orders from the fulfillment app which can be used to upload into E-Hidden 3 manually.

## Packed orders

To enable store staff to easily generate CSVs in the format that they need for E-Hidden 3, they leverage the custom header mapping function of the fulfillment app which lets them map the out of the box packed order feed from the fulfillment application to the format required by their carrier.

Here is a smaple table along with the Japanese headers translated to English and sample values:

| Japanese Header | English Translation                        | Original Data      |
| --------------- | ------------------------------------------ | ------------------ |
| お届け先コード取得区分     | Shipping Code Acquisition category         |                    |
| お届け先コード         | Shipping Code                              |                    |
| お届け先電話番号        | Shipping Phone                             | 090-1234-5678      |
| お届け先郵便番号        | Shipping Zip Code                          | 111-8611           |
| お届け先住所１         | Shipping Address 1                         | 東京都台東区柳橋           |
| お届け先名称１         | Shipping Name 1                            | Ｓａｋａｍｏｔｏテスト　Ｔａｋａｒａ |
| お客様管理番号         | Customer Control Number                    |                    |
| お客様コード          | Customer Code                              |                    |
| 部署ご担当者コード取得区分   | Department staff Code Acquisition category |                    |
| 部署ご担当者コード       | Department staff Code                      |                    |
| 部署ご担当者名称        | Department staff Name                      |                    |
| 荷送人電話番号         | Shipper Phone                              | 03-4405-4929       |
| ご依頼主コード取得区分     | Client Code Acquisition category           |                    |
| ご依頼主コード         | Client Code                                |                    |
| ご依頼主電話番号        | Client Phone                               | 153-0063           |
| ご依頼主郵便番号        | Client Zip Code                            | 東京都目黒区テスト１         |
| ご依頼主住所１         | Client Address 1                           | 目黒２-１１-３　２Ｆ        |
| ご依頼主名称１         | Client Name                                | Ｆｌａｇｓｈｉｐ　デモストア     |
| 荷姿              | Packaging Style                            |                    |
| 品名１             | Line Item 1                                | Ｂｌｕｅ　Ｔ-Ｓｈｉｒｔ       |
| 荷札荷姿            | Packaging Label                            |                    |
| 荷札品名１           | Label Line Item 1                          |                    |
| 出荷個数            | Shipment quantity                          | 1                  |
| スピード指定          | Delivery speed Type                        | 0                  |
| クール便指定          | Cool Shipping                              | 1                  |
| 配達日             | Delivery Date                              |                    |
| 配達指定時間帯         | Delivery Time zone                         |                    |
| 配達指定時間（時分）      | Delivery Time                              |                    |
| 代引金額            | COD Fee                                    | 4300               |
| 消費税             | Tax                                        | 273                |
| 決済種別            | Payment Type                               | 0                  |
| 元着区分            | Prepayment Classification                  |                    |
| メールアドレス         | Email                                      |                    |
| 出荷日             | Shipping Date                              |                    |
| お問い合せ送り状No.     | Tracking Number                            |                    |

### Field mappings

**Cool Shipping:** Always send `001`. New Era Caps doesn't need refridgerated shipping, their products are cool on their own.

* 001 : No data
* 002 : Chilled product
* 003 : Frozen product

**COD Fee:** This is the COD fee found in the Shopify order note attributes. To learn more about how these are saved in HotWax sync th

**Tax:**

{% hint style="danger" %}
Which taxes is this? Item VAT or order level shipping tax?
{% endhint %}

**Payment type:** Fixed value of 0

0 ：No data 1 ：All accepted 2 ：Only Cash 3 ：Debit and Credit

**Client Information:** Client information reffers to the billing information of an order.

## Import tracking codes

Once tracking codes are generated for orders from the carrier’s portal, the store staff will reupload it into the fulfillment application. The app will then automatically save these tracking codes to the order shipments allowing them to be automatically fulfilled at the end of the day using the `Ship Packed Orders` job in the OMS.

Before using HotWax Commerce, the store fulfillment team would upload the file of tracking codes into an app called JOC (Japan Order CSV) which communiacated those tracking codes to Shopify.

{% hint style="danger" %}
Currently we do not have a sample file that is outputted from E Hidden 3 that will be mapped to the HotWax import tracking code format.
{% endhint %}
