import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref,) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type objectType={
    severity:string,
    message:string,
    isOpen:boolean,
    handleCloseEvent:()=>void
}
function SnackBar(object:objectType) {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={object.isOpen} autoHideDuration={2000} onClose={()=>object.handleCloseEvent()}>
                <Alert onClose={()=>object.handleCloseEvent()} severity="success" sx={{ width: '100%' }}>
                    {object.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default SnackBar