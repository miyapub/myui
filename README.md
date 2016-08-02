# myui

#####作者:米衙
#####说明：
>这是一个react的轻UI，目前我只完成了Button和Img两个组件。
#####更新
2015-08-02 新增了　Ａ和CheckBox　两个组件
A组件：
```
<A href="https://www.npmjs.com/package/myui" title="MyUI" />
```
CheckBox组件:
```
<CheckBox title="我同意协议" onClick={this.checkBox} />
<CheckBox title="默认勾选"　checked={true} onClick={this.checkBox} />
```
###安装：

```
npm install myui --save
```
###使用按钮：

```
import {MyUI,Button,Img} from 'myui';
```
###代码：
```
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
```
###完整的一个例子：
```
git clone https://github.com/miyapub/myui.git
npm install
npm start

``` 
####然后打开你的浏览器：
```
http://localhost:3333/
```

####index.html
```
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MyUI 一个react的轻UI</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" charset="utf-8" src="./assets/app.bundle.js"></script>
    </body>
</html>
```

```
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


let HomeUI = React.createClass ({
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
```


##联系方式
```
http://www.weibo.com/miyastudio
http://twitter.com/ikedamiyamoto
```