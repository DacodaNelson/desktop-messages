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
const Menu = require('electron').Menu;


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
	
	createMenu();
	
	messagesWindow.loadURL(url);
	
	messagesWindow.show();
	
});

// This fix for enabling the system clipboard curtesy of:
// https://pracucci.com/atom-electron-enable-copy-and-paste.html

function createMenu() {
  const application = {
    label: "desktop-messages",
    submenu: [{
        label: "New",
        accelerator: "Command+N",
        click: () => {
          if (win === null) {
            createWindow()
          }
        }
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "CmdOrCtrl+Q",
        click: () => {
          app.quit()
        }
      }
    ]
  }

  const edit = {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        selector: "undo:"
      },
      {
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        selector: "cut:"
      },
      {
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        selector: "paste:"
      },
      {
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        selector: "selectAll:"
      }
    ]
  }

  const template = [
    application,
    edit
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}
