import React from 'react';
import Surface from './plus/surface';
let A = React.createClass ({
    componentWillReceiveProps(nextProps) {
        this.setState({
        href:nextProps.href,
        title:nextProps.title,
        onClick:nextProps.onClick,
        });
    },
    componentDidMount(){
        //render finish here
    },
    getInitialState(){
        return {
            href:this.props.href,
            title:this.props.title,
            onClick: this.props.onClick
        }
    },
    click(evt){
        Surface(evt);
        if(this.state.onClick){
            this.state.onClick();
        }
    },
    render() {
        return (
            <a href={this.state.href} onClick={this.click}>{this.state.title}</a>
        );
    }
});
module.exports = A;