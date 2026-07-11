# Gift Wrapping at Gorjana

Gorjana offers customers the option to add a personal touch to their orders by selecting gift wrapping for their items.

## Gift Wrap Process

- **Selecting Gift Wrap Items:** Customers select the items they want to gift wrap and choose whether they want the items wrapped together or separately.

- **Choosing the Wrapping Style:** Customers select the gift wrap design (e.g., "With Love").

- **Adding a Gift Note (Optional):** Customers have the option to add a personalized note that will appear on the gift.

## Order Handling:
The order handling process smoothly manages gift wrapping choices from Shopify to OMS and then to NetSuite, making the fulfillment process efficient and automated.

### 1. Shopify Order Properties:
Gift wrap selections are stored in Shopify with following details:
- **Wrapper Name**: Indicates the selected wrapper (e.g., "With Love") for the item in the order stored in line items properties.

- **Gift Wrap Option**: Indicates whether the items are wrapped together or separately, stored in the note attribute of the Shopify JSON (e.g., "Gift Wrap Items Together").

- **Gift Wrap Note**: Contains the personalized message from the customer, found in the order note.

### 2. Order Import into HotWax OMS:
Placed orders are imported into OMS through the "Custom Order Import" NiFi flow, where a groovy script checks the order details. The relevant properties are then added as order item attributes.

- **If the order includes "Gift Wrap Together"**: The first item's external ID is used as a reference, and all other items with the "Gift Wrap" property are grouped together using this ID.

- **If the order specifies "Gift Wrap Separately"**: The "Gift Wrap" property is added to each item individually.

### 3. Gift Wrap Handling in NetSuite:
In NetSuite, the gift wrap details are stored as follows:

#### Header Level Details:
- **Memo (Message Note)**: Contains the Gift Wrap Note (personalized message).

- **Custom Gift Wrap Option**: Indicates whether the items are to be wrapped together or separately.

#### Item Level Details:
- **Gift Wrap**: Yes (indicates the item is gift wrapped).

- **Gift Wrapper Text**: Specifies the selected wrapping style (e.g., "With Love").

---
<details>
  <summary> <h3>Sample of Shopify JSON:</h3></summary>

```json
{
  "order": {
    "note": "happy birthday",
    "note_attribute": [
      {
        "name": "Gift Wrap Option",
        "value": "Gift Wrap Items Together"
      }
    ],
    "line_items": [
      {
        "properties": [
          {
            "name": "Gift Wrap",
            "value": "With Love"
          }
        ]
      }
    ]
  }
}
```
</details>


