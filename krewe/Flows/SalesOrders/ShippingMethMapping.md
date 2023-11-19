# Shipping Methods
Shipping methods in Shopify are mapped directly to specific methods in HotWax, but NetSuite has certain shipping methods being reused to serve multiple methods in HotWax.
Krewe also adjusts these methods periodicially or during certain events such as sales. Because of this semi-frequent editing, they should have access to updating these mappings themselves.

## How they're setup in HotWax
Shipping methods are setup just like any other instance. The name of the shipping method is mapped to the name of the shipping method that is received from Shopify. This may not always be the value that is configured against it in NetSuite. Often times a single method in NetSuite may be servicing multiple shipping methods in Shopify.

When the shipping methods are configured, Shopify and HotWax are mapped 1:1 and the corresponding NetSuite shipping method is saved in the "Service Code" field of the shipping method. When a Shopify shipping method needs to be mapped to a different NetSuite shipping method, the value in the "Service Code" field needs to be updated in HotWax.

<!-- todo: identify the mappings that are actually used in production -->

## Mappings

| Shopify Value                             | HotWax ID             | Netsuite Value                             |
|-------------------------------------------|-----------------------|--------------------------------------------|
| Priority Shipping (3-5 Day)               | PRI_SHP_3DAY          | Priority Shipping (3-5 Day)                |
| FREE 2-Day Shipping                       | FRE_2_DAY_SHP         | 2-Day Shipping                             |
| FREE Standard Shipping (7-10 Days)        | FRE_STD_SHP_7DAY      | FREE Standard Shipping - Fedex Smartpost Select Lightweight |
| DHL api Express Worldwide                 | DHL_API_EXP_WW        | DHL Express Worldwide                      |
| FedEx International Priority®             | FDX_INT_PRI           | FedEx International Priority               |
| FedEx International Economy®              | FDX_INT_ECO           | FedEx International Economy                |
| Overnight Shipping                        | OVR_SHP               | FedEx Standard Overnight                   |
| FREE 2 Day Shipping                       | FRE_2DAY_SHP          | FedEx Home Delivery                        |
| FedEx 2Day                                | FDX_2DAY              | 2-Day Shipping                             |
| Standard Shipping                         | STD_SHP               | 2-Day Shipping                             |
| SecondDay                                 | SEC_DAY               | FREE FedEx 2-Day                           |
| Standard                                  | STANDARD              | 2-Day Shipping                             |
| EXPEDITED                                 | EXPEDITED             | 2-Day Shipping                             |
| SmartPost Standard Shipping (7-10 Days)   | SMP_STD_SHP_7DAY      | SmartPost Standard Shipping (7-10 Days)    |
| 2-Day Shipping                            | 2_DAY_SHP             | 2-Day Shipping                             |
| 2 Day Shipping                            | 2DAY_SHP              | 2-Day Shipping                             |
| 2-Day FedEx Shipping                      | 2_DAY_FDX_SHP         | 2-Day Shipping                             |
| FedEx International Priority Express      | FDX_INT_PRI_EXP       | FedEx International Priorit y              |
| FedEx International Connect Plus          | FDX_INT_CNT_PLS       | FedEx International Connect Plus           |
| FedEx Ground Shipping                     | FDX_INT_GRD_SHP       | FedEx Ground                               |
| 2-3 Day International Shipping            | 2DAY_INT_SHP          | FedEx International Connect Plus           |
| 2-5 Day International Shipping            | 5DAY_INT_SHP          | FedEx International Connect Plus           |
| 2 Day Shipping 67G                        | 2DAY_SHP_67G          | 2-Day Shipping 67G                         |
| 2 Day FedEx Shipping                      | 2DAY_FDX_SHP          | FedEx Home Delivery                        |
| 3-Day Shipping                            | 3_DAY_SHP             | 2-Day Shipping                             |
| 3 Day Shipping                            | 3DAY_SHP              | FedEx Home Delivery                        |
| Standard Ground Shipping                  | STD_GRD_SHP           | FedEx Home Delivery                        |
| Ground Shipping                           | GRD_SHP               | FedEx Home Delivery                        |
| Shipping                                  | SHP                   | USPS Shipping                              |

## XML Data
<ShipmentMethodType shipmentMethodTypeId="POS_COMPLETED" description="POS Completed"/>