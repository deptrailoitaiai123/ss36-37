let p = document.getElementById("p-id");
let input = document.getElementById("input-id");
let button = document.getElementById("button-id");
input.style.borderRadius = "20px"
button.style.borderRadius = "10px"
button.style.height = "40px"
button.style.width = "100px"
button.style.backgroundColor = "green"
button.style.border  = "1px solid green"

button.onclick = function() {
    if((input.value).length<10 && (input.value).length>1) {
        alert("Hợp lệ")
    }else alert("Không hợp lệ")
}