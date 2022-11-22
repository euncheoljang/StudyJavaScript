const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutpu(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    preveResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutpu("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
  
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutpu("-", initialResult, enteredNumber);
  writeToLog("SUBSTRACT", initialResult, enteredNumber, currentResult);
}

function multiplty() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutpu("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutpu("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiplty);
divideBtn.addEventListener("click", divide);
