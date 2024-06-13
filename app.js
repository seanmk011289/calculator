let nums = [...document.querySelectorAll(".num")];
let ops = [...document.querySelectorAll(".op")];
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
      console.log(stat);
    }
  });
});

ops.forEach((op) => {
  op.addEventListener("click", (e) => {
    func = e.target.dataset.op;
    stat = "second";
    console.log(func, stat);
  });
});
