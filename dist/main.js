/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createHeader () {\r\nconst contentDiv = document.getElementsByClassName('content');\r\nconst headerDiv = document.createElement('div');\r\nconst options = document.createElement('ul');\r\nconst home = document.createElement('button');\r\nconst menu = document.createElement('button');\r\nconst contactUs = document.createElement('button');\r\n\r\nhome.textContent = 'Home';\r\nmenu.textContent = 'Menu';\r\ncontactUs.textContent = 'Contant us';\r\n\r\noptions.appendChild(home);\r\noptions.appendChild(menu);\r\noptions.appendChild(contactUs)\r\nheaderDiv.appendChild(options);\r\ncontentDiv[0].appendChild(headerDiv);\r\n}\r\n\r\ncreateHeader();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;