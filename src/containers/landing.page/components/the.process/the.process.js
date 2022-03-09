import React from 'react'
import { Typography } from '@material-ui/core'
import { IsMobileWidth } from './../../../../components/utils/util'

export default function TheProcess(props) {

    const mobileWidth = IsMobileWidth()

    return (
        <div className='w-100' style={{ height: "90vh", overflow: "auto" }}>
            <Typography className='font-weight-bold w-25 pt-4 applied-font' variant='h4' >The Problem</Typography>
            <div className={`d-flex ${mobileWidth && 'flex-column'}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/the-process-1.png`} width={300} height={200} />
                <div className='d-flex flex-column pl-2'>
                    <Typography className='font-weight-bold w-100 applied-font' variant='h5' >Create An Applet</Typography>
                    <Typography>
                        Content creators first create a new applet using the Builder Platform.
                    </Typography>
                </div>
            </div>
            <div  className={`d-flex ${mobileWidth && 'flex-column'}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/the-process-2.png`} width={300} height={200} />
                <div className='d-flex flex-column pl-2'>
                    <Typography className='font-weight-bold w-100 applied-font' variant='h5' >Define steps</Typography>
                    <Typography>
                        Using a purely visual programming paradigm, content creators can build their applet


                    </Typography>
                </div>
            </div>
            <div  className={`d-flex ${mobileWidth && 'flex-column'}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/the-process-3.png`} width={300} height={200} />
                <div className='d-flex flex-column pl-2'>
                    <Typography className='font-weight-bold w-100 applied-font' variant='h5' >Publish applet</Typography>
                    <Typography>
                        When they’re finished, content creators can publish their applets and make them available to every user of our mobile app (The Player).


                    </Typography>
                </div>
            </div>

        </div>
    )
}
