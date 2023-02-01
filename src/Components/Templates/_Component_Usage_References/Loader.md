## import
```javascript
import SnackBar from '../Templates/Loader';
```

## stateHandler
```javascript
let [isLoader, updateLoader] = useState(false) 
```

## Main Component should be in return part
```html
{
    isLoader?(<Loader isPageCentered={false}/>):(<></>)
}
```


