const path = require("path");

const { app, BrowserWindow, ipcMain } = require("electron");
const { PythonShell } = require("python-shell");
const {
  CATCH_ON_MAIN,
  SEND_TO_RENDERER,
  NEW_PROJECT,
  NEW_PROJECT_RENDERER
} = require("./src/utils/constants");
const pythonDir = "./src/python";

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

ipcMain.on(CATCH_ON_MAIN, (event, arg) => {
  let options = {
    mode: "text",
    scriptPath: path.join(__dirname, pythonDir),
    args: arg
  };

  PythonShell.run("density.py", options, (err, results) => {
    if (err) throw err;
    win.send(SEND_TO_RENDERER, results);
  });
});

ipcMain.on(NEW_PROJECT, (event, arg) => {
  let options = {
    mode: "text",
    scriptPath: path.join(__dirname, pythonDir),
    args: arg
  };

  PythonShell.run("new_project.py", options, (err, results) => {
    if (err) throw err;
    win.send(NEW_PROJECT_RENDERER, results);
  });
});

app.on("ready", createWindow);
