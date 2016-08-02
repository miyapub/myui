'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _surface = require('./plus/surface');

var _surface2 = _interopRequireDefault(_surface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = _react2.default.createClass({
    displayName: 'A',
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            href: nextProps.href,
            title: nextProps.title,
            onClick: nextProps.onClick
        });
    },
    componentDidMount: function componentDidMount() {
        //render finish here
    },
    getInitialState: function getInitialState() {
        return {
            href: this.props.href,
            title: this.props.title,
            onClick: this.props.onClick
        };
    },
    click: function click(evt) {
        (0, _surface2.default)(evt);
        if (this.state.onClick) {
            this.state.onClick();
        }
    },
    render: function render() {
        return _react2.default.createElement(
            'a',
            { href: this.state.href, onClick: this.click },
            this.state.title
        );
    }
});
module.exports = A;