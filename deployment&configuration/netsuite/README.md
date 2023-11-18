# A step by step guide to deploy NetSuite with HotWax Commerce

This document will take you through all the steps of deploying a NetSuite integration with HotWax Commerce for all the supported flows.

Begin by following the steps of installing the custom NetSuite app created by HotWax that loads synchronization scripts and custom fields that are necessary to set up the integration.

Before configuring any jobs for data synchronization, make sure to complete all the steps mentioned in the Prerequisites section. Skipping the prerequisites may lead to some flows failing.

Once all base configurations are complete, you’re ready to start setting up flows between the two systems. Flows are largely independent of each other. The only required flow to setup being moving forward is the product and inventory flow since products and inventory sync is required for all other flows to work properly.