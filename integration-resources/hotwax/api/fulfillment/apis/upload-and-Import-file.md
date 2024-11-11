# Upload and Import file API

Imports shipped order details with the tracking code. To import file, you will need to call the /uploadAndImportfile endpoint with the POST method. 

## Request

### Endpoint

`https://<host>/api/uploadAndImportfile`

Example: https://demo-oms.hotwax.io/api/uploadAndImportfile

### Header

#### Body

```
uploadedFile: (blob)
configId: IMP_TRACK_NUM
```

Note: Provide this information in form format

| Parameter        | Description                                                     | Required (Y/N) |
|------------------|-----------------------------------------------------------------|----------------|
| `uploadedFile`   | The uploaded file                                               |     Y          |
| `configId`       | The datamanager configuration ID which is useed to import files |     Y          |


## Response

### Header

#### Body

```
{
  "uploadFileContentId": "",
  "filePath": "/oms/runtime/datamanager/imported/IMP_TRACK_NUM/<file_name>",
  "configId": "IMP_TRACK_NUM",
  "EVENT_MESSAGE": "Upload has been started successfully."
}

```

| Parameter                | Description                                                  |
|--------------------------|--------------------------------------------------------------|
| `uploadFileContentId`    | The content ID of the uploadFile                             |
| `filePath`               | The location of a file in a web site's folder structure      |
| `_EVENT_MESSAGE_`        | The communication message of the event                       |
