# Scenarios

Order fulfillment scenarios and how SM expects routing to work for them:

Absolutely! Here's a revised version of the routing scenarios, formatted with Markdown tables and organized for better readability:

## Steve Madden Order Brokering Scenarios & Logic

**Understanding the Threshold Criteria:**

*   A product meets the **threshold criteria** if its available inventory at a store is **greater than or equal to 4 units**.
*   The system aims to fulfill as many items as possible from a single location.

**Scenario Table**

Absolutely! Here's a revised version of the table with real-world retail examples to illustrate each scenario:

## Steve Madden Order Brokering Scenarios & Logic

**Understanding the Threshold Criteria:**

*   A product meets the **threshold criteria** if its available inventory at a store is **greater than or equal to 4 units**. This is to ensure a store has enough stock to handle potential demand and avoid frequent stockouts.
*   The system aims to fulfill as many items as possible from a single location to minimize shipping costs and consolidate packaging.

**Scenario Table**

| Scenario | Order Items                       | Warehouse Availability                    | Store Availability (Zone)                            | Threshold Met? (Zone)                   | Brokering Decision                                                                                                                                                                | Real-World Example                                                                                                                                                               |
| ------- | --------------------------------- | ------------------------------------------ | ----------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1       | 5 pairs of shoes                   | 3 pairs                                     | 2 (Zone 8), 2 (Zone 5)                             | Zone 8: 1 pair                             | 3 pairs shipped from WH, 2 pairs from Zone 8 store                                                                                                                                 | A customer orders 5 different shoe styles. The warehouse has 3 in stock, while two different stores each have one of the remaining styles with enough stock to meet the threshold.  |
| 2       | 5 handbags                        | 3                                         | 2 (Zone 8), 2 (Zone 5)                             | Zone 8: Both handbags                     | 3 handbags shipped from WH, 2 handbags from Zone 8 store                                                                                                                         | A customer orders multiple handbags, some of which are available in the warehouse and the rest are available in a store with ample stock of each.                                     |
| 3       | 5 accessories (hats, scarves, etc.) | 3                                         | 2 (Zone 8), 2 (Zone 5)                             | Zone 5: 1 item, Zone 8: 1 item             | 3 accessories shipped from WH, 2 accessories from Zone 5 store                                                                                                                     | A customer orders a variety of accessories. The warehouse has some in stock, and two stores each have one of the remaining items, both meeting the threshold.                          |
| 4       | 5 limited edition sneakers         | None                                      | All (Zone 6), All (Zone 8)                         | Zone 8: 1 pair of sneakers                 | All 5 pairs shipped from Zone 6 store                                                                                                                                               | A customer orders limited edition sneakers only available in stores. One store has enough stock of one style to meet the threshold, but the other store has enough of all styles.   |
| 5       | 1 designer handbag                 | None                                      | Zone 6 (<4), Zone 8 (>=4)                        | Zone 8                                       | Designer handbag shipped from Zone 6 store                                                                                                                                        | A customer orders a high-demand handbag available in limited quantities in two stores. One store has enough to meet the threshold, while the other has less than 4.                   |
| 6       | 5 pairs of boots                   | None                                      | All (Zone 5, 6, 8)                             | Zone 8: 1 pair of boots                   | All 5 pairs shipped from Zone 5 store                                                                                                                                               | A customer orders several boots, all available in multiple stores. One store has enough of one style to meet the threshold, but the system prioritizes shipping all items from one place. |
| 7a      | 2 belts                            | None                                      | Both (Zone 5, 6, 8)                            | None                                        | Both belts shipped from Zone 8 store                                                                                                                                              | A customer orders belts only available in outlet stores. Neither store meets the threshold, so the outlet is prioritized over retail.                                                   |
| 7b      | 2 belts                            | None                                      | Both (Zone 5, 6, 8)                            | Zone 8: 1 belt                             | Both belts shipped from Zone 8 store                                                                                                                                              | A customer orders belts only available in outlet stores. One store has enough stock of one belt to meet the threshold.                                                                |
| 8       | 2 pairs of sandals                   | Both pairs                                | Both (Zone 5, 6, 8)                            | Warehouse (N/A for warehouses)           | Both pairs of sandals shipped from the warehouse                                                                                                                                    | A customer orders sandals that are in stock both in the warehouse and in several stores. The warehouse is always prioritized.                                                       |
| 9       | 2 wallets                         | 1 wallet                                   | 1 wallet (Zone 5, 8)                         | None                                        | 1 wallet shipped from warehouse, 1 wallet from the nearest outlet store                                                                                                             | A customer orders two wallets. The warehouse has one in stock, and the other is available in two outlet stores.                                                                        |
| 10      | 2 hats                             | Both (Outlet WH, Retail WH)                | Both (Outlet Store, Retail Store)                 | N/A (multiple warehouses)                | Both hats shipped from Outlet Warehouse                                                                                                                                            | A customer orders hats that are available in multiple locations, including warehouses and stores. The system prioritizes the outlet warehouse over the retail warehouse and stores.  |
| 11      | 2 scarves                         | Retail WH (<3)                            | Both (Outlet Store, Retail Store)                 | Stores meet the threshold                 | Both scarves shipped from Retail Warehouse                                                                                                                                          | A customer orders scarves available in the retail warehouse (with low stock) and multiple stores that meet the threshold. The system chooses the warehouse to avoid splitting the order. |

I hope these real-world examples make the scenarios clearer and easier to understand!


**Key Brokering Rules**

1.  **Warehouse Priority:** If items are available in a warehouse, they are always prioritized.
2.  **Outlet vs. Retail:** If no warehouse has the items, outlet stores are prioritized over retail stores.
3.  **Threshold Fulfillment:** If multiple stores have the items, the store that meets the threshold criteria for more items is preferred.
4.  **Maximum Inventory:** If multiple stores meet the threshold, the store with the most inventory is chosen.
5.  **Nearest Store:** If no other criteria apply (e.g., no store meets the threshold), the nearest store is selected.