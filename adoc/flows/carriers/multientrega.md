# Multientrega integration

Multientrega uses a hybrid approach where HotWax Commerce generates the shipping label locally using FTL (FreeMarker Template Language) and Apache FOP (Formatting Objects Processor).

## Architecture
Requests are routed through the `Third Party Aggregator` service in Maarg. However, unlike other carriers that return a label image or URL, Multientrega relies on HotWax to render the label.

## Custom attribute mapping
Multientrega requires specific neighborhood details that aren't standard in basic address entities. HotWax maps these from `OrderAttribute` fields:
* **Barrio:** Neighborhood
* **Corregimiento:** Sub-district
* **Distrito:** District

## Label generation
The label is generated using the `MultientregaLabel.fo.ftl` template. Key features of the rendered label include:
* **Dynamic barcodes:** Supports either 1D barcodes or QR codes based on the `label.generate.qrcode.link` configuration
* **Business identification:** Displays the `businessId` retrieved from system properties
* **COD display:** Automatically toggles the "Tipo de pago" display between "Cobro contra entrega" and "Pagado" based on the order's payment preference
