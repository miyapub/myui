import React from 'react';
import Surface from './plus/surface';
const wapperStyle={
    background: 'linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
}
const ulStyle={
    position: 'absolute',
    opacity: '0.8',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'block',
    margin: 0,
    padding: 0
}
const liStyle1={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'10%'
}
const liStyle2={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'20%',
    width:'80px',
    height:'80px',
    animationDelay:'2s',
    animationDuration:'17s'
}
const liStyle3={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'25%',
    width:'80px',
    height:'80px',
    animationDelay:'4s',
    animationDuration:'17s'
}
const liStyle4={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'40%',
    width:'60px',
    height:'60px',
    animationDelay:'4s',
    animationDuration:'22s'
}
const liStyle5={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'70%'
}
const liStyle6={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '120px',
    height: '120px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'80%',
    animationDelay:'3s'
}
const liStyle7={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '160px',
    height: '160px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'32%',
    animationDelay:'7s'
}
const liStyle8={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'55%',
    animationDelay:'15s',
    animationDuration:'40s'
}
const liStyle9={
    position: 'absolute',
    listStyle: 'none',
    display: 'block',
    width: '10px',
    height: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    bottom: '-160px',
    animation: 'squarex00xjdkfjsfakajsdfkajsfdkajkf 25s infinite',
    transitionTimingFunction: 'linear',
    left:'25%',
    animationDelay:'2s',
    animationDuration:'40s'
}
const style='@-webkit-keyframes squarex00xjdkfjsfakajsdfkajsfdkajkf{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}@keyframes square{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-700px) rotate(600deg);transform:translateY(-700px) rotate(600deg)}}';
const UI= ({ children }) => {
  return (
    <div style={wapperStyle}>
      <style>
        {style}
      </style>
      <ul style={ulStyle}>
        <li style={liStyle1}></li>
        <li style={liStyle2}></li>
        <li style={liStyle3}></li>
        <li style={liStyle4}></li>
        <li style={liStyle5}></li>
        <li style={liStyle6}></li>
        <li style={liStyle7}></li>
        <li style={liStyle8}></li>
        <li style={liStyle9}></li>
	  </ul>
      {children}
    </div>
  )
}
let Background = React.createClass ({
    componentWillReceiveProps(nextProps) {
        this.setState({
        type:nextProps.type,
        full:nextProps.full,
        width:nextProps.width,
        height:nextProps.height,
        },this.initStyle);
    },
    componentDidMount(){
        //render finish here
        this.initStyle();
    },
    initStyle(){
        let style={
            width:this.state.width,
            height:this.state.height,
            position: 'relative'
        }
        if(this.state.full){
            style={
                position:'fixed',
                width:'100%',
                height:'100%',
                top:0,
                left:0,
                right:0,
                bottom:0
            }
        }
        this.setState({
            style:style
        });
    },
    getInitialState(){
        return {
            type:this.props.type,
            full:this.props.full,
            width:this.props.width,
            height:this.props.height,
        }
    },
    click(evt){
        Surface(evt);
    },
    render() {
        const style={
            position: 'relative',
            width:'100%',
            height:'auto',
        }
        const full={
            position:'absolute',
            width:'100%',
            height:'100%',
        }
        return (
            <div style={this.state.style} onClick={this.click}> 
                <UI />
                <div style={style}>
                    <div className='MyUI' style={full}></div>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return child;
                        })
                    }
                </div>
            </div>
        );
    }
});
module.exports = Background;