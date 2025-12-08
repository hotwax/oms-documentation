# Store Permissions

The `Store Permissions` tab allows you to configure specific settings that control how store associates interact with inventory data during counting. It includes two primary cards: `Quantity on Hand` and `Force Scan`.

## Quantity on Hand Card

The `Quantity on Hand` card includes a toggle for `Show Systemic Inventory`:

- `When enabled`, the system displays the current systemic inventory, showing the expected physical quantities at each location during inventory counting.
- `When disabled`, the systemic inventory values are hidden from store associates, ensuring they only see their manually counted inventory quantities.

## Force Scan Card

The `Force Scan` card includes a toggle for `Required Barcode Scanning`:

- `When enabled`, store associates are required to scan inventory barcodes in order to count inventory. Manual entry of inventory quantities is restricted to prevent errors.

Additionally, the `Barcode Identifier` dropdown allows the selection of the identifier used for barcode scanning:

- If the selected identifier is unavailable, the system will default to using the `Internal Name` for scanning, ensuring the process remains smooth.
