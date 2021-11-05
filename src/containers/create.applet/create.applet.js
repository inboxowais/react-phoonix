import { Typography, Button, FormControlLabel } from '@material-ui/core';
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield';
import RadioButton from '@material-ui/core/Radio'
import MaterialAutoComplete from '../../components/material.autocomplete/material.autocomplete';
import NotesTextField from '../../components/notes.textfield/notes.textfield';
import { withRouter } from 'react-router-dom'
import { IsMobileWidth } from 'components/utils/util';

function Dashboard(props) {

    const redirectTo = () => {
        props.history.push("/builder")
    }
    const mobileWidth = IsMobileWidth()

    return (
        <div className='w-100'>
            <div className={`d-flex flex-column ${mobileWidth && "w-100"} ${!mobileWidth && 'w-50'}`}>
                <Typography variant="h5" className="font-weight-bolder">Build Your Applet</Typography>
                <div className='pt-2'>
                    <Typography variant="h6" className="font-weight-bold">Name</Typography>
                    <SiteLabelTextField
                        lightBorder
                        placeholder="What is your applet’s name?"
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Description</Typography>
                    <NotesTextField
                        lightBorder
                        placeholder="Write a brief applet description (up to 280 characters)"
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Channel</Typography>
                    <MaterialAutoComplete
                        placeholder="Select up to three categories"
                        lightBorder
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
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold" >Categories</Typography>
                    <MaterialAutoComplete
                        lightBorder
                        placeholder="Select up to three categories"
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
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Keywords</Typography>
                    <SiteLabelTextField
                        placeholder="Include particular themes or subjects"
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
                        lightBorder
                    />
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Cover</Typography>
                    <div className="d-flex flex-column">
                        <FormControlLabel
                            color="primary"
                            control={
                                <RadioButton
                                    color="primary"
                                />
                            }
                            label="Use first media as thumbnail"
                        />
                        <FormControlLabel
                            color="primary"
                            control={
                                <RadioButton
                                    color="primary"
                                />
                            }
                            label="Upload Image"
                        />
                    </div>
                </div>
                <div className='pt-4'>
                    <Typography variant="h6" className="font-weight-bold">Legal Agreement</Typography>
                    <div className="pt-2">
                        By continuing, I agree to all applicable <span className="text-primary">Phoenix NC Terms</span> and <span className="text-primary"> Phoenix NC Policies</span>.
                    </div>
                </div>
                <div className="pt-4 w-100 d-flex justify-content-center">
                    <Button variant="contained" style={{ borderRadius: 10 }} onClick = {() => redirectTo("/builder")}>
                        Start Building
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Dashboard)