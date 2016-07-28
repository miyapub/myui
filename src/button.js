import React from 'react';
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
    },
    getInitialState(){
        return {
            title:this.props.title,
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
            <button className="myui" onClick={this.click}>{this.state.title}</button>
        );
    }
});
module.exports = Button;