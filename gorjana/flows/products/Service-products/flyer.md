# <a name="_ka6ztba2rcbt"></a>**First Time Customers**
The Gorjana Introduction Flyer is a welcome gift for first-time customers, included with their first order.
## <a name="_chturox2usve"></a>**Process Flow**
### <a name="_rx4oek5ge7zq"></a>**1. Determining Order Type**
- **Store Orders**: Store managers identify first-time buyers and include the flyer with their order.
- **Web Orders**: Shopify identifies first-time customers by checking if their order count is 1. If true, the **shipBooklet** tag is added to the order.

### <a name="_rx4oek5ge7zq"></a>**2. NiFi Processing**
Orders imported from Shopify in JSON format are processed through NiFi. A Groovy script in “Custom Order Import Flow” scans the orders for the **shipBooklet** tag. If the tag is found, the script:

- Creates an **orderAttribute** in the OMS, marking the order with **isShipBooklet = true**.

### <a name="_rx4oek5ge7zq"></a>**3. Integration with NetSuite**
When the order is sent to NetSuite:

- The **shipBooklet** = true, indicates that a flyer should be included.
- The packing slip includes a note: “**Booklet = Yes**”.
