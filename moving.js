
function random200(){
	return Math.floor(Math.random()*200);
}

	

function move(){
	
	document.getElementById("circle").style.visibility = "hidden";
	
	document.getElementById("circle").style.top = random200();
	
	document.getElementById("circle").style.left = random200();
	
	document.getElementById("circle").style.visibility = "visible";
	
	
	
}