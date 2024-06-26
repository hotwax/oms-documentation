# Returns management

Managing returns is crucial for any retail operation. The integration between PredictSpring and HotWax enables retailers to accept orders in-store, regardless of the order's origin, enhancing the omnichannel experience.

## How the return process works in **PredictSpring** with the assistance of **HotWax Commerce**:

### 1. BORIS:

When a customer comes in-store with an eCommerce order, the associate initiated the process by requesting an Order ID. The store associate can add the Order ID into Predict Spring, in the background the HotWax Commerce `getOrder` job will fetch and return the order PredictSpring enabling a seamless return experience for the customer. 

{% hint style="info" %}
In the case that the order id is unavailable: the associate can search for the order using various identifiers (e.g., order ID, customer name, order date), HotWax runs the searchOrder job to return all relevant orders to PredictSpring.
{% endhint %}

### 2. PredictSpring returns:

* If HotWax is the order master: the return will be handled the same way as BORIS. 
* If Hotwax is not the order master: the associate handles the return in PredictSpring. If an immediate inventory change needs to be logged, it can be sent to the inventory variance log by the store.
