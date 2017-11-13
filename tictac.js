var character = "x"



function play(location){
	
	if(document.getElementById(location).innerHTML== ""){
	
		if(character == "x"){
			
			
			//grab the results
			document.getElementById(location).innerHTML= character;
			
			document.getElementById("results").innerHTML="Its Player Two's Turn";
			
			character = "o";
		}
		//reset
		else{
			
			//grab the results
			document.getElementById(location).innerHTML= character;
			
			document.getElementById("results").innerHTML="Its Player One's Turn";
			
			character = "x";
		}
		winner();
	}
}


//winner
function winner(){
	
	
	var l1 = document.getElementById("squarel1").innerHTML;
	var l2 = document.getElementById("squarel2").innerHTML;
	var l3 = document.getElementById("squarel3").innerHTML;
	var c1 = document.getElementById("squarec1").innerHTML;
	var c2 = document.getElementById("squarec2").innerHTML;
	var c3 = document.getElementById("squarec3").innerHTML;
	var r1 = document.getElementById("squarer1").innerHTML;
	var r2 = document.getElementById("squarer2").innerHTML;
	var r3 = document.getElementById("squarer3").innerHTML;
	
	if(((l1 == c1) && (l1 == r1) && (l1 != '')) ||
	((l2 == c2) && (l2 == r2) && (l2 != '')) ||
	((l3 == c3) && (l3 == r3) && (l3 != '')) ||
	((l1 == l2) && (l1 == l3) && (l1 != '')) ||
	((c1 == c2) && (c1 == c3) && (c1 != '')) ||
	((r1 == r2) && (r1 == r3) && (r1 != '')) ||
	((l1 == c2) && (l1 == r3) && (l1 != '')) ||
	((l3 == c2) && (l3 == r1) && (l3 != ''))) {
		alert("Winner");
	}}

function restart(){

	var l1 = document.getElementById("squarel1").innerHTML="";
	var l2 = document.getElementById("squarel2").innerHTML="";
	var l3 = document.getElementById("squarel3").innerHTML="";
	var c1 = document.getElementById("squarec1").innerHTML="";
	var c2 = document.getElementById("squarec2").innerHTML="";
	var c3 = document.getElementById("squarec3").innerHTML="";
	var r1 = document.getElementById("squarer1").innerHTML="";
	var r2 = document.getElementById("squarer2").innerHTML="";
	var r3 = document.getElementById("squarer3").innerHTML="";
	
	document.getElementById("results").innerHTML="Its Player One's Turn";
	character = "x";
	
}