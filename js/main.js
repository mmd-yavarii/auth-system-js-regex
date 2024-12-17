import { validation, blurAndFocushandeler } from "./validation.js";
import { fetchData } from "./request.js";
import { emailRegex, passwordRegex, submitHandeler } from "./helper.js";

const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");
const rememberInp = document.querySelector(".remember input");
const form = document.querySelector("form");

// set event listeners on elements
const setEvents = () => {
  // validations
  emailInp.addEventListener("keyup", (event) => validation(event, emailRegex));
  passwordInp.addEventListener("keyup", (event) =>
    validation(event, passwordRegex)
  );
  // focus and blur
  emailInp.addEventListener("focus", blurAndFocushandeler);
  emailInp.addEventListener("blur", blurAndFocushandeler);
  passwordInp.addEventListener("focus", blurAndFocushandeler);
  passwordInp.addEventListener("blur", blurAndFocushandeler);
  // submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitHandeler(emailInp, passwordInp, fetchData);
  });
};

document.addEventListener("DOMContentLoaded", setEvents);
