/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateRandomSentence() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying",
    ];

    let sentence =
      chooseRandomItem(who) +
      " " +
      chooseRandomItem(action) +
      " " +
      chooseRandomItem(what) +
      " " +
      chooseRandomItem(when);

    document.getElementById("excuse").textContent = sentence;
  }

  function chooseRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateRandomSentence();
};
