(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./src/Resources/assets/app.js":
/*!*************************************!*\
  !*** ./src/Resources/assets/app.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./src/Resources/assets/styles/app.css");
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies.js */ "./src/Resources/assets/cookies.js");
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cookies_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_cookies_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/cookies.css */ "./src/Resources/assets/styles/cookies.css");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkmode.js */ "./src/Resources/assets/darkmode.js");
/* harmony import */ var _darkmode_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_darkmode_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hideCheckboxes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hideCheckboxes.js */ "./src/Resources/assets/hideCheckboxes.js");
/* harmony import */ var _hideCheckboxes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hideCheckboxes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.js */ "./src/Resources/assets/form.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _saveWebsiteToCookie_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saveWebsiteToCookie.js */ "./src/Resources/assets/saveWebsiteToCookie.js");
/* harmony import */ var _saveWebsiteToCookie_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_saveWebsiteToCookie_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _countdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countdown.js */ "./src/Resources/assets/countdown.js");
/* harmony import */ var _countdown_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_countdown_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)










/***/ }),

/***/ "./src/Resources/assets/cookies.js":
/*!*****************************************!*\
  !*** ./src/Resources/assets/cookies.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
(function () {
  "use strict";

  var cookieBox = document.querySelector(".wrapper"),
    buttons = document.querySelectorAll(".button");
  var executeCodes = function executeCodes() {
    //if cookie contains codinglab it will be returned and below of this code will not run
    if (document.cookie.includes("consent")) return;
    cookieBox.classList.add("show");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        cookieBox.classList.remove("show");

        //if button has acceptBtn id
        if (button.id === "acceptBtn") {
          //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
          document.cookie = "cookieBy= consent; max-age=" + 60 * 60 * 24 * 30;
        } else {
          window.history.go(-1);
        }
      });
    });
  };

  //executeCodes function will be called on webpage load
  window.addEventListener("DOMContentLoaded", executeCodes);
})();

/***/ }),

/***/ "./src/Resources/assets/countdown.js":
/*!*******************************************!*\
  !*** ./src/Resources/assets/countdown.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var countdownValue = 3;
    if (!countdownElement) return;
    var countdownInterval = setInterval(function () {
      countdownValue--;
      countdownElement.textContent = countdownValue.toString();
      if (countdownValue === 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  });
})();

/***/ }),

/***/ "./src/Resources/assets/darkmode.js":
/*!******************************************!*\
  !*** ./src/Resources/assets/darkmode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    // Check if dark mode is enabled or not
    var isDarkMode = function isDarkMode() {
      return document.body.classList.contains('dark');
    };

    // Toggle dark mode
    var toggleDarkMode = function toggleDarkMode() {
      document.body.classList.toggle('dark');

      // Set a cookie to remember the user's preference
      document.cookie = "darkMode=".concat(isDarkMode() ? '1' : '0', "; expires=Fri, 31 Dec 9999 23:59:59 GMT");
    };

    // Check if dark mode preference exists in the cookie
    var checkDarkModePreference = function checkDarkModePreference() {
      var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)darkMode\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (cookieValue === '1') {
        document.body.classList.add('dark');
      }
    };

    // Add click event listener to the dark mode toggle button
    var darkModeToggleBtn = document.getElementById('darkModeToggle');
    if (darkModeToggleBtn) {
      darkModeToggleBtn.addEventListener('click', toggleDarkMode);

      // On page load, check the dark mode preference
      checkDarkModePreference();
    }
  });
})();

/***/ }),

/***/ "./src/Resources/assets/form.js":
/*!**************************************!*\
  !*** ./src/Resources/assets/form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var doneButton = document.getElementById('doneButton');
    if (!form) return;
    form.addEventListener('submit', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var formData, request, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData(form);
              _context.prev = 2;
              _context.next = 5;
              return fetch(routeToProcessForm, {
                method: 'POST',
                body: formData
              });
            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.json();
            case 8:
              response = _context.sent;
              document.getElementById('rawResponse').innerHTML = response["raw"];
              document.getElementById('htmlResponse').innerText = response["html"];
              document.getElementById('previewResponse').innerHTML = response["html"];
              document.getElementById('markdownResponse').innerText = response["markdown"];
              _context.next = 17;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
            case 17:
              modal.classList.remove('hidden');
              setTimeout(function () {
                overlay.classList.remove('hidden');
              }, 250);
              setTimeout(function () {
                modal.classList.add('scale-100');
                modal.classList.add('opacity-100');
              }, 100);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 15]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    [overlay, doneButton].forEach(function (d) {
      return d.addEventListener('click', function () {
        modal.classList.remove('scale-100');
        modal.classList.remove('opacity-100');
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
      });
    });
  });
})();

/***/ }),

