# myui
myUI for react
author:米衙
要记得首先引入myui.css

```
import {MyUI,Button,Img} from 'myui';
```

```
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
              <Button onClick={this.click} title={this.state.count} />
              <Button title="tom" btnStyle="primary" />
              <Button fullWidth={true} title="fullWidth" />
              <Button fullWidth={true} title="fullWidth primary" onClick={this.btnStyleFn} btnStyle={this.state.btnStyle} />
              <Button fullWidth={true} title="fullWidth success" btnStyle="success" />
              <Button fullWidth={true} title="fullWidth info" btnStyle="info" />
              <Button fullWidth={true} title="fullWidth warning" btnStyle="warning" />
              <Button fullWidth={true} title="fullWidth danger" btnStyle="danger" />
              <Img width="80" height="80" src="http://gitlab.semioe.com/uploads/user/avatar/10/avatar.png" />
           </MyUI>
        );
    }
});
```

##例子：
```
git clone https://github.com/miyapub/myui.git
npm install
npm start
```
####然后打开你的浏览器：
```
http://localhost:3333/
```



##联系方式
http://www.weibo.com/miyastudio