
var mainWindow = Ti.UI.createWindow({
	title: "Weapons of War",
	backgroundColor: "gray"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var loadFile = require ("weapons");


navWindow.open();