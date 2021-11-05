import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { ClickAwayListener, Paper, Popper } from '@material-ui/core'
import { IsMobileWidth } from 'components/utils/util'




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        // marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: "#0F3D91",
    },
}));


function Header(props) {

    const classes = useStyles();
    const theme = useTheme();

    const { open } = props

    const goBack = () => {
        props.history.goBack()
    }

    const mobileWidth = IsMobileWidth()


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        debugger
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const openD = Boolean(anchorEl);
    const id = openD ? 'simple-popper' : undefined;

    const redirectTo = (route) => {
        props.resetAuth()
        window.localStorage.removeItem("token")
        props.history.push(route)
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                className={clsx(classes.appBar, 'd-flex justify-content-between', {
                    [classes.appBarShift]: open && !mobileWidth
                })}
                classes={{
                    root: "bg-white"
                }}

            >
                <Toolbar className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        {

                            window.location.pathname.includes("createApplet") || window.location.pathname.includes("builder") ? <div className="cursor-pointer">
                                <Typography color="primary" onClick={goBack}><i class="fa fa-angle-left pr-2 text-primary"></i></Typography>
                            </div> :
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={props.handleDrawerOpen}
                                    edge="start"
                                    className={clsx(classes.menuButton, {
                                        [classes.hide]: open,
                                    })}
                                >
                                    <i className="fa fa-bars text-dark"></i>


                                </IconButton>
                        }
                        <div className="d-flex align-items-center pl-3">
                            <div className="bg-primary" style={{ width: 25, height: 25, borderRadius: 10 }}>

                            </div>
                            <Typography
                                className="font-weight-bold pl-1"
                                variant="h5"
                                color="primary"
                                noWrap>
                                Phonenix NC
                            </Typography>
                        </div>
                    </div>
                    <Popper anchorEl={anchorEl} open = {openD} style = {{zIndex:2000}}> 
                    <ClickAwayListener onClickAway = {() => setAnchorEl(false)}>
                        <Paper className = "pl-3 pr-3 pt-3 pb-3 cursor-pointer"  style = {{zIndex:2000,cursor:"pointer"}} onClick= {() => redirectTo("/login")}>Logout</Paper>
                        </ClickAwayListener>
                    </Popper>
                    <div className="text-dark" onClick={handleClick}>
                        <Avatar className={classes.purple}>A</Avatar>
                    </div>
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}

export default withRouter(Header)