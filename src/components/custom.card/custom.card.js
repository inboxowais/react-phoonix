import { Paper, Typography } from '@material-ui/core'
import Image from 'components/image/Image'
import React from 'react'

export default function CustomCard(props) {
    const { src, title, address, name } = props;
    return (
        <Paper className="paper-root w-100 p-4 cursor-pointer" style={{ borderRadius: "12px" }} onClick={props.onClick}>
            <div >
                <Image src={src} style={{ height: "200px" }} />
            </div>
            <div className="pt-2">
                <Typography className="font-weight-bold text-center">
                    {title}
                </Typography>
                <Typography className="pt-2">
                    {address}
                </Typography>
                <Typography className="pt-4">
                    {name}
                </Typography>
            </div>
        </Paper>
    )
}
