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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_mr_mra_Desktop_mra_codes_Golang_major_projects_book_management_system_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/mr.mra/Desktop/mra_codes/Golang/major_projects/book_management_system/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var getCookie = function getCookie(name) {\n    return document.cookie.split(\"; \").reduce(function (r, v) {\n      var parts = v.split(\"=\");\n      return parts[0] === name ? decodeURIComponent(parts[1]) : r;\n    }, \"\");\n  };\n\n  var _useAuthContext = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext)(),\n      user = _useAuthContext.user,\n      setUser = _useAuthContext.setUser,\n      setToken = _useAuthContext.setToken;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var data = getCookie(\"_site_data\");\n\n    if (data !== \"\") {\n      var cookieData = JSON.parse(data); // update store\n\n      cookieData.token.token, (0,_Users_mr_mra_Desktop_mra_codes_Golang_major_projects_book_management_system_frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_readOnlyError_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"setToken\");\n      setUser({\n        id: cookieData.user.id,\n        first_name: cookieData.user.first_name,\n        last_name: cookieData.user.last_name,\n        email: cookieData.user.email\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Book Management System\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().LandingPage),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: \"/assets/landing_page.jpeg\",\n        layout: \"responsive\",\n        alt: \"landing image\",\n        width: 100,\n        height: 60\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"8hv7/3WTxoAF6MpU2Mtn70KRP5w=\", false, function () {\n  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuthContext];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNLLElBQVQsR0FBZ0I7RUFBQTs7RUFFN0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0lBQzFCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJDLE1BQTVCLENBQW1DLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO01BQ2xELElBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDSCxLQUFGLENBQVEsR0FBUixDQUFkO01BQ0EsT0FBT0ksS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhUCxJQUFiLEdBQW9CUSxrQkFBa0IsQ0FBQ0QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUF0QyxHQUFtREYsQ0FBMUQ7SUFDRCxDQUhNLEVBR0osRUFISSxDQUFQO0VBSUQsQ0FMRDs7RUFNQSxzQkFBZ0NSLG9FQUFjLEVBQTlDO0VBQUEsSUFBT1ksSUFBUCxtQkFBT0EsSUFBUDtFQUFBLElBQWFDLE9BQWIsbUJBQWFBLE9BQWI7RUFBQSxJQUFxQkMsUUFBckIsbUJBQXFCQSxRQUFyQjs7RUFFQWYsZ0RBQVMsQ0FBQyxZQUFJO0lBQ1osSUFBSWdCLElBQUksR0FBR2IsU0FBUyxDQUFDLFlBQUQsQ0FBcEI7O0lBRUEsSUFBSWEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7TUFDZixJQUFJQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQWpCLENBRGUsQ0FHZjs7TUFDV0MsVUFBVSxDQUFDRyxLQUFYLENBQWlCQSxLQUE1QjtNQUNBTixPQUFPLENBQ0w7UUFDRU8sRUFBRSxFQUFFSixVQUFVLENBQUNKLElBQVgsQ0FBZ0JRLEVBRHRCO1FBRUVDLFVBQVUsRUFBRUwsVUFBVSxDQUFDSixJQUFYLENBQWdCUyxVQUY5QjtRQUdFQyxTQUFTLEVBQUVOLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQlUsU0FIN0I7UUFJRUMsS0FBSyxFQUFFUCxVQUFVLENBQUNKLElBQVgsQ0FBZ0JXO01BSnpCLENBREssQ0FBUDtJQVFEO0VBQ0YsQ0FqQlEsRUFpQlAsRUFqQk8sQ0FBVDtFQWtCQSxvQkFDRTtJQUFLLFNBQVMsRUFBRTFCLDBFQUFoQjtJQUFBLHdCQUNFLDhEQUFDLGtEQUFEO01BQUEsd0JBQ0U7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQU0sSUFBSSxFQUFDLGFBQVg7UUFBeUIsT0FBTyxFQUFDO01BQWpDO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRixlQUdFO1FBQU0sR0FBRyxFQUFDLE1BQVY7UUFBaUIsSUFBSSxFQUFDO01BQXRCO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFIRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQU1FO01BQUssU0FBUyxFQUFFQSw0RUFBaEI7TUFBQSx1QkFDRSw4REFBQyxtREFBRDtRQUNFLEdBQUcsRUFBQywyQkFETjtRQUVFLE1BQU0sRUFBQyxZQUZUO1FBR0UsR0FBRyxFQUFDLGVBSE47UUFJRSxLQUFLLEVBQUUsR0FKVDtRQUtFLE1BQU0sRUFBRTtNQUxWO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUF1QkQ7O0dBbkR1Qkk7VUFRVUQ7OztLQVJWQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpLnJlZHVjZSgociwgdikgPT4ge1xuICAgICAgY29uc3QgcGFydHMgPSB2LnNwbGl0KFwiPVwiKTtcbiAgICAgIHJldHVybiBwYXJ0c1swXSA9PT0gbmFtZSA/IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSkgOiByO1xuICAgIH0sIFwiXCIpO1xuICB9XG4gIGNvbnN0IHt1c2VyLCBzZXRVc2VyLHNldFRva2VufT0gdXNlQXV0aENvbnRleHQoKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBkYXRhID0gZ2V0Q29va2llKFwiX3NpdGVfZGF0YVwiKTtcblxuICAgIGlmIChkYXRhICE9PSBcIlwiKSB7XG4gICAgICBsZXQgY29va2llRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgIC8vIHVwZGF0ZSBzdG9yZVxuICAgICAgc2V0VG9rZW4gPSBjb29raWVEYXRhLnRva2VuLnRva2VuO1xuICAgICAgc2V0VXNlcihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBjb29raWVEYXRhLnVzZXIuaWQsXG4gICAgICAgICAgZmlyc3RfbmFtZTogY29va2llRGF0YS51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgbGFzdF9uYW1lOiBjb29raWVEYXRhLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgIGVtYWlsOiBjb29raWVEYXRhLnVzZXIuZW1haWwsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Cb29rIE1hbmFnZW1lbnQgU3lzdGVtPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhbmRpbmdQYWdlfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPScvYXNzZXRzL2xhbmRpbmdfcGFnZS5qcGVnJ1xuICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcbiAgICAgICAgICBhbHQ9J2xhbmRpbmcgaW1hZ2UnXG4gICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAvPlxuXG5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlQXV0aENvbnRleHQiLCJIb21lIiwiZ2V0Q29va2llIiwibmFtZSIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJyZWR1Y2UiLCJyIiwidiIsInBhcnRzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidXNlciIsInNldFVzZXIiLCJzZXRUb2tlbiIsImRhdGEiLCJjb29raWVEYXRhIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsImNvbnRhaW5lciIsIkxhbmRpbmdQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _readOnlyError; }\n/* harmony export */ });\nfunction _readOnlyError(name) {\n  throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanM/ZTFmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/readOnlyError.js\n"));

/***/ })

});