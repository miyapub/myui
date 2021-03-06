import React from 'react';
import Surface from './plus/surface'
import $ from 'jquery';
const btn_default_style={
    color: '#000',
    backgroundColor: '#ccc',
    borderColor: '#ccc'
}
const btn_primary_style={
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4'
}
const btn_success_style={
    color: '#fff',
    backgroundColor: '#5cb85c',
    borderColor: '#4cae4c'
}
const btn_info_style={
    color: '#fff',
    backgroundColor: '#5bc0de',
    borderColor: '#46b8da'
}
const btn_warning_style={
    color: '#fff',
    backgroundColor: '#f0ad4e',
    borderColor: '#eea236'
}
const btn_danger_style={
    color: '#fff',
    backgroundColor: '#d9534f',
    borderColor: '#d43f3a'
}
let Button = React.createClass ({
    componentshouldupdate(){
        return true;
    },
    componentWillReceiveProps(nextProps) {
        this.setState({
            title:nextProps.title,
            style:this._getStyleFromBtnStyle(nextProps.btnStyle,nextProps.fullWidth),
            onClick:nextProps.onClick,
        },function(){
            //this. _setBtnStyle();
        });
    },
    _getStyleFromBtnStyle(btnStyle,fullWidth){
        let style=btn_default_style;
        switch (btnStyle){
            case "primary":
                style=btn_primary_style;
                break;
            case "success":
                style=btn_success_style;
                break;
            case "info":
                style=btn_info_style;
                break;
            case "warning":
                style=btn_warning_style;
                break;      
            case "danger":
                style=btn_danger_style;
                break;             
            default:
                style=btn_default_style;
        }
        if(fullWidth){
            //console.log(this.refs.btn);
            //$(this.refs.btn).css('width','100%');
            style.width='100%';
        }else{
            style.width='auto';
        }
        return style;
    },
    componentDidMount(){
        //render finish here
    },
    getInitialState(){
        return {
            title:this.props.title,
            onClick: this.props.onClick,
            style:this._getStyleFromBtnStyle(this.props.btnStyle,this.props.fullWidth),
        }
    },
    click(evt){
        console.log(this.state.fullWidth);
        Surface(evt);
        let _self=this;
        if(this.state.onClick){
            setTimeout(function() {
                _self.state.onClick();
            }, 300);
        }
    },
    render() {
        return (
            <button ref="btn" className='MyUI' style={this.state.style} onClick={this.click} >{this.state.title}</button>
        );
    }
});
module.exports = Button;