let nums = [...document.querySelectorAll(".num")];

function calc() {
  let num1 = "";
  let num2 = "";

  nums.forEach((num) => {
    num.addEventListener("click", (e) => {
      num1 += e.target.dataset.num;
      console.log(e.target.dataset.num, num1);
    });
  });
}

calc();
