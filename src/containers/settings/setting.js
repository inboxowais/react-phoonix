import { Button, DialogContent, Typography } from '@material-ui/core'
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

function Dashboard(props) {

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
                        <i className = 'fa fa-times text-white'></i>
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
                            wrapped
                            {...a11yProps('one')}
                            classes={{
                                wrapper: classes.wrapper,
                                selected: classes.selected,

                            }}
                        />
                        <Tab
                            value="two"
                            classes={{
                                wrapper: classes.wrapper,
                                selected: classes.selected
                            }}
                            color="#000000" label="Channels" {...a11yProps('two')} />

                    </Tabs>
                </AppBar>

                <TabPanel value={value} index="one">
                    {

                        <div className={`d-flex flex-column ${mobileWidth && 'w-100'} ${!mobileWidth && 'w-30'}`}>
                            <div className="d-flex justify-content-center align-items-center flex-column" style = {{width:100}}>
                                <div className={classes.uploadBox}>
                                    <i className="fa fa-plus" style = {{fontSize:20}}></i>
                                </div>
                                <Typography color="primary" variant="subtitle1" style = {{fontSize:8}} className='font-weight-bolder font-size-small text-center'>Upload Photo</Typography>

                            </div>
                            <div className="pt-4">
                                <SiteLabelTextField
                                    placeholder="John DOde"
                                />
                            </div>
                            <div className="pt-4">
                                <SiteLabelTextField
                                    placeholder="inbox@test.com"
                                />
                            </div>
                            <Typography color="primary" variant="body2" className='font-weight-bolder'>Change Email Address</Typography>
                            <div className="pt-4">
                                <SiteLabelTextField
                                    value="Abcd"
                                    endAdornment={<i className='fa fa-eye'></i>}
                                    type="Password"
                                />
                            </div>
                            <Typography color="primary" variant="body2" className='font-weight-bolder'>Change Password</Typography>
                            <div className = "pt-4">
                                <Button fullWidth>Save Changes</Button>
                            </div>
                        </div>
                    }
                </TabPanel>
                <TabPanel value={value} index="two">
                    Collaborations
                </TabPanel>

            </div>
        </div>
    )
}

export default withRouter(Dashboard)