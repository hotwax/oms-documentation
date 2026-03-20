```json
{
  "repoLogicalNames": {
    "hotwax/receiving": "Receiving",
    "hotwax/bopis": "BOPIS",
    "hotwax/fulfillment": "Fulfillment",
    "hotwax/inventory-count": "Inventory Count",
    "hotwax/transfers": "Transfers",
    "hotwax/facilities": "Facilities",
    "hotwax/preorder": "Preorder",
    "hotwax/hotwax-maarg-util": "Integration Utilities",
    "hotwax/mantle-shopify-connector": "Shopify Connector",
    "hotwax/oms": "Order Management System",
    "hotwax/dxp-components": "DXP Components",
    "hotwax/hotwax-shopify-oms-bridge": "Shopify Bridge",
    "hotwax/hotwax-oms": "HotWax OMS",
    "hotwax/hotwax-poorti": "Poorti",
    "hotwax/job-manager": "Job Manager",
    "hotwax/hotwax-ofbiz-oms-usl": "Data Models",
    "hotwax/mantle-netsuite-connector": "NetSuite Connector",
    "hotwax/hotwax-unigate": "Unigate",
    "hotwax/OrderRouting": "Order Routing"
  },
  "clusters": [
    {
      "name": "Shopify Authentication",
      "reason": "Unified integration with Shopify App Bridge to support embedded application authentication and POS camera scanning across mobile platforms.",
      "itemIds": [
        "hotwax/receiving#652",
        "hotwax/receiving#548",
        "hotwax/receiving#578",
        "hotwax/receiving#549",
        "hotwax/bopis#758",
        "hotwax/bopis#747",
        "hotwax/fulfillment#1582",
        "hotwax/fulfillment#1351",
        "hotwax/fulfillment#1556",
        "hotwax/fulfillment#1352",
        "hotwax/inventory-count#1341",
        "hotwax/inventory-count#1308"
      ]
    },
    {
      "name": "Order Synchronization",
      "reason": "Re-architecture of the Shopify order ingestion pipeline using AWS SQS, a unified GraphQL mega-query, and hash-based change detection for idempotent synchronization.",
      "itemIds": [
        "hotwax/mantle-shopify-connector#256",
        "hotwax/mantle-shopify-connector#260",
        "hotwax/mantle-shopify-connector#261",
        "hotwax/mantle-shopify-connector#257",
        "hotwax/mantle-shopify-connector#268",
        "hotwax/hotwax-shopify-oms-bridge#65",
        "hotwax/hotwax-shopify-oms-bridge#62",
        "hotwax/hotwax-shopify-oms-bridge#55",
        "hotwax/hotwax-shopify-oms-bridge#58",
        "hotwax/oms#400",
        "hotwax/oms#403"
      ]
    },
    {
      "name": "Shipment Routing",
      "reason": "Logistical improvements for Ship-to-Store (STS) orders, including accurate pickup facility address resolution, notification triggers, and conversion logic.",
      "itemIds": [
        "hotwax/bopis#745",
        "hotwax/bopis#739",
        "hotwax/bopis#740",
        "hotwax/fulfillment#1573",
        "hotwax/fulfillment#1569",
        "hotwax/oms#395",
        "hotwax/oms#406",
        "hotwax/oms#405",
        "hotwax/hotwax-oms#389"
      ]
    },
    {
      "name": "Refunds",
      "reason": "Support for processing Shopify refunds including returns, appeasements, cancellations, and exchange credits within the OMS bridge.",
      "itemIds": [
        "hotwax/hotwax-shopify-oms-bridge#54",
        "hotwax/hotwax-shopify-oms-bridge#63"
      ]
    },
    {
      "name": "Inventory Synchronization",
      "reason": "Automated synchronization of product deletions from Shopify via SQS to ensure virtual and variant products are correctly expired and removed from indices.",
      "itemIds": [
        "hotwax/mantle-shopify-connector#267",
        "hotwax/oms#416",
        "hotwax/hotwax-oms#420"
      ]
    },
    {
      "name": "Inventory Availability",
      "reason": "Improved visibility for facility-level inventory allowing ATP popups to remain accessible regardless of negative stock values.",
      "itemIds": [
        "hotwax/hotwax-oms#411",
        "hotwax/hotwax-oms#405"
      ]
    },
    {
      "name": "Delivery Confirmation",
      "reason": "Enhanced proof-of-delivery workflows to capture and pre-fill recipient phone and email details for billing and shipping contacts.",
      "itemIds": [
        "hotwax/bopis#738",
        "hotwax/bopis#737",
        "hotwax/bopis#736",
        "hotwax/hotwax-poorti#218"
      ]
    },
    {
      "name": "Order Filtering",
      "reason": "Restricts Order Lookup functionality to the currently assigned facility to streamline store-level operations.",
      "itemIds": [
        "hotwax/fulfillment#1578",
        "hotwax/fulfillment#1568"
      ]
    },
    {
      "name": "Fulfillment Tracking",
      "reason": "Introduced fulfillment history recording to identify and track ship-group completions initiated from external platforms like Shopify.",
      "itemIds": [
        "hotwax/mantle-shopify-connector#265",
        "hotwax/mantle-shopify-connector#264"
      ]
    },
    {
      "name": "Security Permissions",
      "reason": "Introduction of granular security permissions to control administrative actions such as manual order refreshing in the OMS.",
      "itemIds": [
        "hotwax/hotwax-oms#395"
      ]
    },
    {
      "name": "Log Management",
      "reason": "New APIs to support Model Context Protocol (MCP) integration, allowing AI agents to monitor and troubleshoot data integration failures.",
      "itemIds": [
        "hotwax/hotwax-oms#383"
      ]
    },
    {
      "name": "Message Queuing",
      "reason": "Standardized AWS SQS integration tooling and factory configuration for reliable asynchronous message management.",
      "itemIds": [
        "hotwax/hotwax-maarg-util#23",
        "hotwax/hotwax-maarg-util#24"
      ]
    },
    {
      "name": "Order Rejection",
      "reason": "UI state management improvements to ensure the order rejection button persists after failed API attempts, allowing for retries.",
      "itemIds": [
        "hotwax/fulfillment#1567",
        "hotwax/fulfillment#1536"
      ]
    },
    {
      "name": "NetSuite Integration",
      "reason": "Performance improvements for NetSuite connectivity including access token caching for REST services.",
      "itemIds": [
        "hotwax/mantle-netsuite-connector#199"
      ]
    },
    {
      "name": "Product Indexing",
      "reason": "Fixed caching and synchronization issues to ensure variant products are properly indexed in Solr upon creation.",
      "itemIds": [
        "hotwax/hotwax-oms#378",
        "hotwax/hotwax-oms#377"
      ]
    },
    {
      "name": "Store Settings",
      "reason": "Enhanced product store configuration tools featuring autocomplete-based enumeration search and store-specific contact mechanism support.",
      "itemIds": [
        "hotwax/hotwax-oms#406",
        "hotwax/hotwax-oms#419",
        "hotwax/hotwax-oms#357"
      ]
    },
    {
      "name": "Return Reports",
      "reason": "Standardized return shipment receipt processes and support for exportable CSV reports for sales returns.",
      "itemIds": [
        "hotwax/hotwax-poorti#223",
        "hotwax/hotwax-oms#402"
      ]
    }
  ],
  "noiseItemIds": [
    "hotwax/receiving#650",
    "hotwax/receiving#647",
    "hotwax/bopis#759",
    "hotwax/bopis#741",
    "hotwax/bopis#742",
    "hotwax/bopis#744",
    "hotwax/bopis#749",
    "hotwax/bopis#750",
    "hotwax/bopis#748",
    "hotwax/bopis#751",
    "hotwax/fulfillment#1575",
    "hotwax/fulfillment#1564",
    "hotwax/fulfillment#1572",
    "hotwax/inventory-count#1375",
    "hotwax/inventory-count#1374",
    "hotwax/inventory-count#1383",
    "hotwax/hotwax-maarg-util#25",
    "hotwax/hotwax-maarg-util#26",
    "hotwax/mantle-shopify-connector#209",
    "hotwax/mantle-shopify-connector#262",
    "hotwax/oms#380",
    "hotwax/oms#404",
    "hotwax/hotwax-shopify-oms-bridge#68",
    "hotwax/hotwax-shopify-oms-bridge#67",
    "hotwax/hotwax-shopify-oms-bridge#69",
    "hotwax/hotwax-shopify-oms-bridge#64",
    "hotwax/hotwax-shopify-oms-bridge#66",
    "hotwax/hotwax-oms#415",
    "hotwax/hotwax-oms#388",
    "hotwax/hotwax-oms#387",
    "hotwax/hotwax-oms#370",
    "hotwax/hotwax-oms#300",
    "hotwax/hotwax-oms#399",
    "hotwax/hotwax-oms#398",
    "hotwax/hotwax-oms#412",
    "hotwax/hotwax-oms#414",
    "hotwax/hotwax-oms#391",
    "hotwax/hotwax-poorti#224"
  ],
  "needClarificationItemIds": [
    "hotwax/inventory-count#1378",
    "hotwax/inventory-count#1379",
    "hotwax/inventory-count#1380",
    "hotwax/oms#385"
  ]
}

```