import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';


export const TransitionDown = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={"down"} ref={ref} {...props} />;
});
export const TransitionUp = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={"up"} ref={ref} {...props} />;
});
export const TransitionLeft = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={'left'} ref={ref} {...props} />;
});
export const TransitionRight = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={"right"} ref={ref} {...props} />;
});

const getTransition = (direction: "left" | "right" | "up" | "down") => {
    switch (direction) {
        case "left":
            return TransitionLeft
        case "right":
            return TransitionRight
        case "up":
            return TransitionUp
        case "down":
            return TransitionDown
    }
}
export default getTransition