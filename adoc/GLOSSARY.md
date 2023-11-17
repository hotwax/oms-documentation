# Glossary

## Municipio
In Central American countries, "**municipios**" refer to administrative divisions that are similar to municipalities or counties in other parts of the world. Central American countries typically consist of multiple municipios. ADOC uses municipios as their primary local identifier in most countries other than Costa Rica which uses canton.

Here is how geographic zones are organized in countries that use municipios:

1. **Country:** At the top of the hierarchy is the entire country or republic.
2. **Departments/States:** Below the national level, countries are often divided into larger administrative units known as departments, provinces, or states. These units may vary in name and organization depending on the specific country.
3. **Municipios/Municipalities:** Within each department or province, there are multiple municipios. These are local government units responsible for managing local affairs within their defined boundaries.

## CarrierGeoMapping
An entity used for mapping unique carrier codes against geo names. This table includes the name of the carrier, the type of geographic area, the name of the geo area and then the carrier code that it is mapped to. Most commonly this table is used to validate addresses for order approval or get carrier geo codes to generate shipping labels. Existing tables were not used because we needed a flexible model that had no forgein key restraints regarding geo ids.

## Canton
In Costa Rica, a "canton" refers to an administrative division that is similar to a municipality or county. It’s used as the main locale identifier for carriers and zone mapping. In Costa Rica, the regions are divided by province within countries and then canton’s within provinces.

## Customer ID
All orders in ADOC have a Customer ID which is a general name for a government identification that everyone has. Due to strict government regulations in the Central American countries, all orders are required to have a Customer ID linked when they’re posted to the government during invoicing.