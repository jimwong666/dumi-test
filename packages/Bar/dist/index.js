(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.index = {}), global.React));
})(this, function (exports, React) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }

  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  var index = function (_ref) {
    var title = _ref.title;
    return /*#__PURE__*/ React__default['default'].createElement(
      'h1',
      null,
      '\u6211\u662FBar,',
      title,
    );
  };

  var index$1 = function (_ref) {
    var title = _ref.title;
    return /*#__PURE__*/ React__default['default'].createElement(
      'h1',
      null,
      '\u6211\u662FFoo,',
      title,
    );
  };

  exports.a = index;
  exports.b = index$1;

  Object.defineProperty(exports, '__esModule', { value: true });
});
