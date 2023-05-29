# App version display

## @hotwax/app-version-info Package

### Overview

The @hotwax/app-version-info package is a software library developed by HotWax Commerce that provides functionality to retrieve version information of an application. By using this package, HotWax fetches and displays the version number and other relevant details of the application, which can be useful for monitoring, debugging, or displaying version information within the application's user interface.

### Installation

To install the @hotwax/app-version-info package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command: `npm install @hotwax/app-version-info`

### Usage

#### 1. Importing the Package

To use the @hotwax/app-version-info package in your application, import it into your codebase. Use the following import statement:

```javascript
import AppVersionInfo from '@hotwax/app-version-info';
```

#### 2. Retrieving Version Information

The @hotwax/app-version-info package provides methods to retrieve version information. Here's an example of how to use it:

```javascript
const versionInfo = AppVersionInfo.getVersionInfo();
console.log('Version Information:', versionInfo);
```

In the above example, the `getVersionInfo` method is called to fetch the version information of the application. The returned `versionInfo` object contains details such as the version number, build timestamp, and any additional metadata.

#### 3. Displaying Version Information

Once you have retrieved the version information, you can display it within your application's user interface or use it for monitoring or debugging purposes. Here's an example of displaying the version number:

```javascript
const versionInfo = AppVersionInfo.getVersionInfo();
const versionNumber = versionInfo.version;
console.log('Version Number:', versionNumber);
```

In the above example, the `version` property of the `versionInfo` object is accessed to extract the version number.

### Conclusion

The @hotwax/app-version-info package provides a convenient way to retrieve and display version information of an application. By incorporating this package into your project, you can easily access the version number and other relevant details for monitoring, debugging, or displaying within your application's user interface.

For advanced usage and further customization options, consult the official documentation and API reference provided by the @hotwax/app-version-info package.

Note: Please check the compatibility of the package version with the app. 
