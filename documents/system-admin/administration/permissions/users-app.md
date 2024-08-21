# Users App

The HotWax Commerce Users App is designed to manage user profiles and permissions within the system. Since all users are permitted to manage their own profiles, no specific permission is required to access the Users App for personal profile management. However, to add new users or to manage permissions specific to other users, additional higher-level permissions are required.

Below is a list of all the actions available in the Users App, along with the specific permissions needed to perform them.

### Users Tab

| Action             | Permission                          | Description                                                                                              |
|------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| View Users         | -                                       | Allows users to view all existing users within HotWax Commerce.                                              |
| Search Users       | -                                       | Enables users to search for specific users by name, email, or other identifiers.                             |
| Create Users       | SECURITY_CREATE OR SECURITY_ADMIN        | Provides the ability to create new user profiles within the system.                                           |


### User Details Page

| Action                     | Permission                          | Description                                                                                              |
|--------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Edit Profile Information   | -                                       | Allows users to add a photo and edit personal information such as their name.                                |
| Block Login                | SECURITY_CREATE OR SECURITY_ADMIN        | Enables the ability to block a user's access to HotWax Commerce applications.                                |
| Reset Password             | -                                       | Allows users to reset their own password.                                                                    |
| Add Contact Details        | -                                       | Enables users to add or update contact information such as email, phone number, and external ID.             |
| Select Security Permissions| WEBTOOLS_VIEW                            | Allows users to change security groups assigned to themselves or others.                                      |
| Add Product Store          | SECURITY_CREATE OR SECURITY_ADMIN        | Provides the ability to assign users to a specific product store.                                             |
| Add to Facilities          | STOREFULFILLMENT_ADMIN                   | Enables the assignment of users to specific facilities for fulfillment tasks.                                 |
| Add as Picker              | STOREFULFILLMENT_ADMIN                   | Allows the user to be added as a picker for fulfillment purposes.                                             |
| Select Favourite           | -                                       | Enables users to select a favorite product store and Shopify shop for preselection across all applications.   |


### Permissions Tab

| Action                     | Permission                          | Description                                                                                              |
|--------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| View Tab                   | SECURITY_VIEW OR SECURITY_ADMIN          | Allows users to view all permissions currently assigned within the system.                                    |
| Create Security Group      | SECURITY_CREATE OR SECURITY_ADMIN        | Provides the ability to create new security groups for managing user permissions.                             |
| Add/Remove Permissions     | SECURITY_CREATE OR SECURITY_ADMIN        | Enables users to add or remove permissions from existing security groups.                                     |
| Download Permission List   | -                                       | Allows users to download a list of existing permissions within a security group.                              |



This table outlines the available actions and the permissions required for each within the Users App.
