# desktop-messages

-----------------

## Purpose

The goal here is to have Google Messages for Web as a desktop application. Why? Because tab-hunting is a pain, and because sometimes you want to be able to view and send messages from your phone without having to open a web browser.

The solution? Well, for now it looks like the best option is to try to provide a lightweight Electron-based application. All the application does is launch a Chromium-based browser instance and load up `https://messages.google.com/web`. It's actually that simple.

Some additional features that will be added over time:

- Better update speeds. At present things are a little laggy in terms of seeing new messages.
- Notification integration. It's always nice when a message notification actually works.
- Cookies! So you can use the "remember this computer" slider and it'll actually work.
- Encryption of session storage and browser data by default. This way, unlike if you're using a browser, all of your cache and files aren't available to anyone else with admin privileges on your machine, or just physical access.

## Installation

A packaged release is currently available for MacOS 10.13 and above. It has been tested only on 10.13.

- Head to the "Releases" section
- Download the ZIP file for the latest release
- Unzip the ZIP file
- Move the application "desktop-messages.app" to your Applications folder
- Launch the application as you would any other
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

