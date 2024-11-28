// PSEUDOCODE

// 1. Select elements (that user interacts with, that will change)
//    allInputs, tosCheckbox, submitButton
const allInputs = document.querySelectorAll(".form-control");
const tosCheckbox = document.querySelector("#tos");
const submitButton = document.querySelector("#submit");

const allInputFilled = (inputs) => {
  let result = true;
  inputs.forEach((input) => {
    if (input.value === "") {
      result = false;
    }
  });
  return result;
}

// 2. Listen to events
//  a. Blur on each input
// allInputs is a NodeList, similar to an array (.forEach ok, not .map or any other fancy method)
allInputs.forEach((input) => {
  //     - check if valid or not
  input.addEventListener("blur", (event) => {
    // console.log(event);
    // DO NOT USE input, instead, use event.currentTarget
    const bluredElement = event.currentTarget;
    //     3- add/remove the is-valid is-invalid classes
    if (bluredElement.value === "") {
      bluredElement.classList.add("is-invalid");
      bluredElement.classList.remove("is-valid");
    } else {
      bluredElement.classList.remove("is-invalid");
      bluredElement.classList.add("is-valid");
    }
    //     - check if all inputs are filled and tos checked
    if (allInputFilled(allInputs) && tosCheckbox.checked) {
      //     3- if yes, enable the submit button 
      submitButton.disabled = false;
      submitButton.innerText = "Submit";
    }
  });
});

//  b. Click on the tosCheckbox
tosCheckbox.addEventListener("click", (event) => {
    //     - check if all inputs are filled and tos checked
    if (allInputFilled(allInputs) && event.currentTarget.checked) {
      //     3- if yes, enable the submit button 
      submitButton.disabled = false;
      submitButton.innerText = "Submit";
    }
})