/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0019-exercicio/A0019-exercicio.ts":
/*!************************************************!*\
  !*** ./src/A0019-exercicio/A0019-exercicio.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const form_control_1 = __importDefault(__webpack_require__(/*! ./form-control */ "./src/A0019-exercicio/form-control.ts"));
new form_control_1.default();


/***/ }),

/***/ "./src/A0019-exercicio/form-control.ts":
/*!*********************************************!*\
  !*** ./src/A0019-exercicio/form-control.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class FormControl {
    constructor() {
        this.form = document.querySelector('#form');
        this.formFields = document.querySelectorAll('#form-fields');
        this.errorMessage = document.querySelectorAll('#error-message');
        this.inputUsername = document.querySelector('#username');
        this.inputEmail = document.querySelector('#email');
        this.inputPassword = document.querySelector('#password');
        this.inputConfirmPassword = document.querySelector('#password2');
        this.listen();
    }
    listen() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e) {
        console.log('Validando...');
    }
}
exports["default"] = FormControl;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/A0019-exercicio/A0019-exercicio.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map