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
    actions?: React.ReactNode,
    content?: React.ReactNode,
    fullScreen?: boolean,
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false

}



function ContentDialogBox({
    isOpen,
    onClose,
    isTransition = false,
    transitionDirection = "down",
    title,
    actions,
    content,
    fullScreen = false,
    maxWidth = "md"
}: Props) {


    return (
        <div>
            <Dialog
                open={isOpen}
                TransitionComponent={isTransition ? getTransition(transitionDirection) : undefined}
                keepMounted
                onClose={onClose}
                fullScreen={fullScreen}
                maxWidth={maxWidth}
                fullWidth
                scroll="paper"
            >
                {title && <DialogTitle>{title}</DialogTitle>}
                {content && <DialogContent>{content}</DialogContent>}
                {actions && <DialogActions>
                    <Button onClick={onClose} variant='contained' color="warning">Cancel</Button>
                    {actions}
                </DialogActions>}
            </Dialog>
        </div>
    )
}

export default ContentDialogBox