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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Store_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Store/Auth */ \"./Store/Auth.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/allCss.module.css */ \"./styles/allCss.module.css\");\n/* harmony import */ var _styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Store_Auth__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__, react_redux__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__]);\n([_Store_Auth__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__, react_redux__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst LogIn = ()=>{\n    let logInEmail = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let logInPassWord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useStore)();\n    const isLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.auth.isLoggedIn);\n    if (isLoggedIn === true) {\n        if (false) {}\n    }\n    let submitHandler = async (event)=>{\n        try {\n            event.preventDefault();\n            const email = logInEmail.current.value;\n            const password = logInPassWord.current.value;\n            if (email.trim() === \"\" || password.trim === \"\") {\n                alert(\"Put proper details\");\n            } else {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(`${window.location.origin}/app/logIn`, {\n                    email: email,\n                    password: password\n                });\n                localStorage.setItem(\"id\", response.data.id);\n                localStorage.setItem(\"token\", response.data.token);\n                store.dispatch(_Store_Auth__WEBPACK_IMPORTED_MODULE_5__.authActions.logIn());\n                if (false) {}\n                logInEmail.current.value = \"\";\n                logInPassword.current.value = \"\";\n            }\n        } catch (error) {\n            alert(error.response.data.message);\n        }\n    };\n    const [showPassword, setShowPassWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleShowPassword = ()=>{\n        setShowPassWord(!showPassword);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"vh-100 d-flex justify-content-center align-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: `${(_styles_allCss_module_css__WEBPACK_IMPORTED_MODULE_10___default().logInBox)} border border-black border-5 rounded-4`,\n            onSubmit: submitHandler,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {\n                    className: \"mb-3\",\n                    controlId: \"formBasicEmail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {\n                            type: \"email\",\n                            placeholder: \"Enter email\",\n                            ref: logInEmail\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Text), {\n                            className: \"text-muted\",\n                            children: \"We'll never share your email with anyone else.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {\n                    className: \"mb-3\",\n                    controlId: \"formBasicPassword\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {\n                            type: showPassword ? \"text\" : \"password\",\n                            placeholder: \"Password\",\n                            ref: logInPassWord\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: handleShowPassword,\n                            children: showPassword ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEye\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEyeSlash\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 64\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex justify-content-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            variant: \"primary\",\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"./SignIn\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Not have account || Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\LogIn.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0NBSXhDLDhEQUFDckQsa0RBQUlBOzRCQUFDbUIsTUFBSztzQ0FDVCw0RUFBQzBDOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7QUFFQSxpRUFBZW5ELEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9wYWdlcy9Mb2dJbi5qc3g/YmRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gJ0AvU3RvcmUvQXV0aCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0b3JlLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYWxsQ3NzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhUmlnaHRGcm9tQnJhY2tldCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhRXllIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFFeWVTbGFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBMb2dJbiA9ICgpID0+IHtcclxuXHJcbiAgbGV0IGxvZ0luRW1haWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGxvZ0luUGFzc1dvcmQgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xyXG5cclxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzTG9nZ2VkSW4pXHJcbiAgXHJcbiAgaWYgKGlzTG9nZ2VkSW4gPT09IHRydWUpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZW1haWwgPSBsb2dJbkVtYWlsLmN1cnJlbnQudmFsdWVcclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBsb2dJblBhc3NXb3JkLmN1cnJlbnQudmFsdWVcclxuXHJcbiAgICAgIGlmIChlbWFpbC50cmltKCkgPT09ICcnIHx8IHBhc3N3b3JkLnRyaW0gPT09ICcnKSB7XHJcbiAgICAgICAgYWxlcnQoJ1B1dCBwcm9wZXIgZGV0YWlscycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwcC9sb2dJbmAsIHtcclxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzcG9uc2UuZGF0YS5pZClcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKVxyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ0luKCkpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL0JvZHknXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ0luRW1haWwuY3VycmVudC52YWx1ZSA9ICcnXHJcbiAgICAgICAgbG9nSW5QYXNzd29yZC5jdXJyZW50LnZhbHVlID0gJydcclxuXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc1dvcmRdID0gdXNlU3RhdGUoKVxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVNob3dQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzV29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd2aC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgPEZvcm0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubG9nSW5Cb3h9IGJvcmRlciBib3JkZXItYmxhY2sgYm9yZGVyLTUgcm91bmRlZC00YH0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4gICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgYWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlZj17bG9nSW5FbWFpbH0gLz5cclxuICAgICAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICBXZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuXHJcbiAgICAgICAgICA8L0Zvcm0uVGV4dD5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZWY9e2xvZ0luUGFzc1dvcmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlU2hvd1Bhc3N3b3JkfT5cclxuICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IC8+IDogPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZVNsYXNofSAvPn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy4vU2lnbkluJz5cclxuICAgICAgICAgICAgPHA+Tm90IGhhdmUgYWNjb3VudCB8fCBTaWduIEluPC9wPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ0luIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJCdXR0b24iLCJGb3JtIiwiTGluayIsImF1dGhBY3Rpb25zIiwiYXhpb3MiLCJ1c2VTdG9yZSIsInVzZVNlbGVjdG9yIiwic3R5bGVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFSaWdodEZyb21CcmFja2V0IiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiTG9nSW4iLCJsb2dJbkVtYWlsIiwibG9nSW5QYXNzV29yZCIsInN0b3JlIiwiaXNMb2dnZWRJbiIsInN0YXRlIiwiYXV0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsInRyaW0iLCJhbGVydCIsInJlc3BvbnNlIiwicG9zdCIsIm9yaWdpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiaWQiLCJ0b2tlbiIsImRpc3BhdGNoIiwibG9nSW4iLCJsb2dJblBhc3N3b3JkIiwiZXJyb3IiLCJtZXNzYWdlIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3NXb3JkIiwiaGFuZGxlU2hvd1Bhc3N3b3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9nSW5Cb3giLCJvblN1Ym1pdCIsIkdyb3VwIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwiVGV4dCIsInNwYW4iLCJvbkNsaWNrIiwiaWNvbiIsInZhcmlhbnQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/LogIn.jsx\n");

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