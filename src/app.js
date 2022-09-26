/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  console.log("Hello World");

  document.getElementById("my_button").addEventListener("click", random_excuse);
};

function random_excuse() {
  let index_random_who = Math.floor(Math.random() * who.length);

  let index_random_what = Math.floor(Math.random() * what.length);

  let index_random_when = Math.floor(Math.random() * when.length);

  let result =
    who[index_random_who] +
    " " +
    what[index_random_what] +
    " " +
    when[index_random_when];

  document.getElementById("excuse").innerHTML = result;
  document.getElementById("my_button").innerHTML = "Repeat";
}
