'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _surface = require('./plus/surface');

var _surface2 = _interopRequireDefault(_surface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _react2.default.createClass({
    displayName: 'Button',
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            onClick: nextProps.onClick
        });
    },
    componentDidMount: function componentDidMount() {
        //render finish here
    },
    getInitialState: function getInitialState() {
        return {
            title: this.props.title,
            onClick: this.props.onClick,
            className: ['myui']
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
            'button',
            { className: this.state.className, onClick: this.click },
            this.state.title
        );
    }
});
module.exports = Button;