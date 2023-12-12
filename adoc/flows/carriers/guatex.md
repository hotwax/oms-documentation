# Guatex

Root field table:
GUATEX Field                                  | English Translation           | Value                             | Max Length | Required
--------------------------------------------- | ----------------------------- | ---------------------------------- | ---------- | ---------
<USUARIO>                                     | User                          | ${USUARIO!}                       | 50         | YES
<PASSWORD>                                    | Password                      | ${PASSWORD!}                      | 10         | YES
<CODIGO_COBRO>                                | Collection Code               | ${CODIGO_COBRO!}                  | 10         | YES
<TIPO_USUARIO>                                | User Type                     | C (constant value)               | 1          | YES
<NOMBRE_REMITENTE>                            | Sender Name                   | ${shipFromName!}                  | 100        | YES
<TELEFONO_REMITENTE>                          | Sender Phone                  | ${shipFromPhone!}                 | 20         | NO
<DIRECCION_REMITENTE>                         | Sender Address                | ${shipFromAddressLine1!},${shipFromAddressLine2!} | 100 | NO
<MUNICIPIO_ORIGEN>                            | Origin Municipality           | ${shipFromCity!}                  | 50         | YES
<PUNTO_ORIGEN>                                | Origin Point                  | ${shipFromCityPointCoverageCode!} | 10         | YES
<ESTA_LISTO>                                  | Ready Status                  | S (constant value)               | 1          | NO
<CODORIGEN>                                   | Origin Code                   | ${shipFromCityCode!}              | 15         | NO
<LLAVE_CLIENTE>                               | Customer Key                  | ${shipToName!}                   | 200        | YES
<CODIGO_COBRO_GUIA>                           | Collection Code (Guide)       | ${CODIGO_COBRO!}                  | 10         | NO
<NOMBRE_DESTINATARIO>                         | Recipient Name                | ${shipToName!}                   | 100        | NO
<TELEFONO_DESTINATARIO>                       | Recipient Phone               | ${shipToPhone!}                  | 20         | NO
<DIRECCION_DESTINATARIO>                      | Recipient Address             | ${shipToAddressLine1!},${shipToAddressLine2!} | 100 | NO
<MUNICIPIO_DESTINO>                           | Destination Municipality      | ${shipToCity!}                   | 50         | YES
<PUNTO_DESTINO>                               | Destination Point             | ${shipToCityPointCoverageCode!} | 10         | YES
<DESCRIPCION_ENVIO>                           | Shipment Description          | CAJAS (constant value)           | 100        | NO
<PAGO_CONTADO_SEGURO>                         | Cash Payment                  | S (conditional value based on isCOD) | 1 | NO
<RECOGE_OFICINA>                              | Collect at Office             | N (constant value)               | 1          | NO
<CODDESTINO>                                  | Destination Code              | ${shipToCityCode!}               | 15         | NO
<PIEZAS_DETALLE>                              | Pieces in Line                | 1 (constant value, number of pieces) | 5   | YES
<TIPO_ENVIO_DETALLE>                          | Shipment Type                 | 2 (constant value, type of shipment) | 10  | YES
<PESO_DETALLE>                                | Line Weight                   | ${shipmentPackage.weight!}       | 8          | YES

Mapping logic details:

### **Field: `<ESTA_LISTO>`**
The `<ESTA_LISTO>` field indicates whether the package is ready for pickup or not.

#### **Possible Values:**
- **Y:** Yes, the package is ready for pickup.
- **N:** No, the package is not yet ready for pickup.

#### **Example:**
```xml
<ESTA_LISTO>Y</ESTA_LISTO> <!-- Indicates that the package is ready for pickup -->
```
#### **Constraints:**
- **Length:** 1 character (Y or N)

{% hint style="danger" %}
Guatex API documentation specifies that the values should be either "Y" (Yes) or "N" (No). However, in our existing code, we observe that an "S" value is being sent.
{% endhint %}

---

### **Field: `<TIPO_ENVIO_DETALLE>`**
The `<TIPO_ENVIO_DETALLE>` field represents the type of shipment for a specific line in the shipment details.

#### **Usage:**
- **1:** Envelope: Use this value when the line represents an envelope.
- **2:** Packages: Use this value when the line represents one or more packages.

#### **Example:**
```xml
<TIPO_ENVIO_DETALLE>2</TIPO_ENVIO_DETALLE> <!-- Represents Packages -->
```

---

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

| Detail Element                | Description                                       | Required | Length     |
|-------------------------------|---------------------------------------------------|----------|------------|
| `<DETALLE_GUIA>`              | Tag containing the list of detail lines of the guide | YES      | Indefinite  |
| `<LINEA_DETALLE_GUIA>`        | Tag containing data of the detail line of the guide | YES      | Indefinite  |
| `<NUMERO_GUIA_DETALLE>`       | Guide number for the detail                        | NO       | 20         |
| `<PIEZAS_DETALLE>`            | Number of pieces in the line                       | YES      | 5          |
| `<TIPO_ENVIO_DETALLE>`        | Type of shipment of the line                       | YES      | 10         |
| `<PESO_DETALLE>`              | Line weight                                       | YES      | 8          |


Error response:
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

| Code  | Description                                                |
|-------|------------------------------------------------------------|
| 0001  | Field `<NOMBRE DE CAMPO>` is required                      |
| 0002  | Field `<NOMBRE DE CAMPO>` must have at most `<CANTIDAD>` characters |
| 0003  | The field value `<NOMBRE DE CAMPO>` is not among the allowed range |
| 0004  | It was not possible to create the requested service, contact Guatex |
| 0005  | The field value `<NOMBRE DE CAMPO>` is not correct         |
| 0006  | The indicated charging code is inactive                    |
| 0007  | The indicated charge code is invalid                       |
| 0008  | The indicated charging code is blocked                     |
| 0009  | The value of the secure cash payment field must be Y or N   |
| 0010  | The value of the field collects office must be Y or N       |
| 0011  | The value of the origin municipality and origin point field is invalid |
| 0012  | The value of the destination municipality and destination point field is invalid |
| 0013  | The value of the field is ready must be Y or N              |
| 0014  | The value of the ready time field must be in a valid HH:mm format |
| 0015  | The value of the SMS collection alert field must be Y or N  |
| 0016  | The value of the collection field must be Y or N           |
| 0017  | The value of the SMS delivery alert field must be Y or N    |
| 0018  | The value of the email delivery alert field must be Y or N  |
| 0019  | The tracking number in the header must be the same as the tracking number in the detail |
| 0020  | The value of the pieces field must be greater than or equal to 1 |
| 0021  | The type of shipment indicated is invalid                  |
| 0022  | Weight must be greater than 0                              |
| 0023  | Invalid user type                                         |
| 0024  | The indicated guide number is already registered           |
| 9999  | Invalid credentials                                       |
| 9999  | System error, contact Guatex                               |
