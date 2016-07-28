# myui
myUI for react

要记得首先引入myui.css

```
const HomeUI = () => {
    const click=()=>{
        alert(9)
    }
    return(
        <div>
            <div>
                <Button onClick={click} title="hello" />
                <Button title="tom" />
                <Img width="80" height="80" src="/uploads/user/avatar/avatar.png" />
            </div>
        </div>
    )
}
```