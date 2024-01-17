# Order Reconciliations

This API call provides users with log insights for failed orders that may not have been successfully downloaded from Shopify to HotWax Commerce. To retrieve the log details of these failed orders, make a GET request to the `/solr-query` endpoint.

## Request

**End Point**
`https://<instance.name>.hotwax.io/api/solr-query`

Example: `https://demo-oms.hotwax.io/api/solr-query`

### Headers
`Content-Type: application/json`

### Request Format
```json
{
  "json": {
    "params": {
      "q": "docType:SHOPIFY_ORDER"
    }
  },
  "coreName": "logInsights"
}
```
### Parameter Table
| Parameter Name | Description                             |
| -------------- | --------------------------------------- |
| docType        | The Type of the document                |
| coreName       | A single index or associated transaction log and configuration files |

