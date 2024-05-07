## Introduction

Flow fetches the return reasons associated to a return line item from Shopify. 

This flow takes input of Shopify RefundIds and outputs the Return Reason. It polls a configured SFTP server location to read a JSON file containing Shopify Refund Ids and again sends the output to a configured SFTP location with Return Reasons in JSON format.

#### Input Sample

A JSON file with below content is expected to be kept at configured SFTP location (recievePath in Setup Steps)
```
[{"refundId":"gid://shopify/Refund/956820554012"}]
```
#### Output Sample

A JSON file with below content will be sent to the configured SFTP location (sendPath in setup steps)

```
[ {
  "shopifyRefundId" : "gid://shopify/Refund/956820554012",
  "shopifyOrderId" : "gid://shopify/Order/5666363998492",
  "shopifyReturnId" : "gid://shopify/Return/4138303772",
  "returnLineItems" : [ {
    "shopifyLineItemId" : "gid://shopify/LineItem/14511417622812",
    "returnReason" : "SIZE_TOO_SMALL",
    "returnReasonNote" : "",
    "customerNote" : null
  } ]
} ]
```

## Setup Steps

Setting up this flow on Moqui requires following steps.

#### Data Upload
Following data is needed to be uploaded on Moqui instance and below are some important values that are needed to be populated before the data upload.

1. **recievePath** - SFTP location to pick input file with Shopify Refund IDs from. 
    1. In the receivePath field of `OMSSyncedRefundsFeed` systemMessageType give the SFTP filepath to read input from.

2. **recieveMovePath** - SFTP location to move the picked input file to archive. 
    1. In the recieveMovePath field of `OMSSyncedRefundsFeed` systemMessageType give the SFTP filepath to move the read file to archive.

3. **parameterValue** - SystemMessageRemote Id with Shopify app name and security access token.
    1. In the parameterValue field inside parameter tag of `OMSSyncedRefundsFeed` systemMessageType with parameterName   as consumeSmrId give the System Message Remote Id that contains the Shopify credentials. Ex- ShopifyConfig.

4. **systemMessageRemoteId** - SystemMessageRemoteId with SFTP credentials.
    1. In the SystemMessageRemoteId field inside parameter tag of `OMSSyncedRefundsFeed` systemMessageType with parameterName as consumeSmrId give the System Message Remote Id that contains the SFTP credentials. Ex- RemoteSftp.

5. **sendPath** - SFTP location to send output file with Return Reasons.
    1. In the sendPath field of `SendShopifyReturnReasonFeed` systemMessageType give the SFTP filepath to send the output file with return reasons.


```
<!-- SystemMessageType record for importing OMS Synced Refunds Feed -->
<moqui.service.message.SystemMessageType systemMessageTypeId="OMSSyncedRefundsFeed"
        description="Create OMS Synced Refunds Feed System Message"
        parentTypeId="LocalFeedFile"
        consumeServiceName="co.hotwax.shopify.system.ShopifySystemMessageServices.consume#SyncedRefundsFeed"
        receivePath=""
        receiveResponseEnumId="MsgRrMove"
        receiveMovePath=""
        sendPath="${contentRoot}/shopify/SyncedRefundsFeed">
    <parameters parameterName="consumeSmrId" parameterValue="" systemMessageRemoteId=""/>
</moqui.service.message.SystemMessageType>

<!-- SystemMessageType record for sending Shopify Return Reason Feed (sendPath = sftp directory) -->
<moqui.service.message.SystemMessageType systemMessageTypeId="SendShopifyReturnReasonFeed"
        description="Send Shopify Return Reason Feed"
        parentTypeId="LocalFeedFile"
        sendServiceName="co.hotwax.ofbiz.SystemMessageServices.send#SystemMessageFileSftp"
        sendPath=""
        receivePath="${contentRoot}/shopify/ShopifyReturnReasonFeed/ShopifyReturnReasonFeed-${dateTime}.json"/>

<!-- Enumeration to create relation between OMSSyncedRefundsFeed and SendShopifyReturnReasonFeed SystemMessageType(s) -->
<moqui.basic.Enumeration description="Send Bulk Order Custom Attributes Query Result" enumId="SendShopifyReturnReasonFeed" enumTypeId="ShopifyMessageTypeEnum"/>
<moqui.basic.Enumeration description="Bulk Order Custom Attributes Query" enumId="OMSSyncedRefundsFeed" enumTypeId="ShopifyMessageTypeEnum" relatedEnumId="SendShopifyReturnReasonFeed" relatedEnumTypeId="ShopifyMessageTypeEnum"/>

<!-- ServiceJob data for polling OMS Synced Refunds Feed -->
<moqui.service.job.ServiceJob jobName="poll_SystemMessageFileSftp_OMSSyncedRefundsFeed" description="Poll OMS Synced Refunds Feed"
        serviceName="co.hotwax.ofbiz.SystemMessageServices.poll#SystemMessageFileSftp" cronExpression="0 0 * * * ?" paused="Y">
    <parameters parameterName="systemMessageTypeId" parameterValue="OMSSyncedRefundsFeed"/>
    <parameters parameterName="systemMessageRemoteId" parameterValue=""/>
</moqui.service.job.ServiceJob>
```

