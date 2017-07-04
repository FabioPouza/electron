"use strict";
const electron = require('electron');
const app = electron.app;
const url = require('url');
const path = require('path');
const dialog = electron.dialog;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let win;
app.on('ready', function () {

  win = new electron.BrowserWindow({
    width: 600,
    height: 600
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:'

  }));

  win.webContents.openDevTools({ mode: 'bottom' });

  //win.loadURL('https://github.com/');





  //dialog.showMessageBox(win, {
  //type: 'info',
  //message: 'C#?',
  //title: 'olha só',
  //buttons: []
  // });


  //dialog.showOpenDialog(win, {
  //title: 'select a new file',
  //buttonLabel: 'SON'
  //});


  //dialog.showErrorBox('Error', 'content');

  // let menuTemplate = [
  //   {
  //     label: 'Menu 1'
  //   },
  //   {
  //     label: 'Menu 2',
  //     submenu: [
  //       {
  //         label: 'hello',
  //         click: function (item, win, event) {
  //           dialog.showMessageBox(win, {
  //             type: 'info',
  //             message: 'C#?',
  //             title: 'olha só',
  //             buttons: []
  //           });
  //         }
  //       }
  //     ]
  //   }
  // ];
  // const menu = Menu.buildFromTemplate(menuTemplate);


  // const menu = new Menu();

  // menu.append(new MenuItem({
  //   label: 'teste',

  // }));
  // menu.append(new MenuItem({
  //   label: 'Menu 2',
  // }));

  // Menu.setApplicationMenu(menu);

});