import React from 'react'
import { Typography } from '@material-ui/core'
import { IsMobileWidth } from './../../../../components/utils/util'

export default function Problem(props) {


    const mobileWidth = IsMobileWidth()

    return (
        <div>
            <div className={`d-flex justify-content-center align-items-center flex-column ${mobileWidth && 'pl-2 pr-2'}`} style={{ height: "90vh" }}>

                <img src={`${process.env.PUBLIC_URL}/assets/undraw_Instant_information_re_c5v5 1 (1).png`} width={300} height={150} />
                <Typography className={`font-weight-bold ${mobileWidth ? 'w-100' : 'w-50 text-center'}  pt-4 applied-font`} variant='h4' >Our Solution</Typography>
                <Typography className={` ${mobileWidth ? 'w-100' : 'w-50'} applied-font`}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pulvinar orci, vel mattis arcu gravida sed. Suspendisse ante tellus, posuere vitae dignissim non, aliquam non velit.
                </Typography>
            </div>
         
        </div>
    )
}
