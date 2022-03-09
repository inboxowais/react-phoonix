import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Switch, Input, InputAdornment, Button, Tooltip, Typography, CircularProgress, IconButton } from '@material-ui/core'
import SiteLabelTextField from '../../../../components/site.label.textfield/site.label.textfield'
import MaterialAutoComplete from '../../../../components/material.autocomplete/material.autocomplete'
import RemoveApplet from './remove.applet/remove.applet'
import { formatDate, IsMobileWidth } from 'components/utils/util'
import CustomCalender from 'components/custom.calender/custom.calender'



function SignUp(props) {

    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false)
    const [data, setData] = useState(false)

    const [state, setState] = useState({
        name: "",
        status: "",
        createdAt: "",
        updatedAt: ""
    })

    const mobileWidth = IsMobileWidth()
    const moment = require('moment')

    const createNotification = () => {
        props.addNotification({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            "notification": {
                "to": props.singleUser && props.singleUser.user && props.singleUser.user.mobileToken,
                "notification": {
                    "title": `Uploaded: ${data.name}`,
                    "body": `${data.description}`,
                    "date": new Date()

                },
                "data": {
                    "url": data.feature_image,
                }
            }
        })
        props.addSubscriberNotification({
            "channel_id": data.channel,
            "notification": {
                "to": props.singleUser && props.singleUser.user && props.singleUser.user.mobileToken,
                "notification": {
                    "title": `Uploaded: ${data.name}`,
                    "body": `${data.description}`,
                    "date": new Date()

                },
                "data": {
                    "url": data.feature_image,
                }
            }
        })

        console.log(data)
    }

    const remove = () => {
        var obj = data;
        obj.status = !obj.status
        obj.channel = obj.channel._path.segments[1]
        props.updateApplet(obj)

        if (data.status) {
            fetch('https://fcm.googleapis.com/fcm/send', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'key=AAAAas_p8to:APA91bE4JfnEphNz_DrlBdc8frZfwq-XQnH1mVl70usk7VqHBkJLDfiE_KNj--IscGTns4yRDeEYj14s66EVmOzGumX3WV46-KMROegbl1f-lB-8jtteStqp5mcytS1LHTPwvINrk2rS'
                },
                body: JSON.stringify({
                    "to": props.singleUser && props.singleUser.user && props.singleUser.user.mobileToken,
                    "notification": {
                        "title": `Uploaded: ${data.name}`,
                        "body": `${data.description}`,

                    },
                    "data": {
                        "url": data.feature_image,

                    }


                })
            }).then(res => res.json())
                .then((res) => {
                    if (res.success) {
                        createNotification()
                    }
                });
        }
    }




    const onChangeSwitch = (data) => {

        setDeleteDialogIsOpen(!deleteDialogIsOpen)
        setData(data)
    }

    const deleteApplet = (data) => {
        props.deleteApplet({
            id: data.id,
            user_id: window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id
        })
        props.getAllApplets({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id
        })
    }

    const filter = () => {
        props.getAllApplets({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
            "filters": {
                "name": state.name !== "" ? state.name : undefined,
                "status": state.status.value === "Open" ? true : state.status.value === "Closed" ? false : undefined,
                "created_at": state.createdAt !== "" ? state.createdAt : undefined,
                "updated_at": state.updatedAt !== "" ? state.updatedAt : undefined
            }
        })
    }

    const onChange = (e, name) => {
        setState({ ...state, [name]: e.target.value })
    }

    const onselect = (data, dataObject, name) => {
        setState({ ...state, [name]: dataObject })
    }

    const onCalenderChange = (data, name) => {
        setState({ ...state, [name]: data })
    }

    const redirectTo = (id) => {
        props.history.push(`/createApplet/${id}`)
    }

    const refresh = () => {
        props.getAllApplets({
            "user_id": window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? JSON.parse(window.localStorage.getItem("token")).localId : props.auth.user_id,
        })
    }



    return (
        <div className="applet-list w-100">
            <RemoveApplet
                open={deleteDialogIsOpen}
                successButtonText={data && data.status ? "Deactivate" : "Activate"}
                loading={props.updateAppletLoading}
                deleteButtonText="Cancel"
                onSuccess={() => remove()}
                handleClose={() => setDeleteDialogIsOpen(false)}
                title="Activate Applet ?"
            >
                {
                    props.updateAppletLoading ? <CircularProgress /> :
                        <React.Fragment>
                            {
                                data && data.status ?
                                    <b>Your applet won’t be visible to you any longer, but any other users that downloaded it previously will.</b> :
                                    <b>Are You Sure You want to activate Applet</b>
                            }
                        </React.Fragment>
                }
            </RemoveApplet>
            <div className={`d-flex w-80 pb-3 ${mobileWidth && 'flex-column w-100'}`} >
                <div className={`${!mobileWidth && 'w-30'} ${!mobileWidth && 'w-100'}`}>
                    <Input
                        id="input-with-icon-adornment"
                        placeholder="Search"
                        fullWidth
                        value={state.name}
                        onChange={(event) => onChange(event, "name")}
                        startAdornment={
                            <InputAdornment position="start">
                                <i className="fa fa-search"></i>
                            </InputAdornment>
                        }
                    />

                </div>
                <div className={`${!mobileWidth && 'w-30 pl-2'} ${mobileWidth && 'w-100 pt-2'}`}>
                    <MaterialAutoComplete
                        placeholder="Status"
                        onSelect={(data, dataObject) => onselect(data, dataObject, "status")}
                        bordered
                        selectedItem={state.status}
                        data={[
                            {
                                name: "Open",
                                value: "Open"
                            },
                            {
                                name: "Closed",
                                value: "Closed"
                            },
                            {
                                name: "All",
                                value: "All"
                            },

                        ]}
                    />
                </div>
                <div className={`${!mobileWidth && 'w-30 pl-2'} ${mobileWidth && 'w-100 pt-2'}`}>
                    <CustomCalender
                        // required
                        // error={!state.validationResult.isValidBeneficaryCnic ? "BirthDate is required" : null}
                        value={state.createdAt}
                        // error={!state.validationResult.isValidBeneficaryDateOfBirth ? "The field is required" : null}
                        // label={<b className="font-weight-bolder text-primary">Created At</b>}
                        // maxDate={eighteenYearDate}
                        // validationResult={state.validationResult}
                        onChange={(date) => onCalenderChange(date, "createdAt")}
                        displayText={'Created At'}
                    />
                </div>
                <div className={`${!mobileWidth && 'w-30 pl-2'} ${mobileWidth && 'w-100 pt-2'}`}>
                    <CustomCalender
                        // required
                        // error={!state.validationResult.isValidBeneficaryCnic ? "BirthDate is required" : null}
                        value={state.updatedAt}
                        // error={!state.validationResult.isValidBeneficaryDateOfBirth ? "The field is required" : null}
                        // displayText={<b className="font-weight-bolder text-primary">Updated At</b>}
                        // maxDate={eighteenYearDate}
                        // validationResult={state.validationResult}
                        onChange={(date) => onCalenderChange(date, "updatedAt")}
                        displayText="Updated At"
                    />
                </div>
                <div className={`${!mobileWidth && 'w-30 pl-2'} ${mobileWidth && 'w-100 pt-2'} d-flex align-items-center`}>
                    <Button onClick={filter} className="applied-font">Filter</Button>
                    <div className='pl-2'>
                        <IconButton onClick={refresh}>
                            <i className='fa fa-sync'></i>
                        </IconButton>
                    </div>
                </div>



            </div>
            <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                <div className="d-flex w-100">
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex align-items-center ${mobileWidth && 'flex-column'}`}>
                            <div>Title</div>
                            <div className="d-flex pl-2">
                                <i className="fa fa-arrow-up"></i>
                                <i className="fa fa-arrow-down "></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex align-items-center ${mobileWidth && 'flex-column'}`}>
                            <div>Created</div>
                            <div className="d-flex pl-2">
                                <i className="fa fa-arrow-up"></i>
                                <i className="fa fa-arrow-down "></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex align-items-center ${mobileWidth && 'flex-column'}`}>
                            <div>Updated</div>
                            <div className="d-flex pl-2">
                                <i className="fa fa-arrow-up"></i>
                                <i className="fa fa-arrow-down "></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Activator
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Actions
                        </div>
                    </div>
                </div>
            </div>
            {
                props.applets && props.applets.applets && props.applets.applets.length === 0 ? <div className='w-100 d-flex justify-content-center w-100 pt-3'><b className='text-danger text-center pt-3'>No Data Found</b></div> : null
            }
            {
                props.applets && props.applets.applets && props.applets.applets.map((data, index) => {

                    return <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                        <div className="d-flex w-100">
                            <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                                <div style={{ overflowWrap: "anywhere" }}>
                                    {data.name}
                                </div>
                            </div>
                            <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                                <div>
                                    {/* {data && data.created_at && formatDate(new Date(data.created_at._nanoseconds))} */}
                                    {data.created_at_string}
                                    {/* {new Date(data.created_at._seconds)} */}
                                </div>
                            </div>
                            <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                                <div>
                                    {data.updated_at_string}
                                    {/* {new Date(data.created_at.updated_at)} */}
                                </div>
                            </div>
                            <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                                <div className='d-flex align-items-center'>
                                    <Typography>Deactivate</Typography>
                                    <Switch
                                        color="primary"
                                        onChange={() => onChangeSwitch(data)}
                                        checked={data.status}
                                    />
                                    <Typography>Activate</Typography>

                                </div>
                            </div>
                            <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                                <div className={`d-flex w-100 align-items-center justify-content-center ${mobileWidth && 'flex-column'}`}>
                                    <Tooltip title="Download Applet" className="applied-font">
                                        <div>
                                            {/* <i class="fa fa-cloud-download-alt" style={{ color: '#112950' }}></i> */}
                                            <a className="cursor-pointer" download="FILENAME.png" href={data.feature_image}>
                                                <i class="fa fa-cloud-download" style={{ color: '#112950' }}></i>
                                            </a>
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Delete" className="applied-font">
                                        <div className="pl-2">
                                            <i className="fa fa-trash  cursor-pointer" onClick={() => deleteApplet(data)} style={{ color: '#112950' }}></i>
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Edit" className="applied-font">
                                        <div className="pl-2">
                                            <i className="fa fa-edit  cursor-pointer" style={{ color: '#112950' }} onClick={() => redirectTo(data.id)}></i>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default withRouter(SignUp)