import React from 'react'
import {IsMobileWidth} from './../../../../components/utils/util'

export default function Header(props) {

    const  mobileWidth  = IsMobileWidth()

    return (
        <div className='d-flex align-items-center pl-3' style={{borderBottom:"2px solid #f3f3f3",height:"10vh"}} >
            {
                mobileWidth ?
            <i className='fa fa-bars p-3 cursor-pointer' onClick={props.openDrawer}></i> : null
}
              <img src={`${process.env.PUBLIC_URL}/assets/header-image.png`} />
            {/* <i className='font-weight-bolder text-primary' variant='h4' color = "primary" style={{fontSize:30}}><span style={{color:"#41CE98"}}>Phoenix</span> NC</i> */}
        </div>
    )
}
