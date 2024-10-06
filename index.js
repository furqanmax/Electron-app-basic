const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,  // set to false when loading external URL for security reasons
      contextIsolation: true   // context isolation to protect the renderer
    }
  });
  win.setMenu(null)
  // Replace local HTML file loading with a URL
  win.loadURL('https://tasktimetracker.surge.sh/index.html');  // Replace with the actual URL you want to load
}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
