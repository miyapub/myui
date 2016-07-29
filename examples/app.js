import React from 'react'
import { render } from 'react-dom'; 
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import $ from 'jquery';

//import {Button,Img} from '../lib';
import {MyUI,Button,Img} from '../src';

const Index= ({ children }) => {
  return (
    <div>
      <nav>
        Index
        <Link to="/" activeClassName="active">home</Link>
        <Link to="/buttons" activeClassName="active">buttons</Link>
        <Link to="/imgs" activeClassName="active">imgs</Link>
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
    render() {
        return (
          <MyUI>
              <h2>MyUI 一个react的轻UI</h2>
              <Button onClick={this.click} title={this.state.count} />
              <Button title="tom" btnStyle="primary" />
              <Button fullWidth={true} title="fullWidth" />
              <Button fullWidth={true} title="fullWidth primary" onClick={this.btnStyleFn} btnStyle={this.state.btnStyle} />
              <Button fullWidth={true} title="fullWidth success" btnStyle="success" />
              <Button fullWidth={true} title="fullWidth info" btnStyle="info" />
              <Button fullWidth={true} title="fullWidth warning" btnStyle="warning" />
              <Button fullWidth={true} title="fullWidth danger" btnStyle="danger" />
              
              <Img fullWidth={true} src="img/avatar.png" />
              <Img width="150" height="150" src="img/avatar.png" />
           </MyUI>
        );
    }
});


render((
  <Router history={browserHistory}>
    <Route path="/*" component={Index}>
      <IndexRoute component={HomeUI}/>
      <Route path="buttons" component={ButtonsUI} />
    </Route>
  </Router>
), document.getElementById('app'))
