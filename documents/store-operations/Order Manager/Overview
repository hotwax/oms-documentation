# Order Manager — Application Overview

---

## What Is Order Manager?

Order Manager is a web-based application that helps teams **track, manage, and resolve sales orders** from the moment they are placed until they are delivered to the customer.

It connects in real time to the HotWax Commerce Order Management System (OMS) and gives operations teams, customer service representatives, and fulfillment teams a single place to:

- Monitor how many orders are at each stage of fulfillment
- Fix orders that have a problem (wrong address, fraud flag, out-of-stock item, etc.)
- Search for any order or customer record
- Create a new order manually on behalf of a customer
- View performance metrics across all fulfillment facilities

All data in the application is scoped to the **active Product Store** selected in Settings. Organizations with multiple brands or storefronts can manage each one separately within the same instance.

---

## Who Uses Order Manager?

| Role | What They Do in Order Manager |
|---|---|
| **Operations Manager** | Monitors daily order volumes, facility performance, and exception queues via the Order Funnel dashboard |
| **Customer Service Representative** | Looks up orders and customers, resolves holds, fixes addresses, and creates manual orders |
| **Fulfillment Team Lead** | Tracks open, in-progress, and packed orders at their facility and ships orders in bulk |
| **OMS Administrator** | Uses Find Orders and Find Customers to audit order routing and retrieve historical data |

---

## Pages at a Glance

### Fulfillment Workflow Pages

These pages show where orders are in the fulfillment process.

| Page | What It Shows |
|---|---|
| **Order Funnel** | A real-time dashboard showing today's order volumes, brokering progress, packed orders, exceptions, and facility-level performance |
| **Open Orders** | Approved orders that have not yet been assigned to a fulfillment facility |
| **Brokering Queue** | Orders waiting in virtual holding facilities to be routed to a store or warehouse |
| **Inflight Orders** | Orders that have been assigned to a facility and are currently being worked on |
| **Packed Orders** | Orders that are fully packed and waiting for the carrier to pick them up |

### Exception Pages

These pages show orders that have a problem and need someone to take action before they can continue.

| Page | The Problem | What You Can Do |
|---|---|---|
| **Bad Address Orders** | The shipping address could not be verified | Correct the address, accept a suggested fix, cancel the order, or move it to parking |
| **Fraud Orders** | The order has been flagged as potentially fraudulent | Resolve the flag (release the order) or cancel the order |
| **Hold Orders** | The order is paused for a reason that doesn't fall into another exception category | Resolve the hold to release the order |
| **Swap Orders** | An item is unavailable and a substitute product has been proposed | Accept or reject the substitution on each task card |
| **Unfillable Orders** | No facility has the product in stock | Re-broker the order, cancel it, or update the shipping method |

### Search and Management Pages

| Page | What It Does |
|---|---|
| **Find Orders** | Search across all orders in the system by name, ID, customer, date, status, or channel |
| **Find Customers** | Search for a customer by name, email, phone, or party ID |
| **Create Order** | Manually create a new sales order and submit it to the OMS |
| **Settings** | Manage your account preferences, product store, timezone, language, and barcode settings |

---

## How Orders Move Through the System

When a customer places an order, it follows a defined path through the fulfillment process. The table below shows each stage, where it appears in Order Manager, and what it means.

| Stage | Where It Appears | What Is Happening |
|---|---|---|
| **Approved** | Open Orders, Brokering Queue | The order is confirmed and waiting to be assigned to a facility |
| **Brokering** | Brokering Queue | The system is routing the order to the best available store or warehouse |
| **Inflight** | Inflight Orders | The facility has received the order and is picking and preparing it |
| **Packed** | Packed Orders | All items are packed and the order is ready for carrier pickup |
| **Shipped** | Find Orders (Order Detail) | The carrier has collected the order |

If a problem is detected at any stage, the order is placed **on hold** and appears in one of the exception pages until the issue is resolved.

---

## Logging In and Out

Order Manager is accessed through the **HotWax Commerce Launchpad**. After logging in, the application opens directly on the **Order Funnel** — the main dashboard.

To log out, go to **☰ Menu → Settings** and click **Logout**.

If the Settings page shows an **"Offline"** badge next to the OMS instance name, the application cannot connect to the backend. Contact your IT team or OMS administrator.

---

## Access and Permissions

Not all users will see every button or action. Certain features — such as bulk cancellation, editing shipping methods, and creating order tasks — are only available to users who have been granted the required permissions in the OMS.

If a button appears grayed out or is not visible, it typically means your account does not have permission for that action.

---

*Next: [Page Reference →](./README.md)*
