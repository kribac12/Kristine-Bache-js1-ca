/*Create a form with the following inputs and validation rules.
Name - required, 
Subject - must have a value with a minimum length of 10
Email - must have a value and be formatted like an email address
Address - must have a value with a minimum length of 25
When the form on this page is submitted, write code to validate the input. 
If any of the inputs fail validation display an error message for 
the relevant input.*/

const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector(".message");
const button = document.querySelector("button");

message.innerHTML = " ";

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 2) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  form.reset();

  message.innerHTML = '<div class="message">    Your message has been sent!</div>';
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
