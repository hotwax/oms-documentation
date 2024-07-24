# Internal Instance Usage Guidelines

This document outlines the guidelines and best practices for using Shopify, OMS Instances, and Launchpad Apps within Hotwax Commerce. These guidelines are designed to ensure data integrity, security, and optimal system performance.

## Shopify

1. **Order Creation:** Do not create draft orders in the DEV-OMS or any Production Instance.
2. **Webstore Usage:** Never use your email address, credit card details, or phone number on the webstore. Use a [fake address](https://www.fakexy.com/fake-address-generator-ca) instead.
3. **Shopify Data:** Do not edit existing data on Shopify Shop and Product Store. If you create any Shopify Shop and Product Store, delete it carefully if necessary.
4. **Draft Orders:** Always add a shipping address when creating draft orders and Valid customer names and avoid using any special characters in the mail like (#$%&*).
5. **Webstore URL:** Double-check the webstore URL; it usually includes a "sandbox" for UAT instances.

## OMS

1. **Login Credentials:** Use only your credentials. Avoid using hotwax.user credentials. If your user is not created, create the user first and then use those credentials to perform any changes in OMS.
2. **Dummy Data:** Do not create any dummy data on the dev or demo instance, such as using random or test as customer name or facility as any person name.
3. **Documentation:** Ensure you read the documentation before using any application.
4. **Web Tools:** Carefully access web tools. Do not edit or delete any data unless instructed.
5. **SQL Queries:** Do not write any SELECT or ALTER queries in the SQL entity processor.
6. **CSV Format:** Double-check the CSV format before uploading it in any instance.
7. **Inventory Recording:** When recording inventory from the UI, always use "no variance."
8. **Order Processing:** Avoid manually brokering, approving, or importing any order.
9. **UAT Instances:** Do not edit any client orders, such as approving, brokering, or fulfilling them manually.
10. **Testing:** Do not use Demo OMS for Testing Purposes. Always use Dev Oms for testing.

## Launchpad Apps

 1. **Login Credentials:** Use only your credentials. Avoid using hotwax.user credentials.
 2. **Job Execution:** Do not run any job continuously. Run the job, wait approximately 5 minutes to see updated changes, then proceed. Run the bulk import job only after running any job for create or import jobs.
 3. **Job Management:** Do not disable any job unless explicitly told so. If you did then reschedule it again.
 4. **User Creation:** Ensure there are no spaces in the username when creating any user.
 5. **Security Groups:** Do not create or edit any security group permissions.
 6. **Parking:** Do not archive any parking.
 7. **Facility Creation:** Do not create any facility unless instructed. Ensure proper naming conventions are followed, avoiding the use of your name as a facility name.
 8. **User Permissions:** When creating any user, add the user to the product store and facility with the appropriate permissions.
 9. **Order Routing:** Do not change the status of any brokering runs.

## Additional Guidelines 

{% hint style="info" %}
If you encounter any difficulties, please ask your mentor for guidance before proceeding.
{% endhint %}

{% hint style="warning" %}  
Use the production instance with extreme care. Do not edit any existing data. 
Access production web tools only if necessary; otherwise, avoid using them. Do not run SQL queries on the production instance unless explicitly instructed to do so.
{ % endhint %}
