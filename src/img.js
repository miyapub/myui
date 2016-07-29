import React from 'react';
import Surface from './plus/surface'
const style={
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width:'100%',
    height:'100%'
}
let Img = React.createClass ({
    componentWillReceiveProps(nextProps) {
        this.setState({
        src:nextProps.src,
        style:this._getStyle(nextProps.width,nextProps.height,nextProps.fullWidth),
        border_style:this._getBorderStyle(nextProps.width,nextProps.height,nextProps.fullWidth),
        onClick:nextProps.onClick,
        });
    },
    componentDidMount(){
        //render finish here
    },
    _getStyle(width,height,fullWidth){
        if(fullWidth){
            width='100%';
            height='auto'
        }
        return {
            width:width,
            height:height
        }
    },
    _getBorderStyle(width,height,fullWidth){
        if(fullWidth){
            width='100%';
            height='auto'
        }
        return {
            width:width,
            height:height,
            position:'relative'
        }
    },
    getInitialState(){
        return {
            src:this.props.src,
            style:this._getStyle(this.props.width,this.props.height,this.props.fullWidth),
            border_style:this._getBorderStyle(this.props.width,this.props.height,this.props.fullWidth),
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
            <div style={this.state.border_style}>
                <img width={this.state.width} style={this.state.style} height={this.state.height} src={this.state.src} />
                <div className="MyUI" style={style} onClick={this.click}></div>
            </div>
        );
    }
});
module.exports = Img;