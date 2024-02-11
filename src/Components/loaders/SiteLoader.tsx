import { CardMedia } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { framerAnimation } from '../../theme/animation/MotionConfigs'
type Props = {}

function SiteLoader({ }: Props) {
    return (
        <motion.div
            initial={framerAnimation.right2left.initial}
            animate={framerAnimation.right2left.animate}
            exit={framerAnimation.right2left.exit}
            transition={framerAnimation.right2left.transition}
        >
            <CardMedia
                component="img"
                alt="loading"
                height="100%"
                image="/images/loadings/Loading_Image-1.gif"
                title="loading"
                sx={{
                    maxWidth: "500px",
                    width: "100%",
                    minWidth: "250px"
                }}
            />
        </motion.div>
    )
}

export default SiteLoader