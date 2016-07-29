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

const HomeUI = () => {
    const click=()=>{
        alert(9)
    }
    return(
        <div>
            <MyUI>
                <Button onClick={click} title="hello" />
                <Button title="tom" />
                <Button fullWidth={true} title="fullWidth" />
                <Img width="80" height="80" src="http://gitlab.semioe.com/uploads/user/avatar/10/avatar.png" />
            </MyUI>
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
