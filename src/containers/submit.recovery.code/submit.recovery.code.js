import './submit.recovery.code.scss'
import React from 'react'
import { Typography } from '@material-ui/core'
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield'
import { Button } from '@material-ui/core'

export default function SignUp() {
    return (
        <div id="signup" className="d-flex justify-content-center align-items-center">

            <div className="signup-container d-flex justify-content-between">
                <div className="d-flex flex-column h-100 justify-content-end pb-4">
                    <Typography className="text-white" variant="h6" >Welcome To</Typography>
                    <Typography className="text-white font-weight-bolder" variant="h2">Phoenix NC</Typography>
                </div>
                <div className="w-30 bg-white h-100 d-flex justify-content-center align-items-center flex-column" style={{ borderRadius: 20 }}>
                    <Typography color="primary" variant="h4">Submit Your</Typography>
                    <Typography color="primary" className="font-weight-bolder" variant="h4">Recovery Code</Typography>
                    <div className="pl-4 pr-4 w-100">
                        <div className="pt-5">
                            <SiteLabelTextField
                                placeholder="Submit Recovery Code"
                            />
                        </div>
                        <div className="pt-2">
                            <SiteLabelTextField
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <div className="pt-2">
                            <SiteLabelTextField
                                placeholder="Confirm Password"
                                type="password"
                                endAdornment={<i className='fa fa-eye'></i>}
                            />
                        </div>
                        <div className='pt-5 w-100'>
                            <Button color="primary" fullWidth style={{ borderRadius: 10 }}>Reset Password</Button>
                        </div>
                        <div className="pt-2 d-flex justify-content-center align-items-center text-center w-100">
                            <div className = "d-flex">
                                <Typography color="primary">Remember Password</Typography>
                                <Typography color="primary" className="font-weight-bold pl-2">Login</Typography>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
 