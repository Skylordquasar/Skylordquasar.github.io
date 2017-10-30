var character = "x"



function play(location){
	
	if(character == "x"){
		
		
		//grab the results
		document.getElementById(location).innerHTML= character;
		
		character = "o";
	}
	//reset
	else{
		
		//grab the results
		document.getElementById(location).innerHTML= character;
		
		character = "x"
	}
}