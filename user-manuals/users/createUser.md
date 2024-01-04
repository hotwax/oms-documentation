# New Users

In the Order Management System, every user is assigned specific permissions based on their roles and responsibilities. Users can be divided into administration, fulfillment, catalog management, and customer-facing roles.

## User Account Categories in OMS

1. **Individual User Accounts:**
   Individual user accounts are created for specific users who require access to the OMS to perform their tasks. These users typically have a designated role and access privileges that align with their specific responsibilities. For instance, a fulfillment manager may have access to order fulfillment functions, while a customer service representative may have access to customer information and order status updates.

2. **Generic Facility Logins:**
   Generic facility logins are created for shared use within a facility, allowing multiple users to access HotWax Commerce fulfillment applications such as BOPIS and Store Fulfillment using centralized login credentials. This approach is particularly useful in scenarios where multiple users perform similar tasks and do not require individualized access privileges. For example, a generic facility login can be used by multiple store associates to access order shipping functions.

3. **Non-Login Users:**
   Non-login users are individual user accounts for specific tasks that do not require direct application access. These kinds of users are generally created for incentive-based performance tracking. For instance, a non-login user may be created for order picking at a facility, allowing them to assign picklists to themselves while logged in using a common facility user.

---

# Create a User

## Step 1: Initiate User Creation

To create a user in the HotWax Order Management System, follow these steps:

1. Log in to the [users.hotwax.io](https://users.hotwax.io) app with your credentials. These credentials will be provided by the HotWax Support team.

2. On the Find Users page, click the plus (+) button located at the bottom right.

3. Upon clicking the plus button, you'll be guided to a user creation flow.


{% hint style="info" %}
Before entering any details, toggle the “Facility user” switch if you are creating a common facility login for fulfilling. The user creation form dynamically adjusts based on your selection.
{% endhint %}

4. If you're creating an individual user, provide the following details:
   - First Name
   - Last Name
   - Employee ID
   - Email
   - Phone Number

5. If you’re creating a facility login, provide the following details:
   - Select a Facility from the list
   - The username will be pre-filled automatically, but you can change this if you’d like
   - Reset Password Email
   - Facility Contact Number
  
6. Upon clicking 'Create User' button, user will be created and you will reach the `User Setup` page where you can pick between Quick Setup and Manual Setup. 

## Step 2: User Setup

### Quick Setup

Quick setup provides defined templates that autofill information and speed up the user creation process. Predefined templates are available for:

- **Admin:** Grants full administrative permissions.
- **Fulfillment:** Tailored for single facility logins such as picker.
- **Fulfillment Manager:** Designed for fulfillment managers overseeing operations.
- **CSR (Customer Service Representative):** Configured for Customer Service Representatives handling customer-facing roles.
- **Merchandising Manager:** Ideal for catalog management roles.

### Manual Setup

Manual setup allows manual control over creating a user. Follow these steps:

1. **Add Credentials for the User:** Add username and password.
   
2. **Verify and Update Contact Information:** Enter contact details of the user. 
   
3. **Manage User Permissions:** Give clearances in OMS specific to the user role.

4. **Add Them to Brands for Merchandise Management:** Add user to specific product store. 

5. **Associate Facilities for a User in a Fulfillment Role:** Add user to facilities and assign them fulfillment role.

