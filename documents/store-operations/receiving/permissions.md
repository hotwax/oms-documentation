## Permissions and access control

The receiving app uses application permissions that are derived from server permissions. Each app permission maps to a server permission in `Rules.ts`. If the rule is empty, the app permission is granted to all users who can log in.

Permissions affect:
* Navigation and route access (menu visibility and page access).  
* Action controls (buttons and toggles are disabled or hidden).  
* Facility access for admins.

### Navigation and route access

| App permission | Server permission | Impact in the app |
| --- | --- | --- |
| `APP_SHIPMENTS_VIEW` | `FULFILLMENT_LEGACY_APP_VIEW` | Allows access to the Shipments list and Shipment Details routes and menu item. |
| `APP_TRANSFERORDERS_VIEW` | `FULFILLMENT_APP_VIEW` | Allows access to the Transfer Orders list and Transfer Order Detail routes and menu item. |
| `APP_RETURNS_VIEW` | (none) | Allows access to the Returns list route and menu item (granted to all users). |
| `APP_RETURN_DETAIL_VIEW` | (none) | Allows access to the Return Detail route (granted to all users). |
| `APP_PURCHASEORDERS_VIEW` | (none) | Allows access to the Purchase Orders list route and menu item (granted to all users). |
| `APP_PURCHASEORDER_DETAIL_VIEW` | (none) | Allows access to the Purchase Order Detail route (granted to all users). |

**Special case behavior**
* If a user has both `APP_SHIPMENTS_VIEW` and `APP_TRANSFERORDERS_VIEW`, the Transfer Orders menu item is hidden and direct access redirects away from the Transfer Orders pages.
* When a user attempts to open a page they do not have permission for, they are redirected to the previous page (or Settings if landing from login).

### Receiving and order actions

| App permission | Server permission | Impact in the app |
| --- | --- | --- |
| `APP_SHIPMENT_UPDATE` | `RECEIVING_ADMIN` | Enables receiving actions such as Receive, Receive and Close, Save progress, and Complete across shipments, transfer orders, purchase orders, and returns. Without it, those buttons are disabled. |
| `APP_SHIPMENT_ADMIN` | `RECEIVING_ADMIN` | Enables the Add Product button on Shipment Details, Transfer Order Detail, and Purchase Order Detail screens. |

### Settings and configuration

| App permission | Server permission | Impact in the app |
| --- | --- | --- |
| `APP_PRODUCT_IDENTIFIER_UPDATE` | `COMMON_ADMIN` | Allows editing product identifier preferences in Settings (applies within the Product Identifier control). |
| `APP_UPDT_FULFILL_FORCE_SCAN_CONFIG` | `COMMON_ADMIN` | Enables the Force scan toggle in Settings. |
| `APP_UPDT_RECEIVE_FLOW_CONFIG` | `COMMON_ADMIN` | Enables the Receive by fulfillment toggle in Settings. |
| `APP_PWA_STANDALONE_ACCESS` | `COMMON_ADMIN` | Shows the Go to Launchpad button in Settings. |

### Admin facility access

| App permission | Server permission | Impact in the app |
| --- | --- | --- |
| `APP_RECVG_ADMIN` | `COMMON_ADMIN` | Admins can access all facilities; non-admin users only see their assigned facilities in the facility switcher. |

### Reserved or currently unused

| App permission | Server permission | Impact in the app |
| --- | --- | --- |
| `APP_COMMERCE_VIEW` | `COMMERCEUSER_VIEW` | Not currently referenced in the receiving UI. |