#### Jobs configuration

Once the data is imported, following jobs are needed to be configured-

1. **poll_SystemMessageFileSftp_OMSSyncedRefundsFeed**
    1. IN Parameters-
        1. systemMessageRemoteId - \<System Message Remote Id with SFTP details\>
        2. systemMessageTypeId - OMSSyncedRefundsFeed

## Working

1. poll_SystemMessageFileSftp_OMSSyncedRefundsFeed service job calls the poll#SystemMessageFileSftp service.
2. poll#SystemMessageFileSftp service internally calls the receive#IncomingSystemMessage service and fetches the input file from SFTP server.
3. receive#IncomingSystemMessage service creates a SystemMessage with Status `SmsgReceived` and internally calls the consume#ReceivedSystemMessage service.
4. consume#ReceivedSystemMessage service does following-
    1. Updates the SystemMessage status to `SmsgConsuming`.
    2. Calls the consume service passed in OMSSyncedRefundsFeed system message type i.e. consume#SyncedRefundsFeed. 
    3. If consume#SyncedRefundsFeed works successfully, the status is changed to `SmsgConsumed`.
5. consume#SyncedRefundsFeed does following-
    1. Receives systemMessage in `SmsgConsuming` state.
    2. Processes the data fetched from input SFTP location and calls get#ReturnLineItemsByRefund service for each refund id passed in the input JSON list.
    3. Updates the systemMessageType from OMSSyncedRefundsFeed to SendShopifyReturnReasonFeed using enumeration entity. This is required to get details to put the output data on SFTP.
    4. Prepares the file path for the output feed.
    5. Calls queue#SystemMessage service to send the output file to SFTP with systemMessageType SendShopifyReturnReasonFeed. Further description will continue from point 8.
6. get#ReturnLineItemsByRefund does following -
    1. This service prepares GraphQL request body (query) using ftl written in ReturnLineItemsByRefundQuery.ftl file.
    2. Calls send#ShopifyGraphqlRequest service with prepared GraphQL query.
    3. Fetches the required data from the output of GraphQL response received from send#ShopifyGraphqlRequest service.
7. send#ShopifyGraphqlRequest service makes the HTTP call to Shopify and returns the response.
8. queue#SystemMessage service creates a system message in `SmsgProduced` status and calls send#ProducedSystemMessage service.
9. send#ProducedSystemMessage service does following-
    1. Updates the systemMessage status to SmsgSending.
    2. Calls the send service passed i.e. send#SystemMessageFileSftp in SendShopifyReturnReasonFeed systemMessageType.
    3. Then updates the SystemMessage status to SmsgSent if send#SystemMessageFileSftp works successfully.
10. send#SystemMessageFileSftp service will send the data to the configured SFTP server location.

