"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var styles = {
  label: {
    '& > span': {
      textDecoration: 'none',
      display: 'inline-block'
    }
  }
};

var DrawerItem = function DrawerItem(_ref) {
  var classes = _ref.classes,
      label = _ref.label,
      Icon = _ref.icon;
  return _react.default.createElement(_ListItem.default, {
    button: true
  }, Icon && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(Icon, null)), _react.default.createElement(_ListItemText.default, {
    primary: label,
    className: classes.label
  }));
};

DrawerItem.propTypes = {
  classes: _propTypes.default.shape({
    label: _propTypes.default.string
  }).isRequired,
  label: _propTypes.default.string.isRequired,
  icon: _propTypes.default.func
};
DrawerItem.defaultProps = {
  icon: null
};
var EnhancedDrawerItem = (0, _styles.withStyles)(styles)(DrawerItem);
var _default = EnhancedDrawerItem;
exports.default = _default;