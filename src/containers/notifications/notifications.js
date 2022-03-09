import { Button, DialogContent, Switch, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withRouter } from 'react-router-dom'
import SiteLabelTextField from '../../components/site.label.textfield/site.label.textfield';
import { Divider } from 'antd';
import { IsMobileWidth } from 'components/utils/util';


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

function Notifications(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState('one');
    const [dialogIsOpen, setDialogIsOpen] = React.useState(true)

    const { isFirstTimeUser } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirectTo = (route) => {
        props.history.push(route)
    }

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
                    <Typography variant="h5" className="font-weight-bolder applied-font">
                        Notifications
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
                            className='applied-font'
                            label="All Notifications"
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
                            color="#000000" label="Prefrences" {...a11yProps('two')} />

                    </Tabs>
                </AppBar>

                <TabPanel value={value} index="one">
                    {

                        <div className={`d-flex flex-column ${mobileWidth && 'w-100',!mobileWidth && 'w-40'}`}>
                            <div className="d-flex  background-light p-3 mt-2">
                                <div className="d-flex ">
                                    <div style={{ color: "#0065FF" }}><i class="fas fa-circle"></i></div>
                                    <div className="pl-2 d-flex flex-column">
                                        <div>
                                            <Typography color="primary" className="font-weight-bolder applied-font" color="primary">
                                                Applet Update
                                            </Typography>
                                        </div>
                                        <div className='text-muted pt-2 applied-font'>
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  p-3 mt-2">
                                <div className="d-flex ">
                                    <div style={{ color: "#FEAA48" }}><i class="fas fa-circle"></i></div>
                                    <div className="pl-2 d-flex flex-column">
                                        <div>
                                            <Typography style={{ color: "#FEAA48" }} color="#FEAA48" className="font-weight-bolder  applied-font" >
                                                New Channel Applet
                                            </Typography>
                                        </div>
                                        <div className='text-muted pt-2  applied-font'>
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  background-light p-3 mt-2">
                                <div className="d-flex ">
                                    <div style={{ color: "#FD586B" }}><i class="fas fa-circle"></i></div>
                                    <div className="pl-2 d-flex flex-column">
                                        <div>
                                            <Typography style={{ color: "#FD586B" }} className="font-weight-bolder" color="primary">
                                                Latest Release
                                            </Typography>
                                        </div>
                                        <div className='text-muted pt-2'>
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex  p-3 mt-2">
                                <div className="d-flex ">
                                    <div style={{ color: "#FEAA48" }}><i class="fas fa-circle"></i></div>
                                    <div className="pl-2 d-flex flex-column">
                                        <div>
                                            <Typography style={{ color: "#FEAA48" }} color="#FEAA48" className="font-weight-bolder" >
                                                New Channel Applet
                                            </Typography>
                                        </div>
                                        <div className='text-muted pt-2'>
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, ipsum dolor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </TabPanel>
                <TabPanel value={value} index="two">
                    <div className="d-flex mt-2">
                        <div className="d-flex flex-column border-bottom">
                            <Typography variant="h6" className="font-weight-bolder">Applets Update</Typography>
                            <Typography className="pt-2" variant="body2">Whether your applets need to be updated based on new Phoenix NC launches.</Typography>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-bell"></i>
                                    <Typography variant="body2" className="pl-2">Notifications on Phoenix NC</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-envelope"></i>
                                    <Typography variant="body2" className="pl-2">Email</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                    <Divider />
                    <div className="d-flex mt-2">
                        <div className="d-flex flex-column border-bottom">
                            <Typography variant="h6" className="font-weight-bolder">Applets Update</Typography>
                            <Typography className="pt-2" variant="body2">Whether your applets need to be updated based on new Phoenix NC launches.</Typography>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-bell"></i>
                                    <Typography variant="body2" className="pl-2">Notifications on Phoenix NC</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-envelope"></i>
                                    <Typography variant="body2" className="pl-2">Email</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                    <Divider />
                    <div className="d-flex mt-2">
                        <div className="d-flex flex-column border-bottom">
                            <Typography variant="h6" className="font-weight-bolder">Applets Update</Typography>
                            <Typography className="pt-2" variant="body2">Whether your applets need to be updated based on new Phoenix NC launches.</Typography>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-bell"></i>
                                    <Typography variant="body2" className="pl-2">Notifications on Phoenix NC</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-envelope"></i>
                                    <Typography variant="body2" className="pl-2">Email</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                    <Divider />
                    <div className="d-flex mt-2">
                        <div className="d-flex flex-column border-bottom">
                            <Typography variant="h6" className="font-weight-bolder">Applets Update</Typography>
                            <Typography className="pt-2" variant="body2">Whether your applets need to be updated based on new Phoenix NC launches.</Typography>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-bell"></i>
                                    <Typography variant="body2" className="pl-2">Notifications on Phoenix NC</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            <div className="d-flex w-100 justify-content-between pt-2">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-envelope"></i>
                                    <Typography variant="body2" className="pl-2">Email</Typography>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Typography>On</Typography>
                                    <Switch
                                        color="primary"
                                    />
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                    <Divider />
                </TabPanel>

            </div>
        </div>
    )
}

export default withRouter(Notifications)