import React, { useEffect } from 'react'
import { SiteLoader } from '../components/loaders'
import { LineWaveLoader } from '../components/loaders/ContainerLoaders';



function PreviewProvider(props: {
    children: React.ReactNode
}) {
    const [isPreviewEnded, setIsPreviewEnded] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsPreviewEnded(true)
        }, 2000)
    }, [])
    return (
        <div>
            {
                isPreviewEnded ? props.children : <PreviewContent />
            }
        </div>
    )
}
function PreviewContent() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100%"
        }}>
            <SiteLoader />
            <LineWaveLoader />
        </div>
    )
}


export default PreviewProvider