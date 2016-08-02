import React from 'react'
import { render } from 'react-dom'; 
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import $ from 'jquery';

//import {Button,Img} from '../lib';
import {MyUI,Background,Button,Img,A,CheckBox} from '../src';

const Index= ({ children }) => {
  return (
    <div>
      <nav>
        Index
        <Link to="/" activeClassName="active">home</Link>
        <Link to="/buttons" activeClassName="active">buttons</Link>
        <Link to="/imgs" activeClassName="active">imgs</Link>
        <Link to="/backgrouds" activeClassName="active">backgrouds</Link>
      </nav>
      {children}
    </div>
  )
}

const ButtonsUI = () => (
  <div>
    <div>
        <button class="material-ripple">button</button>
    </div>
  </div>
)
const BackgroudsUI = () => (
  <div>
    <div>
        backgrouds 555
    </div>
  </div>
)


const HomeUI = React.createClass ({
    getInitialState(){
        return {
            btnStyle:'primary',
            count:0
        }
    },
    btnStyleFn(evt){
        this.setState({btnStyle:'danger'});
    },
    click(evt){
        this.setState({count:this.state.count+1});
    },
    checkBox(bool){
      console.log(bool);
    },
    render() {
        return (
          <MyUI>

              <h1>MyUI 一个react的轻UI</h1>
              
              <A href="https://www.npmjs.com/package/myui" title="MyUI" />
              
              <h2>CheckBox</h2>
              <div>
                <h3>SKILLS</h3>
                <CheckBox title="HTML5" onClick={this.checkBox} />
                <CheckBox title="nodejs" onClick={this.checkBox} />
                <CheckBox title="git" onClick={this.checkBox} />
                <CheckBox title="CSS3"　checked={true} onClick={this.checkBox} />
                <CheckBox title="mongodb"　checked={true} onClick={this.checkBox} />
                <CheckBox title="linux"　checked={true} onClick={this.checkBox} />
                <CheckBox title="HTML5" onClick={this.checkBox} />
              </div>

              <h2>Button</h2>
              <div>
                <Button onClick={this.click} title={this.state.count} />
                <Button title="tom" btnStyle="primary" />
                <Button fullWidth={true} title="fullWidth" />
                <Button fullWidth={true} title="fullWidth primary" onClick={this.btnStyleFn} btnStyle={this.state.btnStyle} />
                <Button fullWidth={true} title="fullWidth success" btnStyle="success" />
                <Button fullWidth={true} title="fullWidth info" btnStyle="info" />
                <Button fullWidth={true} title="fullWidth warning" btnStyle="warning" />
                <Button fullWidth={true} title="fullWidth danger" btnStyle="danger" />
              </div>

              <h2>Img</h2>
              <div>
                <h3>full width</h3>
                <Img fullWidth={true} src="img/avatar.png" />
                <h3>width & height</h3>
                <Img width="150" height="150" src="img/avatar.png" />
              </div>
              <h2>Background</h2>
              <Background width='100%' height='auto' full={false}>
                <h3>一个背景组件</h3>
                <p>该组件用css3动画实现，可以指定大小，或者全屏模式</p>
                <p>使用简单，方便。</p>
                <p>以后可以指定不同的背景风格</p>
              </Background>
           </MyUI>
        );
    }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={HomeUI}/>
      <Route path="buttons" component={ButtonsUI} />
      <Route path="backgrouds" component={BackgroudsUI} />
    </Route>
  </Router>
), document.getElementById('app'))
