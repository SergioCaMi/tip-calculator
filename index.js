// ¡Buena suerte!
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const button = document.getElementById("calculate");

button.addEventListener("click", ()=>{
    total.textContent = bill.value*(1+(+tip.value/100)) + "€";
});