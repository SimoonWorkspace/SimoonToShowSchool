// Get the result input element
const resultInput = document.getElementById("result");

// Add a character to the result input
function addToResult(char) {
  resultInput.value += char;
}

// Calculate the result
function calculate() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    resultInput.value = "Error";
  }
}

// Clear the result input
function clearResult() {
  resultInput.value = "";
}

// Remove the last character from the result input
function backspace() {
  resultInput.value = resultInput.value.slice(0, -1);
}
