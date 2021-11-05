import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import EventBusyIcon from '@material-ui/icons/EventBusy';

export default function DownloadReport(props) {
    const { name, location } = props;
    return (
        <div className="w-100">
            <Paper elevation={8} className="paper-root w-100 p-3 d-flex justify-content-between align-items-center" style={{ borderRadius: "12px" }}>
                <div className="d-flex ">
                    <div className="pr-3">
                        <EventBusyIcon style={{ fontSize: "40px" }} />
                    </div>
                    <div>
                        <Typography variant="body2" className="font-weight-bold">
                            {name}
                        </Typography>
                        <Typography className="">
                            {location}
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography className="font-weight-bold">
                        Download
                    </Typography>
                </div>
            </Paper>
        </div>
    )
}
