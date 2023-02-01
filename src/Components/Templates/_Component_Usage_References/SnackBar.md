## import
```javascript
import SnackBar from '../Templates/SnackBar';
```

## stateHandler
```javascript
let [snackBar, updateSnackBar] = useState({
        isOpen: false,
        message: "",
        severity: "info"
}) 
```

## Main Component should be in return part
```html
<SnackBar severity={snackBar.severity} 
          message={snackBar.message} 
          isOpen={snackBar.isOpen} 
          handleCloseEvent={() => updateSnackBar({ ...snackBar, isOpen: false })} 
/>
```


