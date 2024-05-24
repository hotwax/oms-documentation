# ORSI Brokering logic

Facility sequence - Retail Warehouse, Outlet Warehouse, Retail Store, Outlet Store


1. System prioritizes orders eligible for brokering by:
    * NEXT_DAY orders with the LoyaltyPlusOrder tag have the highest priority.
    * Remaining NEXT_DAY orders without tag have priority.
    * SECOND_DAY with LoyaltyOrder tag.
    * Remaining SECOND_DAY orders without tag have priority.
    * STANDARD order priority.

2. After the list is fetched, the system prioritizes orders eligible for brokering by Order Date, orders with early order date are brokered first.

3. For multiple line items system checks whether all the order items are available at one facility, if not then the order is split into multiple ship groups

4. Order with 1 line item
- **SM Pass, Loyalty, Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If store is nearest to customers location than warehouse, the order will be brokered to the store and vice versa
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the retail warehouse irrespective of their inventory count
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the retail store irrespective of their inventory count
    * If the inventory is only available at two retail stores, then in that case system will broker the order to the store with inventory fulfilling the threshold criteria and if none of the stores are fulfilling the threshold criteria in that case the order will be brokered to the store which is nearest to the customers location

5. Order with Multi-line items 
- **SM Pass, Loyalty, Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If store is nearest to customers location than warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * The system first checks if all the items are available at any of the warehouses. If not, it then checks if all items are available at a single store.
    * In case all items are not present at a single location, then the order is split into multiple ship groups.
    * If any item is available at a warehouse, it is directed there. For the remaining items, the system checks which store has all the items and has inventory in hand greater than or equal to 4.
    * If no store meets the inventory in hand criteria, the order items are then brokered to the store closest to the customer's location.

6. reBrokering:
- **SM Pass, Loyalty, Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If store is nearest to customers location than warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the retail store irrespective of their inventory count
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the retail warehouse irrespective of their inventory count

7. Unfillable brokering
    * If the order inventory is not available at any facility then the item will be marked as unfillable and auto-cancel date will be set
    * Next day if inventory is available in that case unfillable orders will be picked on priority by unfillable brokering
- **SM Pass, Loyalty, Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If store is nearest to customers location than warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the retail store irrespective of their inventory count
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the retail warehouse irrespective of their inventory count




# SendSale Orders Brokering Logic

Facility sequence - Outlet Warehouse, Outlet Store, Retail Warehouse, Retail Store, 


1. System pulls orders eligible for brokering by Order Date, orders with early order date are brokered first
2. For multiple line items system checks whether all the order items are available at one place, if not then the order is split into multiple ship groups
3. Order with 1 line item
- **Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If outlet store is nearest to customers location than outlet warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the outlet store
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the outlet warehouse
4. Order with Multi-line items 
- **Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If outlet store is nearest to customers location than outlet warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the outlet store
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the outlet warehouse
5. reBrokering:
- **Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If outlet store is nearest to customers location than outlet warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the outlet store
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the outlet warehouse
6. Unfillable brokering
    * If the order inventory is not available at any facility then the item will be marked as unfillable and auto-cancel date will be set
    * Next day if inventory is available in that case unfillable orders will be picked on priority by unfillable brokering
- **Expedited Shipping**:
    * Order will be brokered to the nearest facility on the basis of proximity from customer’s zip code
    * If outlet store is nearest to customers location than outlet warehouse, the order will be brokered to the store
- **Standard Shipping**:
    * If the inventory is available at both store and warehouse, the order will be brokered to the warehouse
    * If the inventory is available at retail and outlet stores, then the order will be brokered to the outlet store
    * If the inventory is available at retail and outlet warehouse, the order will be brokered to the outlet warehouse
