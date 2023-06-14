# Barcode reader

## Vue Barcode Reader Package

### Overview

The Vue Barcode Reader package is a library designed for barcode scanning and recognition within Vue.js applications. By using this package, HotWax integrates barcode reading functionality into their Vue.js applications.

### Installation

To install the Vue Barcode Reader package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command: `npm install vue-barcode-reader`

### Usage

The Vue Barcode Reader works out of the box by just including it.

#### Using Video Camera

Once a stream from the user's camera is loaded, it's displayed and continuously scanned for barcodes. Results are indicated by the `decode` event.

```javascript
import { StreamBarcodeReader } from "vue-barcode-reader";
```

In your template, you can use this syntax:

```html
<StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
```

#### Scanning from Image

The component renders to a simple file picker input element. Clicking opens a file dialog. On supporting mobile devices, the camera is started to take a picture. The selected images are directly scanned, and positive results are indicated by the `decode` event.

```javascript
import { ImageBarcodeReader } from "vue-barcode-reader";
```

In your template, you can use this syntax:

```html
<ImageBarcodeReader @decode="onDecode" @error="onError"></ImageBarcodeReader>
```

```javascript
methods: {
  onDecode(result) {
    console.log(result);
  }
}
```

#### Conclusion

The Vue Barcode Reader package is a valuable tool for integrating barcode scanning functionality into Vue.js applications. By incorporating this package, you can enable users to scan barcodes and perform relevant actions based on the scanned data.

For advanced usage and further customization options, refer to the official documentation and API reference provided by the Vue Barcode Reader package.

Note: Please check the compatibility of the package version with the app. 
