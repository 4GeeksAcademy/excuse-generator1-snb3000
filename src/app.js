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

    let chosenWho = chooseRandomItem(who);
    let chosenAction = chooseRandomItem(action);
    let chosenWhat = chooseRandomItem(what);
    let chosenWhen = chooseRandomItem(when);

    let sentence = `${chosenWho} ${chosenAction} ${chosenWhat} ${chosenWhen}`;
    var excuseElement = document.getElementById("excuse");
    excuseElement.textContent = sentence;
  }

  function chooseRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateRandomSentence();
};
