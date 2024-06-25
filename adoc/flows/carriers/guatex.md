---
description: Discover how Guatex, a shipping carrier is involved in ADOC implementation.
---

# Guatex

{% hint style="danger" %}
This Gutex carrier integration is no longer utilized by ADOC.
{% endhint %}

## Request label

| GUATEX Field            | English Translation      | Value                                             | Max Length | Required |
| ----------------------- | ------------------------ | ------------------------------------------------- | ---------- | -------- |
| USUARIO                 | User                     | ${USUARIO!}                                       | 50         | YES      |
| PASSWORD                | Password                 | ${PASSWORD!}                                      | 10         | YES      |
| CODIGO\_COBRO           | Collection Code          | ${CODIGO\_COBRO!}                                 | 10         | YES      |
| TIPO\_USUARIO           | User Type                | C (constant value)                                | 1          | YES      |
| NOMBRE\_REMITENTE       | Sender Name              | ${shipFromName!}                                  | 100        | YES      |
| TELEFONO\_REMITENTE     | Sender Phone             | ${shipFromPhone!}                                 | 20         | NO       |
| DIRECCION\_REMITENTE    | Sender Address           | ${shipFromAddressLine1!},${shipFromAddressLine2!} | 100        | NO       |
| MUNICIPIO\_ORIGEN       | Origin Municipality      | ${shipFromCity!}                                  | 50         | YES      |
| PUNTO\_ORIGEN           | Origin Point             | ${shipFromCityPointCoverageCode!}                 | 10         | YES      |
| ESTA\_LISTO             | Ready Status             | S (constant value)                                | 1          | NO       |
| CODORIGEN               | Origin Code              | ${shipFromCityCode!}                              | 15         | NO       |
| LLAVE\_CLIENTE          | Customer Key             | ${shipToName!}                                    | 200        | YES      |
| CODIGO\_COBRO\_GUIA     | Collection Code (Guide)  | ${CODIGO\_COBRO!}                                 | 10         | NO       |
| NOMBRE\_DESTINATARIO    | Recipient Name           | ${shipToName!}                                    | 100        | NO       |
| TELEFONO\_DESTINATARIO  | Recipient Phone          | ${shipToPhone!}                                   | 20         | NO       |
| DIRECCION\_DESTINATARIO | Recipient Address        | ${shipToAddressLine1!},${shipToAddressLine2!}     | 100        | NO       |
| MUNICIPIO\_DESTINO      | Destination Municipality | ${shipToCity!}                                    | 50         | YES      |
| PUNTO\_DESTINO          | Destination Point        | ${shipToCityPointCoverageCode!}                   | 10         | YES      |
| DESCRIPCION\_ENVIO      | Shipment Description     | CAJAS (constant value)                            | 100        | NO       |
| PAGO\_CONTADO\_SEGURO   | Cash Payment             | S (conditional value based on isCOD)              | 1          | NO       |
| RECOGE\_OFICINA         | Collect at Office        | N (constant value)                                | 1          | NO       |
| CODDESTINO              | Destination Code         | ${shipToCityCode!}                                | 15         | NO       |
| PIEZAS\_DETALLE         | Pieces in Line           | 1 (constant value, number of pieces)              | 5          | YES      |
| TIPO\_ENVIO\_DETALLE    | Shipment Type            | 2 (constant value, type of shipment)              | 10         | YES      |
| PESO\_DETALLE           | Line Weight              | ${shipmentPackage.weight!}                        | 8          | YES      |

## Field mappings

### **Field `<CODIGO_COBRO>`**

#### Overview

The `<CODIGO_COBRO>` field is a parameter required by the Guatex API for service connection and login. It represents the collection code assigned by Guatex of the client that will be used to log in to the security module of the Web Service. This code is also inherited to the guides in case it is not explicitly specified.

**Test code:** GUA6928

| Charge Code | Description           |
| ----------- | --------------------- |
| GUA6928     | Credit Code           |
| GUA6937     | Credit Code           |
| GUA6939     | Credit Code           |
| GUA6940     | Credit Code           |
| GUA6941     | Credit Code           |
| COD0094     | Cash on Delivery Code |
| COD0097     | Cash on Delivery Code |
| COD0098     | Cash on Delivery Code |
| COD0099     | Cash on Delivery Code |
| COD0100     | Cash on Delivery Code |

Ensure that these codes are correctly used in the system based on the context of the shipment, and they are appropriately reflected in the generated guide and PDF document.

{% hint style="danger" %}
If there are specific criteria for choosing between credit codes and cash on delivery codes, that needs to be shared by Guatex.
{% endhint %}

