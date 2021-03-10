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

let activeError = false;

let formStorage = [];
var addData = (() => {

    let formData = {
        email: email.value,
        country: country.value,
        zipCode: zip.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
    }

    //email field validation
    function showEmailErrors() {
        if(email.validity.valueMissing) {
            //if the field is empty display the following error message.
            emailError.textContent = 'You need to enter an e-mail address.';
        } else if(email.validity.typeMismatch){
            //if the field doesn't contain an email address display the following error message
            emailError.textContent = 'Entered value needs to be an e-mail address.'
        }
        emailError.className = 'error active';
    }

    email.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(email.validity.valid) {
            //if the field is valid, we remove error message
            formData.email = email.value;
            emailError.textContent = '';
            emailError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showEmailErrors();
            activeError = true;
        }
    });

    //country field validation
    function showCountryErrors() {
        if(country.validity.valueMissing) {
            //if the field is empty display the following error message
            countryError.textContent = 'You need to enter a Country.'
        } else if(country.validity.patternMismatch) {
             //if the field doesn't contain only letters display the following error message
            countryError.textContent = 'Entered value needs to be only letters.';
        }
        countryError.className = 'error active';
    }

    country.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(country.validity.valid) {
            //if the field is valid, we remove error message
            formData.country = country.value;
            countryError.textContent = '';
            countryError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showCountryErrors();
            activeError = true;
        }
    });

    //zip code field validation
    function showZipErrors() {
        if(zip.validity.valueMissing) {
            //if the field is empty display the following error message
            zipError.textContent = 'You need to enter a Zip Code.'
        } else if(zip.validity.patternMismatch) {
            //if the field doesn't contain only letters display the following error message
            zipError.textContent = 'Entered value needs to be only numbers.';
        }
        zipError.className = 'error active';
    }

    zip.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(zip.validity.valid) {
            //if the field is valid, we remove error message
            formData.zipCode = zip.value;
            zipError.textContent = '';
            zipError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showZipErrors();
            activeError = true;
        }
    });

    //password field validation
    function showPasswordErrors() {
        if(password.validity.valueMissing) {
            //if the field is empty display the following error message
            passwordError.textContent = 'You need to set a password.'
        } else if(password.validity.patternMismatch) {
            //if the field doesn't contain only letters display the following error message
            passwordError.textContent = 'Must contain at least one number, one uppercase and one lowercase letters, one symbol. ';
        }
        passwordError.className = 'error active';
    }

    password.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(password.validity.valid) {
            //if the field is valid, we remove error message
            formData.password = password.value;
            passwordError.textContent = '';
            passwordError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showPasswordErrors();
            activeError = true;
        }
    });

    //password confirmation field validation
    passwordConfirmation.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(password.value == passwordConfirmation.value) {
            //if the field is valid, we remove error message
            formData.passwordConfirmation = passwordConfirmation.value;
            confirmationError.textContent = '';
            confirmationError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            confirmationError.textContent = 'The passwords must be the same.';   
            confirmationError.className = 'error active';
            activeError = true;
        }
    });

    clearButton.addEventListener('click', () => {
        document.forms[0].reset();
        activeError = false;
        for(let  i = 0; i<spanElements.length; i++){
            if(spanElements[i].className == 'error active' && spanElements[i].textContent != '') {
                spanElements[i].className = 'error';
                spanElements[i].textContent = '';
            }
        }
    });

    confirmButton.addEventListener('click', () => {
        if(activeError == false) {
            formStorage.push(formData);

            document.forms[0].reset();
            for(let  i = 0; i<spanElements.length; i++){
                if(spanElements[i].className == 'error active' && spanElements[i].textContent != '') {
                    spanElements[i].className = 'error';
                    spanElements[i].textContent = '';
                }
            }

            console.warn('added', {formStorage});
            localStorage.setItem('MyFormData', JSON.stringify(formStorage));
            
        }
    });
   
})();

