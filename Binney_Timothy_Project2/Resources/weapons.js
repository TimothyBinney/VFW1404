// Json Data

var weapons = {
	"Melee":{
		"theTitle": "Melee Weapons",
		"weaponList": [
		{
			"name": "Sword",
			"description": "A brute force weapon used for hacking and slashing."
		},	
		{	"name": "Dagger",	
			"description": "A small subtle weapon used from various weak points on an enemey for sudden devasting blows to vital organs."
		},
		{	"name": "Fists",
			"description": "A true warrior uses only his fists to deal blunt damage to a worthy foe."	
		}
		
	]
},
	"Ranged":{
		"theTitle": "Ranged Weapons",
		"weaponList": [
		{
			"name": "Bow",
			"description": "A silent ranged weapon for skilled warriors to attack vital spots on an enemy with light armor."
		},	
		{	"name": "Gun",	
			"description": "A loud all be it powerful ranged weapon used to blow enemies with the heaviest of armor away."
		},
		{	"name": "Wand",
			"description": "A mystical and terrifying weapon wielded by only the intellectually capable and magically inclined warrior to cast spells on enemies."	
		}
		
	]
	}	
};

var makeTable = function(){
	var spacing = 100;
	for(i in weapons){
		var makeLabel = Ti.UI.createLabel({
			text: weapons[i].theTitle,
			left: 15,
			right: 15,
			top: spacing,
			height: 20,
			backgroundColor: "#000",
			font: {fontSize: 18, fontFamily: "arial"},
			color: "#fff"
		});
		spacing = makeTable.top + makeTable.height + 10,
		console.log(spacing);
		for(i in weapons[j].weaponlist){
			var weaponLabel = Ti.UI.createLabel({
				text: weapons[i].weaponlist[j].name,
				details: weapons[i].weaponlist[j].description,
				left: 30,
				right: 15,
				top: spacing,
				height: 15,
				backgroundColor: "#fff",
				font: {fontSize: 12, fontFamily: "arial"},
				color: "#000"
			});
			mainWindow.add(weaponLabel);
			spacing = weaponLabel.top + weaponLabel.height + 10;
		}
		mainWindow.add(makeLabel);
		spacing = weaponLabel.top + weaponLabel.height + 50;
	}	
};


