import React from 'react'
import { Typography } from '@material-ui/core'
import { IsMobileWidth } from './../../../../components/utils/util'

export default function Problem(props) {

    const mobileWidth = IsMobileWidth()

    return (
        <div className='d-flex pt-5 align-items-center flex-column pl-2 pr-2 w-100' style={{ height: "90vh" }} >
            <div className='d-flex flex-column w-100 d-flex justify-content-center align-items-center' style={{height:"80%"}}>
                <Typography className={`font-weight-bold ${mobileWidth ? 'w-100' : 'w-50 text-center'} pb-4 applied-font`} variant='h4' >Contact Us</Typography>
                <img src={`${process.env.PUBLIC_URL}/assets/undraw_Personal_email_re_4lx7 1.png`} width={mobileWidth ? 200 : 200} height={mobileWidth ? 200 : 150} />
                <Typography className={`${mobileWidth ? 'w-100' : 'w-50'} pt-4 applied-font`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pulvinar orci, vel mattis arcu gravida sed. Suspendisse ante tellus, posuere vitae dignissim non, aliquam non velit.
                </Typography>
            </div>
            <div style={{ height: "20%", backgroundColor: '#112950', position: "absolute", bottom: 0, width: mobileWidth ? "100%" : "80%", right: "0" }} className='d-flex justify-content-end align-items-center'>
                <div className={`text-white ${mobileWidth ? 'w-50' : 'w-75 text-center'} pr-3 applied-font`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque congue ornare libero ultricies fringilla.
                </div>
            </div>
        </div>
    )
}
