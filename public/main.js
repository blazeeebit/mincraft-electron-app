const { BrowserWindow, app } = require('electron')
require('@electron/remote/main').initialize()

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true
        }
    })
    win.loadURL('http://localhost:3000')

    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require("electron-devtools-installer")

    installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
        console.log("extension added")
    }).catch((err) => {
        console.log("Error")
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})