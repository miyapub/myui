'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _surface = require('./plus/surface');

var _surface2 = _interopRequireDefault(_surface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%'
};
var Img = _react2.default.createClass({
    displayName: 'Img',
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            src: nextProps.src,
            width: nextProps.width,
            height: nextProps.height,
            onClick: nextProps.onClick
        });
    },
    componentDidMount: function componentDidMount() {
        //render finish here
    },
    getInitialState: function getInitialState() {
        return {
            src: this.props.src,
            width: this.props.width,
            height: this.props.height,
            border_style: {
                width: this.props.width + 'px',
                height: this.props.width + 'px',
                position: 'relative'
            },
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
            'div',
            { style: this.state.border_style },
            _react2.default.createElement('img', { width: this.state.width, height: this.state.height, src: this.state.src }),
            _react2.default.createElement('div', { className: 'MyUI', style: style, onClick: this.click })
        );
    }
});
module.exports = Img;