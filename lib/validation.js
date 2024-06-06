// PSEUDOCODE
// 1. Select elements that the user interacts with, that will change (inputs (NodeList ~= array), checkbox, submit)
const inputs = document.querySelectorAll(".form-control");
const checkbox = document.querySelector("#tos");
const submit = document.querySelector("#submit");

const allValid = () => {
  let isValid = true;
  inputs.forEach((input) => {
    if (input.value === "") {
      isValid = false;
    }
  });
  return isValid;
}

const tosChecked = () => {
  return checkbox.checked;
}

const enableSubmit = () => {
  if (allValid() && tosChecked()) {
    submit.innerText = "Submit";
    submit.disabled = false;
  }
}

// 1.5 Iterates over inputs
// JS arrow function () => {}
inputs.forEach((input) => {
  // 2. Listen to a blur on an input
  input.addEventListener("blur", (event) => {
    console.log(event);
    // 3. Check if it's valid or not
    const bluredElement = event.currentTarget;
    // bluredElement === input
    const isValidated = bluredElement.value !== "";
    // 4. Add the corresponding bs class (is-invalid/is-valid)
    if (isValidated) {
      bluredElement.classList.add("is-valid");
      bluredElement.classList.remove("is-invalid");
    } else {
      bluredElement.classList.add("is-invalid");
      bluredElement.classList.remove("is-valid");
    }
    // 5. If all inputs valid and tos checked -> enable submit button
    enableSubmit();
  });
});


// 6. Listen to a change on the checkbox
checkbox.addEventListener("change", () => {
  // 7. If all inputs valid and tos checked -> enable submit button
  enableSubmit();
});