const confirmButton = document.getElementsByClassName('confirm')[0];
const clearButton = document.getElementsByClassName('clear')[0];
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const country = document.getElementById('country');
const countryError = document.getElementById('country-error');
const zip = document.getElementById('zip');
const zipError = document.getElementById('zip-error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const passwordConfirmation = document.getElementById('password-confirmation');
const confirmationError = document.getElementById('confirmation-error');
const spanElements = document.getElementsByTagName('span');
const inputElements = document.getElementsByTagName('input');

export {
    confirmButton, 
    clearButton, 
    email, 
    emailError, 
    country, 
    countryError, 
    zip, 
    zipError, 
    password,
    passwordError,
    passwordConfirmation,
    confirmationError,
    spanElements,
    inputElements
};