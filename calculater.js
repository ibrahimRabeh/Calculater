const numberAndOperations = document.getElementById("operationCenterContainer");
let numberOnBoard = 0;
let firstNumber = 0;
let sign = "";
let secondNumber = 0;
let result = "";

function numbers(numberClicked) {
  if (numberOnBoard == 0) {
    firstNumber = firstNumber * 10 + numberClicked;
    document.getElementById("firstNumber").innerHTML = firstNumber;
  } else {
    secondNumber = secondNumber * 10 + numberClicked;
    document.getElementById("secondNumber").innerHTML = secondNumber;
    console.log(secondNumber + " in numbers");
  }
}
function operation(op) {
  if (op == sign) {
  } else {
    if (sign != "") Result();

    numberOnBoard++;
    if (op == "x") sign = "x";
    else if (op == "+") sign = "+";
    else if (op == "-") sign = "-";
    else if (op == "/") sign = "/";
    printOut();
    document.getElementById("secondNumber").innerHTML = "";

    console.log(secondNumber + " in operation");
  }
}
function Result() {
  if (secondNumber == 0 && sign == "/") {
    document.getElementById("result").innerHTML = "-_-?";
  } else {
    if (sign == "x") {
      result = firstNumber * secondNumber;
    } else if (sign == "+") {
      result = firstNumber + secondNumber;
    } else if (sign == "/") {
      result = firstNumber / secondNumber;
    } else if (sign == "-") {
      result = firstNumber - secondNumber;
    }

    secondNumber = "";
    firstNumber = result;
    console.log(secondNumber + " in result");
    printOut();
  }
  numberOnBoard++;
}
function clearing() {
  result = "";
  firstNumber = "";
  secondNumber = "";
  numberOnBoard = 0;
  sign = "";
  printOut();
}
function deleteNumber() {
  console.log(firstNumber + " " + secondNumber + " " + result);
  if (result == 0 && secondNumber == 0) {
    firstNumber = (firstNumber - (firstNumber % 10)) / 10;
    numberOnBoard = firstNumber;
    printOut();
  } else {
    secondNumber = (secondNumber - (secondNumber % 10)) / 10;
    numberOnBoard = secondNumber;
    printOut();
  }
}
function printOut() {
  document.getElementById("secondNumber").innerHTML = secondNumber;
  document.getElementById("firstNumber").innerHTML = firstNumber;
  document.getElementById("result").innerHTML = result;
  document.getElementById("operator").innerHTML = sign;
}
