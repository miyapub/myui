import React from 'react';
import Surface from './plus/surface';
const titleStyle={
    display: 'inline-block',
    verticalAlign: 'top'
}
const CheckedIStyle={
    background:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4XqXSIWtCURiH8VcdJsG0tGQaXBiY/AALlqVVB4JJWLIIBmE4Bgu33nphbAxu3WCfwGASBoPBkskqg5lEOT7hBQ9vOR72h194yxMOR5xzErlLbOEwLUvcGihQwQa3MYEa3nCq9x2+YgLPuNBjhhRybGCIaz3WuMHu2EALD949wALiBx6VXR0Fqnp/IBezCZyykVc49YczMSsj8e6RF7lCB6LGWNrACXpIlEb0wxw2RwZm6E88xy8crC2aYmYf8Qdd7GCX4TMUgLyjZyJr3EOCAfWCvnenWAUDRo42vvEkgZV4RPnP9hfuOq4+5vdLAAAAAElFTkSuQmCC") no-repeat center center',
    position: 'absolute',
    left: '3px',
    bottom: '2px',
    width: '16px',
    height: '16px',
    opacity: '.5',
    transition: 'all 400ms ease-in-out',
    transform: 'rotateZ(0deg)'
}
const unCheckedIStyle={
    background:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVR4XqXSIWtCURiH8VcdJsG0tGQaXBiY/AALlqVVB4JJWLIIBmE4Bgu33nphbAxu3WCfwGASBoPBkskqg5lEOT7hBQ9vOR72h194yxMOR5xzErlLbOEwLUvcGihQwQa3MYEa3nCq9x2+YgLPuNBjhhRybGCIaz3WuMHu2EALD949wALiBx6VXR0Fqnp/IBezCZyykVc49YczMSsj8e6RF7lCB6LGWNrACXpIlEb0wxw2RwZm6E88xy8crC2aYmYf8Qdd7GCX4TMUgLyjZyJr3EOCAfWCvnenWAUDRo42vvEkgZV4RPnP9hfuOq4+5vdLAAAAAElFTkSuQmCC") no-repeat center center',
    position: 'absolute',
    left: '3px',
    bottom: '-20px',
    width: '16px',
    height: '16px',
    opacity: '.5',
    transition: 'all 400ms ease-in-out',
    transform: 'rotateZ(-180deg)'
}
const CheckedStyle={
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
}
const unCheckedStyle={
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
}

let CheckBox = React.createClass ({
    componentWillReceiveProps(nextProps) {
        this.setState({
        title:nextProps.title,
        checked:nextProps.checked,
        onClick:nextProps.onClick,
        });
    },
    componentDidMount(){
        //render finish here
        if(!this.state.checked){
            this.setState({checked:false},function(){
                this.check(this.state.checked);
            });
        }
        
    },
    getInitialState(){
        return {
            checked:this.props.checked,
            title:this.props.title,
            onClick: this.props.onClick
        }
    },
    check(bool){
        if(bool){
            this.setState({divStyle:CheckedStyle});
            this.setState({iStyle:CheckedIStyle});
        }else{
            this.setState({divStyle:unCheckedStyle});
            this.setState({iStyle:unCheckedIStyle});
        }
    },
    click(evt){
        
        Surface(evt);
        this.setState({checked:!this.state.checked},function(){
            this.check(this.state.checked);
            console.log('click:',this.state.checked);
            if(this.state.onClick){
                this.state.onClick(this.state.checked);
            }
        });
        
    },
    render() {
        return (
            <div className='MyUI' onClick={this.click}>
                <div style={this.state.divStyle}>
                    <i style={this.state.iStyle}></i>
                </div>
                <span style={titleStyle}>{this.state.title}</span>
            </div>
        );
    }
});
module.exports = CheckBox;