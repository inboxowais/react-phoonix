import React from 'react'
import { Typography } from '@material-ui/core'
import { Divider } from 'antd'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { IsMobileWidth } from 'components/utils/util'
import { useEffect } from 'react';


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
        borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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


export default function DashboardMain(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState('one');
    const [dialogIsOpen, setDialogIsOpen] = React.useState(true)

    const mobileWidth = IsMobileWidth()
    const { isFirstTimeUser } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirectTo = (route) => {
        props.history.push(route)
    }

    useEffect(() => {
        props.getProfile(window.localStorage.getItem("token") && JSON.parse(window.localStorage.getItem("token")).localId ? window.localStorage.getItem("token") &&  JSON.parse(window.localStorage.getItem("token")).localId : props.auth && props.auth.user_id)
    }, [])


    return (
        <div>
            <Typography variant="h5" >Welcome, {props.profile && props.profile.displayName}</Typography>
            <div className={`d-flex align-items-center pt-4 ${!mobileWidth && "justify-content-between"}`}>

                <AppBar
                    elevation={0}
                    classes={{
                        root: classes.appbarRoot
                    }}
                    position="static" className={`bg-transparent d-flex ${mobileWidth && "flex-column align-items-start"}`}>
                    <div>
                        <Typography variant="h6" className="text-dark applied-font"> Insights </Typography>

                    </div>
                    <Tabs
                        classes={{
                            indicator: classes.indicator
                        }}
                        value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                        <Tab
                            value="one"
                            color="#000000"
                            label="Last 7 days"
                            className=' applied-font'
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
                            className=' applied-font'
                            color="#000000" label="Last 30 days" {...a11yProps('two')} />
                        <Tab
                            value="three"

                            classes={{
                                wrapper: classes.wrapper,
                                selected: classes.selected
                            }}
                            className=' applied-font'
                            color="#000000" label="Life Time" {...a11yProps('three')} />

                    </Tabs>
                </AppBar>
            </div>

            <div className={`d-flex w-100 pt-4 ${mobileWidth && "flex-column "}`}>
                <div className="flex-grow-1 d-flex flex-column">
                    <div>
                        <Typography variant="h5">Impressions</Typography>
                    </div>
                    <div>
                        <Typography className='font-weight-bolder' variant="h5">8.3k</Typography>
                    </div>
                    <div >
                        <img className={mobileWidth && "w-80"} src={`${process.env.PUBLIC_URL}/assets/Vector 2.png`} />
                    </div>
                </div>
                <div className="flex-grow-1 d-flex flex-column">
                    <div>
                        <Typography variant="h5">Opens</Typography>
                    </div>
                    <div>
                        <Typography className='font-weight-bolder' variant="h5">8.3k</Typography>
                    </div>
                    <div>
                        <img className={mobileWidth && "w-80"} src={`${process.env.PUBLIC_URL}/assets/Vector 2.png`} />
                    </div>
                </div>
                <div className="flex-grow-1 d-flex flex-column">
                    <div>
                        <Typography variant="h5">Downloads</Typography>
                    </div>
                    <div>
                        <Typography className='font-weight-bolder' variant="h5">679</Typography>
                    </div>
                    <div>
                        <img className={mobileWidth && "w-80"} src={`${process.env.PUBLIC_URL}/assets/Vector 2.png`} />
                    </div>
                </div>
            </div>
            <div className={`d-flex w-100 pt-5 ${mobileWidth && 'flex-column'}`}>
                <div className={`d-flex flex-column ${mobileWidth && "w-100"} ${!mobileWidth && "w-60"}`}>
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <Typography variant="h6">Coming Soon</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" className="text-muted">
                                See All
                            </Typography>

                        </div>

                    </div>
                    <div className="border border-bottom w-100"></div>
                    <div className={`d-flex pt-2 ${mobileWidth && 'flex-column'}`}>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/doctor.png`} />
                        </div>
                        <div className={`${!mobileWidth && `ml-2`} ${mobileWidth && "pt-2"}`}>
                            <img src={`${process.env.PUBLIC_URL}/assets/doctor.png`} />
                        </div>
                        <div className={`${!mobileWidth && `ml-2`} ${mobileWidth && "pt-2"}`}>
                            <img src={`${process.env.PUBLIC_URL}/assets/doctor.png`} />
                        </div>
                        <div className={`${!mobileWidth && `ml-2`} ${mobileWidth && "pt-2"}`}>
                            <img src={`${process.env.PUBLIC_URL}/assets/doctor.png`} />
                        </div>
                    </div>

                </div>
                <div className={`${mobileWidth && "w-100"} ${!mobileWidth && "w-40 pl-4 "}`}>
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <Typography variant="h6">Anouncements</Typography>
                        </div>
                        <div>
                            <Typography variant="h" className="text-muted">
                                See All
                            </Typography>
                        </div>

                    </div>
                    <div className="border border-bottom w-100"></div>
                    <div className="d-flex align-items-center pt-2">
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/avatar.png`} />
                        </div>
                        <div className="d-flex flex-column pl-2">
                            <Typography className="font-weight-bold">News from our CEO</Typography>
                            <Typography><span className="text-primary">Policy Update ·</span> February 17, 2021</Typography>
                        </div>

                    </div>
                    <div className="pt-2">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultrices augue. Maecenas vestibulum feugiat sapien, commodo tempor felis faucibus pulvinar. Duis nec metus et odio pretium viverra nec non quam. Aenean mauris velit, consectetur sit amet imperdiet id.
                        </Typography>
                    </div>

                </div>

            </div>
        </div>
    )
}
