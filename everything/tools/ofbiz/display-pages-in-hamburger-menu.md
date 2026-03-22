# Display Non-Existent Pages in the Hamburger Menu

When a new screen or page is created in the OFBiz-based HotWax OMS application, it does not automatically appear in the Hamburger Menu. The HotWax Commerce hamburger menu is fully data-driven and built upon the core OFBiz Content Management System (CMS). 

To display a new page in the menu, a system administrator must create specific data records—`DataResource`, `Content`, and `ContentAssoc`—and link them to the master `HAMBURGER_MENU` hierarchy.

Below is a standard operating procedure (SOP) that outlines the exact steps and XML snippets needed to append a new page to the Hamburger Menu.

---

## Prerequisites

Before proceeding, ensure you have:
1. The **URL mapping** or **View path** (e.g., `FindOrder` or `ImportData?configId=IMP_ORDER`) for the new page.
2. A **Security Permission String** (e.g., `ORD_SALES_ORDER_VIEW`) that dictates which users can view this page.
3. Access to load XML data into the system, either via the Webtools application's XML Data Import screen (`/webtools/control/EntityImport`) or the Entity Data Maintenance UI.

---

## Step 1: Create a DataResource Record

The `DataResource` record acts as the routing pointer. It stores the specific URL path of your newly created screen.

**Example XML configuration:**
```xml
<DataResource dataResourceId="NEW_SCREEN_RESOURCE" 
              dataResourceTypeId="LINK" 
              dataTemplateTypeId="NONE" 
              objectInfo="YourNewScreenUrlPath?param=value"/>
```
* **`dataResourceId`**: A unique ID for this resource (e.g., `NEW_SCREEN_RESOURCE`).
* **`objectInfo`**: The exact URL path or endpoint that resolves to the new page (e.g., `MyCustomScreen`).

---

## Step 2: Create a Content Record

The `Content` record dictates the presentation and security. It references the `DataResource` created in the previous step, defines the UI display label, assigns an optional FontAwesome icon, and locks the menu item behind a permission.

**Example XML configuration:**
```xml
<Content contentId="NEW_SCREEN_CONTENT" 
         contentTypeId="DOCUMENT" 
         dataResourceId="NEW_SCREEN_RESOURCE" 
         contentName="My Custom Page Label" 
         description="fa fa-star fa-fw"
         permissionEnumId="MY_NEW_REQUIRED_PERMISSION"/>
```
* **`contentId`**: A unique ID for the content (e.g., `NEW_SCREEN_CONTENT`).
* **`dataResourceId`**: Must match the ID defined in Step 1.
* **`contentName`**: The text that will visually render as the menu item label. You can use standard strings or predefined UI labels.
* **`description`**: Defines the icon for the menu. Use standard FontAwesome classes here.
* **`permissionEnumId`**: The exact permission string required to view this menu item.

---

## Step 3: Create a ContentAssoc Record

The `ContentAssoc` record creates the tree structure. It links your newly created `Content` node to an existing parent menu node in the hierarchy.

Common Parent Nodes (`contentId`):
* `ORDER_MENU` (Order Management)
* `PIM_HM_MENU` (Product Information Management)
* `FULFILLMENT_MENU` (Warehouse & Fulfillment)
* `MDM_MENU` (Master Data Management)
* `SETTINGS_MENU` (Settings)

**Example XML configuration:**
```xml
<ContentAssoc contentId="ORDER_MENU" 
              contentIdTo="NEW_SCREEN_CONTENT" 
              mapKey="sub_menu_item" 
              contentAssocTypeId="SUB_CONTENT" 
              fromDate="2024-01-01 01:01:01.000" 
              sequenceNum="50"/>
```
* **`contentId`**: The ID of the existing parent menu you want the page to nested under.
* **`contentIdTo`**: The ID of the `Content` node you generated in Step 2.
* **`mapKey`**: Structural map key. Typically `sub_menu_item`, `import_menu_item`, or `export_menu_item`.
* **`sequenceNum`**: Controls the ordering of the item inside the parent menu (a lower number means it will appear higher up).

---

## Step 4: Load the XML Data into the OMS

Once the three XML elements are properly defined, you must load them into the OMS database. 

1. Gather all three nodes into a complete XML structure:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <entity-engine-xml>
       <create-replace>
           <!-- Step 1: DataResource -->
           <DataResource dataResourceId="NEW_SCREEN_RESOURCE" dataResourceTypeId="LINK" dataTemplateTypeId="NONE" objectInfo="YourNewScreenUrlPath?param=value"/>
           
           <!-- Step 2: Content -->
           <Content contentId="NEW_SCREEN_CONTENT" contentTypeId="DOCUMENT" dataResourceId="NEW_SCREEN_RESOURCE" contentName="My Custom Page Label" description="fa fa-star fa-fw" permissionEnumId="MY_NEW_REQUIRED_PERMISSION"/>
           
           <!-- Step 3: ContentAssoc -->
           <ContentAssoc contentId="ORDER_MENU" contentIdTo="NEW_SCREEN_CONTENT" mapKey="sub_menu_item" contentAssocTypeId="SUB_CONTENT" fromDate="2024-01-01 01:01:01.000" sequenceNum="50"/>
       </create-replace>
   </entity-engine-xml>
   ```
2. Navigate to the **Entity Data Maintenance / XML Data Import** page in Webtools.
3. Paste the XML block into the text box and click **Import Text**.
4. Perform a page refresh (and sometimes a re-login) to immediately see the new page linked correctly within the Hamburger Menu in visually matching categories.