#### Usage

* **Field Name:** `<CODIGO_COBRO>`
* **Type:** String
* **Required:** Yes
* **Max Length:** 10 characters

#### Integration Details

**Purpose**

The primary purpose of `<CODIGO_COBRO>` is to identify and authenticate the client when connecting to the Guatex Web Service for processing shipments. Include `<CODIGO_COBRO>` in each request to authenticate and authorize the client.

**Inheritance**

If `<CODIGO_COBRO>` is not explicitly specified in a particular request, the collection code assigned during login will be inherited for that request. It ensures consistency and simplifies the login process.

#### Example

```xml
<CODIGO_COBRO>1234567890</CODIGO_COBRO>
```

***

### **Field: `<ESTA_LISTO>`**

The `<ESTA_LISTO>` field indicates whether the package is ready for pickup or not.

#### **Possible Values:**

* **S:** Yes, the package is ready for pickup.
* **N:** No, the package is not yet ready for pickup.

#### **Example:**

```xml
<ESTA_LISTO>S</ESTA_LISTO> <!-- Indicates that the package is ready for pickup -->
```

#### **Constraints:**

* **Length:** 1 character (S or N)

> With a lot of failures and nothing working, I started to translate back to spanish and eventually figured out that 'S/N' are the default indicators in that language. - Arvind Singh Tomar

***

### Field: DESCRIPCION\_ENVIO

The `DESCRIPCION_ENVIO` field is used to specify the description of the shipment. This field provides information about the nature or content of the shipment.

#### Field Details

* **English Translation**: Shipment Description
* **Value**: CAJAS (constant value)
* **Max Length**: 100 characters
* **Required**: No

#### Usage

The `DESCRIPCION_ENVIO` field accepts the constant value "CAJAS," indicating that the shipment consists of boxes. This field is optional and can be used to provide additional information about the content or nature of the shipment.

***

### **Field: `<TIPO_ENVIO_DETALLE>`**

The `<TIPO_ENVIO_DETALLE>` field represents the type of shipment for a specific line in the shipment details.

**Usage:**

* **1:** Envelope: Use this value when the line represents an envelope.
* **2:** Packages: Use this value when the line represents one or more packages.

#### **Example:**

```xml
<TIPO_ENVIO_DETALLE>2</TIPO_ENVIO_DETALLE> <!-- Represents Packages -->
```

***

## Success response

<details>

<summary>Sample response</summary>

```xml
<RESPUESTA>
    <SERVICIO>
        <!-- Service response code -->
        <CODIGO>712698</CODIGO>
        <GUIAS>
            <!-- Information for the first guide -->
            <GUIA>
                <!-- Guide ID for the first guide -->
                <ID_GUIA>3848085</ID_GUIA>
                <!-- Guide number for the first guide -->
                <NOGUIA>A0984R00009</NOGUIA>
                <!-- Child guide numbers for the first guide -->
                <GUIAS_HIJAS>
                    <HGUIAHIJA>9A0984R0016</HGUIAHIJA>
                    <HGUIAHIJA>9A0984R0017</HGUIAHIJA>
                </GUIAS_HIJAS>
            </GUIA>
            <!-- Information for the second guide -->
            <GUIA>
                <!-- Guide ID for the second guide -->
                <ID_GUIA>3848086</ID_GUIA>
                <!-- Guide number for the second guide -->
                <NOGUIA>A0984R00010</NOGUIA>
                <!-- Child guide numbers for the second guide -->
                <GUIAS_HIJAS>
                    <HGUIAHIJA>9A0984R0018</HGUIAHIJA>
                    <HGUIAHIJA>9A0984R0019</HGUIAHIJA>
                </GUIAS_HIJAS>
            </GUIA>
            <!-- Additional details for the response -->
            <!-- Example of an error detail -->
            <CORRELATIVOGUIA3>
                <!-- Error code for a specific detail -->
                <CODIGO>0021</CODIGO>
                <!-- Error description for the specific detail -->
                <DESCRIPCION>El tipo de envio indicado es invalido</DESCRIPCION>
            </CORRELATIVOGUIA3>
            <!-- Additional details for other guides can be added here -->
        </GUIAS>
    </SERVICIO>
</RESPUESTA>
```

</details>

## Error response

Sample response

