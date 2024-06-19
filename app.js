let nums = [...document.querySelectorAll(".num")];
let ops = [...document.querySelectorAll(".op")];
let equal = document.querySelector(".eq");
let active = document.querySelector("[data-active]");
let clear = document.querySelector(".clear");

// let inactive = document.querySelector("[data-inactive]");

let first, second, func, stat, answer;

let initiatlize = function (foo, one) {
  first = one;
  second = "";
  func = "";
  // let firstReset = true;
  // let secondReset = false;
  stat = foo;
  answer;
  return;
};

// OPERATIONS
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

// OPERATE FUNCTION
let operate = function (foo, a, b) {
  switch (foo) {
    case "+":
      answer = Math.round(add(a, b) * 100) / 100;
      break;
    case "-":
      answer = Math.round(subtract(a, b) * 100) / 100;
      break;
    case "*":
      answer = Math.round(multiply(a, b) * 100) / 100;
      break;
    case "/":
      answer = Math.round(divide(a, b) * 100) / 100;
      break;
  }
  return answer;
};

// Update the HTML with the Answer
let updateActive = function (num) {
  active.textContent = num;
};

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    // Checking for solved status, if they've already solved one problem
    if (stat == "solved") {
      initiatlize("first", "");
      updateActive(first);
    }
    if (stat == "first") {
      first += e.target.dataset.num;
      updateActive(first);
      console.log(first, second);
    } else if (stat == "second") {
      second += e.target.dataset.num;
      updateActive(second);
      console.log(first, second);
    }
  });
});

ops.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (second != "") {
      operate(func, first, second);
      updateActive(answer);
      initiatlize("solved", answer);
    }
    func = e.target.textContent;
    stat = "second";
  });
});

equal.addEventListener("click", (e) => {
  // Dividing by 0
  if (func == "/" && second == 0) {
    updateActive("Don't even think about it dude");
    initiatlize("first", "");
    return;
  }
  if (first != "" && second != "") {
    operate(func, first, second);
    updateActive(answer);
    initiatlize("solved", answer);
  } else {
    return;
  }
});

clear.addEventListener("click", (e) => {
  initiatlize("first", "");
  updateActive(0);
});

initiatlize("first", "");
