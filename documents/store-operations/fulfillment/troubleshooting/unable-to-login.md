# Unable to Login

The fulfillment process has many different configurations that are setup to help you tune your workflow to your organizations needs. This document will help you troubleshoot common configuration issues in the fulfillment process that may be causing unexpected behaviour.

## Unable to login

User unable to login into the Fulfillment App and view orders

If your user credentials are created and are able to log into Launchpad but are unable to login to the Fulfillment App you may not have permission to fulfill orders from any facility.

**Solution** In order to give a user permission to log into the Fulfillment App and view orders that are ready to be processed, the user must be associated with at least one facility. User’s can only fulfill orders from facilities that they are associated with, so add the user to all the facilities that they will be fulfilling from.

#### Admin user

If you’re setting up an Admin user, set their Security Group to “Administrator”. This will automatically allow them to access facilities in the Fulfillment App without having to link them to each location individually.

### Fulfillment managers

For other users simply add the user to the facility from the Users App. To learn more about how users are added to facilities checkout the [user management guide](https://docs.hotwax.co/documents/v/system-admins/administration/users/manageuser).
