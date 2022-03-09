import { Button, Checkbox, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Image from 'components/image/Image'
import SiteLabelTextField from 'components/site.label.textfield/site.label.textfield'
import MaterialAutoComplete from 'components/material.autocomplete/material.autocomplete'
import CustomRedButton from 'components/custom.red.button/custom.red.button'

export default function FormTwo() {
    return (
        <div>
            <Grid xs={12} container justifyContent="center" className="pt-5">
                <Grid xs={11} md={4}>
                    <div className="pt-5 d-flex align-items-center justify-content-between">
                        <Typography>
                            Select Circle
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                placeholder="SELECT"
                                data={[
                                    { name: '4 Passengers', body: "leorem ipsum" },
                                    { name: '6 Passengers', body: "leorem ipsum1" }
                                ]}
                            />
                        </div>

                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Select Election Center
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                placeholder="SELECT"
                                data={[
                                    { name: '4 Passengers', body: "leorem ipsum" },
                                    { name: '6 Passengers', body: "leorem ipsum1" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Select Election Station
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                placeholder="SELECT"
                                data={[
                                    { name: '4 Passengers', body: "leorem ipsum" },
                                    { name: '6 Passengers', body: "leorem ipsum1" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Select Candidate
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                placeholder="SELECT"
                                data={[
                                    { name: '4 Passengers', body: "leorem ipsum" },
                                    { name: '6 Passengers', body: "leorem ipsum1" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Select Candidate Number
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                placeholder="SELECT"
                                data={[
                                    { name: '4 Passengers', body: "leorem ipsum" },
                                    { name: '6 Passengers', body: "leorem ipsum1" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Numbers Of Votes
                        </Typography>
                        <div className="w-30">
                            <MaterialAutoComplete
                                placeholder="SELECT"
                                data={[
                                    { name: '4 Passengers', body: "leorem ipsum" },
                                    { name: '6 Passengers', body: "leorem ipsum1" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center justify-content-between">
                        <Typography>
                            Images
                        </Typography>
                        <div className="w-30">
                            <Button variant="contained" classes={{ root: "greenBtn" }} className="py-2">
                                Upload
                            </Button>
                        </div>
                    </div>
                    <div className="pt-3 d-flex align-items-center">
                        <Checkbox color="primary" />
                        <Typography className="pl-2 applied-font">
                            Accept the Terms and Conditions
                        </Typography>
                    </div>
                    <div className="text-center pt-5">
                        <CustomRedButton>
                            Submit
                        </CustomRedButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
