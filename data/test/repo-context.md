# Repository Context Cache

<!-- REPO_SUMMARIES_START -->

## hotwax/receiving

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations


## hotwax/bopis

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/fulfillment

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/inventory-count

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/transfers

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/facilities

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/preorder

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/hotwax-maarg-util

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/mantle-shopify-connector

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/oms

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/dxp-components

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/hotwax-shopify-oms-bridge

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/hotwax-oms

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/hotwax-poorti

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/job-manager

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/hotwax-ofbiz-oms-usl

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/mantle-netsuite-connector

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/hotwax-unigate

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations

## hotwax/OrderRouting

### Description
[DRY RUN PROMPT]

Analyze the following README excerpts for these repositories.
Provide a quick description and any identifiable relations to other repositories for EACH.

Format your output EXACTLY as a JSON object with this structure:
{
  "summaries": {
    "owner/repo": {
      "description": "...",
      "relations": "..."
    }
  }
}

Repositories:
--- hotwax/receiving ---
# receiving
HotWax Commerce receiving app

# Build Notes

### Clone the repository (code)

- Open a Terminal window
- Clone app
- Go to app directory
- Run following command to download dependencies 
    npm i

### Start App

- To test the app in browser: ionic serve

https://ionicframework.com/docs/intro/cli
-To install Ionic CLI, follow instructions in the above link

#### Upload instance specific build

- While adding new configuration, make sure to add them in all of three environments file 

--- hotwax/bopis ---
# BOPIS

## 1. Repository Overview
- **Logical Name**: BOPIS ("Buy Online, Pick Up In Store").
- **Business Purpose**: This repository contains the HotWax BOPIS application used by store teams to manage buy-online-pickup-in-store and ship-to-store fulfillment. It provides a store-ops UI for finding pickup orders, creating picklists, packing/handing over shipments, and sending customer pickup notifications against an OMS backend.【F:src/services/OrderService.ts†L1-L378】

## 2. Core Responsibilitie

--- hotwax/fulfillment ---
# Fulfillment App

## 1. Repository Overview
**Logical Name**: Fulfillment.

**Business Purpose**: This repository provides the Fulfillment PWA used by store and warehouse teams to execute order fulfillment workflows, including picking, packing, shipping, and transfer order processing. It connects to HotWax Commerce services to retrieve work queues, manage shipments, and print fulfillment documents so organizations can ship customer orders and move inventory efficiently.

## 2. Core Responsibili

--- hotwax/inventory-count ---
# Inventory Count

## 1. Repository Overview
- **Logical Name**: Inventory Count (cycle-count)
- **Business Purpose**: This repository delivers HotWax Commerce’s Inventory/Cycle Count mobile + web application used by store and warehouse teams to execute physical counts. It focuses on creating, running, and reviewing cycle counts, capturing scan events offline, and synchronizing results back to the HotWax OMS for inventory accuracy and variance review. It also supports bulk count imports, session

--- hotwax/transfers ---
Transfers App
# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/transfers/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example`.
5. To run the app in

--- hotwax/facilities ---
# Facilities


--- hotwax/preorder ---
![image](https://user-images.githubusercontent.com/15027245/148551077-087685a0-8800-4a54-9a51-d02726dee916.png)

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/pickingapp/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
 

--- hotwax/hotwax-maarg-util ---
# maarg-util

### Linking OFBiz and Moqui Instances
To properly link OFBiz and Moqui instances, the following configurations must be applied during deployment:

### Moqui Configuration
Add the following properties to the Moqui configuration file:

```
    <default-property name="ofbiz.instance.url" value="https://localhost:8443"/>
    <default-property name="ofbiz.instance.name" value="localhost"/>
```    
### OFBiz Configuration
Update the start.properties file located at framework/start/src/ma

--- hotwax/mantle-shopify-connector ---

# mantle-shopify-connector

This moqui runtime component integrates with a subset of Shopify admin APIs to execute OMS integration workflows.

### Global Configuration

This is the global configuration needed for most features in this integration.

```aidl
<!-- Parent SystemMessageType record for incoming and outgoing local feed file system message types -->
<moqui.service.message.SystemMessageType systemMessageTypeId="LocalFeedFile" description="Local Feed File"/>

<!-- ServiceJob data to purg

--- hotwax/oms ---
# oms
Order management System 


--- hotwax/dxp-components ---
# DXP Components for Vue applications

## How to use?

# Contribution Guideline

1. Fork the repository and clone it locally from the `main` branch. Before starting your work make sure it's up to date with current `main` branch.
2. Pick an issue from [here](https://github.com/hotwax/dxp-components/issues). Write in the issue comment that you want to pick it, if you can't assign yourself. **Please stay assigned to one issue at a time to not block others**.
3. Create a branch for your edits. Use t

--- hotwax/hotwax-shopify-oms-bridge ---
# shopify-oms-bridge



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ]

--- hotwax/hotwax-oms ---
////
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in

--- hotwax/hotwax-poorti ---
# poorti



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files 

--- hotwax/job-manager ---
HotWax Commerce Job Manager App

# Prerequisite
Ionic CLI - If you don't have the ionic CLI installed refer [official documentation](https://ionicframework.com/docs/intro/cli) for the installation instructions.


# Build Notes (Users)

1. Download the app from [release](https://github.com/hotwax/job-manager/releases) page and extract it.
2. Go to the app directory.
3. Run following command to download dependencies  
    `npm i`
4. Create a `.env` file by taking reference from the `.env.example` 

--- hotwax/hotwax-ofbiz-oms-usl ---
# ofbiz-oms-usl

Apache OFBiz data model as per Moqui entity definition

## Set Up

For the HotWax generated Feeds with ofbiz-oms-usl, a database user for the ofbiz_transactional datasource
group is required. This user should have below permissions.
1. Write access to the below entity tables:
   1. FinancialOrderHistory (Financial_Order_History)
   2. FinancialReturnHistory (Financial_Return_History)
   3. FinancialFeedErrorHistory (Financial_Feed_Error_History)
   4. OrderAdjustmentHistory (Ord

--- hotwax/mantle-netsuite-connector ---
# mantle-netsuite-connector
NetSuite Connector in Moqui


--- hotwax/hotwax-unigate ---
# Unigate


--- hotwax/OrderRouting ---
# Order Routing

Order routing is a process within the domain of e-commerce, retail, and logistics that involves directing and managing the flow of customer orders from the point of sale to the point of fulfillment. The primary goal of order routing is to optimize the delivery of products or services to customers by determining the most efficient path for order processing and fulfillment.

## Key Components

1. **Routing Rules and Conditions:** Establishing rules and conditions that dictate how 


### Relations
Dry run relations
<!-- REPO_SUMMARIES_END -->
