const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  doSomething: () => console.log('This is from the preload script!')
});
