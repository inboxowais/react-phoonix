import { Typography, Button, FormControlLabel } from '@material-ui/core';
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield';
import RadioButton from '@material-ui/core/Radio'
import MaterialAutoComplete from '../../components/material.autocomplete/material.autocomplete';
import NotesTextField from '../../components/notes.textfield/notes.textfield';
import './builder.applet.scss'
import { IsMobileWidth } from 'components/utils/util';


export default function Dashboard() {


    const mobileWidth = IsMobileWidth()
    return (
        <div className='w-100'>
            <div className={`w-100 d-flex ${mobileWidth && 'flex-column'}`}>
                <div className={!mobileWidth && `w-50 pl-3 pr-3`,mobileWidth && 'w-100'} style={{ height: "85vh", overflow: "auto" }}>
                    <h5 className="font-weight-bold">Name</h5>
                    <div>
                        <SiteLabelTextField
                            placeholder="What is the name of this step"
                            lightBorder
                        />
                    </div>
                    <h5 className="font-weight-bold pt-4">Type Of Step</h5>
                    <div className={`d-flex ${mobileWidth && 'flex-column'}`}>
                        <div className='d-flex box background-light justify-content-center align-items-center pl-2 pr-2'>
                            <div className="d-flex">
                                <div><i className="fa fa-star color-light"></i></div>
                                <div className="pl-1 color-light">Parent</div>
                            </div>
                        </div>
                        <div className='d-flex box background-light justify-content-center align-items-center ml-2 pl-2 pr-2'>
                            <div className="d-flex">
                                <div><i className="fa fa-star color-light"></i></div>
                                <div className="pl-1 color-light">Decision</div>
                            </div>
                        </div>
                        <div className='d-flex box background-light justify-content-center align-items-center ml-2 pl-2 pr-2'>
                            <div className="d-flex">
                                <div><i className="fa fa-star color-light"></i></div>
                                <div className="pl-1 color-light">Linked</div>
                            </div>
                        </div>
                        <div className='d-flex box background-light justify-content-center align-items-center ml-2 pl-2 pr-2'>
                            <div className="d-flex">
                                <div><i className="fa fa-star color-light"></i></div>
                                <div className="pl-1 color-light">Procedure</div>
                            </div>
                        </div>

                    </div>
                    <h5 className="font-weight-bold pt-4">Media</h5>
                    <div className="big-box background-light d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-upload"></i>
                            </div>
                            <div className="pt-2 font-weight-bold">Upload File</div>
                            <div className="pt-2 w-50 text-center color-light">Drag and drop or choose your .png, .jpg, .mp4, .mov file
                                (maximum 50 MB)</div>
                            <div className="pt-2">
                                <Button disableElevation className="background-button-light" style={{ color: "black", fontWeight: "bolder" }}>Choose File</Button>
                            </div>
                        </div>
                    </div>
                    <h5 className="font-weight-bold pt-2">Description</h5>
                    <div className="w-80">
                        <NotesTextField
                            placeholder="Up to 400 characters"
                        />
                    </div>
                    <h5 className="font-weight-bold pt-4">Audio</h5>
                    <div className="d-flex">
                        <div className='d-flex box background-light justify-content-center align-items-center pl-2 pr-2'>
                            <div className="d-flex">
                                <div><i className="fa fa-star color-light"></i></div>
                                <div className="pl-1 color-light">Parent</div>
                            </div>
                        </div>
                        <div className='d-flex box background-light justify-content-center align-items-center ml-2 pl-2 pr-2'>
                            <div className="d-flex">
                                <div><i className="fa fa-star color-light"></i></div>
                                <div className="pl-1 color-light">Decision</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 w-100 d-flex justify-content-center">
                        <div className="d-flex">
                            <Button className = "background-button-light" disableElevation variant="contained" style={{ borderRadius: 10 }}>
                                Preview
                            </Button>
                            <Button className="ml-1" variant="contained" style={{ borderRadius: 10 }}>
                                Add Step
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={!mobileWidth && `w-50 pl-3 pr-3`,mobileWidth && 'w-100 pt-2'} style={{ height: "100vh", overflow: "auto" }}>
                    <div className="w-100 d-flex justify-content-center">
                        <Button disableElevation className = "background-button-light">Add A Step</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
