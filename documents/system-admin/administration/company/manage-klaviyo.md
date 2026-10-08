---
description: Connect Klaviyo and review its HotWax Commerce notification use cases.
---

# Manage Klaviyo

The Klaviyo integration sends supported HotWax Commerce order events to Klaviyo for customer communication.

## Review supported use cases

The Klaviyo page identifies notification use cases such as:

* Buy Online Pick Up In Store order ready for pickup
* Pickup order completion
* Pickup order rejection
* Order cancellation events

Confirm the notification design and Klaviyo templates with the implementation team before connecting a production account.

## Connect Klaviyo

Company requires an OMS-side Unigate tenant before it can create Klaviyo connections. When the page shows `Klaviyo isn't ready on this instance yet`, ask an administrator to provision the tenant from OMS Admin, then return and click `Check again`.

1. Open the **Company App**.
2. Go to `Klaviyo`.
3. Click `Connect Klaviyo`.
4. Enter the connection name, Klaviyo endpoint, and approved API key.
5. Save the connection.
6. Return to the Klaviyo list and confirm that the connection appears.

Keep API keys and other connection secrets out of screenshots and support tickets.

## Review a connection

1. Go to `Klaviyo`.
2. Select the connection.
3. Confirm the endpoint, masked API key, tenant, and active status.
4. Select the Product Store.
5. Turn on each email event that this Klaviyo connection should send.
6. Enter the customer-facing subject for the enabled event.
7. Repeat for each Product Store.

Validate the first event with a test order and confirm receipt in Klaviyo before enabling customer-facing communication.

An event can be owned by only one Klaviyo connection. When another connection owns the event, disable it there before assigning it to the current connection.

## Disconnect Klaviyo

Disconnecting removes the saved API key and stops every email event owned by the connection.

1. Open the connection.
2. Review the number of active email events.
3. Click `Disconnect`.
4. When active events exist, enter `DELETE`.
5. Click `Disconnect Klaviyo`.

The disconnect action provides no undo option. Reconnecting requires the API key again.
