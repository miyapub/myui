# myui
myUI for react
author:米衙
要记得首先引入myui.css

```
import {MyUI,Button,Img} from 'myui';
```

```
const HomeUI = () => {
    const click=()=>{
        alert(9)
    }
    return(
        <MyUI>
            <Button onClick={click} title="hello" />
            <Button title="tom" />
            <Img width="80" height="80" src="/uploads/user/avatar/avatar.png" />
        </MyUI>
    )
}
```

##联系方式
http://www.weibo.com/miyastudio