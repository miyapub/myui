import React from 'react'
import { render } from 'react-dom'; 
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import $ from 'jquery';

//import {Button,Img} from './ui/index';
import {Button,Img} from '../src';

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

const HomeUI = () => {
    const click=()=>{
        alert(9)
    }
    return(
        <div>
            <div>
                <Button onClick={click} title="hello" />
                <Button title="tom" />
                <Button title="blue" />
                <Img width="80" height="80" src="http://gitlab.semioe.com/uploads/user/avatar/10/avatar.png" />
            </div>
        </div>
    )
}




render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={HomeUI}/>
      <Route path="buttons" component={ButtonsUI} />
    </Route>
  </Router>
), document.getElementById('app'))
