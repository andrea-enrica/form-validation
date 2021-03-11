import * as constVariables from './constVariables';

let activeError = false;
let formStorage = [];

var addData = (() => {

    //email field validation
    function showEmailErrors() {
        if(constVariables.email.validity.valueMissing) {
            //if the field is empty display the following error message.
            constVariables.emailError.textContent = 'You need to enter an e-mail address.';
        } else if(constVariables.email.validity.typeMismatch){
            //if the field doesn't contain an email address display the following error message
            constVariables.emailError.textContent = 'Entered value needs to be an e-mail address.'
        }
        constVariables.emailError.className = 'error active';
    }

    constVariables.email.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(constVariables.email.validity.valid) {
            //if the field is valid, we remove error message
            constVariables.emailError.textContent = '';
            constVariables.emailError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showEmailErrors();
            activeError = true;
        }
    });

    //country field validation
    function showCountryErrors() {
        if(constVariables.country.validity.valueMissing) {
            //if the field is empty display the following error message
            constVariables.countryError.textContent = 'You need to enter a Country.'
        } else if(constVariables.country.validity.patternMismatch) {
             //if the field doesn't contain only letters display the following error message
             constVariables.countryError.textContent = 'Entered value needs to be only letters.';
        }
        constVariables.countryError.className = 'error active';
    }

    constVariables.country.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(constVariables.country.validity.valid) {
            //if the field is valid, we remove error message
            constVariables.countryError.textContent = '';
            constVariables.countryError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showCountryErrors();
            activeError = true;
        }
    });

    //zip code field validation
    function showZipErrors() {
        if(constVariables.zip.validity.valueMissing) {
            //if the field is empty display the following error message
            constVariables.zipError.textContent = 'You need to enter a Zip Code.'
        } else if(constVariables.zip.validity.patternMismatch) {
            //if the field doesn't contain only letters display the following error message
            constVariables.zipError.textContent = 'Entered value needs to be only numbers.';
        }
        constVariables.zipError.className = 'error active';
    }

    constVariables.zip.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(constVariables.zip.validity.valid) {
            //if the field is valid, we remove error message
            constVariables.zipError.textContent = '';
            constVariables.zipError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showZipErrors();
            activeError = true;
        }
    });

    //password field validation
    function showPasswordErrors() {
        if(constVariables.password.validity.valueMissing) {
            //if the field is empty display the following error message
            constVariables.passwordError.textContent = 'You need to set a password.'
        } else if(constVariables.password.validity.patternMismatch) {
            //if the field doesn't contain only letters display the following error message
            constVariables.passwordError.textContent = 'Must contain at least one number, one uppercase and one lowercase letters, one symbol. ';
        }
        constVariables.passwordError.className = 'error active';
    }

    constVariables.password.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(constVariables.password.validity.valid) {
            //if the field is valid, we remove error message
            constVariables.passwordError.textContent = '';
            constVariables.passwordError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showPasswordErrors();
            activeError = true;
        }
    });

    //password confirmation field validation
    function showPasswordConfirmationErrors() {
        if(constVariables.passwordConfirmation.validity.valueMissing) {
            //if the field is empty display the following error message
            constVariables.confirmationError.textContent = 'You need to enter the same password again.';
        } else if(constVariables.password.value !== constVariables.passwordConfirmation.value) {
            //if the field doesn't contain only letters display the following error message
            constVariables.confirmationError.textContent = 'The passwords must be the same.';
        }
        constVariables.confirmationError.className = 'error active';
    }

    constVariables.passwordConfirmation.addEventListener('input', ()=> {
        //each time the user types something, we check if the form fields are valid
        if(constVariables.password.value == constVariables.passwordConfirmation.value) {
            //if the field is valid, we remove error message
            constVariables.confirmationError.textContent = '';
            constVariables.confirmationError.className = 'error';
            activeError = false;
        } else {
            //if there is still an error, show the correct error
            showPasswordConfirmationErrors();
            activeError = true;
        }
    });

    function clearForm() {
        document.forms[0].reset();
        activeError = false;
        for(let  i = 0; i < constVariables.spanElements.length; i++){
            if(constVariables.spanElements[i].className == 'error active' && constVariables.spanElements[i].textContent != '') {
                constVariables.spanElements[i].className = 'error';
                constVariables.spanElements[i].textContent = '';
            }
        }
    }

    constVariables.clearButton.addEventListener('click', () => {
        clearForm();
    });

    
    constVariables.confirmButton.addEventListener('click', () => {
        let formData = {
            email: constVariables.email.value,
            country: constVariables.country.value,
            zipCode: constVariables.zip.value,
            password: constVariables.password.value,
            passwordConfirmation: constVariables.passwordConfirmation.value,
        }
        //if there is no empty fields or active errors push data in form storage and reset the form inputs
        if(formData.email != '' &&
            formData.country != '' &&
                formData.password != '' &&
                    formData.passwordConfirmation != '' &&
                        activeError == false) {
            
            formData.email = constVariables.email.value;
            formData.country = constVariables.country.value;
            formData.zipCode = constVariables.zip.value;
            formData.password = constVariables.password.value;
            formData.passwordConfirmation = constVariables.passwordConfirmation.value;
            
            formStorage.push(formData);
            
            clearForm();
            localStorage.setItem('MyFormData', JSON.stringify(formStorage)); 
            
        } else {
            showEmailErrors();
            showCountryErrors();
            showZipErrors();
            showPasswordErrors();
            showPasswordConfirmationErrors();
        }
    });
   
})();

