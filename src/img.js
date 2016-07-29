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
        width:nextProps.width,
        height:nextProps.height,
        onClick:nextProps.onClick,
        });
    },
    componentDidMount(){
        //render finish here
    },
    getInitialState(){
        return {
            src:this.props.src,
            width:this.props.width,
            height:this.props.height,
            border_style:{
                width:this.props.width+'px',
                height:this.props.width+'px',
                position:'relative'
            },
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
                <img width={this.state.width} height={this.state.height} src={this.state.src} />
                <div className="myui" style={style} onClick={this.click}></div>
            </div>
        );
    }
});
module.exports = Img;