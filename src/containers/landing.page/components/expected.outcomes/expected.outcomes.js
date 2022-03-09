import React from 'react'
import { Typography } from '@material-ui/core'
import { IsMobileWidth } from './../../../../components/utils/util'

export default function ExpectedOutcomes(props) {

    const mobileWidth = IsMobileWidth()

    return (
        <div>
            <div className={`d-flex justify-content-center align-items-center flex-column w-100 ${mobileWidth && 'pl-2 pr-2'}`} style={{ height: "90vh" }}>

                <img src={`${process.env.PUBLIC_URL}/assets/Group 1.png`} width={400} height={250} />
                <Typography className='font-weight-bold w-50 pt-4 applied-font' variant='h4' >Expected Outcomes</Typography>
                <Typography className={` ${mobileWidth ? 'w-100' : 'w-50'} applied-font`}>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pulvinar orci, vel mattis arcu gravida sed. Suspendisse ante tellus, posuere vitae dignissim non, aliquam non velit.
                </Typography>
            </div>
            
          
        </div>
    )
}
