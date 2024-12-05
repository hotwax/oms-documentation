## Description
Discover how integration with NetSuite simplifies inventory synchronization and management of Kit products and their components in HotWax Commerce, ensuring accurate inventory calculations and order fulfillment updates.
# <a name="_ks6gvly2kyoi"></a>Kits
## <a name="_i7k6up5uxaps"></a>Inventory Synchronization of Kit products and thier components from NetSuite to HotWax Commerce

Integration with NetSuite simplifies the inventory synchronization of kit Products and their components in HotWax Commerce. As NetSuite shares a daily morning feed of the inventory of products, it includes the inventory of kit Products and their components as well.
## <a name="_i7k6up5uxaps"></a>Kit Products
Discover how integration with NetSuite simplifies the relationship of kit and its component in HotWax Commerce, ensuring accurate inventory calculations of kit products.
## <a name="_vixq2zax8v49"></a>Synchronization of Kit Products from NetSuite to HotWax Commerce

HotWax Commerce syncs the catalog of kit products and their components from NetSuite. These products are of type **MARKETING\_PKG\_PICK** in HotWax Commerce.


The synchronization of kit products from NetSuite to HotWax Commerce follows a three-step process:
### <a name="_1l8acvc9mdau"></a>**Step 1: Fetch Kit and its Components from Netsuite**

The catalog of kit products and their components is fetched by a **SuiteScript** (runs once in a day to fetch all time records) in NetSuite, which creates a CSV file and places it in an SFTP location.  

**SuiteScript :**
```
HC\_MR\_ExportedKITProductCSV
```

**CSV:**

|**productId**|**productIdTo**|**quantity**|**productAssocTypeId**|
| :- | :- | :- | :- |
|10003|10571|1|PRODUCT\_COMPONENT|
|10003|10594|1|PRODUCT\_COMPONENT|



**SFTP Location:**
```
/home/user-sftp/netsuite/product/kit-nifi
```
### <a name="_w9mj29f0k4kg"></a>**Step 2: Transformation**

**2.1 SFTP Location:**
```
/home/user-sftp/netsuite/product/kit-nifi
```
This file contains product SKUs, but HotWax Commerce requires its internal IDs at the time of import to read and  process the data.**


**2.2** NiFi then reads and transforms this CSV file into JSON format and converts the SKU to the HotWax Commerce internal ID so that HotWax Commerce can read this file. This JSON path  is then placed at an SFTP location.

**JSON path:**
/home/user-sftp/netsuite/product/kit
<a name="_s94pwxhlwyt2"></a>**Step 3: Import Kit and its Components in HotWax Commerce:**

-----------------------------------------------------------------------------------------
### <a name="_w9mj29f0k4kg"></a>**Step 3: Import Kit and its Components in HotWax Commerce:**

The **" Import KIT Component"** job runs every 6 hours and performs the following tasks:

- It imports and creates/updates the relationship between kit products and its components based on the quantities.

## <a name="_dyqobwvjoseg"></a>Job to Calculate Kit Product's Inventory on the Basis of its Components :

The **"Bulk Recent Kit Product Inventory Setup"** job calculates the inventory of  the kit products by considering the lowest common denominator among its components at a given location.

For Example:
**For Single Location:**

1. A kit product consisting of a belt and wallet at a single location:

- Times Square Store: 5 Belts
- Times Square Store: 10 Wallets


It will record an inventory of 5 in HotWax Commerce for this kit product, reflecting the availability of the most limited component at this location in the kit product.


**For Multi-Location:**

1. A kit products consisting of a belt and wallet distributed across multiple locations:

- Times Square Store: 5 Belts
- Brooklyn Store: 10 Wallets
- Broadway Store: 3 Belts and 7 Wallets

It will record an inventory of 3 in HotWax Commerce for this kit product, because only the Broadway store has both belts and wallets so a kit product can only be fulfilled from the Broadway store. So inventory is reflecting the available quantity of the most limited component at a location where both components are available.

2. A kit product consisting of a belt and wallet distributed across multiple locations:

- Times Square Store: 5 Belts
- Brooklyn Store: 3 Belts and 2 Wallets
- Broadway Store: 1 Belt and 5 Wallets


Here, Brooklyn has enough stock to make 2 kits (3 belts and 2 wallets), and Broadway can fulfill 1 kit (1 belt and 1 wallet). While the total available belts and wallets across all locations might be summed up as 4 belts (3 + 1) and 7 wallets (2 + 5), this does not represent the actual number of kits that can be fulfilled.

The correct calculation is based on the available components at each location, resulting in 3 kits, that is, 2 from Brooklyn and 1 from Broadway.
