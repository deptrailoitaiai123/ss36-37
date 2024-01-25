let div = document.getElementById("div-id");
let input  = document.getElementById("input-id");

input.onkeyup = function() {
    div.innerHTML = input.value;
  };
input.onchange = function() {
    div.innerHTML = input.value;
  };
console.log(div.innerHTML)