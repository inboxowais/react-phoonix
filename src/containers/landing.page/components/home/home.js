import { Typography } from '@material-ui/core'
import React from 'react'
import { IsMobileWidth } from './../../../../components/utils/util'

export default function Home() {

    const mobileWidth = IsMobileWidth()

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
            <div className='h-100 d-flex justify-content-center flex-column align-items-center'>
                <img src={`${process.env.PUBLIC_URL}/assets/vector.png`} style={{width:mobileWidth ? 250 : null}} />
                {/* <i className='font-weight-bolder text-primary' variant='h4' color="primary" style={{ fontSize: 30 }}><span style={{ color: "#41CE98" }}>Phoenix</span> NC</i> */}
                <Typography className="applied-font">
                    The <b>no-code</b> platform for
                    medical tutorials
                </Typography>
            </div>
        </div>
    )
}
