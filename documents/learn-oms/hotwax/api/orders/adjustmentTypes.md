---
description: >-
  Learn how order adjustments categorize various order-level charges for
  streamlined management.
---

# Order Adjustments

Order adjustments are used to categorize different order-level charges. By storing all adjustments as types of adjustments that can be applied to the order, instead of including them in the order header, they can be extended based on the needs of custom implementations and integrations.

## Native adjustments

| Order Adjustment Type   | Parent Type          | Description                                    |
| ----------------------- | -------------------- | ---------------------------------------------- |
| ADDITIONAL\_FEATURE     |                      | Additional Feature                             |
| CGST                    | GST\_TAX             | Central Goods and Services Tax                 |
| DEPOSIT\_ADJUSTMENT     |                      | Deposit                                        |
| DEPOSIT\_REFUND         |                      | Deposit Refund                                 |
| DISCOUNT\_ADJUSTMENT    |                      | Discount                                       |
| DONATION\_ADJUSTMENT    |                      | Donation                                       |
| DUTY                    |                      | Duty                                           |
| EXT\_PROMO\_ADJUSTMENT  |                      | External promotion adjustment                  |
| EXT\_SHIP\_ADJUSTMENT   |                      | External shipping adjustment                   |
| FEE                     |                      | Fee                                            |
| GST\_TAX                |                      | Goods and Services Tax                         |
| IGST                    | GST\_TAX             | Integrated Goods and Services Tax              |
| MISCELLANEOUS\_CHARGE   |                      | Miscellaneous Charge                           |
| MKTG\_PKG\_AUTO\_ADJUST |                      | Marketing Package Adjustment                   |
| OFF\_INV\_ADJUSTMENT    | DISCOUNT\_ADJUSTMENT | Off Invoice Adjustment                         |
| PROMOTION\_ADJUSTMENT   |                      | Promotion                                      |
| PYMNT\_PROCESS\_FEE     | FEE                  | Payment Processing Fee                         |
| REPLACE\_ADJUSTMENT     |                      | Replacement                                    |
| SALES\_TAX              |                      | Sales Tax                                      |
| SGST                    | GST\_TAX             | State Goods and Services Tax                   |
| SHIPPING\_CHARGES       |                      | S\&H                                           |
| SHIPPING\_SALES\_TAX    |                      | S\&H Tax                                       |
| SURCHARGE\_ADJUSTMENT   |                      | Surcharge                                      |
| UTGST                   | GST\_TAX             | Union Territories State Goods and Services Tax |
| VAT\_PRICE\_CORRECT     |                      | VAT Price Correction                           |
| VAT\_TAX                |                      | VAT Tax                                        |
| WARRANTY\_ADJUSTMENT    |                      | Warranty                                       |
