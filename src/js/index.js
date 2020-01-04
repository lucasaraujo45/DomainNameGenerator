/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

function getRandomDomain(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let pre = ["cool", "the", "crazy", "broken"];
let com = [".com", ".net"];

function randDomain() {
  var domainName = document.querySelector("#nme");
  document.querySelector("#domainMessage").innerHTML =
    pre[getRandomDomain(0, pre.length)] +
    domainName.value +
    com[getRandomDomain(0, com.length)];
}
document.querySelector("#submit").onclick = randDomain;
