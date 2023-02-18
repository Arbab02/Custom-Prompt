// let inp = document.getElementById('inp');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
let alertBox = document.getElementById('alertBox');

let box = document.getElementById('box');
function myfunction() {
  box.classList.toggle("show");
}

function myfunction2() {
  let color = document.getElementById('inp').value;
  document.body.style.background = color;
  box.classList.toggle("show");
if(inp.value == "" ){
   alertBox.style.display = "block";
  box.classList.toggle("show");
}
else{ alertBox.style.display = "none"; }
}

function myfunction3() {
  box.classList.toggle("show");
  // document.body.style.background = "white";

}

function myfunctionC() {
  let color = document.getElementById('inp').value = "";

}

function okfunction() {
    // alertBox.classList.toggle("showAlert");
  alertBox.style.display = "none";
}