/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let numero = Math.floor(Math.random() * 14 + 1);
console.log(numero);
let numeroPinta = Math.floor(Math.random() * 4 + 1);
console.log(numeroPinta);

window.onload = function() {
  //write your code here
  let cambioPinta = document.getElementById("pinta");
  let cambioPinta2 = document.getElementById("pinta2");
  document.getElementById("numero").value = numero;
  if (numero == 11) {
    document.getElementById("numero").value = "J";
  }
  if (numero == 12) {
    document.getElementById("numero").value = "Q";
  }
  if (numero == 13) {
    document.getElementById("numero").value = "K";
  }
  if (numero == 14) {
    document.getElementById("numero").value = "A";
  }
  cambioPinta.value = numeroPinta;
  if (cambioPinta.value == 1) {
    cambioPinta.classList.add("fa-solid", "fa-clover");
    cambioPinta2.classList.add("fa-solid", "fa-clover");
  }
  if (cambioPinta.value == 2) {
    cambioPinta.classList.add("fa-solid", "fa-diamond");
    cambioPinta2.classList.add("fa-solid", "fa-diamond");
    cambioPinta.style.color = "red";
    cambioPinta2.style.color = "red";
  }
  if (cambioPinta.value == 3) {
    cambioPinta.classList.add("fa-solid", "fa-heart");
    cambioPinta2.classList.add("fa-solid", "fa-heart");
    cambioPinta.style.color = "red";
    cambioPinta2.style.color = "red";
  }
  if (cambioPinta.value == 4) {
    cambioPinta.classList.add("fa-solid", "fa-spa");
    cambioPinta2.classList.add("fa-solid", "fa-spa");
  }
};
