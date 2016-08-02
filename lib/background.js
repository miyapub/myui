'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _surface = require('./plus/surface');

var _surface2 = _interopRequireDefault(_surface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wapperStyle = {
    background: 'linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
};
var ulStyle = {
    position: 'absolute',
    opacity: '0.8',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'block',
    margin: 0,
    padding: 0
};
var liStyle1 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '10%'
};
var liStyle2 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '20%',
    width: '80px',
    height: '80px',
    animationDelay: '2s',
    animationDuration: '17s'
};
var liStyle3 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '25%',
    width: '80px',
    height: '80px',
    animationDelay: '4s',
    animationDuration: '17s'
};
var liStyle4 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '40%',
    width: '60px',
    height: '60px',
    animationDelay: '4s',
    animationDuration: '22s'
};
var liStyle5 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '70%'
};
var liStyle6 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '120px',
    height: '120px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '80%',
    animationDelay: '3s'
};
var liStyle7 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '160px',
    height: '160px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '32%',
    animationDelay: '7s'
};
var liStyle8 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '55%',
    animationDelay: '15s',
    animationDuration: '40s'
};
var liStyle9 = {
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '10px',
    height: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left: '25%',
    animationDelay: '2s',
    animationDuration: '40s'
};
var style = '@-webkit-keyframes squarex00xjdkfjsfakajsdfkajsfdkajkf{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}@keyframes square{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}';
var UI = function UI(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        'div',
        { style: wapperStyle },
        _react2.default.createElement(
            'style',
            null,
            style
        ),
        _react2.default.createElement(
            'ul',
            { style: ulStyle },
            _react2.default.createElement('li', { style: liStyle1 }),
            _react2.default.createElement('li', { style: liStyle2 }),
            _react2.default.createElement('li', { style: liStyle3 }),
            _react2.default.createElement('li', { style: liStyle4 }),
            _react2.default.createElement('li', { style: liStyle5 }),
            _react2.default.createElement('li', { style: liStyle6 }),
            _react2.default.createElement('li', { style: liStyle7 }),
            _react2.default.createElement('li', { style: liStyle8 }),
            _react2.default.createElement('li', { style: liStyle9 })
        ),
        children
    );
};
var Background = _react2.default.createClass({
    displayName: 'Background',
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            type: nextProps.type,
            full: nextProps.full,
            width: nextProps.width,
            height: nextProps.height
        }, this.initStyle);
    },
    componentDidMount: function componentDidMount() {
        //render finish here
        this.initStyle();
    },
    initStyle: function initStyle() {
        var style = {
            width: this.state.width,
            height: this.state.height,
            position: 'relative'
        };
        if (this.state.full) {
            style = {
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            };
        }
        this.setState({
            style: style
        });
    },
    getInitialState: function getInitialState() {
        return {
            type: this.props.type,
            full: this.props.full,
            width: this.props.width,
            height: this.props.height
        };
    },
    click: function click(evt) {
        (0, _surface2.default)(evt);
    },
    render: function render() {
        var style = {
            position: 'relative',
            width: '100%',
            height: 'auto'
        };
        var full = {
            position: 'absolute',
            width: '100%',
            height: '100%'
        };
        return _react2.default.createElement(
            'div',
            { style: this.state.style, onClick: this.click },
            _react2.default.createElement(UI, null),
            _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement('div', { className: 'MyUI', style: full }),
                _react2.default.Children.map(this.props.children, function (child) {
                    return child;
                })
            )
        );
    }
});
module.exports = Background;