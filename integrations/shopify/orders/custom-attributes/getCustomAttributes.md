## Introduction

Flow fetches the custom attributes associated to an order from Shopify. 

This flow takes input of a time range (fromDate and thruDate) and outputs custom attributes for all the orders in the given time range. It fetches data from Shopify and sends the output to a configured SFTP location with custom attributes in JSONL format.

#### Input Sample

Time range is passed in the fromDate and thruDate parameters in the queue_BulkQuerySystemMessage_BulkOrderCustomAttributesQuery job
```
fromDate = 2024-01-01 00:00:00
thruDate = 2024-01-01 23:59:59
```

#### Output Sample

A JSONL file with below content will be sent to the configured SFTP location (sendPath in setup steps)

```
{"id":"gid:\/\/shopify\/Order\/4930551447741","name":"90002320","customAttributes":[{"key":"配送日","value":"希望なし"},{"key":"配送時間帯","value":"12:00-14:00"}]}
{"id":"gid:\/\/shopify\/Order\/4930558460093","name":"90002321","customAttributes":[{"key":"配送日","value":"希望なし"},{"key":"配送時間帯","value":"希望なし"}]}
{"id":"gid:\/\/shopify\/Order\/4930572878013","name":"90002322","customAttributes":[{"key":"配送日","value":"希望なし"},{"key":"配送時間帯","value":"12:00-14:00"},{"key":"代引き手数料","value":"770円"}]}
```

## Setup Steps

Setting up this flow on Moqui requires following steps.

#### Data Upload
Following data is needed to be uploaded on Moqui instance and below are some important values that are needed to be populated before the data upload.

1. **sendPath** - SFTP location to send output file with Custom Attributes.
    1. In the sendPath field of `SendBulkOrderCustomAttributesQueryResult` systemMessageType give the SFTP filepath to send the output file with custom attributes.

2. **systemMessageRemoteId** - SystemMessageRemote Id with Shopify app name and security access token.
    1. In the SystemMessageRemoteId field inside parameter tag of `BulkOrderCustomAttributesQuery` systemMessageType with parameterName as consumeSmrId give the System Message Remote Id that contains the Shopify credentials. Ex- ShopifyConfig.

3. **parameterValue** - SystemMessageRemoteId with SFTP credentials.
    1. In the parameterValue field inside parameter tag of `BulkOrderCustomAttributesQuery` systemMessageType with parameterName as consumeSmrId give the System Message Remote Id that contains the SFTP credentials. Ex- RemoteSftp.

```
<!-- SystemMessageType record for bulk order custom attributes query to Shopify -->
<moqui.service.message.SystemMessageType systemMessageTypeId="BulkOrderCustomAttributesQuery"
        description="Bulk Order Custom Attributes Query System Message"
        parentTypeId="ShopifyBulkQuery"
        sendServiceName="co.hotwax.shopify.system.ShopifySystemMessageServices.send#BulkQuerySystemMessage"
        sendPath="component://shopify-connector/template/graphQL/BulkOrderCustomAttributesQuery.ftl"
        consumeServiceName="co.hotwax.shopify.system.ShopifySystemMessageServices.consume#BulkOperationResult"
        receivePath="${contentRoot}/shopify/BulkOrderCustomAttributesQuery/BulkOperationResult-${systemMessageId}-${remoteMessageId}-${nowDate}.jsonl">
    <parameters parameterName="consumeSmrId" parameterValue="" systemMessageRemoteId=""/>
</moqui.service.message.SystemMessageType>

<!-- SystemMessageType record for sending bulk order custom attributes query result to SFTP -->
<moqui.service.message.SystemMessageType systemMessageTypeId="SendBulkOrderCustomAttributesQueryResult"
        description="Send Bulk Order Custom Attributes Query Result"
        parentTypeId="LocalFeedFile"
        sendServiceName="co.hotwax.ofbiz.SystemMessageServices.send#SystemMessageFileSftp"
        sendPath=""/>

<!-- Enumeration to create relation between BulkOrderCustomAttributesQuery and SendBulkOrderCustomAttributesQueryResult SystemMessageType(s) -->
<moqui.basic.Enumeration description="Send Bulk Order Custom Attributes Query Result" enumId="SendBulkOrderCustomAttributesQueryResult" enumTypeId="ShopifyMessageTypeEnum"/>
<moqui.basic.Enumeration description="Bulk Order Custom Attributes Query" enumId="BulkOrderCustomAttributesQuery" enumTypeId="ShopifyMessageTypeEnum" relatedEnumId="SendBulkOrderCustomAttributesQueryResult" relatedEnumTypeId="ShopifyMessageTypeEnum"/>
    
<!-- ServiceJob data for queuing bulk order custom attributes query -->
<moqui.service.job.ServiceJob jobName="queue_BulkQuerySystemMessage_BulkOrderCustomAttributesQuery" description="Queue bulk order custom attributes query"
        serviceName="co.hotwax.shopify.system.ShopifySystemMessageServices.queue#BulkQuerySystemMessage" cronExpression="0 0/15 * * * ?" paused="Y">
    <parameters parameterName="systemMessageTypeId" parameterValue="BulkOrderCustomAttributesQuery"/>
    <parameters parameterName="systemMessageRemoteId" parameterValue=""/>
    <parameters parameterName="filterQuery" parameterValue=""/>
    <parameters parameterName="fromDate" parameterValue=""/>
    <parameters parameterName="thruDate" parameterValue=""/>
    <parameters parameterName="fromDateLabel" parameterValue=""/>
    <parameters parameterName="thruDateLabel" parameterValue=""/>
</moqui.service.job.ServiceJob>
```

