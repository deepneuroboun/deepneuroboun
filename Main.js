const path = require("path");
const zmq = require("zeromq");

const { app, BrowserWindow, ipcMain } = require("electron");
const { CATCH_ON_MAIN, NEW_PROJECT } = require("./src/utils/constants");

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  // and load the index.html of the app.
  // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  win.loadURL("http://localhost:3000");
}

// event Manager Part for Electron
// Electron Main js part is the backend side of the project. It is related to the file
// management and proxy.
async function run(fname) {
  const sock = new zmq.Request();
  sock.connect("tcp://127.0.0.1:3001");
  console.log("Producer bound to port 3001");

  await sock.send(JSON.stringify(fname));
  const [result] = await sock.receive();

  console.log(JSON.parse(result));
}

ipcMain.on(CATCH_ON_MAIN, (event, arg) => {
  console.log(arg);
});

ipcMain.on(NEW_PROJECT, (event, arg) => {
  run(arg);
  console.log(arg);
});

app.on("ready", createWindow);
