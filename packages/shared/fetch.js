"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _stringify = _interopRequireDefault(require("@babel/runtime/core-js/json/stringify"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fetchGraphql =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref, fetchOptions) {
    var query, variables, host, path, cookie, body, defaultFetchOptions, finalOptions;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query, variables = _ref.variables, host = _ref.host, path = _ref.path, cookie = _ref.cookie;
            body = {
              query: query
            };

            if (variables) {
              body.variables = variables;
            }

            defaultFetchOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: (0, _stringify.default)(body),
              credentials: 'same-origin'
            };
            finalOptions = (0, _assign.default)(defaultFetchOptions, fetchOptions);

            if (cookie) {
              finalOptions.headers.cookie = cookie;
            }

            _context.next = 8;
            return fetch("".concat(host || '').concat(path || '/graphql'), finalOptions);

          case 8:
            return _context.abrupt("return", _context.sent.json());

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchGraphql(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = fetchGraphql;