---
description: >-
  Learn how HotWax Commerce OMS simplifies in-store return processes for
  retailers, ensuring efficient handling of online orders in physical stores.
---

# In-Store Returns

The **Creating In-Store Returns** feature in HotWax Commerce addresses challenges for retailers selling products across multiple channels. In the absence of online order information in POS systems, in-store returns can become complex. HotWax Commerce, an Omnichannel Order Management system, resolves this by maintaining records of online orders from e-commerce platforms, ensuring efficient in-store return processes on the HotWax Commerce platform, and improving workflow for store associates.

## How to Create In-Store Returns:

1. Enter your user credentials (username and password) to log in to the HotWax Commerce Platform.
2. **Navigate to Create Order Return:**
   * In the main menu, click on `Order Management`.
   * From the dropdown, select `Create Order Return`.
3. **Search for the Order:**
   * On the Create Order Return page:
     * Utilize the search tab to locate specific orders.
     * Enter relevant details such as `Shopify Order ID`, `Customer Name`, `Order creation date`, `Customer Email Address`, or `Customer Phone Number`.
     * Click `Search` to find the specific sales order.
4. **Select Create Return:**
   * Once the order is located, click on the `Create Return` button associated with the order.
5. **Complete the Return Details:**
   * You will be redirected to the `Create Return` page.
   * Select the first checkbox for all items or individual boxes for selective returns.
   * Enter the `Facility ID` where the customer is returning the item.
   * Choose the `Return Reason` from the dropdown menu.
   * Optionally, enter the `Employee ID`.
   * Click the `Create Return` button to initiate a return request.

Alternatively, store associates can also create returns by going to the `sales order` for which the return needs to be created and clicking on the `Create RMA` button.

6. **View Returns Page:**
   * After creating the return, you will be directed to the `View Returns` page.
   * Store managers wanting to review and approve multiple return requests can also access the `View Returns` page through the following steps:
     * Navigate to the `Sales Return Page` from the hamburger menu.
     * Locate and track the status of the return (`Requested`, `Received`, or `Completed`).
     * Click on the order ID to access the `View Returns` page for detailed information about the return.
7. **Authorize Returns:**
   * On the `View Returns` page, click the `Accept` button to approve the return request.
   * To finalize the return process, click the `Receive Return` button.
   * The return status will be `completed` now on the `sales returns` page.
8. **Partial Returns:**
   * If only specific items need acceptance:
     * Select the checkboxes for those items.
     * Click the `Update` button to receive a return for the selected items.
9. **Ensure Returns Job is Scheduled:**
   * In the `HotWax Commerce Job Manager` app, ensure the `refunds` job to update returns on e-commerce for refund creation is scheduled from the `Orders` page. For more details on how in-store returns are updated on Shopify, you can visit our [Shopify integration guide](https://docs.hotwax.co/integration-resources/how-does-hotwax-commerce-manage-order-returns/in-store-returns)
10. **Verify Returns on Shopify:**
    * To verify order returns on Shopify:
      * Go to the `Shopify admin panel`.
      * Navigate to `Orders` and access `Order Details` by clicking on the corresponding order ID.
      * Return information will be available for the corresponding order items.

By following these detailed steps, store associates can efficiently navigate through the HotWax Commerce platform, manage in-store returns, and contribute to a smooth and effective customer experience.
