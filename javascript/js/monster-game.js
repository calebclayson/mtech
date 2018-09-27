// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ['apples', 'pizza', 'lemons'];
var currentfood = "";

// start the game with a function
function rungame(){
    getfood();
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    setfood(foodarr[randomfood]);
}

// put the food in the box
function setfood(food){
	currentfood = food;
	document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
	//if the food is good
	if(currentfood == "foodname" || currentfood == "foodname" || currentfood == "foodname"){
		document.getElementById("commentbox").innerHTML = "";
	}
	// if the food is bad
	else{
		document.getElementById("commentbox").innerHTML = "";
	}

	rungame();
	
}

function trashit(){
	//if the food is good
	if(currentfood == "foodname" || currentfood == "foodname" || currentfood == "foodname"){
		document.getElementById("commentbox").innerHTML = "";
		
	}
	// if the food is bad
	else{
		document.getElementById("commentbox").innerHTML = "";
	}
	rungame();
}

document.getElementById('body').addEventListener('onload', rungame());
