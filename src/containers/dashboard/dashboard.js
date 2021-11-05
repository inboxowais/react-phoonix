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
import AppletList from './components/applet.list/applet.list'
import { IsMobileWidth } from 'components/utils/util'




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const mobileWidth = IsMobileWidth()
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={mobileWidth ? 1 : 3}>
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
    }
}));

function Dashboard(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState('one');
    const mobileWidth = IsMobileWidth()
    const [dialogIsOpen, setDialogIsOpen] = React.useState(true)

    const { isFirstTimeUser } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirectTo = (route) => {
        props.history.push(route)
    }


    return (
        <div className="w-100">
            <Dialog
                open={false}
                maxWidth="md"
                fullWidth
            >
                <DialogContent>
                    <div className="w-100 d-flex justify-content-end cursor-pointer" style={{ cursor: "pointer" }} onClick={() => setDialogIsOpen(false)}>
                        X
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
                    <Typography variant="h5" className = "font-weight-bolder">
                        Manage Your Applets
                    </Typography>
                </div>
                <div>
                    <Button color="primary" onClick = {() => redirectTo("/createApplet")}>
                        <div className="d-flex align-items-center">
                            <i className="font-weight-bold">+</i>
                            <div className="pl-1">NEW APPLET</div>
                        </div>
                    </Button>
                </div>
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
                            label="Your Applets"
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
                            color="#000000" label="Collaborations" {...a11yProps('two')} />

                    </Tabs>
                </AppBar>

                <TabPanel value={value} index="one">
                    {
                        isFirstTimeUser ?
                            <div style={{ height: mobileWidth ? "100vh" : "50vh" }} className="w-100 d-flex justify-content-center items-center">
                                <div className="w-35 d-flex flex-column justify-content-center align-items-center h-100">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/mobile.png`}
                                    />
                                    <div className="pt-2 font-weight-bolder">No Applets</div>
                                    <div className="text-center pt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultrices augue. Maecenas vestibulum.Morbi a ultrices augue. Maecenas vestibulum feugiat sapien, commodo tempor felis faucibus.
                                    </div>
                                    <div className="mt-2"></div>
                                    <Button color="primary" onClick={() => redirectTo("/createApplet")} >
                                        <div className="d-flex align-items-center">
                                            <i className="font-weight-bold">+</i>
                                            <div className="pl-1">NEW APPLET</div>
                                        </div>
                                    </Button>

                                </div>
                            </div> : <AppletList />
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