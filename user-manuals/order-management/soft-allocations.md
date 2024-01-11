# Soft Allocation Shopify Flow

The Soft Allocation Workflow establishes a seamless integration between Shopify and HotWax Commerce, facilitating the efficient handling of orders with soft-allocated items. By configuring a customized Shopify Flow, triggered upon order creation, and tagged with specific criteria, this workflow ensures that orders are appropriately marked with the necessary identifiers before being imported into HotWax. This tag, denoted as `HC_PRE_SELECTED_FAC`, serves as a key element in the subsequent fulfillment process. The OMS is configured to recognize this tag and automatically allocate the associated items to the pre-selected facility, streamlining the fulfillment of orders with soft-allocated items. Additionally, the workflow incorporates essential product store settings in both Shopify and the OMS to further enhance accuracy and ensure a smooth, automated fulfillment process. 

## Soft Allocation Workflow Configuration

### Shopify Configuration

To implement a Shopify Flow tailored to the specific requirement of tagging orders with soft-allocated items, follow this comprehensive guide:

**1. Create a New Shopify Workflow:**
   - Navigate to Settings > Apps and sales channels in your Shopify admin.
   - Select the [Shopify Flow app](https://shopify-2.wistia.com/medias/kmsfxapyq5).
   - Click "Open app."
   - Create a new workflow by clicking "Create workflow."

**2. Set Trigger to `Order Created`:**
   - Choose the trigger "Order Created" to initiate the workflow when an order is created in Shopify. 

   {% hint style="warning" %}
   Note: Shopify Flows may not run instantly after order creation. To ensure that orders are imported only after tags have been applied to a soft-allocated order, use the `buffer` parameter in the import order job.
   {% endhint %}

**3. Add Tag on Orders with Soft Allocated Items:**
   - Select `Condition` to establish criteria that must be met before any actions can proceed.
   - Set the condition to:
      1. Select orders > line items > Custom Attributes > Key.
      2. Input `hcShippingFacility` as the key.
   - Click `Then` to specify the action to be taken if the condition is met.
   - Choose `Actions` and select an action based on the condition's results.
      - Set the action to:
         1. Choose 'Add Order Tags'.
         2. Input `HC_PRE_SELECTED_FAC` as the tag name.

By following these steps, you'll create a specialized workflow that seamlessly tags orders with soft-allocated items, ensuring a smooth integration with HotWax.

### OMS Configuration

**1. Set Product Store Settings:**
   - Go to the Hamburger Menu in OMS.
   - Navigate to Settings > Store to open the Product Store page for your dedicated store > Store Settings section.
   - Click "Add" and select the setting from the dropdown: `Preselected facility for same day shipping`. Input the value with the same tag added in Shopify `HC_PRE_SELECTED_FAC`. This setting ensures that orders imported with this tag have their line items checked for pre-selected facilities to fulfill them.
   - Add one more setting named: `Preselected facility tag` and add value `hcShippingFacility`. This line item property on the item that needs to be read to determine the facility of the order.

By following these steps in both Shopify and OMS, you establish a seamless Soft Allocation flow, ensuring accurate fulfillment based on specified criteria.
