# All order adjustment types

Order adjustments are used to categorize different order-level charges. By storing all adjustments as types of adjustments that can be applied to the order, instead of including them in the order header, they can be extended based on the needs of custom implementations and integrations.

## Native adjustments

| Order Adjustment Type | Parent Type         | Description                                 |
|-----------------------|---------------------|---------------------------------------------|
| ADDITIONAL_FEATURE    |                     | Additional Feature                          |
| CGST                  | GST_TAX             | Central Goods and Services Tax              |
| DEPOSIT_ADJUSTMENT    |                     | Deposit                                     |
| DEPOSIT_REFUND        |                     | Deposit Refund                              |
| DISCOUNT_ADJUSTMENT   |                     | Discount                                    |
| DONATION_ADJUSTMENT   |                     | Donation                                    |
| DUTY                  |                     | Duty                                       |
| EXT_PROMO_ADJUSTMENT  |                     | External promotion adjustment               |
| EXT_SHIP_ADJUSTMENT   |                     | External shipping adjustment                |
| FEE                   |                     | Fee                                         |
| GST_TAX               |                     | Goods and Services Tax                      |
| IGST                  | GST_TAX             | Integrated Goods and Services Tax           |
| MISCELLANEOUS_CHARGE  |                     | Miscellaneous Charge                       |
| MKTG_PKG_AUTO_ADJUST  |                     | Marketing Package Adjustment               |
| OFF_INV_ADJUSTMENT    | DISCOUNT_ADJUSTMENT | Off Invoice Adjustment                      |
| PROMOTION_ADJUSTMENT  |                     | Promotion                                   |
| PYMNT_PROCESS_FEE     | FEE                 | Payment Processing Fee                      |
| REPLACE_ADJUSTMENT    |                     | Replacement                                |
| SALES_TAX             |                     | Sales Tax                                   |
| SGST                  | GST_TAX             | State Goods and Services Tax                 |
| SHIPPING_CHARGES      |                     | S&H                                        |
| SHIPPING_SALES_TAX    |                     | S&H Tax                                    |
| SURCHARGE_ADJUSTMENT  |                     | Surcharge                                  |
| UTGST                 | GST_TAX             | Union Territories State Goods and Services Tax|
| VAT_PRICE_CORRECT     |                     | VAT Price Correction                        |
| VAT_TAX               |                     | VAT Tax                                    |
| WARRANTY_ADJUSTMENT   |                     | Warranty                                   |