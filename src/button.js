import React from 'react';
import Surface from './plus/surface'
import $ from 'jquery';
let Button = React.createClass ({
    componentWillReceiveProps(nextProps) {
        this.setState({
        title:  nextProps.title,
        onClick: nextProps.onClick,
        });
    },
    componentDidMount(){
        //render finish here
        if(this.state.fullWidth){
            console.log(this.refs.btn);
            $(this.refs.btn).css('width','100%');
        }
    },
    getInitialState(){
        return {
            title:this.props.title,
            onClick: this.props.onClick,
            fullWidth:this.props.fullWidth,
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
            <button ref="btn" className={this.state.className} onClick={this.click}>{this.state.title}</button>
        );
    }
});
module.exports = Button;