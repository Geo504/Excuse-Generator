/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onclick = function excuseGenerator() {
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

  const myExcuse = document.getElementById("excuse");
  myExcuse.innerHTML = `${randomData(who)} ${randomData(action)} ${randomData(
    what
  )} ${randomData(when)}`;
};
