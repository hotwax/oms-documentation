# Drivin integration

Drivin focuses on delivery orchestration and requires a schema-based approach for order posting.

## Authentication
HotWax Commerce uses an `X-API-Key` header for all requests to Drivin. The API key is managed within the `Party Relationship Setting`.

## Schema management
Drivin requires a `schema_code` for every request. HotWax uses the `DrivInGetOrCreateSchema` service to manage these codes:
1. **Lookup:** The system first calls the `/api/get-schemas` endpoint to see if a schema already exists for the origin warehouse (using its `facilityId` as the code).
2. **Creation:** If no matching schema is found, HotWax automatically creates one with default parameters (9 AM–9 PM operation hours, 10-minute service time per stop).

## Order posting
Instead of a simple label request, HotWax posts full order details to Drivin, including:
* **Client details:** Name, phone, and coordinates (latitude/longitude)
* **Item details:** Description, quantity, and weight per parcel
* **Custom attributes:** Payment method and total shipment value are passed in custom fields (`custom_1`, `custom_4`).
