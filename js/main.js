import {
  emailRegex,
  passwordRegex,
  submitHandeler,
  convertNumber,
} from "./helper.js";
import { validation, blurAndFocushandeler } from "./validation.js";
import { fetchData } from "./request.js";

const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");
const rememberInp = document.querySelector(".remember input");
const form = document.querySelector("form");

// set event listeners on elements
const setEvents = () => {
  // validations
  emailInp.addEventListener("keyup", (event) => {
    event.target.value = convertNumber(event.target.value);
    validation(event, passwordRegex);
    console.log();
  });

  passwordInp.addEventListener("keyup", (event) => {
    event.target.value = convertNumber(event.target.value);
    validation(event, passwordRegex);
  });
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
