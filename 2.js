let button = document.getElementById("button-id");
button.style.height = "75px"
button.style.width = "150px";
button.style.backgroundColor = "green";
button.style.borderRadius = "20px";

let count = 1
button.onclick = function(){
	if(count%2!==0){
		button.innerHTML="ON"
	}else{
		button.innerHTML="OFF"
	}
	count++
}

