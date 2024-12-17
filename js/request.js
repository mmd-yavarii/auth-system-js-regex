import { alertMessage } from "./helper.js";

const form = document.querySelector("form");
const loading = document.querySelector("#loading");

const URL = "https://reqres.in/api/login";

// fetch data
const fetchData = async (email, password) => {
  form.style.display = "none";
  loading.style.display = "block";
  let result = null;

  try {
    const resonse = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await resonse.json();
  } catch (err) {
    alertMessage(false, err);
  }

  form.style.display = "block";
  loading.style.display = "none";

  return result.token;
};

export { fetchData };
