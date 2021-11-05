import { Skeleton } from '@material-ui/lab';
import React from 'react';
import Paper from '@material-ui/core/Paper'

function NotificationsSkeleton(props) {
    return (
        <div>
            {/* <Skeleton variant="text" width={80} /> */}
            <Paper className="d-flex paper-root align-items-center justify-content-between p-2 w-100">
                <div className="d-flex mb-2">
                    <Skeleton variant="text" width={100}  />
                    <Skeleton variant="text" width={300} className="ml-3" />

                </div>
                <div>
                    <Skeleton variant="rect" height={40} width={20} />
                </div>
            </Paper>
        </div>
    )
}

export default NotificationsSkeleton;