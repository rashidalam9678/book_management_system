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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mr.mra/Desktop/mra_codes/Golang/major_projects/book_management_system/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var getCookie = function getCookie(name) {\n    return document.cookie.split(\"; \").reduce(function (r, v) {\n      var parts = v.split(\"=\");\n      return parts[0] === name ? decodeURIComponent(parts[1]) : r;\n    }, \"\");\n  };\n\n  var _useAuthContext = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)(),\n      user = _useAuthContext.user,\n      setUser = _useAuthContext.setUser,\n      setT = _useAuthContext.setT;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var data = getCookie(\"_site_data\");\n\n    if (data !== \"\") {\n      var cookieData = JSON.parse(data); // update store\n\n      user.token = cookieData.token.token;\n      setUser({\n        id: cookieData.user.id,\n        first_name: cookieData.user.first_name,\n        last_name: cookieData.user.last_name,\n        email: cookieData.user.email\n      });\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Book Management System\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().LandingPage),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: \"/assets/landing_page.jpeg\",\n        layout: \"responsive\",\n        alt: \"landing image\",\n        width: 100,\n        height: 60\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"6+ofoUK0DMaEkYqp2TE8KI0PrVw=\", false, function () {\n  return [_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNLLElBQVQsR0FBZ0I7RUFBQTs7RUFFN0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0lBQzFCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJDLE1BQTVCLENBQW1DLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO01BQ2xELElBQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDSCxLQUFGLENBQVEsR0FBUixDQUFkO01BQ0EsT0FBT0ksS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhUCxJQUFiLEdBQW9CUSxrQkFBa0IsQ0FBQ0QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUF0QyxHQUFtREYsQ0FBMUQ7SUFDRCxDQUhNLEVBR0osRUFISSxDQUFQO0VBSUQsQ0FMRDs7RUFNQSxzQkFBNEJSLG9FQUFjLEVBQTFDO0VBQUEsSUFBT1ksSUFBUCxtQkFBT0EsSUFBUDtFQUFBLElBQWFDLE9BQWIsbUJBQWFBLE9BQWI7RUFBQSxJQUFxQkMsSUFBckIsbUJBQXFCQSxJQUFyQjs7RUFFQWYsZ0RBQVMsQ0FBQyxZQUFJO0lBQ1osSUFBSWdCLElBQUksR0FBR2IsU0FBUyxDQUFDLFlBQUQsQ0FBcEI7O0lBRUEsSUFBSWEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7TUFDZixJQUFJQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFYLENBQWpCLENBRGUsQ0FHZjs7TUFDQUgsSUFBSSxDQUFDTyxLQUFMLEdBQWFILFVBQVUsQ0FBQ0csS0FBWCxDQUFpQkEsS0FBOUI7TUFDQU4sT0FBTyxDQUNMO1FBQ0VPLEVBQUUsRUFBRUosVUFBVSxDQUFDSixJQUFYLENBQWdCUSxFQUR0QjtRQUVFQyxVQUFVLEVBQUVMLFVBQVUsQ0FBQ0osSUFBWCxDQUFnQlMsVUFGOUI7UUFHRUMsU0FBUyxFQUFFTixVQUFVLENBQUNKLElBQVgsQ0FBZ0JVLFNBSDdCO1FBSUVDLEtBQUssRUFBRVAsVUFBVSxDQUFDSixJQUFYLENBQWdCVztNQUp6QixDQURLLENBQVA7SUFRRDtFQUNGLENBakJRLEVBaUJQLEVBakJPLENBQVQ7RUFrQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUUxQiwwRUFBaEI7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFFRTtRQUFNLElBQUksRUFBQyxhQUFYO1FBQXlCLE9BQU8sRUFBQztNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFHRTtRQUFNLEdBQUcsRUFBQyxNQUFWO1FBQWlCLElBQUksRUFBQztNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFNRTtNQUFLLFNBQVMsRUFBRUEsNEVBQWhCO01BQUEsdUJBQ0UsOERBQUMsbURBQUQ7UUFDRSxHQUFHLEVBQUMsMkJBRE47UUFFRSxNQUFNLEVBQUMsWUFGVDtRQUdFLEdBQUcsRUFBQyxlQUhOO1FBSUUsS0FBSyxFQUFFLEdBSlQ7UUFLRSxNQUFNLEVBQUU7TUFMVjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQU5GO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBdUJEOztHQW5EdUJJO1VBUU1EOzs7S0FSTkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKS5yZWR1Y2UoKHIsIHYpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdi5zcGxpdChcIj1cIik7XG4gICAgICByZXR1cm4gcGFydHNbMF0gPT09IG5hbWUgPyBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pIDogcjtcbiAgICB9LCBcIlwiKTtcbiAgfVxuICBjb25zdCB7dXNlciwgc2V0VXNlcixzZXRUfT0gdXNlQXV0aENvbnRleHQoKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBkYXRhID0gZ2V0Q29va2llKFwiX3NpdGVfZGF0YVwiKTtcblxuICAgIGlmIChkYXRhICE9PSBcIlwiKSB7XG4gICAgICBsZXQgY29va2llRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgIC8vIHVwZGF0ZSBzdG9yZVxuICAgICAgdXNlci50b2tlbiA9IGNvb2tpZURhdGEudG9rZW4udG9rZW47XG4gICAgICBzZXRVc2VyKFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGNvb2tpZURhdGEudXNlci5pZCxcbiAgICAgICAgICBmaXJzdF9uYW1lOiBjb29raWVEYXRhLnVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICBsYXN0X25hbWU6IGNvb2tpZURhdGEudXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgZW1haWw6IGNvb2tpZURhdGEudXNlci5lbWFpbCxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJvb2sgTWFuYWdlbWVudCBTeXN0ZW08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGFuZGluZ1BhZ2V9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9Jy9hc3NldHMvbGFuZGluZ19wYWdlLmpwZWcnXG4gICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xuICAgICAgICAgIGFsdD0nbGFuZGluZyBpbWFnZSdcbiAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgIC8+XG5cblxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoQ29udGV4dCIsIkhvbWUiLCJnZXRDb29raWUiLCJuYW1lIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInJlZHVjZSIsInIiLCJ2IiwicGFydHMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ1c2VyIiwic2V0VXNlciIsInNldFQiLCJkYXRhIiwiY29va2llRGF0YSIsIkpTT04iLCJwYXJzZSIsInRva2VuIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJjb250YWluZXIiLCJMYW5kaW5nUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});