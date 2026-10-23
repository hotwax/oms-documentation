# Connect the Socket Mobile scanner

Use Socket Mobile S700, S720, S730, or S740 scanners in Basic Keyboard Mode (HID) so scans enter the iPad as keyboard input.

For the device-specific setup barcodes, see the [Socket Mobile S700 series manual](https://cdn.socketmobile.com/sitefinity-assets/docs/default-source/downloads/user-guides/s700-s720-s730-s740-user-guide.pdf?sfvrsn=32cbcfcb_12).

## Goal

* The scanner is paired to the iPad over Bluetooth.
* The scanner outputs scans as typed text into the focused field.

## Step 0: Clear old pairings

Remove existing pairings from both the iPad and the scanner before switching modes or devices.

### On the iPad

1. Go to `Settings > Bluetooth`.
2. If you see the scanner (shown as `S7XX [xxxxxx]`), tap it and select `Forget This Device`.

### On the scanner (pairing reset)

Do one of the following:

* Scan the `Pairing Reset` barcode in the manual.
* Quick way: scan this barcode:

![Pairing reset barcode](../.gitbook/assets/pairing-reset.png)

* Use the button sequence: power on, then press and hold the trigger and power buttons until you hear three beeps. The scanner unpairs and powers off. On the next power-on it becomes discoverable.

## Step 1: Set HID (basic keyboard) mode

1. Power on the scanner.
2. Confirm it is discoverable and unpaired (blue light blinks fast).
3. Scan the `iOS Basic Keyboard Mode` setup barcode under `Setup – iOS Basic Keyboard Mode`. This sets HID mode so the scanner acts like a keyboard.
4. Quick way: scan this barcode:

![iOS Basic Keyboard Mode barcode](../.gitbook/assets/ios-keyboard.png)

## Step 2: Pair with the iPad

1. On the iPad, go to `Settings > Bluetooth` and turn Bluetooth on.
2. Wait for the device list to populate, tap the scanner (`S7XX [xxxxxx]`), and select `Pair`.
3. The scanner connects and beeps once after it has connected.

## Step 3: Confirm it works in your app

1. Open your app.
2. Tap into an input field so the cursor is active.
3. Scan a barcode. The value should appear as typed text.

## Step 4: Record scans in Inventory Count

1. Configure a suffix that sends `Enter` after the barcode, such as `Suffix – Carriage Return & Line Feed` from the scanner manual.
2. Open an active counting session and select `Start counting` or `Resume counting` to focus the scanner input. The button shows `Scanner ready` while the input is focused.
3. Scan one item that you intend to count. Confirm that it appears in the session's scanned items or unmatched items and that the unit count increases once.

The app processes the barcode when it receives `Enter`. If the barcode remains in the input without adding an item, check the suffix before scanning again. Pressing `Enter` manually processes the barcode already in the field.

Continue with [Start and complete a session](start-complete-session.md) for counting and resolving unmatched items.

## Common issues and fixes

### Scanner is not showing up in Bluetooth

* Make sure it is discoverable (blue light blinks fast). If it is paired elsewhere, repeat the pairing reset steps.

### It pairs, but scan data does not enter the field

* Confirm you used `Setup – iOS Basic Keyboard Mode` (HID keyboard behavior).
* Make sure the cursor is active in a field before you scan.

### We changed modes or devices and now it is inconsistent

* Always forget or unpair on both the iPad and the scanner before switching modes or devices.

## Suffixes for other data-entry workflows

If you want the scanner to move to the next field or submit automatically after each scan, apply one of these suffix options:

* `Suffix – Tab` adds a tab after decoded data.
* `Suffix – Carriage Return & Line Feed` adds an Enter/newline.
* `Data As Is` leaves the data without a suffix.

For Inventory Count, use a suffix that sends `Enter`. `Tab` and `Data As Is` do not trigger the count by themselves.

## Optional: set HID keyboard language

If characters appear incorrectly, scan a `HID Keyboard Language` barcode while the scanner is in Basic Keyboard Mode (HID profile).
