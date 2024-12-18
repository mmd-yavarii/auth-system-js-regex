const alertNode = document.querySelector("#alertMessage");

// regexes
const emailRegex =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^[A-Za-z\d]{9,}$/;

// alert
const alertMessage = (isSuccess, message) => {
  alertNode.innerText = message;
  alertNode.style.color = isSuccess ? "#12d300" : "#d3005f";
  alertNode.style.backgroundColor = isSuccess ? "#00ff2217" : "#ff000817";
  alertNode.style.display = "block";
  setTimeout(() => {
    alertNode.style.display = "none";
  }, 1500);
};

// submit
const submitHandeler = async (emailNode, passwordNode, fetchData) => {
  if (
    emailNode.dataset.validation == "valid" &&
    passwordNode.dataset.validation == "valid"
  ) {
    const email = emailNode.value;
    const password = passwordNode.value;

    const token = await fetchData(email, password);

    if (token) {
      document.cookie = `token=${token}; max-age:86400`;
    }
    alertMessage(
      token,
      token
        ? `You have access to your panel for the next 24 hours!`
        : "You do not have an account"
    );
  } else {
    alertMessage(false, "Please fill out the form correctly");
  }
};

const convertNumber = (value) => {
  const map = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return value.replace(/[۰-۹]/g, (char) => map[char]);
};

export {
  emailRegex,
  passwordRegex,
  submitHandeler,
  alertMessage,
  convertNumber,
};
