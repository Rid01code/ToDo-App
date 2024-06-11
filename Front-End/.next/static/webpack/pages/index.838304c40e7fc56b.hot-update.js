"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Body.jsx":
/*!************************!*\
  !*** ./pages/Body.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/context */ \"./Context/context.jsx\");\n/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Input */ \"./pages/Components/Input.jsx\");\n/* harmony import */ var _Components_ToDo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/ToDo */ \"./pages/Components/ToDo.jsx\");\n/* harmony import */ var _Components_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Message */ \"./pages/Components/Message.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Store_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Store/Auth */ \"./Store/Auth.js\");\n/* harmony import */ var _Components_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Sidebar */ \"./pages/Components/Sidebar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Body = ()=>{\n    _s();\n    const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useStore)();\n    const isLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.auth.isLoggedIn);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && localStorage.getItem(\"id\") && localStorage.getItem(\"token\")) {\n            store.dispatch(_Store_Auth__WEBPACK_IMPORTED_MODULE_6__.authActions.logIn());\n        } else if (!isLoggedIn) {\n            if (true) {\n                window.location.href = \"/SignIn\";\n            }\n        }\n    }, []);\n    let [myToDo, setMyToDo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            task: \"\",\n            date: \"\"\n        }\n    ]);\n    let id = null;\n    let token = null;\n    if (true) {\n        id = localStorage.getItem(\"id\");\n        token = localStorage.getItem(\"token\");\n    }\n    const headers = {\n        id,\n        authorization: \"Bearer \".concat(token)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetch = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"https://to-do-api-seven.vercel.app/app/task/get\", {\n                    headers\n                });\n                setMyToDo(response.data.data.tasks);\n            } catch (error) {\n                alert(\"Internal Server Error\");\n            }\n        };\n        fetch();\n    }, [\n        myToDo\n    ]);\n    let deleteItem = async (id)=>{\n        try {\n            event.preventDefault();\n            const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"][\"delete\"](\"https://to-do-api-seven.vercel.app/app/task/delete/\".concat(id), {\n                headers\n            });\n            alert(response.data.message);\n        } catch (error) {\n            alert(error.response.data.message);\n        }\n    };\n    let finishItem = async (id)=>{\n        try {\n            // event.preventDefault()\n            const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"https://to-do-api-seven.vercel.app/task/finish/\".concat(id), {}, {\n                headers\n            });\n            alert(response.data.message);\n        } catch (error) {\n            alert(error.response.data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_context__WEBPACK_IMPORTED_MODULE_2__.toDoContext.Provider, {\n        value: {\n            myToDo,\n            setMyToDo,\n            deleteItem,\n            finishItem\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex flex-column p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center\",\n                    children: \"Task Management App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"d-flex  w-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Sidebar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 40\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 51\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                myToDo.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Message__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 32\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_ToDo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 46\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\itsri\\\\Desktop\\\\Web Development Projects\\\\to-do-app\\\\Front-End\\\\pages\\\\Body.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Body, \"Mo8imJb2R4xxKVCOgmhYHpraAek=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useStore,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector\n    ];\n});\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3BhZ2VzL0JvZHkuanN4P2FkODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvRG9Db250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9jb250ZXh0JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vQ29tcG9uZW50cy9JbnB1dCc7XHJcbmltcG9ydCBUb0RvIGZyb20gJy4vQ29tcG9uZW50cy9Ub0RvJztcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9Db21wb25lbnRzL01lc3NhZ2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciAsIHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gJ0AvU3RvcmUvQXV0aCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vQ29tcG9uZW50cy9TaWRlYmFyJztcclxuXHJcbmNvbnN0IEJvZHkgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxyXG5cclxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzTG9nZ2VkSW4pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcclxuICAgICAgc3RvcmUuZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9nSW4oKSlcclxuICAgIH0gZWxzZSBpZiAoIWlzTG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL1NpZ25JbidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGxldCBbbXlUb0RvLCBzZXRNeVRvRG9dID0gdXNlU3RhdGUoW3sgdGFzazogJycsIGRhdGU6ICcnIH1dKTtcclxuICBsZXQgaWQgPSBudWxsO1xyXG4gIGxldCB0b2tlbiA9IG51bGw7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgaWQsXHJcbiAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICAnaHR0cHM6Ly90by1kby1hcGktc2V2ZW4udmVyY2VsLmFwcC9hcHAvdGFzay9nZXQnLCB7IGhlYWRlcnMgfVxyXG4gICAgICAgIClcclxuICAgICAgICBzZXRNeVRvRG8ocmVzcG9uc2UuZGF0YS5kYXRhLnRhc2tzKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaCgpXHJcbiAgfSwgW215VG9Eb10pO1xyXG5cclxuXHJcbiAgbGV0IGRlbGV0ZUl0ZW0gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vdG8tZG8tYXBpLXNldmVuLnZlcmNlbC5hcHAvYXBwL3Rhc2svZGVsZXRlLyR7aWR9YCwgeyBoZWFkZXJzIH0pXHJcbiAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgbGV0IGZpbmlzaEl0ZW0gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYGh0dHBzOi8vdG8tZG8tYXBpLXNldmVuLnZlcmNlbC5hcHAvdGFzay9maW5pc2gvJHtpZH1gLCB7fSwgeyBoZWFkZXJzIH0pXHJcbiAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRvRG9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG15VG9Ebywgc2V0TXlUb0RvLCBkZWxldGVJdGVtLCBmaW5pc2hJdGVtIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIHAtMic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlRhc2sgTWFuYWdlbWVudCBBcHA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggIHctMTAwJz48U2lkZWJhciAvPjxJbnB1dCAvPjwvZGl2PlxyXG4gICAgICAgIHtteVRvRG8ubGVuZ3RoID09PSAwID8gPE1lc3NhZ2UgLz4gOiA8VG9EbyAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RvRG9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgXHJcbiAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvRG9Db250ZXh0IiwiSW5wdXQiLCJUb0RvIiwiTWVzc2FnZSIsImF4aW9zIiwidXNlU2VsZWN0b3IiLCJ1c2VTdG9yZSIsImF1dGhBY3Rpb25zIiwiU2lkZWJhciIsIkJvZHkiLCJzdG9yZSIsImlzTG9nZ2VkSW4iLCJzdGF0ZSIsImF1dGgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzcGF0Y2giLCJsb2dJbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm15VG9EbyIsInNldE15VG9EbyIsInRhc2siLCJkYXRlIiwiaWQiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZmV0Y2giLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJ0YXNrcyIsImVycm9yIiwiYWxlcnQiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbGV0ZSIsIm1lc3NhZ2UiLCJmaW5pc2hJdGVtIiwicHV0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Body.jsx\n"));

/***/ })

});