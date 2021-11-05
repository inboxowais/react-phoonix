import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Switch, Input, InputAdornment } from '@material-ui/core'
import SiteLabelTextField from '../../../../components/site.label.textfield/site.label.textfield'
import MaterialAutoComplete from '../../../../components/material.autocomplete/material.autocomplete'
import RemoveApplet from './remove.applet/remove.applet'
import { IsMobileWidth } from 'components/utils/util'

function SignUp(props) {

    const [deleteDialogIsOpen,setDeleteDialogIsOpen] = useState(false)

    const mobileWidth = IsMobileWidth()
    return (
        <div className="applet-list w-100">
            <RemoveApplet 
              open = {deleteDialogIsOpen}
              successButtonText = "Remove"
              deleteButtonText = "Cancel"
              handleClose = {() => setDeleteDialogIsOpen(false)}
              title = "Remove Applet ?"
            >
                <b>Your applet won’t be visible to you any longer, but any other users that downloaded it previously will.</b>
            </RemoveApplet>
            <div className={`d-flex w-80 pb-3 ${mobileWidth && 'flex-column w-100'}`} >
                <div className={`${!mobileWidth && 'w-30'} ${!mobileWidth && 'w-100'}`}>
                    <Input
                        id="input-with-icon-adornment"
                        placeholder="Search"
                        fullWidth

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
                        bordered
                        data={[
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            }
                        ]}
                    />
                </div>
                <div className={`${!mobileWidth && 'w-30 pl-2'} ${mobileWidth && 'w-100 pt-2'}`}>
                    <MaterialAutoComplete
                        placeholder="Created"
                        bordered
                        data={[
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            }
                        ]}
                    />
                </div>
                <div className={`${!mobileWidth && 'w-30 pl-2'} ${mobileWidth && 'w-100 pt-2'}`}>
                    <MaterialAutoComplete
                        placeholder="Updated"
                        bordered
                        data={[
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            },
                            {
                                name: "test",
                                value: "test"
                            }
                        ]}
                    />
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
                            Status
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Actions
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                <div className="d-flex w-100">
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Diabetes Diagnosis
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 10, 2021, 11:45 AM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 24, 2021, 14:38 PM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            <Switch
                                color="primary"
                                onChange = {() => setDeleteDialogIsOpen(!deleteDialogIsOpen)}
                            />
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex w-100 align-items-center justify-content-center ${mobileWidth && 'flex-column'}`}>
                            <div>
                                <i class="fa fa-cloud-download-alt" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-trash-alt  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-paperclip  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                <div className="d-flex w-100">
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Diabetes Diagnosis
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 10, 2021, 11:45 AM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 24, 2021, 14:38 PM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            <Switch
                                color="primary"
                            />
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex w-100 align-items-center justify-content-center ${mobileWidth && 'flex-column'}`}>
                            <div>
                                <i class="fa fa-cloud-download-alt" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-trash-alt  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-paperclip  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                <div className="d-flex w-100">
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Diabetes Diagnosis
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 10, 2021, 11:45 AM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 24, 2021, 14:38 PM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            <Switch
                                color="primary"
                            />
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex w-100 align-items-center justify-content-center ${mobileWidth && 'flex-column'}`}>
                            <div>
                                <i class="fa fa-cloud-download-alt" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-trash-alt  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-paperclip  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                <div className="d-flex w-100">
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Diabetes Diagnosis
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 10, 2021, 11:45 AM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 24, 2021, 14:38 PM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            <Switch
                                color="primary"
                            />
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex w-100 align-items-center justify-content-center ${mobileWidth && 'flex-column'}`}>
                            <div>
                                <i class="fa fa-cloud-download-alt" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-trash-alt  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-paperclip  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${mobileWidth && 'w-100'} ${!mobileWidth && 'w-100'}`}>
                <div className="d-flex w-100">
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Diabetes Diagnosis
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 10, 2021, 11:45 AM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            Aug 24, 2021, 14:38 PM
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div>
                            <Switch
                                color="primary"
                            />
                        </div>
                    </div>
                    <div className="w-20 border table-border p-2 d-flex justify-content-center align-items-center">
                        <div className={`d-flex w-100 align-items-center justify-content-center ${mobileWidth && 'flex-column'}`}>
                            <div>
                                <i class="fa fa-cloud-download-alt" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-trash-alt  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                            <div className="pl-2">
                                <i className="fa fa-paperclip  cursor-pointer" style={{ color: '#112950' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default withRouter(SignUp)