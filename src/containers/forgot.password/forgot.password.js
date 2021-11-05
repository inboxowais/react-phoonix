import './forgot.password.scss'
import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield'
import { IsMobileWidth, IsTabletWidth } from '../../components/utils/util'

function SignUp(props) {


    const redirectTo = (route) => {
        props.history.push(route)
    }


    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    return (
        <div id="signup" className="d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_phoenix.png)`,backgroundSize:"100% 100%",backgroundRepeat : "no-repeat" }}>

            <div className={`${(mobileWidth || tabletWidth) ? 'w-100 h-100 pt-1 pb-1 pl-1 pr-1' : 'signup-container'} d-flex justify-content-between`}>
                {
                    mobileWidth || tabletWidth ? null :
                        <div className="d-flex flex-column h-100 justify-content-end pb-4">
                            <Typography className="text-white blue-text-font" variant="h6" >Welcome To</Typography>
                            <Typography className="text-white font-weight-bolder blue-text-font" variant="h2">Phoenix NC</Typography>
                        </div>
                }
                <div className={`${(mobileWidth || tabletWidth) ? "w-100" : "w-30"} bg-white h-100 d-flex justify-content-center align-items-center flex-column`} style={{ borderRadius: 20 }}>
                    <Typography color="primary" variant="h4" className="font-weight-bold blue-text-font">Forgot Your</Typography>
                    <Typography color="primary" className="font-weight-bolder blue-text-font" variant="h3">Password</Typography>
                    <div className="pl-4 pr-4 w-100">
                        <div>
                            <Typography className="text-center">
                                Enter your registered email address below to receive a secret password recovery code
                            </Typography>
                        </div>
                        <div className="pt-5">
                            <SiteLabelTextField
                                placeholder="Email"
                            />
                        </div>

                        <div className='pt-2 w-100'>
                            <Button color="primary" fullWidth style={{ borderRadius: 10 }}>Sent Code</Button>
                        </div>
                        <div className="pt-2 d-flex justify-content-center align-items-center text-center w-100">
                            <div className="d-flex">
                                <Typography color="primary">Remember Password?</Typography>
                                <Typography color="primary" onClick={() => redirectTo("/login")} className="font-weight-bold pl-2 cursor-pointer">Login</Typography>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default withRouter(SignUp)
