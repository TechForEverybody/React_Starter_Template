

import React from 'react'
import { LineWave } from 'react-loader-spinner'
import { motion } from "framer-motion"
import { framerAnimation } from '../../theme/animation/MotionConfigs'
type Props = {}

function ContainerLoaders({ }: Props) {
    return (
        <div>ContainerLoaders</div>
    )
}
export default ContainerLoaders



export function LineWaveLoader({height="100",width="100",visible=true,animation=framerAnimation.left2right}) {
    return (
        <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={animation.transition}
        >
            <LineWave
                visible={visible}
                height={height}
                width={width}
                ariaLabel="loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </motion.div>
    )
}