```xml
<RESPUESTA>
    <SERVICIO>
        <!-- Service response code -->
        <CODIGO>183</CODIGO>
        <GUIAS>
            <!-- Guide ID in case of success -->
            <ID_GUIA>224</ID_GUIA>
            <!-- Additional details for each guide (if any) -->
            <!-- Example of error details -->
            <CORRELATIVOGUIA2>
                <!-- Error code for a specific detail -->
                <CODIGO>0002</CODIGO>
                <!-- Error description for the specific detail -->
                <DESCRIPCION>El campo CODIGO_DESTINATARIO debe tener como máximo 15 caracteres </DESCRIPCION>
            </CORRELATIVOGUIA2>
            <!-- Additional details for other guides can be added here -->
        </GUIAS>
    </SERVICIO>
</RESPUESTA>
```

| Code | Description                                                                             |
| ---- | --------------------------------------------------------------------------------------- |
| 0001 | Field `<NOMBRE DE CAMPO>` is required                                                   |
| 0002 | Field `<NOMBRE DE CAMPO>` must have at most `<CANTIDAD>` characters                     |
| 0003 | The field value `<NOMBRE DE CAMPO>` is not among the allowed range                      |
| 0004 | It was not possible to create the requested service, contact Guatex                     |
| 0005 | The field value `<NOMBRE DE CAMPO>` is not correct                                      |
| 0006 | The indicated charging code is inactive                                                 |
| 0007 | The indicated charge code is invalid                                                    |
| 0008 | The indicated charging code is blocked                                                  |
| 0009 | The value of the secure cash payment field must be Y or N                               |
| 0010 | The value of the field collects office must be Y or N                                   |
| 0011 | The value of the origin municipality and origin point field is invalid                  |
| 0012 | The value of the destination municipality and destination point field is invalid        |
| 0013 | The value of the field is ready must be Y or N                                          |
| 0014 | The value of the ready time field must be in a valid HH:mm format                       |
| 0015 | The value of the SMS collection alert field must be Y or N                              |
| 0016 | The value of the collection field must be Y or N                                        |
| 0017 | The value of the SMS delivery alert field must be Y or N                                |
| 0018 | The value of the email delivery alert field must be Y or N                              |
| 0019 | The tracking number in the header must be the same as the tracking number in the detail |
| 0020 | The value of the pieces field must be greater than or equal to 1                        |
| 0021 | The type of shipment indicated is invalid                                               |
| 0022 | Weight must be greater than 0                                                           |
| 0023 | Invalid user type                                                                       |
| 0024 | The indicated guide number is already registered                                        |
| 9999 | Invalid credentials                                                                     |
| 9999 | System error, contact Guatex                                                            |

## Shipping label

1. **Variable: `trackingCode`**
   * Description: Tracking code for the shipment.
2. **Variable: `orderHeader`**
   * Sub-Variables:
     * `orderName`: Order name associated with the shipment.
3. **Variable: `oppCount`**
   * Description: Count of Order Payment Preferences for cash on delivery. The oppCount variable is computed by querying the database for the count of Order Payment Preferences associated with the primary order ID, where the payment method type is "EXT\_SHOP\_CASH\_ON\_DEL" and the status is "PAYMENT\_NOT\_RECEIVED." If there is at least one such payment preference, it indicates the use of cash on delivery, and this information is reflected in the generated shipping label.

{% hint style="danger" %}
It seems like Guatex want's HotWax to show the payment method even if it is not Cash on Delivery.
{% endhint %}

1. **Variable: `totalWeight`**
   * Description: Total weight of the shipment.
2. **Variable: `shippingDetailsResponse`**
   * Sub-Variables:
     * `response`:
       * `shipToName`: Recipient's name.
       * `packages`: Number of packages in the shipment.
       * `shipToPhone`: Recipient's phone number.
       * `shipToEmail`: Recipient's email address.
       * `shipToStateName`: Recipient's state name.
       * `shipDate`: Shipment date.
       * `shipFromCompanyName`: Sender's company name.
       * `shipFromAddressLine1`: Sender's address line 1.
       * `shipFromAddressLine2`: Sender's address line 2.
       * `shipFromCity`: Sender's city.
       * `shipFromStateName`: Sender's state name.
       * `shipFromCountryName`: Sender's country name.
       * `carrierPartyId`: Carrier's party ID.
3. **Variable: `logoImageUrl`**
   * Description: URL of the company logo for the carrier.
4. **Variable: `labelQrCodeLink`**
   * Description: Link to the QR code for the label.
5. **Variable: `toCityGeoAssoc`**
   * Sub-Variables:
     * `geoId`: Geo ID associated with the recipient's city.

## Fetch all Geo IDs

