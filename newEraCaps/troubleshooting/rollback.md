# Troubleshooting Document: Rollback to Previous Configuration with Safety
How to perform a rollback in HotWax Commerce OMS when issues arise on deployment to ensure order fulfillment continues seamlessly.

## Objective:
Due to issues like data discrepancies, import order failures, improper inventory synchronization, and brokered feed generation errors, we must safely revert changes and restore stability in the OMS environment. This is essential to maintain operational continuity and ensure smooth order processing and fulfillment.

## Steps for Safe Rollback:

### Login:
Log in to the Hotwax Commerce OMS using your username and password.

### 1. Change Shopify Shop Access Scope:

#### Navigate to Shopify Section:
- Click on the hamburger navbar at the top left corner of the screen (if the left slider is not visible).
- Navigate to the `Shopify` section in the left slider.
  ![roll9](https://github.com/user-attachments/assets/adebd2b0-d3bb-4455-9d17-860931651d17)


#### Access Shopify Shop Settings:
- Go to `Shopify` > `Shopify shop` and click on `SHOP`.
  ![roll8](https://github.com/user-attachments/assets/0d81482e-bdba-488b-8a16-7ab1117cbbdb)

- Inside SHOP, go to the `Shopify Config` section.
- Find the Action field and click on the edit icon, which will open a pop-up window.
  ![roll7](https://github.com/user-attachments/assets/a717dd9a-4d7c-4e57-aeeb-d50656b0a0bf)


#### Change Access Scope:
- In the pop-up edit screen, navigate to the `Access Scope` section.
- Select `Shop no access` from the drop-down menu.
  ![roll6](https://github.com/user-attachments/assets/5a14ddfe-0b6f-41fb-b53e-602ccb157930)


#### Save Changes:
- Save the changes by clicking the `Save` button on the pop-up.

### 2. Disable Order Brokering:

#### Navigate to Launchpad Section:
- Click on the hamburger navbar at the top left corner of the screen (if the left slider is not visible).
- Click on the `Go to Launchpad` section inside the left slider.
  ![roll10](https://github.com/user-attachments/assets/d0edc313-4f71-4abd-83c2-a3558d9486a2)


#### Navigate to the Administration section:
- Open the `Company` app inside it.
  ![roll12](https://github.com/user-attachments/assets/ce2e2cb5-00c3-4b7b-96c7-2b89b1aca377)


#### Access Company Store:
- Inside the `Company` app, click on the `STORE` (i.e., New Era Cap Store).
  ![roll11](https://github.com/user-attachments/assets/0205af5b-c2d7-4dd1-83be-ce7c930441c6)


#### Disable Brokering:
- Inside the `New Era Cap Store`, navigate to the section (i.e., STORE) where you will find details about the company name, order brokering, operation country, and inventory reservation.
- Click on the order brokering toggle button next to it to disable order brokering.
  ![roll13](https://github.com/user-attachments/assets/e7b0ec66-73ab-4de0-bf67-5de3e84d490e)

- Changes will be saved automatically.

This document provides a structured approach to handling deployment-related issues in HotWax Commerce OMS, ensuring operational continuity and swift resolution of challenges encountered during deployment processes.
