let nums = [...document.querySelectorAll(".num")];
let active = document.querySelector("[data-active]");

let first = "";
let second = "";
let func = "";

let stat = "first";

let add = function (a, b) {
  return a + b;
};

let subtract = function (a, b) {
  return a - b;
};

let multiply = function (a, b) {
  return a * b;
};

let divide = function (a, b) {
  return a / b;
};

let updateActive = function (num) {
  active.textContent = first;
};

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (stat == "first") {
      first += e.target.dataset.num;
      updateActive(first);
      console.log(e.target.dataset.num, num1);
    }
  });
});
