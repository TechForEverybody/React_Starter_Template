import React from 'react'
import { RunningGear } from '../../Imports/Images/ImageImports'

type objectType={
    title:string,
    message:string
}

function PageWorking(object:objectType) {
    
    return (
        <div className='PageWorking'>
            <h1 className='darkblue_color' style={{margin:"20px"}}>{object.title}</h1>
            <img src={RunningGear} alt="" />
            <h1>{object.message}</h1>
            <h1>(⊙_⊙;)</h1>

        </div>
    )
}

export default PageWorking