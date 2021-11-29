window.onload = function () {
  //validate email on subscribe button click
  document.getElementById("subscribe").onclick = validateEmail;
};

let validateEmail = () => {
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //regular expression to validate email
  let $email = document.querySelector("#email");  //store email field in variable
  let email = $email.value;
  if (email == "") { //if email is left empty
    $email.classList.add("error");
    $email.nextElementSibling.innerHTML = "Please enter an email address!";
  } else if (!email.match(emailRegex)) { //if email is invalid
    $email.classList.add("error");
    $email.nextElementSibling.innerHTML = "Please enter a valid email address!";
  } else {
    $email.classList.remove("error");
    $email.nextElementSibling.innerHTML = "";
  }
};
