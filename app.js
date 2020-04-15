/*
***********************************************************
	app.js
	
	desktop-messages
		An attempt to get Google Messages for Web on the desktop.
	
	Copyright (c) Dacoda Bizmark Nelson
	Special Circumstances
	
	Based on URL example from simple-samples
	(https://github.com/electron/simple-samples)
***********************************************************
*/

const {app, BrowserWindow} = require('electron');

// In case this changes in the future with one of those
// perpetual Google messenger service rebrands, mergers,
// or outright cock-ups, just change the URL below.

const url = "https://messages.google.com/web";

let messagesWindow;

app.on('ready', function(){
	
	messagesWindow = new BrowserWindow({
		width: 900,
		height: 700,
		show: false,
		title: "desktop-messages",
		frame: true,
		resizable: true,	
		webPreferences: {
			nodeIntegration: true,
			spellcheck: true	//Because who doesn't need spellcheck?
		}
	});
	messagesWindow.loadURL(url);
	
	messagesWindow.show();
});