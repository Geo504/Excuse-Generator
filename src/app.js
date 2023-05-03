/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const randomData = ar => {
  return ar[Math.floor(Math.random() * ar.length)];
};

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("excuse").innerHTML = `${randomData(
    who
  )} ${randomData(action)} ${randomData(what)} ${randomData(when)}`;
  return document.getElementById("excuse").innerHTML;
});
