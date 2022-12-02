/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0035-exercicio-video/index.ts":
/*!********************************************!*\
  !*** ./src/A0035-exercicio-video/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.video');
        this.playButton = document.querySelector('.play');
        this.stopButton = document.querySelector('.stop');
        this.prevButton5 = document.querySelector('.rr5');
        this.forwardButton5 = document.querySelector('.ff5');
        this.prevButton10 = document.querySelector('.rr10');
        this.forwardButton10 = document.querySelector('.ff10');
    }
    init() {
        this.listen();
    }
    listen() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
        this.prevButton5.addEventListener('click', () => {
            this.prev(5);
        });
        this.forwardButton5.addEventListener('click', () => {
            this.forward(5);
        });
        this.prevButton10.addEventListener('click', () => {
            this.prev(10);
        });
        this.forwardButton10.addEventListener('click', () => {
            this.forward(10);
        });
    }
    playToggle() {
        if (this.player.paused) {
            this.player.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.player.pause();
            this.playButton.innerText = 'Play';
        }
    }
    stop() {
        this.player.pause();
        this.player.currentTime = 0;
        this.playButton.innerText = 'Play';
    }
    prev(seconds) {
        this.player.currentTime = this.player.currentTime -= seconds;
        if (this.player.paused)
            this.player.play();
    }
    forward(seconds) {
        this.player.currentTime = this.player.currentTime += seconds;
        if (this.player.paused)
            this.player.play();
    }
}
exports["default"] = VideoPlayer;
const player = new VideoPlayer();
player.init();


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/A0019-exercicio/A0019-exercicio.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../A0035-exercicio-video/index */ "./src/A0035-exercicio-video/index.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map