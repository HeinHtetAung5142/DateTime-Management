"use strict";
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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// ts-ignore 7017 is used to ignore the error that the global object is not\n// defined in the global scope. This is because the global object is only\n// defined in the global scope in Node.js and not in the browser.\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwyRUFBMkU7QUFDM0UseUVBQXlFO0FBQ3pFLGlFQUFpRTtBQUVuQjtBQUU5Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRixjQUFjO0FBQ2QsZ0RBQWdEO0FBRWhELE1BQU1DLGtCQUFrQkM7QUFFakIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUc7QUFFbkUsSUFBSUksSUFBcUMsRUFBRUgsZ0JBQWdCRSxNQUFNLEdBQUdBO0FBRXBFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRzLWlnbm9yZSA3MDE3IGlzIHVzZWQgdG8gaWdub3JlIHRoZSBlcnJvciB0aGF0IHRoZSBnbG9iYWwgb2JqZWN0IGlzIG5vdFxyXG4vLyBkZWZpbmVkIGluIHRoZSBnbG9iYWwgc2NvcGUuIFRoaXMgaXMgYmVjYXVzZSB0aGUgZ2xvYmFsIG9iamVjdCBpcyBvbmx5XHJcbi8vIGRlZmluZWQgaW4gdGhlIGdsb2JhbCBzY29wZSBpbiBOb2RlLmpzIGFuZCBub3QgaW4gdGhlIGJyb3dzZXIuXHJcblxyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcclxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXHJcbi8vXHJcbi8vIExlYXJuIG1vcmU6XHJcbi8vIGh0dHBzOi8vcHJpcy5seS9kL2hlbHAvbmV4dC1qcy1iZXN0LXByYWN0aWNlc1xyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const todos = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.findMany({\n            orderBy: {\n                id: \"desc\"\n            }\n        });\n        res.status(200).json(todos);\n    } else if (req.method === \"POST\") {\n        const { name , started_at , ended_at  } = req.body;\n        const createTodo = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.create({\n            data: {\n                name,\n                started_at,\n                ended_at\n            }\n        });\n        res.status(201).json(createTodo);\n    } else if (req.method === \"DELETE\") {\n        const id = req.body.id;\n        const deleteTodo = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos[\"delete\"]({\n            where: {\n                id\n            }\n        });\n        res.status(204).end();\n    } else {\n        res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFFdkM7QUFFdkIsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLFFBQVEsTUFBTUwsa0VBQXFCLENBQUM7WUFDeENPLFNBQVM7Z0JBQUVDLElBQUk7WUFBTztRQUN4QjtRQUNBTCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtJQUN2QixPQUFPLElBQUlILElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLE1BQU0sRUFBRU8sS0FBSSxFQUFFQyxXQUFVLEVBQUVDLFNBQVEsRUFBRSxHQUFHWCxJQUFJWSxJQUFJO1FBQy9DLE1BQU1DLGFBQWEsTUFBTWYsZ0VBQW1CLENBQUM7WUFDM0NpQixNQUFNO2dCQUNKTjtnQkFDQUM7Z0JBQ0FDO1lBQ0Y7UUFDRjtRQUNBVixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSztJQUN2QixPQUFPLElBQUliLElBQUlFLE1BQU0sS0FBSyxVQUFVO1FBQ2xDLE1BQU1JLEtBQUtOLElBQUlZLElBQUksQ0FBQ04sRUFBRTtRQUN0QixNQUFNVSxhQUFhLE1BQU1sQixtRUFBbUIsQ0FBQztZQUMzQ29CLE9BQU87Z0JBQ0xaO1lBQ0Y7UUFDRjtRQUNBTCxJQUFJTSxNQUFNLENBQUMsS0FBS1ksR0FBRztJQUNyQixPQUFPO1FBQ0xsQixJQUFJTSxNQUFNLENBQUMsS0FBS1ksR0FBRztJQUNyQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS90b2Rvcy50cz9kYjg1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgdG9kb3MgPSBhd2FpdCBwcmlzbWEudG9kb3MuZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBpZDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0b2Rvcyk7XG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IG5hbWUsIHN0YXJ0ZWRfYXQsIGVuZGVkX2F0IH0gPSByZXEuYm9keTtcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gYXdhaXQgcHJpc21hLnRvZG9zLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXJ0ZWRfYXQsXG4gICAgICAgIGVuZGVkX2F0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihjcmVhdGVUb2RvKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gICAgY29uc3QgaWQgPSByZXEuYm9keS5pZDtcbiAgICBjb25zdCBkZWxldGVUb2RvID0gYXdhaXQgcHJpc21hLnRvZG9zLmRlbGV0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvcyIsImZpbmRNYW55Iiwib3JkZXJCeSIsImlkIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJzdGFydGVkX2F0IiwiZW5kZWRfYXQiLCJib2R5IiwiY3JlYXRlVG9kbyIsImNyZWF0ZSIsImRhdGEiLCJkZWxldGVUb2RvIiwiZGVsZXRlIiwid2hlcmUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();