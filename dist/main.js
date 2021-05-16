/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constVariables.js":
/*!*******************************!*\
  !*** ./src/constVariables.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"confirmButton\": () => (/* binding */ confirmButton),\n/* harmony export */   \"clearButton\": () => (/* binding */ clearButton),\n/* harmony export */   \"email\": () => (/* binding */ email),\n/* harmony export */   \"emailError\": () => (/* binding */ emailError),\n/* harmony export */   \"country\": () => (/* binding */ country),\n/* harmony export */   \"countryError\": () => (/* binding */ countryError),\n/* harmony export */   \"zip\": () => (/* binding */ zip),\n/* harmony export */   \"zipError\": () => (/* binding */ zipError),\n/* harmony export */   \"password\": () => (/* binding */ password),\n/* harmony export */   \"passwordError\": () => (/* binding */ passwordError),\n/* harmony export */   \"passwordConfirmation\": () => (/* binding */ passwordConfirmation),\n/* harmony export */   \"confirmationError\": () => (/* binding */ confirmationError),\n/* harmony export */   \"spanElements\": () => (/* binding */ spanElements),\n/* harmony export */   \"inputElements\": () => (/* binding */ inputElements)\n/* harmony export */ });\nconst confirmButton = document.getElementsByClassName('confirm')[0];\nconst clearButton = document.getElementsByClassName('clear')[0];\nconst email = document.getElementById('email');\nconst emailError = document.getElementById('email-error');\nconst country = document.getElementById('country');\nconst countryError = document.getElementById('country-error');\nconst zip = document.getElementById('zip');\nconst zipError = document.getElementById('zip-error');\nconst password = document.getElementById('password');\nconst passwordError = document.getElementById('password-error');\nconst passwordConfirmation = document.getElementById('password-confirmation');\nconst confirmationError = document.getElementById('confirmation-error');\nconst spanElements = document.getElementsByTagName('span');\nconst inputElements = document.getElementsByTagName('input');\n\n\n\n//# sourceURL=webpack://form-validation/./src/constVariables.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constVariables */ \"./src/constVariables.js\");\n\n\nlet activeError = false;\nlet formStorage = [];\n\nvar addData = (() => {\n\n    //email field validation\n    function showEmailErrors() {\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valueMissing) {\n            //if the field is empty display the following error message.\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = 'You need to enter an e-mail address.';\n        } else if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.email.validity.typeMismatch){\n            //if the field doesn't contain an email address display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = 'Entered value needs to be an e-mail address.'\n        }\n        _constVariables__WEBPACK_IMPORTED_MODULE_0__.emailError.className = 'error active';\n    }\n\n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.email.addEventListener('input', ()=> {\n        //each time the user types something, we check if the form fields are valid\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valid) {\n            //if the field is valid, we remove error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = '';\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.emailError.className = 'error';\n            activeError = false;\n        } else {\n            //if there is still an error, show the correct error\n            showEmailErrors();\n            activeError = true;\n        }\n    });\n\n    //country field validation\n    function showCountryErrors() {\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.country.validity.valueMissing) {\n            //if the field is empty display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.countryError.textContent = 'You need to enter a Country.'\n        } else if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.country.validity.patternMismatch) {\n             //if the field doesn't contain only letters display the following error message\n             _constVariables__WEBPACK_IMPORTED_MODULE_0__.countryError.textContent = 'Entered value needs to be only letters.';\n        }\n        _constVariables__WEBPACK_IMPORTED_MODULE_0__.countryError.className = 'error active';\n    }\n\n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.country.addEventListener('input', ()=> {\n        //each time the user types something, we check if the form fields are valid\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.country.validity.valid) {\n            //if the field is valid, we remove error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.countryError.textContent = '';\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.countryError.className = 'error';\n            activeError = false;\n        } else {\n            //if there is still an error, show the correct error\n            showCountryErrors();\n            activeError = true;\n        }\n    });\n\n    //zip code field validation\n    function showZipErrors() {\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.zip.validity.valueMissing) {\n            //if the field is empty display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.zipError.textContent = 'You need to enter a Zip Code.'\n        } else if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.zip.validity.patternMismatch) {\n            //if the field doesn't contain only letters display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.zipError.textContent = 'Entered value needs to be only numbers.';\n        }\n        _constVariables__WEBPACK_IMPORTED_MODULE_0__.zipError.className = 'error active';\n    }\n\n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.zip.addEventListener('input', ()=> {\n        //each time the user types something, we check if the form fields are valid\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.zip.validity.valid) {\n            //if the field is valid, we remove error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.zipError.textContent = '';\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.zipError.className = 'error';\n            activeError = false;\n        } else {\n            //if there is still an error, show the correct error\n            showZipErrors();\n            activeError = true;\n        }\n    });\n\n    //password field validation\n    function showPasswordErrors() {\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.password.validity.valueMissing) {\n            //if the field is empty display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordError.textContent = 'You need to set a password.'\n        } else if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.password.validity.patternMismatch) {\n            //if the field doesn't contain only letters display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordError.textContent = 'Must contain at least one number, one uppercase and one lowercase letters, one symbol. ';\n        }\n        _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordError.className = 'error active';\n    }\n\n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.password.addEventListener('input', ()=> {\n        //each time the user types something, we check if the form fields are valid\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.password.validity.valid) {\n            //if the field is valid, we remove error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordError.textContent = '';\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordError.className = 'error';\n            activeError = false;\n        } else {\n            //if there is still an error, show the correct error\n            showPasswordErrors();\n            activeError = true;\n        }\n    });\n\n    //password confirmation field validation\n    function showPasswordConfirmationErrors() {\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmation.validity.valueMissing) {\n            //if the field is empty display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.confirmationError.textContent = 'You need to enter the same password again.';\n        } else if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.password.value !== _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmation.value) {\n            //if the field doesn't contain only letters display the following error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.confirmationError.textContent = 'The passwords must be the same.';\n        }\n        _constVariables__WEBPACK_IMPORTED_MODULE_0__.confirmationError.className = 'error active';\n    }\n\n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmation.addEventListener('input', ()=> {\n        //each time the user types something, we check if the form fields are valid\n        if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.password.value == _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmation.value) {\n            //if the field is valid, we remove error message\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.confirmationError.textContent = '';\n            _constVariables__WEBPACK_IMPORTED_MODULE_0__.confirmationError.className = 'error';\n            activeError = false;\n        } else {\n            //if there is still an error, show the correct error\n            showPasswordConfirmationErrors();\n            activeError = true;\n        }\n    });\n\n    function clearForm() {\n        document.forms[0].reset();\n        activeError = false;\n        for(let  i = 0; i < _constVariables__WEBPACK_IMPORTED_MODULE_0__.spanElements.length; i++){\n            if(_constVariables__WEBPACK_IMPORTED_MODULE_0__.spanElements[i].className == 'error active' && _constVariables__WEBPACK_IMPORTED_MODULE_0__.spanElements[i].textContent != '') {\n                _constVariables__WEBPACK_IMPORTED_MODULE_0__.spanElements[i].className = 'error';\n                _constVariables__WEBPACK_IMPORTED_MODULE_0__.spanElements[i].textContent = '';\n            }\n        }\n    }\n\n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.clearButton.addEventListener('click', () => {\n        clearForm();\n    });\n\n    \n    _constVariables__WEBPACK_IMPORTED_MODULE_0__.confirmButton.addEventListener('click', () => {\n        let formData = {\n            email: _constVariables__WEBPACK_IMPORTED_MODULE_0__.email.value,\n            country: _constVariables__WEBPACK_IMPORTED_MODULE_0__.country.value,\n            zipCode: _constVariables__WEBPACK_IMPORTED_MODULE_0__.zip.value,\n            password: _constVariables__WEBPACK_IMPORTED_MODULE_0__.password.value,\n            passwordConfirmation: _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmation.value,\n        }\n        //if there is no empty fields or active errors push data in form storage and reset the form inputs\n        if(formData.email != '' &&\n            formData.country != '' &&\n                formData.password != '' &&\n                    formData.passwordConfirmation != '' &&\n                        activeError == false) {\n            \n            formData.email = _constVariables__WEBPACK_IMPORTED_MODULE_0__.email.value;\n            formData.country = _constVariables__WEBPACK_IMPORTED_MODULE_0__.country.value;\n            formData.zipCode = _constVariables__WEBPACK_IMPORTED_MODULE_0__.zip.value;\n            formData.password = _constVariables__WEBPACK_IMPORTED_MODULE_0__.password.value;\n            formData.passwordConfirmation = _constVariables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmation.value;\n            \n            formStorage.push(formData);\n            \n            clearForm();\n            localStorage.setItem('MyFormData', JSON.stringify(formStorage)); \n            \n        } else {\n            showEmailErrors();\n            showCountryErrors();\n            showZipErrors();\n            showPasswordErrors();\n            showPasswordConfirmationErrors();\n        }\n    });\n   \n})();\n\n\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;