#### Jobs configuration

Once the data is imported, following jobs are needed to be configured-

1. **queue_BulkQuerySystemMessage_BulkOrderCustomAttributesQuery**
    1. IN Parameters-
        1. systemMessageRemoteId - \<System Message Remote Id with Shopify details\>
        2. systemMessageTypeId - BulkOrderCustomAttributesQuery
        3. fromDate - 2024-01-01 00:00:00
        4. thruDate - 2024-01-01 23:59:59\
        NOTE - 
            1. If fromDate and thruDate are not passed then data will be fetched incrementally.
            2. fromDate will be the time of the last runtime and thruDate will be the current time of Maarg server.
            3. Ideally if job is scheduled then no fromDate and thruDate should be passed, else it will result to same data as output after every run.
        
2. **send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery**
    1. IN Parameters-
        1. parentSystemMessageTypeId - ShopifyBulkQuery (Default Value)
        2. retryLimit - \<empty value defaults to 3\>

3. **poll_BulkOperationResult_ShopifyBulkQuery**
    1. IN Parameters-
        1. parentSystemMessageTypeId - ShopifyBulkQuery (Default Value)

## Working

### Job - queue_BulkQuerySystemMessage_BulkOrderCustomAttributesQuery
1. This job calls co.hotwax.shopify.system.ShopifySystemMessageServices.queue#BulkQuerySystemMessage service. This service does following-
    1. Checks for additional parameteres like fromDateBuffer, thruDateBuffer and filterQuery the SystemMessageTypeParameter entity and updates the queryParms accordingly.
    2. Checks if FromDate is passed or not in the service. If not passed then default fromDate is retrived from the processedDate field of the latest system message in `SmsgConfirmed` status.
    3. fromDate and thruDate are converted from server time zone to UTC timezone. As Shopify expects the values to be in UTC timezone.
    4. Once the query params are generated successfully, it is stored in a messageText variable.
    5. Then queue#SystemMessage service is called with prepared parameters and sendNow as False.
2. queue#SystemMessage service creates a SystemMessage in `SmsgProduced` status and queryParams are stored in the messageText field of this SystemMessage. Flow pauses here since sendNow field is set as False here.

### Job - send_ProducedBulkOperationSystemMessage_ShopifyBulkQuery
1. This job calls the co.hotwax.shopify.system.ShopifySystemMessageServices.send#ProducedBulkOperationSystemMessage service. This service does the following-
    1. Sends the upcoming operation in the queue only if the SystemMessage status Id is in `SmsgProduced` status.
    2. Terminates the flow if some operation is already in progress. It checks SystemMessageAndType view and if there is some record in SmsgSent status with parentTypeId same as the current parentSystemMessageTypeId (passed in the service job).
    3. Then send#ProducedSystemMessage service is called.
2. send#ProducedSystemMessage service does following-
    1. Updates the systemMessage status to `SmsgSending`.
    2. Calls the send service passed i.e. send#BulkQuerySystemMessage in BulkOrderCustomAttributesQuery systemMessageType.
    3. Then updates the SystemMessage status to `SmsgSent` if send#BulkQuerySystemMessage works successfully.
3. send#BulkQuerySystemMessage service does following -
    1. Prepares the bulkQueryContext and calls run#BulkOperationQuery GraphQL service.
    2. bulkQueryContext contains the SystemMessageRemoteId, QueryTemplateLocation and the queryParams that contains the fromDate and thruDate.
4. run#BulkOperationQuery takes input of bulkQueryContext and calls the send#ShopifyRequest with the prepared queryText.
5. send#ShopifyRequest calls the ShopifyAPI and returns the bulkOperationId.
6. This bulkOperationId is stored in the remoteMessageId of the SystemMessage in `SmsgSent` status.

### Job - poll_BulkOperationResult_ShopifyBulkQuery

1. This job calls the co.hotwax.shopify.system.ShopifySystemMessageServices.poll#BulkOperationResult service. This service does following-
    1. Gets the latest systemMessages in `SmsgSent` status from SystemMessageAndType view and calls the process#BulkOperationResult service to receive the output.
2. process#BulkOperationResult does following-
    1. calls get#BulkOperationResult with parameters systemMessageRemoteId and shopifyBulkOperationId received earlier.
    2. calls the receive#IncomingSystemMessage service.
4. get#BulkOperationResult calls the send#ShopifyRequest service to get the response using BulkOperationId.
5. receive#IncomingSystemMessage internally calls consume service passed in BulkOrderCustomAttributesQuery SystemMessageType i.e. consume#BulkOperationResult
6. consume#BulkOperationResult service does following- 
    1. Calls store#BulkOperationResultFile service to save received data locally.
    2. Gets the SendBulkOrderCustomAttributesQueryResult SystemMessageType using enumeration entity. 
    2. Calls queue#SystemMessage.
7. queue#SystemMessage service calls the send#ProducedSystemMessage service.
8. send#ProducedSystemMessage service calls send#SystemMessageFileSFTP service passed as send service in SendBulkOrderCustomAttributesQueryResult SystemMessageType.
9. send#SystemMessageFileSFTP service sends data to SFTP.