/***/ "./src/Resources/assets/hideCheckboxes.js":
/*!************************************************!*\
  !*** ./src/Resources/assets/hideCheckboxes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    var ids = [{
      selector: "show-preview-upload",
      toShow: "upload-box"
    }, {
      selector: "hide-url-checkbox",
      toShow: "redirect-url-wrapper"
    }];
    ids.forEach(function (id) {
      var hideUrlCheckbox = document.getElementById(id.selector);
      if (hideUrlCheckbox) {
        var redirectUrlWrapper = document.getElementById(id.toShow);
        hideUrlCheckbox.addEventListener('change', function () {
          if (hideUrlCheckbox.checked) {
            redirectUrlWrapper.classList.remove('hidden');
          } else {
            redirectUrlWrapper.classList.add('hidden');
          }
        });
      }
    });
  });
})();

/***/ }),

/***/ "./src/Resources/assets/saveWebsiteToCookie.js":
/*!*****************************************************!*\
  !*** ./src/Resources/assets/saveWebsiteToCookie.js ***!
  \*****************************************************/
/***/ (() => {

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    var saveCookieForm = document.getElementById('save-cookie-form');
    if (saveCookieForm) {
      saveCookieForm.onsubmit = function (e) {
        e.preventDefault();
        var appInstance = document.getElementById("app-instance");
        document.cookie = saveCookieForm.dataset["app"] + "=" + appInstance.value;
      };
    }
  });
})();

/***/ }),

