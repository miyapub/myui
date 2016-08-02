'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _surface = require('./plus/surface');

var _surface2 = _interopRequireDefault(_surface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    height: '26px',
    lineHeight: '26px'
};
var CheckedIStyle = {
    background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4XqXSIWtCURiH8VcdJsG0tGQaXBiY/AALlqVVB4JJWLIIBmE4Bgu33nphbAxu3WCfwGASBoPBkskqg5lEOT7hBQ9vOR72h194yxMOR5xzErlLbOEwLUvcGihQwQa3MYEa3nCq9x2+YgLPuNBjhhRybGCIaz3WuMHu2EALD949wALiBx6VXR0Fqnp/IBezCZyykVc49YczMSsj8e6RF7lCB6LGWNrACXpIlEb0wxw2RwZm6E88xy8crC2aYmYf8Qdd7GCX4TMUgLyjZyJr3EOCAfWCvnenWAUDRo42vvEkgZV4RPnP9hfuOq4+5vdLAAAAAElFTkSuQmCC") no-repeat center center',
    position: 'absolute',
    left: '3px',
    bottom: '2px',
    width: '16px',
    height: '16px',
    opacity: '.5',
    transition: 'all 400ms ease-in-out',
    transform: 'rotateZ(0deg)'
};
var unCheckedIStyle = {
    background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4XqXSIWtCURiH8VcdJsG0tGQaXBiY/AALlqVVB4JJWLIIBmE4Bgu33nphbAxu3WCfwGASBoPBkskqg5lEOT7hBQ9vOR72h194yxMOR5xzErlLbOEwLUvcGihQwQa3MYEa3nCq9x2+YgLPuNBjhhRybGCIaz3WuMHu2EALD949wALiBx6VXR0Fqnp/IBezCZyykVc49YczMSsj8e6RF7lCB6LGWNrACXpIlEb0wxw2RwZm6E88xy8crC2aYmYf8Qdd7GCX4TMUgLyjZyJr3EOCAfWCvnenWAUDRo42vvEkgZV4RPnP9hfuOq4+5vdLAAAAAElFTkSuQmCC") no-repeat center center',
    position: 'absolute',
    left: '3px',
    bottom: '-20px',
    width: '16px',
    height: '16px',
    opacity: '.5',
    transition: 'all 400ms ease-in-out',
    transform: 'rotateZ(-180deg)'
};
var CheckedStyle = {
    width: '22px',
    height: '22px',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '2px 7px 0 0',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '3px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%)',
    border: '1px solid #ccc',
    boxShadow: 'inset 0 0 5px 1px #ccc'
};
var unCheckedStyle = {
    width: '22px',
    height: '22px',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '2px 7px 0 0',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 1px #ccc',
    borderRadius: '3px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%)',
    border: '1px solid #ccc'
};

var CheckBox = _react2.default.createClass({
    displayName: 'CheckBox',
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            checked: nextProps.checked,
            onClick: nextProps.onClick
        });
    },
    componentDidMount: function componentDidMount() {
        //render finish here
        var bool = false;
        if (this.state.checked) {
            bool = true;
        }
        this.setState({ checked: bool }, function () {
            this.check(this.state.checked);
        });
    },
    getInitialState: function getInitialState() {
        return {
            checked: this.props.checked,
            title: this.props.title,
            onClick: this.props.onClick
        };
    },
    check: function check(bool) {
        if (bool) {
            this.setState({ divStyle: CheckedStyle });
            this.setState({ iStyle: CheckedIStyle });
        } else {
            this.setState({ divStyle: unCheckedStyle });
            this.setState({ iStyle: unCheckedIStyle });
        }
    },
    click: function click(evt) {

        (0, _surface2.default)(evt);
        this.setState({ checked: !this.state.checked }, function () {
            this.check(this.state.checked);
            console.log('click:', this.state.checked);
            if (this.state.onClick) {
                this.state.onClick(this.state.checked);
            }
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'MyUI', onClick: this.click },
            _react2.default.createElement(
                'div',
                { style: this.state.divStyle },
                _react2.default.createElement('i', { style: this.state.iStyle })
            ),
            _react2.default.createElement(
                'span',
                { style: titleStyle },
                this.state.title
            )
        );
    }
});
module.exports = CheckBox;