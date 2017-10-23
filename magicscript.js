var list = [
	"Yes",
	"No",
	"Just Bing It (!)",
	"Just Google It",
	"Just Google It",
	"Just Google It",
	"Just Google It",
	"Just Google It",
	"Just Google It",
	"Try Again",
	"I Dont Know",
	"Probably?",
	"For Shame",
	"How Should I Know?",
	"Is Mayonase an Instrument?",
	"ANGRY"];
	
var img = "front"
	
function random(){
	return Math.floor(Math.random()*16)	;
}

function shakemagic(){
	
	if(img == "front"){
		
		//grab image by id
		document.getElementById("magicball").src= "r/magicgoogle8ball1.jpg";
		
		//grab the results
		document.getElementById("result").innerHTML=list[random()];
		
		img = "back";
	}
	//reset
	else{
	//grab image by id
		document.getElementById("magicball").src= "r/magic8ball.png";
		
		//grab the results
		document.getElementById("result").innerHTML="Click the magic 8 ball to shake again";
		
		img = "front"
	}
}