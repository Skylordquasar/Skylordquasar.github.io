var list = [
	"gallery/6a00e553b3da20883401b7c730ece8970b-580wi.jpg",
	"gallery/download.jpg",
	"gallery/images.jpg"];
	
var img = 0;

function right(){
	
	if (img != 2){
		
		img = img +1;
		//grab the results
		document.getElementById("result").src =list[img];
		
	}
	
	else{
		
		img = 0;
		//grab the results
		document.getElementById("result").src =list[img];
	}

	
}

function left(){
	
	if (img != 0){
		
		img = img -1;
		//grab the results
		document.getElementById("result").src =list[img];
		
	}
	else{
		
		img = 2;
		//grab the results
		document.getElementById("result").src =list[img];
	}
}