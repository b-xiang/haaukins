webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scoreboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Scoreboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TeamRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamRow.vue */ \"./src/components/TeamRow.vue\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'scoreboard',\n  created: function created() {\n    var url = new URL('/scores', window.location.href);\n    url.protocol = url.protocol.replace('http', 'ws');\n    var socket = new WebSocket(url.href);\n\n    socket.onmessage = function (msg) {\n      // eslint-disable-next-line\n      console.log(JSON.parse(msg.data));\n    };\n  },\n  components: {\n    TeamRow: _TeamRow_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU2NvcmVib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Njb3JlYm9hcmQudnVlP2U3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRhYmxlIGNsYXNzPVwidGFibGUgY2VudGVyYm94IGlzLXN0cmlwZWRcIj5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD48L3RoPlxuICAgICAgPHRoPlRlYW08L3RoPlxuICAgICAgPHRoPjxhYmJyIHRpdGxlPVwiSGVhcnRibGVlZFwiPkhCPC9hYmJyPjwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICAgIDx0ZWFtLXJvdyA6cG9zPVwiMVwiPjwvdGVhbS1yb3c+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUZWFtUm93IGZyb20gJy4vVGVhbVJvdy52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3Njb3JlYm9hcmQnLFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdXJsID0gbmV3IFVSTCgnL3Njb3JlcycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB1cmwucHJvdG9jb2wgPSB1cmwucHJvdG9jb2wucmVwbGFjZSgnaHR0cCcsICd3cycpO1xuXG4gICAgdmFyIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsLmhyZWYpXG4gICAgc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKG1zZykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG1zZy5kYXRhKSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVGVhbVJvdyxcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBWkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scoreboard.vue?vue&type=script&lang=js&\n");

/***/ })

})