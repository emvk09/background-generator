var txt= document.querySelector("h3"); //all h3 tags are selected
var c1= document.querySelector(".color1"); //selects all the html lines under the class color1
var c2= document.querySelector(".color2"); //selects all the html lines under the class color2
var bck= document.getElementById("backgroundbody"); //selects all the elements with id backgroundbody

// console.log(css);
// console.log(c1);
// console.log(c2);
//console.log(bck);
// bck.style.background= "red";

function setGradient(){
    bck.style.background= "linear-gradient(to right,"+ c1.value +", "+ c2.value +")";
    txt.textContent= bck.style.background + ";";
}

c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);