According to a document from the Socket Mobile **S700 / S720 / S730 / S740 User Guide** (date not shown in the extracted pages), the scanner needs to be in **Basic Keyboard Mode (HID)** so it behaves like a keyboard and types barcode data into whatever input field has the cursor. 

## Goal (what “correct” looks like)

* The scanner is paired to the iPad over Bluetooth.
* The scanner outputs scans as “typed” text into the focused field (like a keyboard). 

---

## Step 0 — Make sure it’s not already paired (important when switching modes/devices)

If you’re switching the scanner from another device or mode, you must remove pairing info **from both the iPad and the scanner**. 

### A) On the iPad

1. Go to **Settings → Bluetooth**.
2. If you see the scanner (often shown as **S7XX [xxxxxx]**), tap it and **Forget This Device**. 

### B) On the scanner (Pairing Reset)

Do **one** of the following:

* **Scan the “Pairing Reset” barcode** in the manual.

* Or use the button sequence: power on → **press/hold trigger + power** until you hear **3 beeps**; it unpairs and powers off; next power-on it becomes discoverable. 

---

## Step 1 — Put the scanner in HID (Basic Keyboard Mode) for iPad

1. **Power on** the scanner.
2. Make sure it’s **discoverable / unpaired** (the guide notes the **blue light blinks fast** when discoverable). 
3. **Scan the “iOS Basic Keyboard Mode” setup barcode** shown under **“Setup – iOS Basic Keyboard Mode”**. 

> Why: Basic Keyboard Mode configures the reader as **HID** (Human Interface Device) and makes it act like a keyboard (no special app required). 

---

## Step 2 — Pair it with the iPad (Bluetooth)

1. On iPad: go to **Settings → Bluetooth**, turn Bluetooth **On**, and wait for the device list to populate. 
2. Tap the scanner in the list (shown like **S7XX [xxxxxx]**) and tap **Pair**. 
3. The scanner connects; the guide notes it will **beep once after it has connected**. 

---

## Step 3 — Confirm it works in your app (the “cursor test”)

1. Open your app.
2. Tap into an input field so the cursor is active.
3. Scan a barcode. The value should appear as if typed. (The guide explicitly calls out that Basic Keyboard Mode works anywhere that supports an active cursor.) 

---

## Common issues & fixes

### “Scanner isn’t showing up in Bluetooth”

* It must be **discoverable (unpaired)** (blue light blinking fast). If it’s paired elsewhere, do the **Pairing Reset** steps above. 

### “It pairs, but scan data doesn’t enter the field”

* Confirm you used **Setup – iOS Basic Keyboard Mode** (HID keyboard behavior). 
* Confirm the cursor is active in a field (HID mode behaves like a keyboard). 

### “We changed modes/devices and now it’s weird”

* Follow the guide’s rule: **forget/unpair on both sides** before switching modes/devices. 

---

## Optional (recommended) tweaks for smoother data entry

### Add a “Tab” or “Enter” after each scan (to move to next field / submit)

If your workflow benefits from automatically advancing after a scan:

* **Suffix – Tab** (adds a tab after decoded data) 
* **Suffix – Carriage Return & Line Feed** (adds Enter/newline behavior) 
* **Data As Is** (no suffix) 

### Set HID keyboard language (if characters come through wrong)

The guide provides **HID Keyboard Language Settings** and notes to scan these **only when in Basic Keyboard Mode (HID profile)**. 
