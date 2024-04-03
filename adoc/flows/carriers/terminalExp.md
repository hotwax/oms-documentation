---
description: >-
  Discover how TerminalExpress, a shipping carrier is involved in ADOC
  implementation.
---

# TerminalExpress

Terminal Express provides two endpoints for creating shipping labels, allowing flexibility based on your requirements:

## 1. Create Order by Postal Code

**Endpoint:** `https://sandboxlte.laterminalexpress.com/api/Paquetes/crearOrdenPostal/`

This endpoint allows you to create shipping labels by specifying the recipient's postal code. Use this option when you have precise postal code information for the delivery destination. Include the necessary details in your API request, and Terminal Express will generate the shipping label accordingly.

## 2. Create Order by Locale Names

**Endpoint:** `https://sandboxlte.laterminalexpress.com/api/Paquetes/crearOrden/`

If you prefer a more generalized approach, this endpoint allows you to create shipping labels using locale names instead of ZIP codes. Provide locale information in your API request to Terminal Express, enabling a broader scope for label creation. This option is useful when ZIP code details are not available or when a more general delivery area is sufficient.

**Integration Choice**

In our Terminal Express integration, we've chosen the postal code API for creating shipping labels to simplify order processing. Rather than relying on detailed geographic data like province, canton and department, the OMS syncs the postal code information from Shopify metafields associated with each order and saves it in order attributes. During order approval, the postal code is moved from the order attributes and saved in the actual postal code field of the `ship to` address of the order.

This minimizes the data we need to manage, ensuring a streamlined integration with Terminal Express. By directly utilizing postal codes for label generation, we eliminate the need to transmit Terminal Express codes for province, canton, and department for every order, resulting in a more error free label generation experience.

**Mappings**

| HotWax Commerce Field                                                                                    | Terminal Express Field | Description                                                                                       |
| -------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------- |
| ${postalCode!}                                                                                           | "COD\_POSTAL"          | The postal code extracted from HotWax Commerce's order and provided to Terminal Express.          |
| ${packages.get(0).weight!!}                                                                              | "PESO"                 | The weight of the first package in the HotWax Commerce shipment, sent to Terminal Express.        |
| ${clientId!}                                                                                             | "CLIENTE\_ID"          | The unique identifier of the client in HotWax Commerce, used for tracking purposes.               |
| ${warehouseId!}                                                                                          | "BODEGA\_ID"           | The identifier of the warehouse or location from which the HotWax Commerce order is shipped.      |
| "${shipToName!}"                                                                                         | "NOM\_CLIENTE\_FINAL"  | The final recipient's name for the shipment in Terminal Express.                                  |
| "${shipToPhone!}"                                                                                        | "TEL\_CLIENTE\_FINAL"  | The phone number of the final recipient for communication with Terminal Express.                  |
| "${shipToAddressLine1!}, ${shipToAddressLine2!}, ${shipToCity!}, ${shipToState!}, ${shipToCountryCode!}" | "DIR\_CLIENTE\_FINAL"  | The complete address information from HotWax Commerce, concatenated and sent to Terminal Express. |
| "${reverseLogistics!}"                                                                                   | "LOGISTICA\_INVERSA"   | Indicates whether reverse logistics are required, as specified in HotWax Commerce.                |

This mapping ensures that relevant information from HotWax Commerce is accurately transmitted to Terminal Express, allowing for the seamless generation of shipping labels based on Terminal Express's API requirements. Adjustments can be made based on any specific requirements or variations in field naming conventions within HotWax Commerce.

<details>

<summary>Sample Request</summary>

```json
'{
    "COD_POSTAL": "20101",
    "PESO": "3.00",
    "CLIENTE_ID": "1506",
    "NOM_CLIENTE_FINAL": "MIENVIO DE MEXICO",
    "TEL_CLIENTE_FINAL": "5551814040",
    "DIR_CLIENTE_FINAL": "Latam Parque Logistico Coyol, 500, Bodega En Ciruelas Alajuela ALAJUELA Alajuela5",
    "LOGISTICA_INVERSA": "N",
    "BODEGA_ID": "2841"
}'
```

</details>
