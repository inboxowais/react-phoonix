import { Button, Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Image from 'components/image/Image'
import SiteLabelTextField from 'components/site.label.textfield/site.label.textfield'
import MaterialAutoComplete from 'components/material.autocomplete/material.autocomplete'
import CustomRedButton from 'components/custom.red.button/custom.red.button'
import  ImageUpload  from 'components/image.upload/image.upload'

export default function FormOne(props) {
   

    const [state, setState] = useState({
        tempZones: []
    })
    const { offices, officesLoading } = props;
    useEffect(() => {
        if (offices) {
            var temp = state.tempZones;

            temp = temp.concat(offices && offices.docs && offices.docs)
            setState({ ...state, tempZones: temp })
        }
    }, [offices])


    var allZones = state.tempZones && state.tempZones.map((zone, index) => {
        return {
            value: zone._id,
            name: zone.name
        }
    })
    return (
        <div>
            <Grid xs={12} container justifyContent="center" className="pt-5">
                <Grid xs={11} md={4}>
                    <div>
                        <SiteLabelTextField topAdornment="Your Email Address" value={props.email} onChange={(event) => props.handleChange("email", event)} />
                    </div>
                    <div className="pt-3">
                        <SiteLabelTextField topAdornment="Your Password" type="password" value={props.password} onChange={(event) => props.handleChange("password", event)} />
                    </div>

                    <div className="pt-3">
                        <SiteLabelTextField topAdornment="Your Phone Number" value={props.phone} onChange={(event) => props.handleChange("phone", event)} />
                    </div>

                    <div className="pt-3">
                        <SiteLabelTextField topAdornment="Your Name" value={props.name} onChange={(event) => props.handleChange("name", event)} />
                    </div>
                    <div className="pt-5 d-flex align-items-center justify-content-between">
                        <Typography>
                            Gender
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                onSelect={(data, value) => props.onSelect(data, value, "gender")}
                                placeholder="SELECT"
                                selectedItem={props.gender && props.gender}
                                data={[
                                    { name: 'MALE', value: "MALE" },
                                    { name: 'FEMALE', value: "FEMALE" }
                                ]}
                            />
                        </div>

                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Employment
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                onSelect={(data, value) => props.onSelect(data, value, "employment")}
                                placeholder="SELECT"
                                selectedItem={props.employment && props.employment}
                                data={[
                                    { name: 'YES', value: "YES" },
                                    { name: 'NO', value: "NO" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Academic Degree
                        </Typography>
                        <div className="w-30">
                            <SiteLabelTextField placeholder="TYPE" value={props.degree} onChange={(event) => props.handleChange("degree", event)} />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Location
                        </Typography>
                        <div className="w-30">
                            <SiteLabelTextField placeholder="TYPE" value={props.location} onChange={(event) => props.handleChange("location", event)} />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Date of Birth
                        </Typography>
                        <div className="w-30">
                            <SiteLabelTextField placeholder="TYPE" value={props.dob} onChange={(event) => props.handleChange("dob", event)} />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Election Center
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                onSelect={(data, value) => props.onSelect(data, value, "electionCenter")}
                                placeholder="SELECT"
                                selectedItem={props.electionCenter && props.electionCenter}
                                data={allZones}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Profile Picture
                        </Typography>
                        <div className="w-30">
                            <ImageUpload {...props} />
                            {/* <Button variant="contained" classes={{ root: "greenBtn" }} className="py-2">
                                Upload
                            </Button> */}
                        </div>
                    </div>
                    <div className="text-center pt-5">
                        <CustomRedButton onClick={props.onHandleClick}>
                            Submit
                        </CustomRedButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
