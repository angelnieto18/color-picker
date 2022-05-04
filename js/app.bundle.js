"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "construct",
    value: function construct(color, salida, button, list, li) {
      this.color = color;
      this.salida = salida;
      this.button = button;
      this.list = list;
      this.li = li;
    }
  }, {
    key: "change",
    value: function change() {
      var _this = this;

      color.addEventListener('input', function () {
        _newArrowCheck(this, _this);

        salida.style.background = color.value;
        salida.textContent = color.value;
      }.bind(this));
    }
  }, {
    key: "colorStorage",
    value: function colorStorage() {
      var _this2 = this;

      color.addEventListener('input', function () {
        _newArrowCheck(this, _this2);

        localStorage.setItem('actualColor', color.value);
      }.bind(this));
    }
  }, {
    key: "colorHistorial",
    value: function colorHistorial() {
      var _this3 = this;

      button.addEventListener('click', function () {
        _newArrowCheck(this, _this3);

        colorList.push(localStorage.getItem('actualColor'));
        localStorage.setItem('colorHistorial', JSON.stringify(colorList));
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      button.addEventListener('click', function () {
        _newArrowCheck(this, _this4);

        list.innerHTML += "<li style=\"background: ".concat(localStorage.getItem('actualColor'), "\">").concat(localStorage.getItem('actualColor'), "</li>");
      }.bind(this));
    }
  }, {
    key: "if",
    value: function _if() {
      if (localStorage.getItem('actualColor') && localStorage.getItem('colorHistorial')) {
        salida.style.background = localStorage.getItem('actualColor');
        salida.textContent = localStorage.getItem('actualColor');

        var _iterator = _createForOfIteratorHelper(colorList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var colors = _step.value;
            list.innerHTML += "<li style=\"background: ".concat(colors, "\">").concat(colors, "</li>");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        localStorage.setItem('actualColor', '#ffffff');
      }
    }
  }]);

  return App;
}();

var appObj = new App(document.getElementById('color'), document.getElementById('salida'), document.getElementById('button'), document.getElementById('list'), document.getElementById('li'));
var colorList = JSON.parse(localStorage.getItem('colorHistorial')) || [];
appObj.change();
appObj.colorStorage();
appObj.colorHistorial();
appObj.render();
appObj["if"]();