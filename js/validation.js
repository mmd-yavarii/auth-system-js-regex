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

export { blurAndFocushandeler, validation };
