# Save files

## FileSaver Package

### Overview

The FileSaver package is a software library designed for web applications that generate files on the client-side, providing seamless file-saving functionality directly to the end-users' devices.

This package runs on the [supported browsers](https://www.npmjs.com/package/file-saver#supported-browsers) only.

### Installation

To install FileSaver.js, you can use npm or bower. For basic Node.js installation, run the following command:

```bash
npm install file-saver --save
```

For TypeScript definitions, you can install the '@types/file-saver' package:

```bash
npm install @types/file-saver --save-dev
```

### Syntax

To use FileSaver.js, you can import the `saveAs()` function from the 'file-saver' module as follows:

```javascript
import { saveAs } from 'file-saver';
```

The `saveAs()` function is used to save files and has the following syntax:

```javascript
FileSaver.saveAs(Blob/File/Url, optional DOMString filename, optional Object { autoBom })
```

You can pass an optional `Object` with `{ autoBom: true }` as the third argument to automatically provide Unicode text encoding hints if your blob type has `charset=utf-8` set.

### Examples

#### Saving text using `require()`:

```javascript
var FileSaver = require('file-saver');
var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
FileSaver.saveAs(blob, "hello world.txt");
```

#### Saving text:

```javascript
var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
FileSaver.saveAs(blob, "hello world.txt");
```

#### Saving URLs:

```javascript
FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
```

Note: When using URLs within the same origin, it will use the `a[download]` attribute. Otherwise, it will check if it supports CORS headers with a synchronous HEAD request. If supported, it will download the data and save using blob URLs. If not, it will try to download it using `a[download]`.

#### Saving a canvas:

```javascript
var canvas = document.getElementById("my-canvas");
canvas.toBlob(function(blob) {
    FileSaver.saveAs(blob, "pretty image.png");
});
```

Note: The standard `canvas.toBlob()` method may not be available in all browsers. You can use the `canvas-toBlob.js` library as a cross-browser polyfill.

#### Saving a File:

```javascript
var file = new File(["Hello, world!"], "hello world.txt", { type: "text/plain;charset=utf-8" });
FileSaver.saveAs(file);
```

Note: Internet Explorer (IE) and Edge do not support the new File constructor, so it's recommended to construct blobs and use `saveAs(blob, filename)` instead.

## Conclusion

By incorporating this package, you can enable users to save files to their system. For advanced usage and further customization options, refer to [the official documentation](https://www.npmjs.com/package/file-saver#syntax)


Note: Please check the compatibility of the package version with the app. 
