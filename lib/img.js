'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

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
        console.log(evt.target);
        var surface = (0, _jquery2.default)(evt.target);
        if (surface.find(".material-ink").length == 0) {
            surface.prepend("<div class='material-ink'></div>");
        }
        var ink = surface.find(".material-ink");
        ink.removeClass("animate");
        if (!ink.height() && !ink.width()) {
            var d = Math.max(surface.outerWidth(), surface.outerHeight());
            ink.css({ height: d, width: d });
        }
        var x = event.pageX - surface.offset().left - ink.width() / 2;
        var y = event.pageY - surface.offset().top - ink.height() / 2;
        var rippleColor = surface.data("ripple-color");
        ink.css({
            top: y + 'px',
            left: x + 'px',
            background: rippleColor
        }).addClass("animate");
        console.log('onClick', this.state.onClick);
        if (this.state.onClick) {
            this.state.onClick();
        }
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { style: this.state.border_style },
            _react2.default.createElement('img', { width: this.state.width, height: this.state.height, src: this.state.src }),
            _react2.default.createElement('div', { className: 'myui', style: style, onClick: this.click })
        );
    }
});
module.exports = Img;