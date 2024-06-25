# Returns 

## Steve Madden USA

### Optoro/Return to Warehouse Process

1.  **Customer Initiates Return:** The customer contacts Steve Madden (SM) Support to initiate a return.
2.  **Return Label Generation:** SM Support generates a return label and provides it to the customer.
3.  **Optoro Coverage Check:**
    *   **Covered Zip Code:** If the customer's zip code is within Optoro's service area, the refund is processed immediately upon the return parcel being picked up.
    *   **Non-Covered Zip Code:** If the customer's zip code is not covered by Optoro, the customer drops the item at a designated carrier location, and the refund is processed after warehouse inspection.
4.  **HotWax Data Download:** In both scenarios, HotWax downloads the return information from Shopify once the refund is completed.

### BORIS (Buy Online, Return In-Store) Process

1.  **In-Store Return (Refund):**
    *   The customer returns the product to a physical store.
    *   The store associate inspects the item and creates a return in the POS system, then requests a refund from SM Support.
    *   SM Support processes the refund in Shopify, and HotWax downloads the return data.

2.  **In-Store Return (Store Credit):**
    *   The customer returns the product to a physical store and opts for store credit.
    *   The store associate processes the store credit and creates a return in the POS system.
    *   HotWax records the return against the store credit.
    *   If the customer later wants a refund instead of store credit, SM Support processes it in Shopify (considered an appeasement).
    *   Currently, HotWax does not download appeasement data.

3.  **In-Store Return (HotWax Return Screen):**
    *   This process is used when a customer returns an item before the shipped order data reaches the store's POS system (due to the nightly data sync).
    *   The store associate uses a HotWax-provided return screen to create the return directly in HotWax.
    *   SM Support manually processes the refund in Shopify.

## Dolce Vita Canada (DVCA)

1.  **Customer Initiates Return:** The customer starts the return process through the Shopify return app.
2.  **Return Label Provided:** A Canada Post return label is given to the customer.
3.  **Warehouse Receiving:** The returned item is received and inspected at the warehouse.
4.  **HotWax Notification:** The warehouse associate enters the received quantity into HotWax, which then notifies Shopify to initiate the refund.
5.  **HotWax Data Download:** After the refund is processed in Shopify, HotWax downloads the return details.

## Steve Madden Canada (SMCA) (Not Yet in Production)

1.  **In-Store Return (Refund or Store Credit):**
    *   The customer returns the item to a physical store.
    *   The store associate uses the HotWax return receiving screen, searching by order ID or email.
    *   The associate selects the returned item(s) and specifies the return type (refund or store credit).
    *   **Refund:** HotWax creates the return and notifies Shopify to process the refund. Shipping charges are not refunded.
    *   **Store Credit:**  HotWax stores the store credit details, and no information is sent to Shopify. A receipt is printed for the customer.

Let me know if you have any other questions or would like further refinements to the document!
