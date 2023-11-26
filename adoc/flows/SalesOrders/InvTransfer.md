# Inventory Transfer Slip

This API is designed for creating inventory transfers from one store to another within the Retail Pro system. It facilitates the movement of products between stores, allowing for accurate tracking and management of inventory levels. Below are the key parameters and their descriptions:

- **SlipNo**: The unique slip number associated with the inventory transfer.

- **FromStore**: The code or identifier of the store from which the inventory is being transferred.

- **ToStore**: The code or identifier of the destination store where the inventory is intended to be transferred.

- **CreatedDate**: The date and time when the inventory transfer is created.

- **TotalQty**: The total quantity of items being transferred in the inventory transfer.

- **Items**: An array containing details about each item being transferred, including:

  - **UPC**: The Universal Product Code that uniquely identifies each product.
  
  - **Qty**: The quantity of the respective item to be transferred.

This API is essential for managing stock levels between different stores efficiently. By providing the necessary details, including the origin and destination stores along with specific product quantities, Retail Pro users can initiate and track inventory transfers seamlessly. This ensures accurate and up-to-date inventory management across various locations.

---
**Endpoint**

```https://<host>:<port>/api/v1/Transfer/Slip```

<details>
<summary>Body</summary>

```json
{
  "SlipNo": "",
  "FromStore": "",
  "ToStore": "",
  "CreatedDate": "",
  "TotalQty": 0,
  "Items": [
    {
      "UPC": "",
      "Qty": 0
    },
    {
      "UPC": "",
      "Qty": 0
    }
  ]
}
```
</details>

<details>
<summary>Sample Body</summary>

```json
{
  "SlipNo": "00000005",
  "FromStore": "SVA26",
  "ToStore": "SVA27",
  "CreatedDate": "2023-03-20T11:29:00",
  "TotalQty": 2,
  "Items": [
    {
      "UPC": "8720116122558",
      "Qty": 1
    },
    {
      "UPC": "8720116127799",
      "Qty": 1
    }
  ]
}
```
</details>