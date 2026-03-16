---
description: >-
  The Launchpad serves as the central hub for all HotWax Commerce apps,
  providing easy access to development, user acceptance testing (UAT), and
  production versions of the applications all in one place.
---

# Launchpad

The Launchpad is the central hub for accessing all HotWax Commerce applications. It provides Single Sign-On (SSO), so users only need to log in once to access all associated apps without re-entering credentials.

---

## Signing In

When you open the Launchpad without an active session, a `Login` button appears in the top-right corner of the home page. Select this button to begin the sign-in process.

1. Enter your `Order Management System (OMS) instance URL` and select `Next`.
2. Enter your `Username` and `Password`, then select `Login`.

Once signed in, selecting any app card on the home page automatically authenticates you into that application through Single Sign-On (SSO).

{% hint style="info" %}
In the `OMS instance URL` field, enter just the part before `.hotwax.io`. For example, if your instance is `company-name.hotwax.io`, enter `company-name`. The system automatically constructs the full instance URL. If you don't know your instance name, contact your system administrator.
{% endhint %}

If you select an app card without signing in first, the app redirects you back to the Launchpad login page to complete authentication before you can access it.

---

## Application Categories

Applications on the Launchpad are organized into the following categories:

### Orders

| App | Description |
|---|---|
| **BOPIS** | Enables store associates to manage and handover Buy Online, Pickup In-Store orders to customers. |
| **Fulfillment** | Enables store associates to pick, pack, and ship orders brokered to stores from the OMS. |
| **Pre-Orders** | Enables merchandisers to manage pre-orders and backorders with planned future inventory. |

### Workflow

| App | Description |
|---|---|
| **Available to Promise** | Enables merchandisers to configure rules for computing and publishing available inventory to sales channels. |
| **Job Manager** | Helps operations teams schedule, skip, cancel, and monitor automated jobs. |
| **Order Routing** | Enables merchandisers to configure order routing rules that determine how and where orders are fulfilled. |

### Inventory

| App | Description |
|---|---|
| **Receiving** | Enables store associates to manage incoming shipments, purchase orders, and return orders. |
| **Cycle Count** | Enables stock associates to count store inventory and reconcile systematic and physical inventory. |
| **Transfers** | Enables store associates to manage inventory transfers between facilities. |

### Administration

| App | Description |
|---|---|
| **Import** | Enables users to import inventory and purchase orders. |
| **Users** | Allows businesses to create and manage users within HotWax Commerce OMS. |
| **Facilities** | Assists businesses in managing multiple facilities like stores and warehouses, including facility details and fulfillment options. |
| **Company** | Enables administrators to manage company-level configurations, product stores, and Shopify shop connections. |

---

## Application Instances

Each app on the Launchpad can be launched in three different environments:

| Instance | How to Access |
|---|---|
| **Production** | Select the app card. |
| **Development (Dev)** | Select the bottom-left icon on the app card. |
| **UAT (User Acceptance Testing)** | Select the bottom-right icon on the app card. |

{% hint style="info" %}
Some apps, such as Available to Promise, Order Routing, and Company, require a Maarg instance to be configured. Maarg is HotWax Commerce's API and routing management platform. If Maarg is not configured, these apps will display a `Not configured` badge and will be inaccessible.
{% endhint %}

---

## Logging Out

1. Select your `user profile` at the top of the home page.
2. Select `Logout` from the menu.
