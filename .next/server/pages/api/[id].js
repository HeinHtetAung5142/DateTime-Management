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
exports.id = "pages/api/[id]";
exports.ids = ["pages/api/[id]"];
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

/***/ "(api)/./pages/api/[id].ts":
/*!***************************!*\
  !*** ./pages/api/[id].ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const todos = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.findMany({\n            orderBy: {\n                id: \"desc\"\n            }\n        });\n        res.status(200).json(todos);\n    } else if (req.method === \"POST\") {\n        const { name , started_at , ended_at  } = req.body;\n        const createTodo = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.create({\n            data: {\n                name,\n                started_at,\n                ended_at\n            }\n        });\n        res.status(201).json(createTodo);\n    } else if (req.method === \"DELETE\") {\n        const id = req.query.id;\n        console.log(id);\n        const deleteTodo = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos[\"delete\"]({\n            where: {\n                id: String(id)\n            }\n        });\n        res.json(deleteTodo);\n    } else {\n        res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUV2QztBQUV2QixlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsUUFBUSxNQUFNTCxrRUFBcUIsQ0FBQztZQUN4Q08sU0FBUztnQkFBRUMsSUFBSTtZQUFPO1FBQ3hCO1FBQ0FMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO0lBQ3ZCLE9BQU8sSUFBSUgsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDaEMsTUFBTSxFQUFFTyxLQUFJLEVBQUVDLFdBQVUsRUFBRUMsU0FBUSxFQUFFLEdBQUdYLElBQUlZLElBQUk7UUFDL0MsTUFBTUMsYUFBYSxNQUFNZixnRUFBbUIsQ0FBQztZQUMzQ2lCLE1BQU07Z0JBQ0pOO2dCQUNBQztnQkFDQUM7WUFDRjtRQUNGO1FBQ0FWLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNLO0lBQ3ZCLE9BQU8sSUFBSWIsSUFBSUUsTUFBTSxLQUFLLFVBQVU7UUFDbEMsTUFBTUksS0FBS04sSUFBSWdCLEtBQUssQ0FBQ1YsRUFBRTtRQUN2QlcsUUFBUUMsR0FBRyxDQUFDWjtRQUNaLE1BQU1hLGFBQWEsTUFBTXJCLG1FQUFtQixDQUFDO1lBQzNDdUIsT0FBTztnQkFDTGYsSUFBSWdCLE9BQU9oQjtZQUNiO1FBQ0Y7UUFDQUwsSUFBSU8sSUFBSSxDQUFDVztJQUNYLE9BQU87UUFDTGxCLElBQUlNLE1BQU0sQ0FBQyxLQUFLZ0IsR0FBRztJQUNyQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9baWRdLnRzPzVkMzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCB0b2RvcyA9IGF3YWl0IHByaXNtYS50b2Rvcy5maW5kTWFueSh7XHJcbiAgICAgIG9yZGVyQnk6IHsgaWQ6IFwiZGVzY1wiIH0sXHJcbiAgICB9KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvZG9zKTtcclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHN0YXJ0ZWRfYXQsIGVuZGVkX2F0IH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSBhd2FpdCBwcmlzbWEudG9kb3MuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc3RhcnRlZF9hdCxcclxuICAgICAgICBlbmRlZF9hdCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oY3JlYXRlVG9kbyk7XHJcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBjb25zdCBpZCA9IHJlcS5xdWVyeS5pZDtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBhd2FpdCBwcmlzbWEudG9kb3MuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogU3RyaW5nKGlkKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24oZGVsZXRlVG9kbyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvcyIsImZpbmRNYW55Iiwib3JkZXJCeSIsImlkIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJzdGFydGVkX2F0IiwiZW5kZWRfYXQiLCJib2R5IiwiY3JlYXRlVG9kbyIsImNyZWF0ZSIsImRhdGEiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVUb2RvIiwiZGVsZXRlIiwid2hlcmUiLCJTdHJpbmciLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[id].ts"));
module.exports = __webpack_exports__;

})();