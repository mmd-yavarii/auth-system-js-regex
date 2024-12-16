const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");
const rememberInp = document.querySelector(".remember input");

const URL = "https://reqres.in/api/login";

// regexes
const emailRegex =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])[A-Za-z\d]{9,}$/;

// form validations
const validation = (event, regex) => {
  const element = event.target;
  const isValid = regex.test(element.value);
  if (isValid) {
    element.className = "";
    element.classList.add("valid");
    element.dataset.validation = "valid";
  } else {
    element.className = "";
    element.classList.add("invalid");
    element.dataset.validation = "invalid";
  }
};

// focus and blur inputs handeler
const blurAndFocushandeler = {
  focus(element) {
    element.classList.add(element.dataset.validation);
  },
  blur(element) {
    element.className = "";
  },
  handleEvent(event) {
    const type = event.type;
    switch (type) {
      case "focus":
        this.focus(event.target);
        break;
      case "blur":
        this.blur(event.target);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  emailInp.addEventListener("keyup", (event) => validation(event, emailRegex));
  passwordInp.addEventListener("keyup", (event) =>
    validation(event, passwordRegex)
  );

  emailInp.addEventListener("focus", blurAndFocushandeler);
  emailInp.addEventListener("blur", blurAndFocushandeler);
  passwordInp.addEventListener("focus", blurAndFocushandeler);
  passwordInp.addEventListener("blur", blurAndFocushandeler);
});
