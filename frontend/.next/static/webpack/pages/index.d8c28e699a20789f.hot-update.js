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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mr.mra/Desktop/mra_codes/Golang/major_projects/book_management_system/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var getCookie = function getCookie(name) {\n    return document.cookie.split(\"; \").reduce(function (r, v) {\n      var parts = v.split(\"=\");\n      return parts[0] === name ? decodeURIComponent(parts[1]) : r;\n    }, \"\");\n  };\n\n  var _useAuthContext = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)(),\n      user = _useAuthContext.user,\n      setUser = _useAuthContext.setUser,\n      setToken = _useAuthContext.setToken;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var data = getCookie(\"_site_data\");\n\n    if (data !== \"\") {\n      var cookieData = JSON.parse(data); // update store\n\n      set = cookieData.token.token;\n      setUser({\n        id: cookieData.user.id,\n        first_name: cookieData.user.first_name,\n        last_name: cookieData.user.last_name,\n        email: cookieData.user.email\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Book Management System\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().LandingPage),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: \"/assets/landing_page.jpeg\",\n        layout: \"responsive\",\n        alt: \"landing image\",\n        width: 100,\n        height: 60\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"8hv7/3WTxoAF6MpU2Mtn70KRP5w=\", false, function () {\n  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNLLElBQVQsR0FBZ0I7RUFBQTs7RUFFN0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0lBQzFCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJDLE1BQTVCLENBQW1DLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO01BQ2xELElBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDSCxLQUFGLENBQVEsR0FBUixDQUFkO01BQ0EsT0FBT0ksS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhUCxJQUFiLEdBQW9CUSxrQkFBa0IsQ0FBQ0QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUF0QyxHQUFtREYsQ0FBMUQ7SUFDRCxDQUhNLEVBR0osRUFISSxDQUFQO0VBSUQsQ0FMRDs7RUFNQSxzQkFBZ0NSLG9FQUFjLEVBQTlDO0VBQUEsSUFBT1ksSUFBUCxtQkFBT0EsSUFBUDtFQUFBLElBQWFDLE9BQWIsbUJBQWFBLE9BQWI7RUFBQSxJQUFxQkMsUUFBckIsbUJBQXFCQSxRQUFyQjs7RUFFQWYsZ0RBQVMsQ0FBQyxZQUFJO0lBQ1osSUFBSWdCLElBQUksR0FBR2IsU0FBUyxDQUFDLFlBQUQsQ0FBcEI7O0lBRUEsSUFBSWEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7TUFDZixJQUFJQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQWpCLENBRGUsQ0FHZjs7TUFDQUksR0FBRyxHQUFHSCxVQUFVLENBQUNJLEtBQVgsQ0FBaUJBLEtBQXZCO01BQ0FQLE9BQU8sQ0FDTDtRQUNFUSxFQUFFLEVBQUVMLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQlMsRUFEdEI7UUFFRUMsVUFBVSxFQUFFTixVQUFVLENBQUNKLElBQVgsQ0FBZ0JVLFVBRjlCO1FBR0VDLFNBQVMsRUFBRVAsVUFBVSxDQUFDSixJQUFYLENBQWdCVyxTQUg3QjtRQUlFQyxLQUFLLEVBQUVSLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQlk7TUFKekIsQ0FESyxDQUFQO0lBUUQ7RUFDRixDQWpCUSxFQWlCUCxFQWpCTyxDQUFUO0VBa0JBLG9CQUNFO0lBQUssU0FBUyxFQUFFM0IsMEVBQWhCO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx3QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBTSxJQUFJLEVBQUMsYUFBWDtRQUF5QixPQUFPLEVBQUM7TUFBakM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGLGVBR0U7UUFBTSxHQUFHLEVBQUMsTUFBVjtRQUFpQixJQUFJLEVBQUM7TUFBdEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBTUU7TUFBSyxTQUFTLEVBQUVBLDRFQUFoQjtNQUFBLHVCQUNFLDhEQUFDLG1EQUFEO1FBQ0UsR0FBRyxFQUFDLDJCQUROO1FBRUUsTUFBTSxFQUFDLFlBRlQ7UUFHRSxHQUFHLEVBQUMsZUFITjtRQUlFLEtBQUssRUFBRSxHQUpUO1FBS0UsTUFBTSxFQUFFO01BTFY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFORjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQXVCRDs7R0FuRHVCSTtVQVFVRDs7O0tBUlZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgZ2V0Q29va2llID0gKG5hbWUpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIikucmVkdWNlKChyLCB2KSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHYuc3BsaXQoXCI9XCIpO1xuICAgICAgcmV0dXJuIHBhcnRzWzBdID09PSBuYW1lID8gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKSA6IHI7XG4gICAgfSwgXCJcIik7XG4gIH1cbiAgY29uc3Qge3VzZXIsIHNldFVzZXIsc2V0VG9rZW59PSB1c2VBdXRoQ29udGV4dCgpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgbGV0IGRhdGEgPSBnZXRDb29raWUoXCJfc2l0ZV9kYXRhXCIpO1xuXG4gICAgaWYgKGRhdGEgIT09IFwiXCIpIHtcbiAgICAgIGxldCBjb29raWVEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgLy8gdXBkYXRlIHN0b3JlXG4gICAgICBzZXQgPSBjb29raWVEYXRhLnRva2VuLnRva2VuO1xuICAgICAgc2V0VXNlcihcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBjb29raWVEYXRhLnVzZXIuaWQsXG4gICAgICAgICAgZmlyc3RfbmFtZTogY29va2llRGF0YS51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgbGFzdF9uYW1lOiBjb29raWVEYXRhLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgIGVtYWlsOiBjb29raWVEYXRhLnVzZXIuZW1haWwsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Cb29rIE1hbmFnZW1lbnQgU3lzdGVtPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhbmRpbmdQYWdlfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPScvYXNzZXRzL2xhbmRpbmdfcGFnZS5qcGVnJ1xuICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcbiAgICAgICAgICBhbHQ9J2xhbmRpbmcgaW1hZ2UnXG4gICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAvPlxuXG5cbiAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlQXV0aENvbnRleHQiLCJIb21lIiwiZ2V0Q29va2llIiwibmFtZSIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJyZWR1Y2UiLCJyIiwidiIsInBhcnRzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidXNlciIsInNldFVzZXIiLCJzZXRUb2tlbiIsImRhdGEiLCJjb29raWVEYXRhIiwiSlNPTiIsInBhcnNlIiwic2V0IiwidG9rZW4iLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsImNvbnRhaW5lciIsIkxhbmRpbmdQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});