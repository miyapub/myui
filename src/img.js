import React from 'react';
import $ from 'jquery';

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
            console.log(evt.target);
            var surface = $(evt.target);
            if (surface.find(".material-ink").length == 0) {
             surface.prepend("<div class='material-ink'></div>");
            }
            var ink = surface.find(".material-ink");
            ink.removeClass("animate");
            if (!ink.height() && !ink.width()) {
                var d = Math.max(surface.outerWidth(), surface.outerHeight());
                ink.css({height: d, width: d});
            }
            var x = event.pageX - surface.offset().left - (ink.width() / 2);
            var y = event.pageY - surface.offset().top - (ink.height() / 2);
            var rippleColor = surface.data("ripple-color");
            ink.css({
                top: y + 'px',
                left: x + 'px',
                background: rippleColor
            }).addClass("animate");
            console.log('onClick',this.state.onClick);
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