# desktop-messages
-----------------

## Purpose

The goal here is to have Google Messages for Web as a desktop application. Why? Because tab-hunting is a pain, and because sometimes you want to be able to view and send messages from your phone without having to open a web browser.

The solution? Well, for now it looks like the best option is to try to provide a lightweight Electron-based application. All the application does is launch a Chromium-based browser instance and load up `https://messages.google.com/web`. It's actually that simple.

Some additional features that will be added over time:

- ~~Better update speeds. At present things are a little laggy in terms of seeing new messages.~~
	- This has been resolved in the latest release!
- ~~Notification integration. It's always nice when a message notification actually works.~~
	- This works in the current version!
- ~~Cookies! So you can use the "remember this computer" slider and it'll actually work.~~
	- Functional as of current version!
- Encryption of session storage and browser data by default. This way, unlike if you're using a browser, all of your cache and files aren't available to anyone else with admin privileges on your machine, or just physical access.

## Installation

A packaged release is currently available for MacOS 10.13 and above. It has been tested only on 10.13.

- Head to the "Releases" section
- Download the ZIP file for the latest release
- Unzip the ZIP file
- Move the application "desktop-messages.app" to your Applications folder
	- Alternatively, place it wherever you will remember to launch it from.
- Launch the application as you would any other - usually with a double-click.
- Open Google Messages on your Android device, go to the settings bar in the top right, and select "Messages for Web"
- Select the option to pair a new device and follow the instructions
	- Make sure to toggle the checkbox below the QR code in the desktop application if you wish to relaunch the application without having to go through the QR code registration process every time
- Begin messaging with your friends, lovers, and enemies

## Compile it yourself

Packaged releases should be available semi-regularly.

To compile and run from source:

- Clone the repository
- `cd desktop-messages`
- `npm install`
- `npm start`
- Scan the QR code using Google Messages on your Android device.
- Start messaging!

## Attributions

- Based on the URL example from Electron documentation. (https://github.com/electron/simple-samples)
- Modifications and enhancements by Dacoda Bizmark Nelson - Special Circumstances
- Binary builds provided by [Electron Forge](https://www.electronforge.io/)
- Solution for enabling system clipboard integration thanks to [Marco Pracucci](https://pracucci.com/atom-electron-enable-copy-and-paste.html)

