# Shipping rules

Facilities that belong to the `CHANNEL_FAC_GRP` group automatically share inventory for online sales. Shipping rules add control when retailers want to cap online volume or suppress fulfillment for specific products, facilities, or channels. The following examples use a Canadian retailer with five locations that wants to manage a Blue Medium shirt from the NotNaked brand.

## Set maximum order capacity for a facility

Stores often juggle walk-in demand and online shipments. When a store hits its limit, HotWax Commerce can route extra orders to another facility without changing the facility's `ATP (Available-to-Promise)` value.

Use these steps to cap daily orders at 10 per store while leaving warehouses unlimited:

1. Go to `Shipping` in the **ATP App**.
2. Open the `Facility` tab to review all stores and warehouses.
3. Select the capacity chip for a store and choose `Custom capacity`. The other options are `Unlimited capacity` and `No capacity`.
4. Enter `10` for the daily limit and save.
5. Repeat for the remaining stores. Keep warehouses on `Unlimited capacity`.

After the store reaches 10 shipments in a day, the brokering engine sends additional orders to facilities with available capacity.

{% embed url="https://youtu.be/MHBO-2kVauQ" %}
\
Setting maximum order capacity of a facility
{% endembed %}

## Suppress shipping for a channel configuration facility

Use this rule when a product should not ship through selected channels, for example, when the Blue Shirt (Size M) must remain available only for in-store shoppers on Shopify.

1. Go to `Shipping` in the `ATP App` and open the `Product and channel` tab.
2. Click `Add` to create a rule and provide a descriptive name such as `Suppress shipping on Shopify`.
3. Turn off the `Shipping` toggle. This suppresses fulfillment for the product on the channels selected later in the form.
4. Choose the channel configuration facility. Turn on `All channels` to suppress every channel or pick a specific option such as the `US Shopify` config facility.
5. Define the scope of products:
   - Use the `Include` card to add a tag such as `Blue Shirt`.
   - Or use `Features` to set `Color: Blue` and `Size: M`.
   - Optionally add entries to the `Exclude` card to omit variants from the rule.
6. Click `Save` to activate the rule.

Once saved, the Blue Shirt (Size M) no longer contributes inventory to the selected sales channels, but the product remains purchasable in stores.

{% embed url="https://youtu.be/2VSxp6AJ3_U" %}
\
Suppressing Shipping for Channel/ Configuration Facility
{% endembed %}

## Suppress shipping from a facility group

This rule blocks fulfillment from specific facilities while keeping other sites available. In the example, the Blue Shirt (Size M) should not ship from retail stores but can ship from warehouses.

1. Go to `Shipping` in the `ATP App` and open the `Product and facility` tab.
2. Click `Add` and enter a clear rule name such as `Suppress Blue Shirt from stores`.
3. Turn off the `Shipping` toggle to stop fulfillment from the selected facilities.
4. Under `Facilities`, add the relevant facility group in the `Include` card. Create the group in the `Facility App` if it does not exist. Use `Exclude` to remove individual stores if needed or choose `All facilities` for a full stop.
5. Add the product scope with tags or feature filters (for example `Color: Blue`, `Size: M`).
6. Select `Save`.

The rule removes the Blue Shirt (Size M) from the ATP totals for the selected stores while other facilities can keep shipping the item.

{% embed url="https://youtu.be/Zy57dEzX_FY" %}
\
Suppressing Shipping from Facility
{% endembed %}

## Schedule shipping rule jobs

Retailers manage the ATP computation job responsible for shipping rules on the shipping page. Jobs run at midnight by default so the inventory snapshot is ready before business hours.

To compute ATP immediately after creating a rule, open the job overflow menu and select the manual run option.

Each rule appears as a card on either the `Product and channel` or `Product and facility` page. The card summarizes configuration choices, and selecting `Edit rule` reopens the form so you can change channels, facilities, or toggles whenever needed.

{% embed url="https://youtu.be/Tk7natfXjPo" %}
\
Schedule Shipping Rule
{% endembed %}
