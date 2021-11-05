import { Button } from '@material-ui/core'
import React from 'react'
import './custom.button.scss'
export default function CustomRedButton(props) {
    return (
        <div className="btn-red">
            <Button variant="contained" classes={{root:"btn"}} className="px-4" {...props}>
                {
                    props.children
                }
            </Button>
        </div>
    )
}
