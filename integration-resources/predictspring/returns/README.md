# Returns Management

Efficiently managing returns is a critical component of the retail experience, and **PredictSpring** seamlessly integrates with **HotWax Commerce** to facilitate a streamlined returns process.

## Here's an overview of how the return process works in **PredictSpring** with the assistance of **HotWax Commerce**:

### 1. Accessing Orders in PredictSpring:

When a customer visits the store to return an item, store associates initiate the process by requesting the order number. If the order was originally placed in-store, store associates can conveniently look up the order in **PredictSpring**. However, for online orders, **PredictSpring** lacks direct access. To address this, **HotWax Commerce** steps in with a dedicated API designed for order lookup. Leveraging its capability to manage both online and in-store orders, **HotWax Commerce's API** ensures that whether the order was placed in-store or online, detailed order information is retrieved.

### 2. Creating Return:

Once the order details are obtained by **PredictSpring**, store associates proceed with the return creation process. In **PredictSpring**, as returns are created and items are received in the store, **PredictSpring** invokes the "CreateReturn" API of **HotWax Commerce**. This API initiates the creation of a return in **HotWax Commerce**, marking it with a "Received" status.

For orders originally taken in the store via **PredictSpring**, the return process is streamlined, and **HotWax Commerce** marks the return as "Completed". However, for online orders, the process involves an additional step. **HotWax Commerce** triggers a refund request for the associated online order to the eCommerce platform. Once the eCommerce platform initiates the refund, a unique refund ID is generated and returned back to **HotWax Commerce**.

Upon receipt of the refund ID, **HotWax Commerce** updates the status of the return to "Completed," signifying the successful conclusion of the return process. This seamless integration ensures that returns, whether initiated from in-store or online purchases, are efficiently managed and recorded, contributing to an enhanced customer experience.
