import React from 'react'
import Drawer from '@mui/material/Drawer';

type Props = {
    isOpen: boolean,
    onClose: () => void,
    content?: React.ReactNode,
    drawerPosition?:'left' | 'right' | 'top' | 'bottom'
}

function SwippleDrawer({
    isOpen,
    onClose,
    content,
    drawerPosition="left"
}: Props) {
    return (
        <div>
            <Drawer open={isOpen} onClose={onClose} anchor={drawerPosition}>
                {
                    content
                }
            </Drawer>
        </div>
    )
}

export default SwippleDrawer