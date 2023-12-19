### Creating Shipping Labels with Terminal Express

Terminal Express provides two endpoints for creating shipping labels, allowing flexibility based on your requirements:

#### 1. Create Order by Zip Code

**Endpoint:** `https://sandboxlte.laterminalexpress.com/api/Paquetes/crearOrden/`

This endpoint allows you to create shipping labels by specifying the recipient's ZIP code. Use this option when you have precise ZIP code information for the delivery destination. Include the necessary details in your API request, and Terminal Express will generate the shipping label accordingly.

#### 2. Create Order by Locale Names

**Endpoint:** `https://sandboxlte.laterminalexpress.com/api/Paquetes/crearOrdenPostal/`

If you prefer a more generalized approach, this endpoint allows you to create shipping labels using locale names instead of ZIP codes. Provide locale information in your API request to Terminal Express, enabling a broader scope for label creation. This option is useful when ZIP code details are not available or when a more general delivery area is sufficient.

Choose the appropriate endpoint based on your specific needs, whether you have detailed ZIP code information or prefer a more flexible approach using locale names.