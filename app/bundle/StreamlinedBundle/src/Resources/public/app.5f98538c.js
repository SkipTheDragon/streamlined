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

  document.addEventListener('DOMContentLoaded', function () {
    var cookieBox = document.querySelector(".wrapper"),
      buttons = document.querySelectorAll(".button");

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
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy9hc3NldHMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9oaWRlQ2hlY2tib3hlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zYXZlV2Vic2l0ZVRvQ29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9jb29raWVzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9jb29raWVzLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvY29va2llcy5jc3MnO1xuaW1wb3J0ICcuL2Rhcmttb2RlLmpzJztcbmltcG9ydCAnLi9oaWRlQ2hlY2tib3hlcy5qcyc7XG5pbXBvcnQgJy4vZm9ybS5qcyc7XG5pbXBvcnQgJy4vc2F2ZVdlYnNpdGVUb0Nvb2tpZS5qcyc7XG5pbXBvcnQgJy4vY291bnRkb3duLmpzJztcbmltcG9ydCAnZmxvd2JpdGUnO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvb2tpZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcbiAgICAgICAgICAgIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKTtcblxuICAgICAgICAvL2lmIGNvb2tpZSBjb250YWlucyBjb2RpbmdsYWIgaXQgd2lsbCBiZSByZXR1cm5lZCBhbmQgYmVsb3cgb2YgdGhpcyBjb2RlIHdpbGwgbm90IHJ1blxuICAgICAgICBpZiAoZG9jdW1lbnQuY29va2llLmluY2x1ZGVzKFwiY29uc2VudFwiKSkgcmV0dXJuO1xuICAgICAgICBjb29raWVCb3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvb2tpZUJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICAgICAgICAgIC8vaWYgYnV0dG9uIGhhcyBhY2NlcHRCdG4gaWRcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBcImFjY2VwdEJ0blwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IGNvb2tpZXMgZm9yIDEgbW9udGguIDYwID0gMSBtaW4sIDYwID0gMSBob3VycywgMjQgPSAxIGRheSwgMzAgPSAzMCBkYXlzXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llQnk9IGNvbnNlbnQ7IG1heC1hZ2U9XCIgKyA2MCAqIDYwICogMjQgKiAzMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ZG93bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRkb3duJyk7XG4gICAgICAgIGxldCBjb3VudGRvd25WYWx1ZSA9IDM7XG4gICAgICAgIGlmICghY291bnRkb3duRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvdW50ZG93bkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY291bnRkb3duVmFsdWUtLTtcbiAgICAgICAgICAgIGNvdW50ZG93bkVsZW1lbnQudGV4dENvbnRlbnQgPSBjb3VudGRvd25WYWx1ZS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoY291bnRkb3duVmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bkludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxuICAgICAgICBjb25zdCBpc0RhcmtNb2RlID0gKCkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGFyayBtb2RlXG4gICAgICAgIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG5cbiAgICAgICAgICAgIC8vIFNldCBhIGNvb2tpZSB0byByZW1lbWJlciB0aGUgdXNlcidzIHByZWZlcmVuY2VcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBkYXJrTW9kZT0ke2lzRGFya01vZGUoKSA/ICcxJyA6ICcwJ307IGV4cGlyZXM9RnJpLCAzMSBEZWMgOTk5OSAyMzo1OTo1OSBHTVRgO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGRhcmsgbW9kZSBwcmVmZXJlbmNlIGV4aXN0cyBpbiB0aGUgY29va2llXG4gICAgICAgIGNvbnN0IGNoZWNrRGFya01vZGVQcmVmZXJlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29va2llVmFsdWUgPSBkb2N1bWVudC5jb29raWUucmVwbGFjZSgvKD86KD86XnwuKjtcXHMqKWRhcmtNb2RlXFxzKj1cXHMqKFteO10qKS4qJCl8Xi4qJC8sICckMScpO1xuICAgICAgICAgICAgaWYgKGNvb2tpZVZhbHVlID09PSAnMScpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRhcmsgbW9kZSB0b2dnbGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGRhcmtNb2RlVG9nZ2xlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtNb2RlVG9nZ2xlJyk7XG4gICAgICAgIGlmIChkYXJrTW9kZVRvZ2dsZUJ0bikge1xuICAgICAgICAgICAgZGFya01vZGVUb2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEYXJrTW9kZSk7XG5cbiAgICAgICAgICAgIC8vIE9uIHBhZ2UgbG9hZCwgY2hlY2sgdGhlIGRhcmsgbW9kZSBwcmVmZXJlbmNlXG4gICAgICAgICAgICBjaGVja0RhcmtNb2RlUHJlZmVyZW5jZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiXG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGb3JtJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVCdXR0b24nKTtcblxuICAgICAgICBpZiAoIWZvcm0pIHJldHVybjtcblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChyb3V0ZVRvUHJvY2Vzc0Zvcm0sIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKClcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXdSZXNwb25zZScpLmlubmVySFRNTCA9IHJlc3BvbnNlW1wicmF3XCJdO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h0bWxSZXNwb25zZScpLmlubmVyVGV4dCA9IHJlc3BvbnNlW1wiaHRtbFwiXTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3UmVzcG9uc2UnKS5pbm5lckhUTUwgPSByZXNwb25zZVtcImh0bWxcIl07XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya2Rvd25SZXNwb25zZScpLmlubmVyVGV4dCA9IHJlc3BvbnNlW1wibWFya2Rvd25cIl07XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0sIDI1MClcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2NhbGUtMTAwJyk7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0xMDAnKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFtvdmVybGF5LCBkb25lQnV0dG9uXS5mb3JFYWNoKChkKSA9PiBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2NhbGUtMTAwJyk7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LTEwMCcpO1xuXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgaWRzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNob3ctcHJldmlldy11cGxvYWRcIixcbiAgICAgICAgICAgICAgICB0b1Nob3c6IFwidXBsb2FkLWJveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImhpZGUtdXJsLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgdG9TaG93OiBcInJlZGlyZWN0LXVybC13cmFwcGVyXCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXVxuICAgICAgICBpZHMuZm9yRWFjaChcbiAgICAgICAgICAgIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVVcmxDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVVybENoZWNrYm94KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkLnRvU2hvdyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGlkZVVybENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaWRlVXJsQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgIH0pO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzYXZlQ29va2llRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNvb2tpZS1mb3JtJyk7XG4gICAgICAgIGlmIChzYXZlQ29va2llRm9ybSkge1xuICAgICAgICAgICAgc2F2ZUNvb2tpZUZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBJbnN0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWluc3RhbmNlXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICBzYXZlQ29va2llRm9ybS5kYXRhc2V0W1wiYXBwXCJdICsgXCI9XCIgKyBhcHBJbnN0YW5jZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb29raWVCb3giLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb29raWUiLCJpbmNsdWRlcyIsImNsYXNzTGlzdCIsImFkZCIsImZvckVhY2giLCJidXR0b24iLCJyZW1vdmUiLCJpZCIsIndpbmRvdyIsImhpc3RvcnkiLCJnbyIsImNvdW50ZG93bkVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvdW50ZG93blZhbHVlIiwiY291bnRkb3duSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRleHRDb250ZW50IiwidG9TdHJpbmciLCJjbGVhckludGVydmFsIiwiaXNEYXJrTW9kZSIsImJvZHkiLCJjb250YWlucyIsInRvZ2dsZURhcmtNb2RlIiwidG9nZ2xlIiwiY29uY2F0IiwiY2hlY2tEYXJrTW9kZVByZWZlcmVuY2UiLCJjb29raWVWYWx1ZSIsInJlcGxhY2UiLCJkYXJrTW9kZVRvZ2dsZUJ0biIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImZvcm0iLCJtb2RhbCIsIm92ZXJsYXkiLCJkb25lQnV0dG9uIiwiX3JlZiIsIl9jYWxsZWUiLCJlIiwiZm9ybURhdGEiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImZldGNoIiwicm91dGVUb1Byb2Nlc3NGb3JtIiwianNvbiIsImlubmVySFRNTCIsImlubmVyVGV4dCIsInQwIiwic2V0VGltZW91dCIsIl94IiwiZCIsImlkcyIsInNlbGVjdG9yIiwidG9TaG93IiwiaGlkZVVybENoZWNrYm94IiwicmVkaXJlY3RVcmxXcmFwcGVyIiwiY2hlY2tlZCIsInNhdmVDb29raWVGb3JtIiwib25zdWJtaXQiLCJhcHBJbnN0YW5jZSIsImRhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9