**Endpoint URL:** [https://jcl.guatex.gt:443/WSMunicipiosGTXGF/WSMunicipiosGTXGF](https://jcl.guatex.gt/WSMunicipiosGTXGF/WSMunicipiosGTXGF)

#### Description

The "Consult Municipalities" Web Service allows the retrieval of department and municipality data in bulk from Guatex. This information is crucial for associating Guatex's internal codes with municipalities, aiding in label generation.

#### Input Parameters

The web service expects a String type object containing an XML with the following data:

```xml
<CONSULTA_MUNICIPIOS>
    <!-- Root tag of the XML -->
    <USUARIO>[Your_User_Name]</USUARIO>
    <!-- User used for logging into the Web Service -->
    <PASSWORD>[Your_Password]</PASSWORD>
    <!-- Password used for logging into the Web Service -->
    <CODIGO_COBRO>[Your_Collection_Code]</CODIGO_COBRO>
    <!-- Collection code assigned by Guatex -->
</CONSULTA_MUNICIPIOS>
```

**Input Parameters:**

* **USUARIO (User):** User for logging into the Web Service. _(Mandatory, Maximum Length: 50)_
* **PASSWORD:** Password for logging into the Web Service. _(Mandatory, Maximum Length: 10)_
* **CODIGO\_COBRO (Collection Code):** Collection code assigned by Guatex for the client used for logging into the security module. _(Mandatory, Maximum Length: 10)_

#### Sample Request

```xml
<CONSULTA_MUNICIPIOS>
    <USUARIO>YourUserName</USUARIO>
    <PASSWORD>YourPassword</PASSWORD>
    <CODIGO_COBRO>YourCollectionCode</CODIGO_COBRO>
</CONSULTA_MUNICIPIOS>
```

#### Response

The web service responds with the relevant department and municipality data.

#### Sample Response

```xml
<RESPUESTA>
    <!-- List of destination details -->
    <DESTINOS>
        <!-- Details of a specific destination -->
        <DESTINO>
            <!-- Destination code -->
            <CODIGO>718</CODIGO>
            <!-- Destination name -->
            <NOMBRE>BOCA DEL MONTE (GUA)</NOMBRE>
            <!-- Coverage point -->
            <PUNTO_COBERTURA>GUA</PUNTO_COBERTURA>
            <!-- Type of rate -->
            <TIPO_TARIFA>N</TIPO_TARIFA>
            <!-- Department name -->
            <DEPARTAMENTO>GUATEMALA</DEPARTAMENTO>
            <!-- Municipality name -->
            <MUNICIPIO>VILLA CANALES</MUNICIPIO>
            <!-- Visit frequency -->
            <FRECUENCIA_VISITA>LU,MA,MI,JU,VI,SA</FRECUENCIA_VISITA>
            <!-- Pickup office indicator -->
            <RECOGE_OFICINA>0</RECOGE_OFICINA>
        </DESTINO>
        <!-- Additional DESTINO elements with similar structure -->
    </DESTINOS>
    <!-- List of shipping types -->
    <TIPOS_ENVIO>
        <!-- Details of a specific shipping type -->
        <TIPO_ENVIO>
            <!-- Shipping type code -->
            <CODIGO>1</CODIGO>
            <!-- Shipping type name -->
            <NOMBRE>SOBRES</NOMBRE>
        </TIPO_ENVIO>
        <!-- Additional TIPO_ENVIO elements with similar structure -->
    </TIPOS_ENVIO>
</RESPUESTA>
```

Here's a translation map for the frequency days:

* **LU**: Monday
* **MA**: Tuesday
* **MI**: Wednesday
* **JU**: Thursday
* **VI**: Friday
* **SA**: Saturday
* **DO**: Sunday

For example, `<FRECUENCIA_VISITA>LU,MA,MI,JU,VI,SA</FRECUENCIA_VISITA>`, means the carrier services that location every Monday through Saturday.

### Error Response

If an error occurs in the municipal consultation process, the Web Service will return the following XML, presenting the error that occurred:

```xml
<RESPUESTA>
    <!-- Details of the error -->
    <ERROR>
        <!-- Error code -->
        <CODIGO>9999</CODIGO>
        <!-- Error description -->
        <DESCRIPCION>CREDENCIALES INVALIDAS</DESCRIPCION>
    </ERROR>
</RESPUESTA>
```

### Possible Errors:

The following list shows the possible errors returned by the Web Service:

| Code | Description                  |
| ---- | ---------------------------- |
| 999  | Invalid credentials          |
| 999  | System error, contact Guatex |

* Regularly update the department and municipality data in your system based on Guatex's updates.
