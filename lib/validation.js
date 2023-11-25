// 1. select all the elements 
//    that the user will interact with, that will change
// allInputs, tosInput, button
const allInputs = document.querySelectorAll(".form-control");
const tosInput = document.querySelector("#tos");
// const tosInput = document.getElementById("tos");
const button = document.querySelector(".btn");

const updateInputStyle = (input, isValid) => {
  if (isValid) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
};

const allValid = () => {
  // console.log(allFilled()); // returns true if all inputs are valid
    if (allFilled() && tosChecked()) {
      button.innerText = "Submit";
      button.disabled = false;
    }
};

const tosChecked = () => {
  return tosInput.checked;
};

const allFilled = () => {
  // const isValid = input.value !== "";
  let isValid = true;
  allInputs.forEach((input) => {
    if (input.value === "") {
      isValid = false;
    }
  });
  return isValid;
};

// 2.a. Listen to a blur event on each input (iterate!)
allInputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    // console.log(event);
    //      -  check whether there is a value

    // First idea:
    // let isValid = false;
    // if (input.value === "") {
    //   isValid = false;
    // } else {
    //   isValid = true;
    // }

    // Second idea:
    // const isValid = (input.value !== "") ? true : false;

    // Third idea:
    const isValid = input.value !== "";

    //      -  give a check/exclamation mark depending on above
    updateInputStyle(input, isValid);
    //      -  if allInputs + tosInput are valid, show the submit
    allValid();
  });
});

// 2.b. Listen to a change event on the tosInput
tosInput.addEventListener("change", () => {
  //      -  check whether it is checked or not
  const isChecked = tosInput.checked;
  //      -  if allInputs + tosInput are valid, show the submit
  allValid();
});
