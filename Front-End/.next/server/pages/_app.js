/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/allCss.module.css":
/*!**********************************!*\
  !*** ./styles/allCss.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"sidebar\": \"allCss_sidebar__Nr1ju\",\n\t\"logInBox\": \"allCss_logInBox__c_jGq\",\n\t\"signInBox\": \"allCss_signInBox__57bwA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvYWxsQ3NzLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3R5bGVzL2FsbENzcy5tb2R1bGUuY3NzPzY4NmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcImFsbENzc19zaWRlYmFyX19OcjFqdVwiLFxuXHRcImxvZ0luQm94XCI6IFwiYWxsQ3NzX2xvZ0luQm94X19jX2pHcVwiLFxuXHRcInNpZ25JbkJveFwiOiBcImFsbENzc19zaWduSW5Cb3hfXzU3YndBXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/allCss.module.css\n");

/***/ }),

/***/ "./Store/Auth.js":
/*!***********************!*\
  !*** ./Store/Auth.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authActions: () => (/* binding */ authActions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState: {\n        isLoggedIn: false\n    },\n    reducers: {\n        logIn (state) {\n            state.isLoggedIn = true;\n        },\n        logOut (state) {\n            state.isLoggedIn = false;\n        }\n    }\n});\nconst authActions = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9BdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQztBQUUvQyxNQUFNQyxZQUFZRCw2REFBV0EsQ0FBQztJQUM1QkUsTUFBTTtJQUNOQyxjQUFjO1FBQUVDLFlBQVk7SUFBTTtJQUNsQ0MsVUFBVTtRQUNSQyxPQUFNQyxLQUFLO1lBQ1RBLE1BQU1ILFVBQVUsR0FBRztRQUNyQjtRQUNBSSxRQUFPRCxLQUFLO1lBQ1ZBLE1BQU1ILFVBQVUsR0FBRztRQUNyQjtJQUNGO0FBQ0Y7QUFFTyxNQUFNSyxjQUFjUixVQUFVUyxPQUFPO0FBQzVDLGlFQUFlVCxVQUFVVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9TdG9yZS9BdXRoLmpzPzhiZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYXV0aCcsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IGlzTG9nZ2VkSW46IGZhbHNlIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ0luKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmlzTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGxvZ091dChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5pc0xvZ2dlZEluID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEFjdGlvbnMgPSBhdXRoU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhdXRoU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsInJlZHVjZXJzIiwibG9nSW4iLCJzdGF0ZSIsImxvZ091dCIsImF1dGhBY3Rpb25zIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Store/Auth.js\n");

/***/ }),

/***/ "./Store/index.js":
/*!************************!*\
  !*** ./Store/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ \"./Store/Auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _Auth__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _Auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        auth: _Auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFDbEI7QUFFaEMsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDM0JHLFNBQVM7UUFDUEMsTUFBT0gsNkNBQVdBO0lBQ3BCO0FBQ0Y7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL1N0b3JlL2luZGV4LmpzP2YwN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9BdXRoJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYXV0aCA6IGF1dGhSZWR1Y2VyLFxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImF1dGhSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Store/index.js\n");

/***/ }),

