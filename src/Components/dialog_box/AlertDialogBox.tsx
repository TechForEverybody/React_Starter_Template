import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import getTransition from './DialogTransitions';



type Props = {
    isOpen: boolean,
    onClose: () => void,
    isTransition?: boolean,
    transitionDirection?: "left" | "right" | "up" | "down",
    title?: string,
    message?: string,
    successAction?: React.ReactNode,
}

function AlertDialogBox({
    isOpen,
    onClose,
    isTransition = false,
    transitionDirection = "up",
    title,
    message,
    successAction
}: Props) {


    return (
        <div>
            <Dialog
                open={isOpen}
                TransitionComponent={isTransition ? getTransition(transitionDirection) : undefined}
                keepMounted
                onClose={onClose}
                fullWidth
                scroll="paper"
            >
                {title && <DialogTitle>{title}</DialogTitle>}
                {message && <DialogContent>{message}</DialogContent>}
                <DialogActions>
                    <Button onClick={onClose} variant='contained' color="warning">Cancel</Button>
                    {successAction && successAction}
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default AlertDialogBox