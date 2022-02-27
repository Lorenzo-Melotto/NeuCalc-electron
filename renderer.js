// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

/* getting a reference on all buttons */
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const clear = document.querySelector("#clear");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const plus = document.querySelector("#plus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const minus = document.querySelector("#minus");
const dot = document.querySelector("#dot");
const zero = document.querySelector("#zero");
const equal = document.querySelector("#equal");
const slash = document.querySelector("#slash");
const by = document.querySelector("#by");
const modulo = document.querySelector("#modulo");
const del = document.querySelector("#delete");
const screen = document.querySelector("#result");

/* logic  */
let acc = 0; // accumulator
let storedNumber = 0; // last entered number
let lastOp = ""; // last operation selected
let isFirstOp = 1; // wheter or not it's the first operation

/**
 * Calculates the result based on the last number stored, last number entered
 * and the last operation selected.
 * @returns void
 */
const calcResult = () => {
  let lastNum = parseFloat(screen.value);
  if (isNaN(lastNum)) {
    alert("Please enter a number!");
    return;
  }
  switch (lastOp) {
    case "+":
      acc = storedNumber + lastNum;
      break;
    case "-":
      acc = storedNumber - lastNum;
      break;
    case "*":
      acc = storedNumber * lastNum;
      break;
    case "/":
      // handle division by zero
      if (lastNum === 0) {
        screen.value = "ErrDivByZero";
        return;
      }
      acc = storedNumber / lastNum;
      break;
    case "%":
      acc = storedNumber % lastNum;
      break;
  }

  screen.value = acc; // put the result on the screen
  storedNumber = acc; // save the result
  lastOp = ""; // clear the last operation
};

/* add a click event to all the buttons */

equal.addEventListener("click", () => {
  calcResult();
});

clear.addEventListener("click", () => {
  screen.value = "0";
  acc = 0;
  isFirstOp = 1;
  lastOp = "";
});

one.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "1";
  else screen.value += "1";
});

two.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "2";
  else screen.value += "2";
});

three.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "3";
  else screen.value += "3";
});

four.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "4";
  else screen.value += "4";
});

five.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "5";
  else screen.value += "5";
});

six.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "6";
  else screen.value += "6";
});

seven.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "7";
  else screen.value += "7";
});

eight.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "8";
  else screen.value += "8";
});

nine.addEventListener("click", () => {
  if (screen.value === "0") screen.value = "9";
  else screen.value += "9";
});

zero.addEventListener("click", () => {
  // user can add only 1 zero
  if (screen.value !== "0") screen.value += "0";
});

dot.addEventListener("click", () => {
  if (screen.value === "") screen.value = "0.";
  else screen.value += ".";
});

plus.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storedNumber = parseFloat(screen.value);
  } else {
    calcResult();
  }
  lastOp = "+";
  screen.value = "";
  isFirstOp = 0;
});

minus.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storedNumber = parseFloat(screen.value);
  } else {
    calcResult();
  }
  lastOp = "-";
  screen.value = "";
  isFirstOp = 0;
});

by.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storedNumber = parseFloat(screen.value);
  } else {
    calcResult();
  }
  lastOp = "*";
  screen.value = "";
  isFirstOp = 0;
});

slash.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storedNumber = parseFloat(screen.value);
  } else {
    calcResult();
  }
  lastOp = "/";
  screen.value = "";
  isFirstOp = 0;
});

modulo.addEventListener("click", () => {
  if (isFirstOp === 1) {
    storedNumber = parseFloat(screen.value);
  } else {
    calcResult();
  }
  lastOp = "%";
  screen.value = "";
  isFirstOp = 0;
});

del.addEventListener("click", () => {
  let currScreen = screen.value;
  let newScreen = currScreen.slice(0, currScreen.length - 1);
  screen.value = newScreen;
});
