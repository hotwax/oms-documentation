---
description: >-
  Dive into New Era Caps's innovative fulfillment strategies, leveraging
  warehouse and store resources.
---

# Fulfillment

While the current WMS that New Era Caps uses will be utilized for fulfillment from the warehouse, the OMS’s native fulfillment and store pickup apps will be used for fulfillment from stores.

## Store Fulfillment Carrier

New Era Caps store fulfillment carrier is E-Hidden 3. This carrier does not offer a file based or API based interface for the OMS to fetch shipping labels from. Instead New Era Caps generates a CSV of packed orders from the fulfillment app which can be used to upload into E-Hidden 3 manually. To enable store staff to easily generate CSVs in the format that they need for E-Hidden 3, they leverage the custom header mapping function of the fulfillment app which lets them map the out of the box packed order feed from the fulfillment application to the format required by their carrier.

Once tracking codes are generated for orders from the carrier’s portal, the store staff will reupload it into the fulfillment application. The app will then automatically save these tracking codes to the order shipments allowing them to be automatically fulfilled at the end of the day using the `Ship Packed Orders` job in the OMS.

![Order Flow](/newEraCaps/assets/nec3.png)

## Store Pickup

BOPIS orders will be directly assigned to the customer’s selected pickup location where they will be visible in the BOPIS Fulfillment. Though New Era Caps was using a ship-to-store workflow before implementing HotWax Commerce OMS, they no longer offer this and instead only offers store pickup when inventory is truly available at retail locations.

Once an order has been packed and is ready for pickup, an email to the customer that their order is ready to be collected. To send this email, the OMS will integrate with Klaviyo send customers emails with rich content regarding their order and pickup location.

New Era Caps is also rolling out a new locker based pickup solution where store staff place the packed order items into a locker where customers can pick them up at their own convenience. To support this workflow, staff will mark orders as packed in the BOPIS fulfillment app after placing the order items in the locker. The email sent to the customer will include a unique password and locker number which the customer can use to unlock the locker and collect their order items.

### Pending pickup orders
- After 10 days pickup window when the order has not been picked up by the customer, the CSR will receive a reminder mail from OMS to call the customer.
- When the orders are not going to be picked up by the customer, the CSR will mark the order as fulfilled and OMS will update the order status on Shopify.

**Open questions:**

How will the email be customized to let the customer know that their items are stored in a locker? Is there a special flag that New Era Caps expects for this from the OMS?

Once the customer picks up the order, how will the OMS be notified of the order completion?
