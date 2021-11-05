import './login.scss'
import React, { useEffect, useState } from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { IsMobileWidth, IsTabletWidth } from '../../components/utils/util'


function SignUp(props) {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const redirectTo = (route) => {
        props.history.push(route)
    }


    useEffect(() => {
        if (props.authResponse) {
            props.history.push("/")
        }
    }, [props.authResponse])

    useEffect(() => {
        return () => {
            props.resetAuth()
        }
    }, [])

    const onChange = (event, name) => {
        setState({ ...state, [name]: event.target.value })
    }

    const login = (e) => {
        e.preventDefault()
        props.login({
            email: state.email,
            password: state.password,
            //   returnSecureToken : true
        })
    }

    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    // src={`${process.env.PUBLIC_URL}/assets/images/${selectedItm.img}`}
    return (
        <form id="signup" className="d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_phoenix.png)`,backgroundSize:"100% 100%",backgroundRepeat : "no-repeat" }}>

            <div className={`${(mobileWidth || tabletWidth) ? 'w-100 h-100 pt-1 pb-1 pl-1 pr-1' : 'signup-container'} d-flex justify-content-between`}>
                {
                    mobileWidth || tabletWidth ? null :
                        <div className="d-flex flex-column h-100 justify-content-end pb-4">
                            <Typography className="text-white blue-text-font" variant="h6" >Welcome To</Typography>
                            <Typography className="text-white font-weight-bolder blue-text-font" variant="h2">Phoenix NC</Typography>
                        </div>
                }
                <div className={`${(mobileWidth || tabletWidth) ? "w-100" : "w-30"} bg-white h-100 d-flex justify-content-center align-items-center flex-column`} style={{ borderRadius: 20 }}>

                    {
                        (mobileWidth || tabletWidth) ?
                            <Typography className="font-weight-bolder pt-2 text-center" color="primary" variant="h5">Phoenix NC</Typography>
                            : null
                    }

                    <Typography color="primary" className = "blue-text-font font-weight-bold" variant="h4">Welcome Back</Typography>
                    <Typography color="primary" className="blue-text-font font-weight-bold" variant="h4">Log In</Typography>
                    <div className="pl-4 pr-4 w-100">

                        <div className="pt-5">
                            <SiteLabelTextField
                                placeholder="Email"
                                onChange={(event) => onChange(event, "email")}
                                value={state.email}
                            />
                        </div>
                        <div className="pt-2">
                            <SiteLabelTextField
                                placeholder="Password"
                                onChange={(event) => onChange(event, "password")}
                                value={state.password}
                                type="password"
                                endAdornment={<i className='fa fa-eye'></i>}
                            />
                        </div>
                        <Typography color="primary" className="cursor-pointer text-font" onClick={() => redirectTo("/forgot-password")}>Forgot Password</Typography>
                        <div className='pt-5 w-100'>
                            {
                                props.authLoading ?
                                    <div className="d-flex justify-content-center">
                                        <CircularProgress />
                                    </div>
                                    :
                                    <Button color="primary"
                                        onClick={login}
                                        type="submit"
                                        fullWidth style={{ borderRadius: 10 }}>Login</Button>
                            }
                            <div className="w-100 d-flex justify-content-center pt-1">
                                <b className="text-danger text-center">
                                    {props.authError && props.authError.message}
                                </b>
                            </div>
                        </div>
                        <div className="pt-2 d-flex justify-content-center align-items-center text-center w-100">
                            <div className="d-flex">
                                <Typography color="primary" className = 'text-font'>Do not have an account?</Typography>
                                <Typography color="primary" className="font-weight-bold pl-2 cursor-pointer text-font" onClick={() => redirectTo("/signup")}>Sign Up</Typography>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </form>
    )
}

export default withRouter(SignUp)