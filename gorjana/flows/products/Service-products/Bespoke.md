# Bespoke

Gorjana offers engraving services for certain products, with inventory and fulfillment handled only at warehouses due to processing needs.

## Process Flow

### 1) Ordering Bespoke Products on Shopify

#### Customization Options for Customers:
- **Custom Text**: Customers can personalize items with custom text, such as names or short messages (e.g., "Stella") with a ❤ symbol.
- **Restrictions**: Special characters (like-"😊") are not allowed for bespoke items. Only letters and the symbol "❤" are permitted.

#### Character Limits:
- **Rings**: Can accommodate up to 3 characters.
- **Necklaces**: Can accommodate up to 10 characters.

#### Special Symbols:
- **Rings**: Only one heart symbol is allowed to be engraved on a ring. No other characters are allowed with it.
- **Necklaces**: Can feature up to 10 heart symbols (❤) or a combination of ❤ and letters.

#### Order Item Details:
- The custom text, font, and symbol are stored at the item level within the product properties on Shopify.

### 2) Importing Orders to OMS

#### Order Import Process:
- Orders from Shopify are imported into the Order Management System (OMS) through a NiFi flow (**Custom Order Import**).
- A groovy script within the flow processes the order details and creates an order item attribute for each bespoke order.

#### OMS Order Item Attributes:
- The bespoke details, including the custom text and font, are stored in **order item attributes** in OMS.

### 3) Bespoke Orders in NetSuite

#### Custom Fields for Bespoke Orders:
- The bespoke details (font and text) are stored in a custom field (**Option**) in NetSuite.
- These fields capture both the text and the font family used for customization.

#### Visibility on Packing Slips:
- The details are also included on the packing slip, ensuring clear communication during fulfillment.

### Example of Shopify JSON:
```json
{
  "product_id": 7870610899075,
  "properties": [
    {
      "name": "Text",
      "value": "KS ♡ 1968"
    }
  ]
}
```
<details>
<summary> <b> Supported Fonts for Engraving:</b></summary>
 
- Helvetica Custom  
- Custom Script  
- Avant Garde Custom  
- Century Custom  
- Roman Monogram (restricted to certain SKUs, does not support 🤍)

</details>
