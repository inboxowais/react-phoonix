import './signup.scss'
import React, { useEffect, useState } from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { IsMobileWidth, IsTabletWidth } from '../../components/utils/util'

function SignUp(props) {


    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })




    const redirectTo = (route) => {
        props.history.push(route)
    }

    const onChange = (event, name) => {
        setState({ ...state, [name]: event.target.value })
    }

    const signUp = (e) => {
        e.preventDefault()
        props.signUp({
            email: state.email,
            password: state.password,
            displayName : state.name,
            returnSecureToken: true
        })
    }

    useEffect(() => {
        if (props.signUpResponse) {
            props.history.push("/login")
        }
    }, [props.signUpResponse])

    useEffect(() => {
        return () => {
            props.resetAuth()
        }
    }, [])
    const [passwordVisible, showPassword] = useState(true)


    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()

    return (
        <form id="signup" className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/background_phoenix.png)`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>

            <div className={`${(mobileWidth || tabletWidth) ? 'w-100 h-100 pt-1 pb-1 pl-1 pr-1' : 'signup-container'} d-flex justify-content-between`}>
                {
                    mobileWidth || tabletWidth ? null :
                        <div className="d-flex flex-column h-100 justify-content-end pb-4">
                            <Typography className="text-white blue-text-font" variant="h6" >Welcome To</Typography>
                            <Typography className="text-white font-weight-bolder blue-text-font" variant="h2">Phoenix NC</Typography>
                        </div>
                }
                <div className={`${(mobileWidth || tabletWidth) ? "w-100" : "w-30"} bg-white h-100 d-flex justify-content-center align-items-center flex-column`} style={{ borderRadius: 20 }}>
                    <Typography color="primary" className="blue-text-font font-weight-bold" variant="h4">Get Started Today</Typography>
                    <Typography color="primary" className="font-weight-bolder blue-text-font" variant="h4">Sign Up</Typography>
                    <div className="pl-4 pr-4 w-100">
                        <div className="pt-2">
                            <SiteLabelTextField
                                placeholder="Name"
                                onChange={(event) => onChange(event, "name")}
                                value={state.name}
                            />
                        </div>
                        <div className="pt-2">
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

                                type={passwordVisible ? "password" : "text"}
                                endAdornment={<i onClick={() => showPassword(!passwordVisible)} className={`${passwordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'} cursor-pointer`}></i>}
                            />
                        </div>
                        <div className='pt-5 w-100'>
                            {
                                props.signUpLoading ?
                                    <div className="w-100 d-flex justify-content-center">
                                        <CircularProgress />
                                    </div>
                                    :
                                    <Button color="primary" fullWidth style={{ borderRadius: 10 }}
                                        onClick={signUp}
                                    >Sign Up</Button>
                            }
                        </div>
                        <div className="w-100 d-flex justify-content-center pt-1">
                            <b className="text-danger text-center">
                                {props.signUpError && props.signUpError.message}
                            </b>
                        </div>
                        <div className="pt-2 d-flex justify-content-center align-items-center text-center w-100">
                            <div className="d-flex">
                                <Typography color="primary" className="text-font">Already have an Account</Typography>
                                <Typography color="primary" className="font-weight-bold pl-2 cursor-pointer text-font" onClick={() => redirectTo("/login")}>Login</Typography>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </form>
    )
}

export default withRouter(SignUp)
