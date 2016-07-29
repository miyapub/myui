'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _surface = require('./plus/surface');

var _surface2 = _interopRequireDefault(_surface);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var btn_default_style = {
    color: '#000',
    backgroundColor: '#ccc',
    borderColor: '#ccc'
};
var btn_primary_style = {
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4'
};
var btn_success_style = {
    color: '#fff',
    backgroundColor: '#5cb85c',
    borderColor: '#4cae4c'
};
var btn_info_style = {
    color: '#fff',
    backgroundColor: '#5bc0de',
    borderColor: '#46b8da'
};
var btn_warning_style = {
    color: '#fff',
    backgroundColor: '#f0ad4e',
    borderColor: '#eea236'
};
var btn_danger_style = {
    color: '#fff',
    backgroundColor: '#d9534f',
    borderColor: '#d43f3a'
};
var Button = _react2.default.createClass({
    displayName: 'Button',
    componentshouldupdate: function componentshouldupdate() {
        return true;
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            style: this._getStyleFromBtnStyle(nextProps.btnStyle, nextProps.fullWidth),
            onClick: nextProps.onClick
        }, function () {
            //this. _setBtnStyle();
        });
    },
    _getStyleFromBtnStyle: function _getStyleFromBtnStyle(btnStyle, fullWidth) {
        var style = btn_default_style;
        switch (btnStyle) {
            case "primary":
                style = btn_primary_style;
                break;
            case "success":
                style = btn_success_style;
                break;
            case "info":
                style = btn_info_style;
                break;
            case "warning":
                style = btn_warning_style;
                break;
            case "danger":
                style = btn_danger_style;
                break;
            default:
                style = btn_default_style;
        }
        if (fullWidth) {
            //console.log(this.refs.btn);
            //$(this.refs.btn).css('width','100%');
            style.width = '100%';
        } else {
            style.width = 'auto';
        }
        return style;
    },
    componentDidMount: function componentDidMount() {
        //render finish here
    },
    getInitialState: function getInitialState() {
        return {
            title: this.props.title,
            onClick: this.props.onClick,
            style: this._getStyleFromBtnStyle(this.props.btnStyle, this.props.fullWidth)
        };
    },
    click: function click(evt) {
        console.log(this.state.fullWidth);
        (0, _surface2.default)(evt);
        var _self = this;
        if (this.state.onClick) {
            setTimeout(function () {
                _self.state.onClick();
            }, 300);
        }
    },
    render: function render() {
        return _react2.default.createElement(
            'button',
            { ref: 'btn', className: 'MyUI', style: this.state.style, onClick: this.click },
            this.state.title
        );
    }
});
module.exports = Button;