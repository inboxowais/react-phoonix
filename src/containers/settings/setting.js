import { Button, CircularProgress, DialogContent, Typography } from '@material-ui/core'
import { useRef } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withRouter } from 'react-router-dom'
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield';
import { IsMobileWidth } from 'components/utils/util';
import { storage } from './../firebase/index'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent",
    },
    wrapper: {
        color: theme.palette.primary.main
    },
    selected: {
        borderBottom: theme.palette.primary.main,
        fontWeight: "bolder"
    },
    indicator: {
        backgroundColor: theme.palette.primary.main
    },
    appbarRoot: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.25)"
    },
    uploadBox: {
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.light,
        color: "#ffffff",
        borderRadius: 20
    }
}));

function Dashboard(props) {

    const classes = useStyles();
    const myRefs = useRef([]);
    const [value, setValue] = React.useState('one');
    const [dialogIsOpen, setDialogIsOpen] = React.useState(true)

    const [state, setState] = useState({
        firstName: "",
        email: "",
        password: "",
        channelName: "",
        handlerName: ""
    })




    const [image, setImage] = useState(false)


    const { isFirstTimeUser } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirectTo = (route) => {
        props.history.push(route)
    }

    useEffect(() => {
        if (props.profile) {
            setState({ ...state, firstName: props.profile.displayName, email: props.profile.email })
        }
    }, [props.profile])

    useEffect(() => {
        props.getProfile(window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id)
    }, [])


    const onChange = (e, name) => {
        setState({ ...state, [name]: e.target.value })
    }

    useEffect(() => {
        if (props.updateProfileResponse) {
            props.getProfile(window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id)
        }
    }, [props.updateProfileResponse])
    const changeEmail = () => {
        props.updateProfile({
            userId: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            email: state.email
        })
    }

    const changePassword = () => {
        props.updateProfile({
            userId: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            password: state.password,
            photoURL: uploadImage
        })
    }

    const saveChanges = () => {
        props.updateProfile({
            userId: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            password: state.password !== "" ? state.password : undefined,
            email: state.email !== "" ? state.email : undefined,
            displayName: state.firstName !== "" ? state.firstName : undefined,
            photoURL: uploadImage
        })
    }

    const createChannel = () => {
        props.createUserChannel({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            "name": state.channelName,
            "handle": state.handlerName

        })
    }

    const deleteItem = (data) => {
        props.deleteUserChannel({
            "user_id": data.user_id,
            "channelId": data.id
        })


    }

    useEffect(() => {
        if (props.deleteUserChannelResponse) {
            props.getChannel({
                "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id
            })
        }
    }, [props.deleteUserChannelResponse])

    useEffect(() => {
        if (props.userChannels) {

            setState({ ...state, channelName: "", handlerName: '' })
            props.getChannel({
                "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id
            })
        }
    }, [props.userChannels])





    useEffect(() => {
        props.getChannel({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id
        })
    }, [])

    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0])
        }
    }

    useEffect(() => {
        if (image) {
            handleUpload()
        }
    }, [image])


    const [progress, setProgress] = useState("NONE")

    const handleUpload = () => {

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                if (progress < 100) {
                    setProgress("LOADING")
                }
                else {
                    setProgress("NONE")
                }
            },
            error => {
                // console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUploadedImage(url)
                    });
            }
        );
    };


    const [uploadImage, setUploadedImage] = useState(false)

    // console.log(uploadImage)
    const mobileWidth = IsMobileWidth()


    return (
        <div className="w-100">
            <Dialog
                open={false}
                maxWidth="md"
                fullWidth
            >
                <DialogContent>
                    <div className="w-100 d-flex justify-content-end cursor-pointer" style={{ cursor: "pointer" }} onClick={() => setDialogIsOpen(false)}>
                        <i className='fa fa-times text-white'></i>
                    </div>
                    <div className="d-flex flex-column pt-5 pb-5">
                        <Typography className="font-weight-bolder d-flex justify-content-center" color="primary" variant="h5">Discover Phoenix</Typography>
                        <div className="w-100 d-flex justify-content-center flex-column align-items-center">
                            <Typography className="w-50 text-center pt-2" color="primary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultrices augue. Maecenas vestibulum.Morbi a ultrices augue. Maecenas vestibulum feugiat sapien, commodo tempor felis faucibus.
                            </Typography>
                            <div className="mt-2">
                                <Button>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <div>
                    <Typography variant="h5" className="font-weight-bolder">
                        Settings
                    </Typography>
                </div>
                {/* <div>
                    <Button color="primary" onClick={() => redirectTo("/createApplet")}>
                        <div className="d-flex align-items-center">
                            <i className="font-weight-bold">+</i>
                            <div className="pl-1">NEW APPLET</div>
                        </div>
                    </Button>
                </div> */}
            </div>
            <div className={`${classes.root} mt-4`}>
                <AppBar
                    elevation={0}
                    classes={{
                        root: classes.appbarRoot
                    }}
                    position="static" className="bg-transparent">
                    <Tabs
                        classes={{
                            indicator: classes.indicator
                        }}
                        value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                        <Tab
                            value="one"
                            color="#000000"
                            label="Accounts"
                            className='applied-font'
                            wrapped
                            {...a11yProps('one')}
                            classes={{
                                wrapper: classes.wrapper,
                                selected: classes.selected,

                            }}
                        />
                        <Tab
                            value="two"
                            className='applied-font'
                            classes={{
                                wrapper: classes.wrapper,
                                selected: classes.selected
                            }}
                            color="#000000" label="Channels" {...a11yProps('two')} />

                    </Tabs>
                </AppBar>

                <TabPanel value={value} index="one">
                    {

                        props.profileLoading || props.updateProfileLoading ? <CircularProgress /> :
                            <div className={`d-flex flex-column ${mobileWidth && 'w-100'} ${!mobileWidth && 'w-30'}`}>
                                <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: 100 }} onClick={() => { myRefs.current[0].click(); }}>
                                    <div className={classes.uploadBox}>
                                        {
                                            progress === "LOADING" ? <CircularProgress /> :
                                                uploadImage ?
                                                    <img src={uploadImage}
                                                        style={{
                                                            width: 100,
                                                            height: 100,
                                                            borderRadius: 20
                                                        }}
                                                    /> :
                                                    props.profile.photoURL ?
                                                        <img src={props.profile.photoURL}
                                                            style={{
                                                                width: 100,
                                                                height: 100,
                                                                borderRadius: 20
                                                            }}
                                                        /> :

                                                        <i className="fa fa-plus" style={{ fontSize: 20 }}></i>
                                        }
                                    </div>
                                    <Typography color="primary" variant="subtitle1" style={{ fontSize: 8 }}
                                        className='font-weight-bolder font-size-small text-center applied-font'>
                                        Upload Photo
                                    </Typography>

                                </div>
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    // onClick={() => addImages("SURVEY_LEFT_SIDE")}
                                    style={{ display: "none" }}
                                    onChange={(event) => handleImageChange(event, "name")}
                                    ref={(el) => (myRefs.current[0] = el)}
                                />
                                <div className="pt-4">
                                    <SiteLabelTextField
                                        placeholder="Enter Display Name"

                                        value={state.firstName}
                                        onChange={(e) => onChange(e, "firstName")}
                                    />
                                </div>
                                <div className="pt-4">
                                    <SiteLabelTextField
                                        placeholder="email"
                                        value={state.email}
                                        onChange={(e) => onChange(e, "email")}
                                    />
                                </div>
                                <Typography color="primary" variant="body2" className='font-weight-bolder cursor-pointer applied-font' onClick={() => changeEmail()}>Change Email Address</Typography>
                                <div className="pt-4">
                                    <SiteLabelTextField
                                        value={state.password}
                                        endAdornment={<i className='fa fa-eye'></i>}
                                        type="Password"
                                        onChange={(e) => onChange(e, "password")}
                                    />
                                </div>
                                <Typography color="primary" variant="body2" className='font-weight-bolder cursor-pointer applied-font' onClick={() => changePassword()}>Change Password</Typography>
                                <div className="pt-4">
                                    <Button fullWidth onClick={saveChanges} className="applied-font">Save Changes</Button>
                                </div>
                            </div>
                    }
                </TabPanel>
                <TabPanel value={value} index="two">
                    <div className="d-flex align-items-center w-100 flex-column">
                        <div className="w-75 d-flex flex-column">
                            <div>
                                <SiteLabelTextField
                                    label={<b className="applied-font">Channel</b>}
                                    placeholder="Enter Channel Name"
                                    value={state.channelName}
                                    onChange={(e) => setState({ ...state, channelName: e.target.value })}
                                />
                            </div>
                            <div className="pt-2">
                                <SiteLabelTextField
                                    label={<b className="applied-font">Handler</b>}
                                    placeholder="Enter Handler Name"
                                    value={state.handlerName}
                                    onChange={(e) => setState({ ...state, handlerName: e.target.value })}
                                />
                            </div>
                        </div>
                        {
                            props.userChannelsLoading ? <CircularProgress /> :
                                <div className="pl-3 w-25 pt-2">
                                    <Button fullWidth onClick={createChannel} className='applied-font'>Add Channel</Button>
                                </div>
                        }
                    </div>
                    {
                        props.channelsLoading ?
                            <div className='d-flex w-100 justify-content-center pt-2'>
                                <CircularProgress />
                            </div>
                            :
                            <div className="w-100 pt-5">
                                <div className="w-100 d-flex">
                                    <div className="w-50 font-weight-bolder applied-font">
                                        Channel Name
                                    </div>
                                    <div className="w-50 font-weight-bolder applied-font">
                                        Channel Handler
                                    </div>
                                </div>
                                <div className="d-flex flex-column " style={{ height: 300, overflow: "auto" }}>
                                    {
                                        props.channels && props.channels.channels.map((data, index) => {
                                            return <div className='d-flex w-100 pt-2 pb-2' style={{ borderBottom: "1px solid gray" }}>
                                                <div className="w-50 applied-font">
                                                    {data.name}
                                                </div>
                                                <div className="w-50 pl-2 applied-font">
                                                    {data.handle ? data.handle : "N/A"}
                                                </div>
                                                <div onClick={() => deleteItem(data)}>
                                                    <i className='fa fa-trash cursor-pointer'></i>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>

                            </div>
                    }
                </TabPanel>

            </div>
        </div>
    )
}

export default withRouter(Dashboard)