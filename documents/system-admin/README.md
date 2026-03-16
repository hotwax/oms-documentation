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

1. Open the [Launchpad](https://launchpad.hotwax.io/).
2. Enter your OMS instance URL and click **Next**.
3. Enter your **Username** and **Password**, then click **Login**.

Once logged in, clicking any app card on the home page will automatically authenticate you into that application.

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
| **Production** | Click on the app card. |
| **Development (Dev)** | Click the bottom-left icon on the app card. |
| **UAT (User Acceptance Testing)** | Click the bottom-right icon on the app card. |

{% hint style="info" %}
Some apps, such as Available to Promise, Order Routing, and Company, require a maarg instance to be configured. If maarg is not configured, these apps will display a **"Not configured"** badge and will be inaccessible.
{% endhint %}

---

## Logging Out

1. Click on your **user profile** at the top of the home page.
2. Select **Logout** from the popover menu.
