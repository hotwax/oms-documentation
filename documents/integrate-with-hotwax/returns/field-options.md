## All return adjustment types

Return adjustments are used to categorize different return-level charges. By storing all adjustments as types of adjustments that can be applied to the return, instead of including them in the return header, they can be extended based on the needs of custom implementations and integrations.


| Return Adjustment Type | Parent Type        | Description                               |
|------------------------|--------------------|-------------------------------------------|
| RET_ADD_FEATURE_ADJ    |                    | Return Additional Feature                 |
| RET_DEPOSIT_ADJ        |                    | Return Deposit Adjustment                 |
| RET_DISCOUNT_ADJ       |                    | Return Discount                           |
| RET_DUTY_ADJ           |                    | RMA Duty                                  |
| RET_EXT_PRM_ADJ        |                    | Return External Promotion Adjustment      |
| RET_FEE_ADJ            |                    | Return Fee                                |
| RET_MAN_ADJ            |                    | Return Manual Adjustment                  |
| RET_MISC_ADJ           |                    | Return Miscellaneous Charges              |
| RET_MKTG_PKG_ADJ       |                    | Return Marketing Package Adjustment       |
| RET_PROMOTION_ADJ      |                    | Return Promotion                          |
| RET_REPLACE_ADJ        |                    | Return Replacement                        |
| RET_RMA_ADJ            |                    | RMA Fee Adjustment                        |
| RET_SALES_TAX_ADJ      |                    | Return Sales Tax                          |
| RET_SHIPPING_ADJ       |                    | Return S&H                                |
| RET_SURCHARGE_ADJ      |                    | Return Surcharge                          |
| RET_VAT_PC_ADJ         |                    | Return VAT Price Correction               |
| RET_VAT_TAX_ADJ        |                    | Return VAT Tax                            |
| RET_WARRANTY_ADJ       |                    | Return Warranty                           |

## Return channels

| Enum Id            | Enum Type Id     | Description            | Enum Name         | Sequence Id |
|---------------------|------------------|------------------------|-------------------|-------------|
| ECOM_RTN_CHANNEL   | RETURN_CHANNEL   | Ecom Return Channel    |                   | 01          |
| POS_RTN_CHANNEL    | RETURN_CHANNEL   | POS Return Channel     |                   | 02          |

