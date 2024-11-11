---
description: Learn about brokering runs.
---

# Brokering Runs

<mark style="color:orange;">**Runs**</mark> in the Brokering Rules Builder act as containers for sequences of routings. These runs are scheduled by retailers to execute at specified intervals, allowing for effective and timely order routing.

### Creating a New Brokering Run

Creating a brokering run is the first step in structuring your order routing process. These runs serve as scheduled sequences that execute routing rules based on your fulfillment priorities, ensuring timely and efficient handling of orders.

#### Steps to Create a New Brokering Run

1. **Access the Order Routing App**
   * Open the `Order Routing` App, where you’ll see the home page displaying all currently arranged brokering runs. If no brokering runs are scheduled, this page will appear blank.

{% hint style="info" %}
If you have multiple product stores, you’ll be prompted to choose the store for which you want to create a brokering run. This feature helps in managing order routing uniquely for each store. Learn more about [product stores](https://docs.hotwax.co/documents/system-admins/product-store/add-more-product-stores).
{% endhint %}

2. **Initiate a New Run**
   * Click on the `New Run` button to begin creating a new brokering run. You’ll be prompted to provide a name for this run, which will help identify it in your list of scheduled brokering tasks.
3. **Name the Run**
   * Give the run a meaningful name that reflects its purpose. For example, if you’re creating a brokering run specifically for orders that require prompt fulfillment, you could name it something like “high priority orders.”



{% tabs %}
{% tab title="Create Brokering Run" %}
<figure><img src="../.gitbook/assets/New Brokering Run.png" alt=""><figcaption><p>Add a New Brokering Run</p></figcaption></figure>


{% endtab %}

{% tab title="View Brokering Run" %}
<figure><img src="../.gitbook/assets/Created Brokering Run (1).png" alt=""><figcaption><p>View Created Brokering Run</p></figcaption></figure>
{% endtab %}
{% endtabs %}

4. **Add a Description**
   * After naming the run, add a description to provide further context. Descriptions help in clarifying the intent behind each brokering run, making it easier for team members to understand its specific function. For example, if the run focuses on urgent orders, you might write: “Prioritized routing for unfillable orders, next-day, and two-day delivery orders.”

<figure><img src="../.gitbook/assets/Run details.png" alt=""><figcaption><p>Brokering Run Details</p></figcaption></figure>

5. **Schedule the Brokering Run**

* Once you’ve added the description, proceed to schedule the run. In the next section, we’ll cover the scheduling parameters in detail.

### Scheduling Brokering Runs

Brokering runs are scheduled using two essential parameters:

1. **Frequency**
   * Determine how often you want the brokering run to execute.
2. **Runtime**
   * Specify the time of day (in 24-hour format) when the brokering run should initiate.

For example, setting the frequency of a run to "Daily" and the runtime to "7 am" will execute the brokering run every morning at 7 am or scheduling a brokering run for high-priority orders at "Every 5 minutes" will execute a brokering run in every 5 minutes.

<figure><img src="../.gitbook/assets/schedule run.png" alt="" width="375"><figcaption><p>Schedule a Run</p></figcaption></figure>

### Viewing Brokering Runs

1. **Chronological Sequence**
   * All brokering runs are presented in a chronological sequence based on their next scheduled run time in the `Order Routing` App.

<figure><img src="../.gitbook/assets/Brokering Runs.png" alt=""><figcaption><p>Brokering Runs in Order Routing App</p></figcaption></figure>

2. **Run Details**
   * Click on a specific run to open its details.

<figure><img src="../.gitbook/assets/Run details (1).png" alt=""><figcaption><p>Run Details</p></figcaption></figure>

{% hint style="info" %}
To ensure your brokering run is operational, it's essential to change its status from "Draft" to "Active." By default, new brokering runs are set to "Draft." Simply select "Active" from the dropdown to activate it, or revert an active run back to "Draft" if adjustments are needed. Ideally, activate the brokering run only once you've fully configured your routing, rules, and other settings.
{% endhint %}

Understanding how to view, schedule, and manage brokering runs is essential for optimizing your order routing strategies.

Now, let's understand about [routings](routings.md) within a run.