/***/ "./src/Resources/assets/styles/app.css":
/*!*********************************************!*\
  !*** ./src/Resources/assets/styles/app.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Resources/assets/styles/cookies.css":
/*!*************************************************!*\
  !*** ./src/Resources/assets/styles/cookies.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-b17908"], () => (__webpack_exec__("./src/Resources/assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDYko7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2NvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2hpZGVDaGVja2JveGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL3NhdmVXZWJzaXRlVG9Db29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvc3R5bGVzL2Nvb2tpZXMuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcuL2Nvb2tpZXMuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy9jb29raWVzLmNzcyc7XG5pbXBvcnQgJy4vZGFya21vZGUuanMnO1xuaW1wb3J0ICcuL2hpZGVDaGVja2JveGVzLmpzJztcbmltcG9ydCAnLi9mb3JtLmpzJztcbmltcG9ydCAnLi9zYXZlV2Vic2l0ZVRvQ29va2llLmpzJztcbmltcG9ydCAnLi9jb3VudGRvd24uanMnO1xuaW1wb3J0ICdmbG93Yml0ZSc7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgY29uc3QgY29va2llQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxuICAgICAgICBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIik7XG5cbiAgICBjb25zdCBleGVjdXRlQ29kZXMgPSAoKSA9PiB7XG4gICAgICAgIC8vaWYgY29va2llIGNvbnRhaW5zIGNvZGluZ2xhYiBpdCB3aWxsIGJlIHJldHVybmVkIGFuZCBiZWxvdyBvZiB0aGlzIGNvZGUgd2lsbCBub3QgcnVuXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5jbHVkZXMoXCJjb25zZW50XCIpKSByZXR1cm47XG4gICAgICAgIGNvb2tpZUJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29va2llQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gICAgICAgICAgICAgICAgLy9pZiBidXR0b24gaGFzIGFjY2VwdEJ0biBpZFxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaWQgPT09IFwiYWNjZXB0QnRuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9zZXQgY29va2llcyBmb3IgMSBtb250aC4gNjAgPSAxIG1pbiwgNjAgPSAxIGhvdXJzLCAyNCA9IDEgZGF5LCAzMCA9IDMwIGRheXNcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVCeT0gY29uc2VudDsgbWF4LWFnZT1cIiArIDYwICogNjAgKiAyNCAqIDMwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4vL2V4ZWN1dGVDb2RlcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB3ZWJwYWdlIGxvYWRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXhlY3V0ZUNvZGVzKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY291bnRkb3duRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGRvd24nKTtcbiAgICAgICAgbGV0IGNvdW50ZG93blZhbHVlID0gMztcbiAgICAgICAgaWYgKCFjb3VudGRvd25FbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY291bnRkb3duSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudGRvd25WYWx1ZS0tO1xuICAgICAgICAgICAgY291bnRkb3duRWxlbWVudC50ZXh0Q29udGVudCA9IGNvdW50ZG93blZhbHVlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChjb3VudGRvd25WYWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duSW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZGFyayBtb2RlIGlzIGVuYWJsZWQgb3Igbm90XG4gICAgICAgIGNvbnN0IGlzRGFya01vZGUgPSAoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkYXJrIG1vZGVcbiAgICAgICAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcblxuICAgICAgICAgICAgLy8gU2V0IGEgY29va2llIHRvIHJlbWVtYmVyIHRoZSB1c2VyJ3MgcHJlZmVyZW5jZVxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGRhcmtNb2RlPSR7aXNEYXJrTW9kZSgpID8gJzEnIDogJzAnfTsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVGA7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgZGFyayBtb2RlIHByZWZlcmVuY2UgZXhpc3RzIGluIHRoZSBjb29raWVcbiAgICAgICAgY29uc3QgY2hlY2tEYXJrTW9kZVByZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29raWVWYWx1ZSA9IGRvY3VtZW50LmNvb2tpZS5yZXBsYWNlKC8oPzooPzpefC4qO1xccyopZGFya01vZGVcXHMqPVxccyooW147XSopLiokKXxeLiokLywgJyQxJyk7XG4gICAgICAgICAgICBpZiAoY29va2llVmFsdWUgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZGFyayBtb2RlIHRvZ2dsZSBidXR0b25cbiAgICAgICAgY29uc3QgZGFya01vZGVUb2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya01vZGVUb2dnbGUnKTtcbiAgICAgICAgaWYgKGRhcmtNb2RlVG9nZ2xlQnRuKSB7XG4gICAgICAgICAgICBkYXJrTW9kZVRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZURhcmtNb2RlKTtcblxuICAgICAgICAgICAgLy8gT24gcGFnZSBsb2FkLCBjaGVjayB0aGUgZGFyayBtb2RlIHByZWZlcmVuY2VcbiAgICAgICAgICAgIGNoZWNrRGFya01vZGVQcmVmZXJlbmNlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG4iLCJcbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZvcm0nKTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG4gICAgICAgIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZUJ1dHRvbicpO1xuXG4gICAgICAgIGlmICghZm9ybSkgcmV0dXJuO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKHJvdXRlVG9Qcm9jZXNzRm9ybSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jhd1Jlc3BvbnNlJykuaW5uZXJIVE1MID0gcmVzcG9uc2VbXCJyYXdcIl07XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHRtbFJlc3BvbnNlJykuaW5uZXJUZXh0ID0gcmVzcG9uc2VbXCJodG1sXCJdO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXdSZXNwb25zZScpLmlubmVySFRNTCA9IHJlc3BvbnNlW1wiaHRtbFwiXTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXJrZG93blJlc3BvbnNlJykuaW5uZXJUZXh0ID0gcmVzcG9uc2VbXCJtYXJrZG93blwiXTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSwgMjUwKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzY2FsZS0xMDAnKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LTEwMCcpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgW292ZXJsYXksIGRvbmVCdXR0b25dLmZvckVhY2goKGQpID0+IGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZS0xMDAnKTtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktMTAwJyk7XG5cbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpZHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic2hvdy1wcmV2aWV3LXVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIHRvU2hvdzogXCJ1cGxvYWQtYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaGlkZS11cmwtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB0b1Nob3c6IFwicmVkaXJlY3QtdXJsLXdyYXBwZXJcIlxuICAgICAgICAgICAgfSxcblxuICAgICAgICBdXG4gICAgICAgIGlkcy5mb3JFYWNoKFxuICAgICAgICAgICAgKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlkZVVybENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQuc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChoaWRlVXJsQ2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVkaXJlY3RVcmxXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQudG9TaG93KTtcblxuICAgICAgICAgICAgICAgICAgICBoaWRlVXJsQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGVVcmxDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmxXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFVybFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNhdmVDb29raWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtY29va2llLWZvcm0nKTtcbiAgICAgICAgaWYgKHNhdmVDb29raWVGb3JtKSB7XG4gICAgICAgICAgICBzYXZlQ29va2llRm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcEluc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtaW5zdGFuY2VcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gIHNhdmVDb29raWVGb3JtLmRhdGFzZXRbXCJhcHBcIl0gKyBcIj1cIiArIGFwcEluc3RhbmNlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvb2tpZUJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXhlY3V0ZUNvZGVzIiwiY29va2llIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImlkIiwid2luZG93IiwiaGlzdG9yeSIsImdvIiwiY291bnRkb3duRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiY291bnRkb3duVmFsdWUiLCJjb3VudGRvd25JbnRlcnZhbCIsInNldEludGVydmFsIiwidGV4dENvbnRlbnQiLCJ0b1N0cmluZyIsImNsZWFySW50ZXJ2YWwiLCJpc0RhcmtNb2RlIiwiYm9keSIsImNvbnRhaW5zIiwidG9nZ2xlRGFya01vZGUiLCJ0b2dnbGUiLCJjb25jYXQiLCJjaGVja0RhcmtNb2RlUHJlZmVyZW5jZSIsImNvb2tpZVZhbHVlIiwicmVwbGFjZSIsImRhcmtNb2RlVG9nZ2xlQnRuIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZm9ybSIsIm1vZGFsIiwib3ZlcmxheSIsImRvbmVCdXR0b24iLCJfcmVmIiwiX2NhbGxlZSIsImUiLCJmb3JtRGF0YSIsInJlcXVlc3QiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwiZmV0Y2giLCJyb3V0ZVRvUHJvY2Vzc0Zvcm0iLCJqc29uIiwiaW5uZXJIVE1MIiwiaW5uZXJUZXh0IiwidDAiLCJzZXRUaW1lb3V0IiwiX3giLCJkIiwiaWRzIiwic2VsZWN0b3IiLCJ0b1Nob3ciLCJoaWRlVXJsQ2hlY2tib3giLCJyZWRpcmVjdFVybFdyYXBwZXIiLCJjaGVja2VkIiwic2F2ZUNvb2tpZUZvcm0iLCJvbnN1Ym1pdCIsImFwcEluc3RhbmNlIiwiZGF0YXNldCJdLCJzb3VyY2VSb290IjoiIn0=