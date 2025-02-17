# Draft Order

## Introduction

A draft order in Shopify is an order created manually by CSRs or store admins. This is useful in various scenarios, such as when a customer wants to place an order over the phone or in person.

This usually occurs when customers directly contact a CSR to place a new eCommerce order on their behalf or request to cancel a previous order and get a new one placed as a replacement.

### **HotWax Internals**

Draft orders are created to test order flow from Shopify to HotWax OMS.

{% hint style="danger" %}  
  * Make sure that draft orders are not created on production/test/dev instances, if a draft order is placed on a test or dev OMS, the associated Shopify shop should be shut down.
  * If specific testing needs to be conducted on UAT, draft orders can also be created there.
{% endhint %}

## Steps to Create Draft Orders

### **1. Login to Your Shopify Admin**

- Open your web browser and navigate to [Shopify Admin](https://admin.shopify.com/store/).
- Enter your credentials to log in to the Shopify admin interface.

### **2. Accessing the Orders Page**

- Once logged in, you'll land on the homepage.
- Navigate to the **Orders** page to view the complete list of placed orders.

### **3. Start Creating a Draft Order**

- Click on the **Create Order** button located at the top-right corner.
- This action will open a new window for order creation.

### **4. Product Selection**

- Use the product search bar to find products quickly.
- Alternatively, browse products by clicking the **Browse** button and select based on:
  - Popular Products
  - Collections
  - Product Type
  - Tags
  - Vendors

{% hint style="info" %}
   * If any specific product details are not provided to you. You can by default select a popular product, and a pop-up window will display parent products and variants with pricing and inventory availability.
   * Click the **Add** button to include the selected product.
{% endhint %}

### **5. Customer Information**

- In the right section under the **Customer** bar, use the search bar to find an existing customer.

{% hint style="Info" %}
   * you can create a new customer by clicking "**Create a new customer**" for new orders.
   * For new customers, a pop-up window will appear to input customer details such as first name, last name, email, shipping address, etc.
{% endhint %}

### **6. Additional Details**
(This step is optional.)
- Include notes in the designated section at the top right.
- CSRs can use this section to provide insights into the reasons behind the draft order creation.

### **7. Payment Collection**

Shopify offers multiple payment options:

#### **Payment Options**

##### **Mark as Paid**

- Click the **Collect Payment** dropdown button (bottom-right) to proceed.
- Click on **Mark as paid**
  
##### **Cash on Delivery (COD)**

- Click **Payment due later** to set payment terms, such as:
  - Due on receipt
  - Due on fulfillment
  - Within 7, 15, 30, 45, 60, or 90 days
  - On a fixed date

##### **Credit Card Payments**

{% hint style="danger" %} 
Only accept payments via the **Bogus Test Payment Gateway** for hc-demo(DEMO OMS). Using any other gateway may result in Shopify suspending the store.
{% endhint %}

- When entering credit card details, a pop-up will prompt you to enter the customer’s card information.
- Use the following test card details:
  ```
  Card Number: 1  
  Expiry: 03/26  
  CVV: 123  
  ```

### **8. Creating the Order**

- Click the **Create Order** button at the bottom right to confirm and place the order.
