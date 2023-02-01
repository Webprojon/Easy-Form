"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  // const loader = document.querySelector(".loader");

  // setTimeout(() => {
  //   loader.style.opacity = 0;
  // }, 1100);
  
  // Inputs *******************
  const fName = document.querySelector("form #fname");
  const age = document.querySelector("form #age");
  const isMarried = document.querySelector("form #isMarried");

  // Buttons *******************
  const submitBtn = document.querySelector(".submit");
  const cancelBtn = document.querySelector(".reset");

  // Texts *******************
  const container = document.querySelector(".container-text");
  const fNameText = document.querySelector(".fname");
  const ageText = document.querySelector(".age");
  const isMarriedText = document.querySelector(".isMarried");

  const message = document.querySelector(".message");

  // Event Listeners & Functions
  fName.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    fNameText.innerHTML = `<code>Name: ${inputValue} 😛</code>`;
  });

  age.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    ageText.innerHTML = `<code>Age: ${inputValue} 😎</code>`;
  });

  isMarried.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    isMarriedText.innerHTML = `<code>Are you marrige: ${inputValue} 🤨</code>`;
  });

  submitBtn.addEventListener("click", () => {
    checkingInputs();
  });

  cancelBtn.addEventListener("click", () => {
    message.innerHTML = `<code>Unsuccesfully, Try Again 🤨</code>`;
    message.style.color = "red";
    container.textContent = "";
  });

  function checkingInputs() {
    const fName = document.querySelector("form #fname").value;
    const age = document.querySelector("form #age").value;
    const isMarried = document.querySelector("form #isMarried").value;

    // Warning Texts
    const nameError = document.querySelector(".name-error");
    const ageError = document.querySelector(".age-error");
    const isMarriedError = document.querySelector(".isMarried-error");

    if (fName === "") {
      nameError.textContent = "Please, enter your name";
    } else {
      nameError.textContent = "";
    }

    if (age === "") {
      ageError.textContent = "Please, enter your age";
    } else {
      ageError.textContent = "";
    }

    if (isMarried === "") {
      isMarriedError.textContent = "Please, enter your marrtial status";
    } else {
      isMarriedError.textContent = "";

      message.innerHTML = `<code>Succesfully Sent 🎉</code>`;
      message.style.color = "green";
    }
  }
});
