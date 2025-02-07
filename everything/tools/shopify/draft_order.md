# Draft Order

# Introduction

A draft order in Shopify is an order created manually by CSRs or store admin. This can be useful in various scenarios, such as when a customer wants to place an order over the phone and in person.

This usually occurs when customers directly contact a CSR to place a new eCommerce order on their behalf, or sometimes they may request to cancel their previous order and get a new order placed as a replacement.

**HotWax Internals:** Draft orders are created to test order flow from Shopify to HotWax OMS.

# Steps to Create Draft Orders

1. ## Login to Your Shopify Admin

   Open your web browser and navigate to the Shopify Page [https://admin.shopify.com](https://admin.shopify.com/store/).

Enter your credentials to log in to the Shopify admin interface.

2. ## Accessing the Order Page

   Once logged in, you'll land on the homepage. Navigate to the "**Orders**" page to view the complete list of orders placed on the e-commerce platform.

3. ## Start Creating a Draft Order

   Click on the "**Create Order**" button located at the top-right corner. This action will open a new window for order creation.

4. ## Product Selection

   Use the product selection search bar to find products quickly. Alternatively, browse products by clicking the "**Browse**" button and select based on:  
* Popular Products  
* Collections  
* Product Type  
* Tags  
* Vendors

  If selecting a popular product, a pop-up window will display parent products and variants with pricing and inventory availability. Click the black "**Add**" button to include the selected product.

5. ## Customer Information

   In the right section under the **"Notes**" bar, use the customer search bar if the order is for an existing customer. Create a new customer by clicking "**Create a new customer**" for new orders.

   For new customers, a pop-up window will appear to input customer details such as first name, last name, email, shipping address, etc.

6. ## Additional Details

   Include notes in the designated section at the top right, often written by CSRs to provide  insights into the reasons behind the creation of the draft order**.**

7. ## Payment Collection

     
   1. Use the "**Payment due later**" option to choose payment terms (due on receipt, due on fulfillment, within 7, 15, 30, 45, 60, 90 days, or on a fixed date).  
   2. Click the bottom-right black "**Collect Payment**" dropdown button to:  
* Enter credit card details of the customer.		  
* Mark the order as paid.

  If entering credit card details, a pop-up window will prompt you to enter the customer's credit details.

8. ## Creating the Order

   Finally, click on the "**Create Order**" button at the bottom right to confirm and place the order.


{% hint style="info" %}
* Always use test instances for testing purposes.  
* If specific testing needs to be conducted on UAT, draft orders can also be created there.  
* Make sure draft orders are not created on production instances and dev or test OMS.{% endhint %}