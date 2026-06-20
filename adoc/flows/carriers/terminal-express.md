# Terminal Express integration

Terminal Express is optimized for warehouse-to-consumer deliveries and relies on specific facility identifiers.

## Authentication
HotWax Commerce uses Basic Authentication (Username and Password) for Terminal Express requests.

## Mandatory fields
Terminal Express requires several specific geographic and facility fields:
* **BODEGA_ID:** Mapped from the `warehouseId` of the origin facility. This is mandatory for routing.
* **PROVINCIA, CANTON, DISTRITO:** These specialized geographic fields are extracted from the destination address.
* **LOGISTICA_INVERSA:** A flag configured in HotWax to enable or disable reverse logistics (returns)

## Configuration requirements
Set the `ClientId` and `ReverseLogistics` flags in the `Party Relationship Setting`. Without a valid `BODEGA_ID`, the integration will return an error.
