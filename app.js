let nums = [...document.querySelectorAll(".num")];
let ops = [...document.querySelectorAll(".op")];
let equal = document.querySelector(".eq");
let active = document.querySelector("[data-active]");
let inactive = document.querySelector("[data-inactive]");

let first = "";
let second = "";
let func = "";
// let firstReset = true;
// let secondReset = false;
let stat = "first";
let answer;

let add = function (a, b) {
  return parseFloat(a) + parseFloat(b);
};

let subtract = function (a, b) {
  return parseFloat(a) - parseFloat(b);
};

let multiply = function (a, b) {
  return parseFloat(a) * parseFloat(b);
};

let divide = function (a, b) {
  return parseFloat(a) / parseFloat(b);
};

let operate = function (foo, a, b) {
  switch (foo) {
    case "+":
      answer = add(a, b);
      break;
    case "-":
      answer = subtract(a, b);
      break;
    case "*":
      answer = multiply(a, b);
      break;
    case "/":
      answer = divide(a, b);
      break;
  }
  return answer;
};

let updateActive = function (num) {
  active.textContent = num;
};

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (stat == "first") {
      first += e.target.dataset.num;
      updateActive(first);
    }
    if (stat == "second") {
      second += e.target.dataset.num;
      updateActive(second);
    }
  });
});

ops.forEach((op) => {
  op.addEventListener("click", (e) => {
    func = e.target.textContent;
    stat = "second";
    active.textContent = "0";
    firstPart = `${first} ${func}`;
    inactive.textContent = firstPart;
  });
});

equal.addEventListener("click", (e) => {
  // let answer;
  // switch (func) {
  //   case "add":
  //     answer = add(first, second);
  //     break;
  //   case "subtract":
  //     answer = subtract(first, second);
  //     break;
  //   case "multiply":
  //     answer = multiply(first, second);
  //     break;
  //   case "divide":
  //     answer = divide(first, second);
  //     break;
  // }
  operate(func, first, second);
  console.log(answer);
});
