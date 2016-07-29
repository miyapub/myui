import React from 'react';
import Surface from './plus/surface'
let Button = React.createClass ({
    componentWillReceiveProps(nextProps) {
        this.setState({
        title:  nextProps.title,
        onClick: nextProps.onClick,
        });
    },
    componentDidMount(){
        //render finish here
    },
    getInitialState(){
        return {
            title:this.props.title,
            onClick: this.props.onClick,
            className:['myui'],
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
            <button className={this.state.className} onClick={this.click}>{this.state.title}</button>
        );
    }
});
module.exports = Button;