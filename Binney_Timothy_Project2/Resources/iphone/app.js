// Main JS file

var mainWindow = Ti.UI.createWindow({
	title: "Weapons",
	backgroundColor: "#fff"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var makeTable = function(){
	var spacing = 60;
	for(i in weapons){
		var titleLabel = Ti+UI.createLabel({
			text: weapons[i].theTitle,
			left: 10,
			right: 10,
			top: spacing,
			height: 20,
			backgroundColor: "#000",
			font: (fontSize: 18, fontFamily: "Arial"),
			color: "#fff",
		});
		spacing = titleLabel.top + titleLabel.height + 15;
		for(i in weapons[j].weaponsList){
			var weaponLabel = Ti.UI.createLabel({
				text: weapons[i].weaponsList[j].name,
				details: weapons[i].weaponsList[j].description,
				left: 20,
				right: 20,
				top: spacing,
				height: 20,
				backgroundColor: "#000",
				font: (fontSize: 14, fontFamily: "Arial"),
				color: "#fff"
			});
			
			
			
			
};




makeTable();

navWindow.open();


