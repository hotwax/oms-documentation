# Introduction

This documentation guide is intended for developers integrating the HotWax Order Management System (OMS) and specifically focuses on the functionality of configuring reroute fulfillment emails.

## What are reroute fulfillment emails?

HotWax OMS empowers merchants to offer customers more control over their deliveries by enabling reroute fulfillment emails. These emails are triggered under conditions such store pickup order rejections and present customers with alternative fulfillment options, potentially improving the delivery experience and customer satisfaction.

## How it looks?

Add image here

## Data fields

HotWax provides a variety of pre-defined data fields that can be used within your Klaviyo templates. These fields contain dynamic information specific to each order and customer, allowing for targeted communication.

## HotWax OMS Data Fields

This table provides an overview of the data fields available in HotWax OMS, categorized by section:

| Section | Field Name | Description |
|---|---|---|
| Customer Information | `first_name` | The customer's first name. |
| | `last_name` | The customer's last name. |
| Shipping Information | `ship_from` | The name of the facility the order was supposed to be shipped from. |
| | `to_name` | (Optional) The recipient name for the shipping address. |
| | `address1` | The first line of the shipping address. |
| | `address2` | (Optional) The second line of the shipping address. |
| | `city` | The city of the shipping address. |
| | `state_name` | The state of the shipping address. |
| | `country_name` | The country of the shipping address. |
| Order Information | `order_name` | The name of the order (e.g., order ID, customer-defined name). |
| | `order_items` | A list of items in the shipment, each with nested fields:  |
| | | `image_url` | A URL to an image of the product. |
| | | `product_name` | The name and description of the product. |
| | | `quantity` | The quantity of the product ordered. |
| | | `price` | The individual item price (not the total for that item type). |
| | | `subtotal` | The total cost of items before taxes, shipping, etc. |
| | | `grand_total` | The final total cost of the order, including all costs. |
| | `customerOrderUpdateLink` | A link where the customer can update their order information. |
