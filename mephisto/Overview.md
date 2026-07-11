# **Project Overview**

## **1\. Introduction**

Mephisto is a footwear company specializing in high-quality shoes. The company operates through a combination of corporate-owned stores and independently owned partner stores. This document provides an overview of Mephisto's business operations, structure, and current systems in place for inventory management, order fulfillment, and returns processing.

## **2\. Business Operations and Structure**

### **2.1 Corporate Stores**

- **Locations**: Mephisto owns and operates five corporate stores located in:  
    
  - New York City (three stores)  
  - Nashville  
  - Las Vegas


- **Management**: These stores are fully managed by Mephisto Corporation and serve as primary retail outlets for their products.

### **2.2 Partner Stores**

- **Ownership**: Partner stores are exclusively Mephisto-branded but are owned and managed by independent retailers.  
    
- **Inventory Supply**: Independent retailers purchase inventory from Mephisto at wholesale pricing.  
    
- **Operations**: While they operate under the Mephisto brand, these stores function independently from the corporate structure.

### **2.3 Inventory Management**

- **Current System**: Mephisto uses Quivers for inventory management, order processing, and distribution.  
    
- **Safety Stock**: An amount of inventory is held back as safety stock to account for discrepancies and is not displayed online.  
    
- **Model Stock/Reorder Point**: Minimum inventory levels are set for each location to trigger reordering processes.  
    
- **On-Hand Inventory Visibility**: Real-time tracking of inventory by location is essential, with the ability to view historical inventory states (e.g., inventory levels from three days prior).

### **2.4 Order Fulfillment**

- **E-commerce Orders**: 20% of e-commerce orders are fulfilled by physical stores, both corporate and partner stores, to support local retailers.  
    
- **Order Allocation**: Orders are sent to independent retailers for a small fee. Upon acceptance, the retailer owns the order.  
    
- **Marketplace Expansion**: Mephisto plans to expand into marketplaces like Amazon, Shop Premium Outlets and more. Orders from these platforms should be fulfilled exclusively by the distribution center to prevent burdening retailers.

### **2.5 Returns and Exchanges**

- **Returns Platform**: Returns are managed through a platform called Redo.  
    
- **Return Process**: Returns are directed back to the retailer that fulfilled the original order, especially for independent retailers.  
    
- **Exchange Process**: New orders from exchanges are routed to the original fulfillment location or rerouted if they cannot fulfill the order.  
    
- **Resalable Returns**: Approximately 90% of returned items are eligible for resale.

### **2.6 Tax Calculation**

- **Initial Calculation**: Shopify calculates taxes based on the customer's location and Mephisto Corp's location.  
    
- **Recalculation Process**:  
    
  - Orders are sent to HotWax OMS, which allocates them to independent retailers.  
  - HotWax OMS integrates with a tax calculator like Avalara for recalculations based on the retailer's and customer's locations.  
  - Updated tax information and fulfillment details are sent back to Shopify.


- **Open Issue**: Handling discrepancies when taxes are under or over-calculated initially (e.g., providing discounts or refunds).

### **2.7 Financial Transactions with Independent Retailers**

- **Payment Collection**: Mephisto Corp collects payments via Shopify for orders fulfilled by independent retailers.  
    
- **Settlement**: Every two weeks, Mephisto generates a report detailing amounts owed to each retailer and processes financial transfers accordingly.

### **2.8 Inventory Display Rules**

- **Discount Threshold**: Items discounted more than 40% should not display retailer inventory online to prevent retailers from fulfilling heavily discounted orders.  
    
- **Enforcement**: This rule must be consistently applied across all sales channels.