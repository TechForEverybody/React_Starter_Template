import React from 'react'
import ContentLoader from 'react-content-loader'

type Props = {}

function ContentLoaders({ }: Props) {
    return (
        <div>ContentLoaders</div>
    )
}

export default ContentLoaders




export const FadingContentLoader = () => {
    return (
        <div>
            <ContentLoader
                width={400}
                height={50}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
            >
                <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
                <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
                <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
            </ContentLoader>        
            <ContentLoader
                width={400}
                height={50}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
            >
                <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
                <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
                <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
            </ContentLoader>        
            <ContentLoader
                width={400}
                height={50}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
            >
                <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
                <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
                <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
            </ContentLoader>        
            <ContentLoader
                width={400}
                height={50}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
            >
                <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
                <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
                <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
            </ContentLoader>        
        </div>
    )
}
