# Shipping Methods

When syncing orders to NetSuite it's very important to have the correct shipping methods mapped. If shipping methods are not mapped correctly the order import process may fail.

Here is a sample table of how shipping methods are mapped between Shopify HotWax and NetSuite.

| #   | Shopify Value                            | HotWax ID          | NetSuite Value                                      |
| --- | ---------------------------------------- | ------------------ | --------------------------------------------------- |
| 1   | Priority Shipping (3-5 Day)              | PRI_SHP_3DAY       | Priority Shipping (3-5 Day)                         |
| 2   | FREE 2-Day Shipping                      | FRE_2_DAY_SHP      | 2-Day Shipping                                     |
| 3   | FREE Standard Shipping (7-10 Days)       | FRE_STD_SHP_7DAY   | FREE Standard Shipping - Fedex Smartpost Select Lightweight |
| 4   | DHL api Express Worldwide                | DHL_API_EXP_WW     | DHL Express Worldwide                              |
| 5   | FedEx International Priority®            | FDX_INT_PRI        | FedEx International Priority                       |
| 6   | FedEx International Economy®             | FDX_INT_ECO        | FedEx International Economy                        |
| 7   | Overnight Shipping                       | OVR_SHP            | FedEx Standard Overnight                           |
| 8   | FREE 2 Day Shipping                      | FRE_2DAY_SHP       | FedEx Home Delivery                                |
| 9   | FedEx 2Day                               | FDX_2DAY           | 2-Day Shipping                                     |
| 10  | Standard Shipping                         | STD_SHP            | 2-Day Shipping                                     |
| 11  | SecondDay                                 | SEC_DAY            | FREE FedEx 2-Day                                   |
| 12  | Standard                                  | STANDARD           | 2-Day Shipping                                     |
| 13  | EXPEDITED                                 | EXPEDITED          | 2-Day Shipping                                     |
| 14  | SmartPost Standard Shipping (7-10 Days)  | SMP_STD_SHP_7DAY   | SmartPost Standard Shipping (7-10 Days)            |
| 15  | 2-Day Shipping                            | 2_DAY_SHP          | 2-Day Shipping                                     |
| 16  | 2 Day Shipping                            | 2DAY_SHP           | 2-Day Shipping                                     |
| 17  | 2-Day FedEx Shipping                      | 2_DAY_FDX_SHP      | 2-Day Shipping                                     |
| 18  | FedEx International Priority Express     | FDX_INT_PRI_EXP    | FedEx International Priority                       |
| 19  | FedEx International Connect Plus          | FDX_INT_CNT_PLS    | FedEx International Connect Plus                    |
| 20  | FedEx Ground Shipping                     | FDX_INT_GRD_SHP    | FedEx Ground                                       |
| 21  | 2-3 Day International Shipping            | 2DAY_INT_SHP       | FedEx International Connect Plus                    |
| 22  | 2-5 Day International Shipping            | 5DAY_INT_SHP       | FedEx International Connect Plus                    |
| 23  | 2 Day Shipping 67G                        | 2DAY_SHP_67G       | 2-Day Shipping 67G                                 |
| 24  | 2 Day FedEx Shipping                      | 2DAY_FDX_SHP       | FedEx Home Delivery                                |
| 25  | 3-Day Shipping                            | 3_DAY_SHP          | 2-Day Shipping                                     |
| 26  | 3 Day Shipping                            | 3DAY_SHP           | FedEx Home Delivery                                |
| 27  | Standard Ground Shipping                  | STD_GRD_SHP        | FedEx Home Delivery                                |
| 28  | Ground Shipping                           | GRD_SHP            | FedEx Home Delivery                                |
| 29  | Shipping                                  | SHP                | USPS Shipping                                      |