/***/ "./pages/LogIn.jsx":
/*!*************************!*\
  !*** ./pages/LogIn.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Store_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Store/Auth */ \"./Store/Auth.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/allCss.module.css */ \"./styles/allCss.module.css\");\n/* harmony import */ var _styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Store_Auth__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__, react_redux__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__]);\n([_Store_Auth__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__, react_redux__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst LogIn = ()=>{\n    let logInEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let logInPassWord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useStore)();\n    const isLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.auth.isLoggedIn);\n    if (isLoggedIn === true) {\n        if (false) {}\n    }\n    let submitHandler = async (event)=>{\n        try {\n            event.preventDefault();\n            const email = logInEmail.current.value;\n            const password = logInPassWord.current.value;\n            if (email.trim() === \"\" || password.trim === \"\") {\n                alert(\"Put proper details\");\n            } else {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:5000/app/logIn\", {\n                    email: email,\n                    password: password\n                });\n                localStorage.setItem(\"id\", response.data.id);\n                localStorage.setItem(\"token\", response.data.token);\n                store.dispatch(_Store_Auth__WEBPACK_IMPORTED_MODULE_5__.authActions.logIn());\n                if (false) {}\n                logInEmail.current.value = \"\";\n                logInPassword.current.value = \"\";\n            }\n        } catch (error) {\n            alert(error.response.data.message);\n        }\n    };\n    const [showPassword, setShowPassWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleShowPassword = ()=>{\n        setShowPassWord(!showPassword);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"vh-100 d-flex justify-content-center align-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: `${(_styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10___default().logInBox)} border border-black border-5 rounded-4`,\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {\n                    className: \"mb-3\",\n                    controlId: \"formBasicEmail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {\n                            type: \"email\",\n                            placeholder: \"Enter email\",\n                            ref: logInEmail\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Text), {\n                            className: \"text-muted\",\n                            children: \"We'll never share your email with anyone else.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {\n                    className: \"mb-3\",\n                    controlId: \"formBasicPassword\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {\n                            type: showPassword ? \"text\" : \"password\",\n                            placeholder: \"Password\",\n                            ref: logInPassWord\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: handleShowPassword,\n                            children: showPassword ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEye\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEyeSlash\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 64\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            variant: \"primary\",\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"./SignIn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Not have account || Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ3lDOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7QUFFQSxpRUFBZWxELEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9wYWdlcy9Mb2dJbi5qc3g/YmRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gJ0AvU3RvcmUvQXV0aCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0b3JlLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYWxsQ3NzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhUmlnaHRGcm9tQnJhY2tldCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhRXllIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBMb2dJbiA9ICgpID0+IHtcclxuXHJcbiAgbGV0IGxvZ0luRW1haWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGxvZ0luUGFzc1dvcmQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xyXG5cclxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzTG9nZ2VkSW4pXHJcbiAgXHJcbiAgaWYgKGlzTG9nZ2VkSW4gPT09IHRydWUpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZW1haWwgPSBsb2dJbkVtYWlsLmN1cnJlbnQudmFsdWVcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBsb2dJblBhc3NXb3JkLmN1cnJlbnQudmFsdWVcclxuXHJcbiAgICAgIGlmIChlbWFpbC50cmltKCkgPT09ICcnIHx8IHBhc3N3b3JkLnRyaW0gPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoJ1B1dCBwcm9wZXIgZGV0YWlscycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBwL2xvZ0luJywge1xyXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCByZXNwb25zZS5kYXRhLmlkKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nSW4oKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvQm9keSdcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nSW5FbWFpbC5jdXJyZW50LnZhbHVlID0gJydcclxuICAgICAgICBsb2dJblBhc3N3b3JkLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG5cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzV29yZF0gPSB1c2VTdGF0ZSgpXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlU2hvd1Bhc3N3b3JkID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3NXb3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ZoLTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICA8Rm9ybSBjbGFzc05hbWU9e2Ake3N0eWxlcy5sb2dJbkJveH0gYm9yZGVyIGJvcmRlci1ibGFjayBib3JkZXItNSByb3VuZGVkLTRgfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgcmVmPXtsb2dJbkVtYWlsfSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgIFdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS5cclxuICAgICAgICAgIDwvRm9ybS5UZXh0PlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlZj17bG9nSW5QYXNzV29yZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVTaG93UGFzc3dvcmR9PlxyXG4gICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gLz4gOiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllU2xhc2h9IC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLi9TaWduSW4nPlxyXG4gICAgICAgICAgICA8cD5Ob3QgaGF2ZSBhY2NvdW50IHx8IFNpZ24gSW48L3A+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nSW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkJ1dHRvbiIsIkZvcm0iLCJMaW5rIiwiYXV0aEFjdGlvbnMiLCJheGlvcyIsInVzZVN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYVJpZ2h0RnJvbUJyYWNrZXQiLCJmYUV5ZSIsImZhRXllU2xhc2giLCJMb2dJbiIsImxvZ0luRW1haWwiLCJsb2dJblBhc3NXb3JkIiwic3RvcmUiLCJpc0xvZ2dlZEluIiwic3RhdGUiLCJhdXRoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwidHJpbSIsImFsZXJ0IiwicmVzcG9uc2UiLCJwb3N0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJpZCIsInRva2VuIiwiZGlzcGF0Y2giLCJsb2dJbiIsImxvZ0luUGFzc3dvcmQiLCJlcnJvciIsIm1lc3NhZ2UiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc1dvcmQiLCJoYW5kbGVTaG93UGFzc3dvcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dJbkJveCIsIm9uU3VibWl0IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZWYiLCJUZXh0Iiwic3BhbiIsIm9uQ2xpY2siLCJpY29uIiwidmFyaWFudCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/LogIn.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store */ \"./Store/index.js\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LogIn */ \"./pages/LogIn.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_3__, _Store__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__, _LogIn__WEBPACK_IMPORTED_MODULE_7__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_3__, _Store__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__, _LogIn__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__.config.autoAddCss = false;\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n                store: _Store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2pCO0FBQ1U7QUFDWDtBQUM4QjtBQUNMO0FBQ3pCO0FBQzVCRyxxRUFBTUEsQ0FBQ0UsVUFBVSxHQUFHO0FBRUwsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFBUTs7MEJBQ04sOERBQUNSLGtEQUFJQTs7Ozs7MEJBQ0wsOERBQUNDLGlEQUFRQTtnQkFBQ0MsT0FBT0EsOENBQUtBOzBCQUNwQiw0RUFBQ0s7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUs5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vU3RvcmUnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzJ1xuaW1wb3J0IExvZ0luIGZyb20gJy4vTG9nSW4nO1xuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoPD5cbiAgICA8SGVhZCAvPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgPC9Qcm92aWRlcj5cbiAgICBcbiAgPC8+KTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUHJvdmlkZXIiLCJzdG9yZSIsImNvbmZpZyIsIkxvZ0luIiwiYXV0b0FkZENzcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/bootstrap","vendor-chunks/@fortawesome"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();