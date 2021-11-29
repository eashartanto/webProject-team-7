window.onload = function () {
  document.getElementById("subscribe").onclick = validateEmail;
};

let validateEmail = () => {
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let $email = document.querySelector("#email");
  let email = $email.value;
  if (email == "") {
    $email.classList.add("error");
    $email.nextElementSibling.innerHTML = "Please enter an email address!";
  } else if (!email.match(emailRegex)) {
    $email.classList.add("error");
    $email.nextElementSibling.innerHTML = "Please enter a valid email address!";
  } else {
    $email.classList.remove("error");
    $email.nextElementSibling.innerHTML = "";
  }
};
