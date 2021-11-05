import React from 'react';
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
        marginRight: 36,
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
        backgroundColor: theme.palette.primary.main
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        overflowX: 'hidden',
        width: theme.spacing(5) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
        backgroundColor: theme.palette.primary.main
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
}));

function Header(props) {

    const { open } = props
    const classes = useStyles()
    const theme = useTheme();

    const redirectTo = (route) => {
        props.history.push(route)
    }

    const mobileWidth = IsMobileWidth()
    return (
        <React.Fragment>
            <Drawer
                 variant={!mobileWidth ? "permanent" : "temporary"}
                open = {mobileWidth ? open : false}
                onClose = {() => props.handleDrawerClose()}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,

                    }),
                    root: "bg-primary"
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={props.handleDrawerClose}
                        classes={{
                            root: "text-white"
                        }}
                    >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List style={{ height: "100vh" }}>
                    <ListItem
                        classes={{
                            selected: "bg-primary"
                        }}
                        selected={window.location.pathname.includes("/home") ? true : false}
                        button className="text-white" onClick={() => redirectTo("/home")}>
                        <ListItemIcon
                            classes={{
                                root: "text-white",

                            }}
                        >{<i class="fas fa-home"></i>}</ListItemIcon>
                        <ListItemText primary={"Home"} className="text-white" />
                    </ListItem>
                    <ListItem
                        classes={{
                            selected: "bg-primary"
                        }}
                        selected={window.location.pathname.includes("/applets") ? true : false}
                        button className="text-white" onClick={() => redirectTo("/applets")}>
                        <ListItemIcon
                            classes={{
                                root: "text-white"
                            }}
                        >{<i class="fa fa-list-ol"></i>}</ListItemIcon>
                        <ListItemText primary={"Applets"} className="text-white" />
                    </ListItem>
                    <ListItem
                        classes={{
                            selected: "bg-primary"
                        }}
                        selected={window.location.pathname.includes("/create") ? true : false}
                        button className="text-white" onClick={() => redirectTo("/create")}>
                        <ListItemIcon
                            classes={{
                                root: "text-white"
                            }}
                        >{<i class="fas fa-plus"></i>}</ListItemIcon>
                        <ListItemText primary={"Create"} className="text-white" />
                    </ListItem>

                </List>

                <List>
                    <Divider style={{ backgroundColor: "#ffffff" }} />

                    <ListItem
                        classes={{
                            selected: "bg-primary"
                        }}
                        selected = {window.location.pathname.includes("/notifications") ? true : false}
                        button className="text-white" onClick={() => redirectTo("/notifications")}>
                        <ListItemIcon
                            classes={{
                                root: "text-white"
                            }}
                        >{<i className="fa fa-bell"></i>}</ListItemIcon>
                        <ListItemText primary={"Notification"} className="text-white" />
                    </ListItem>
                    <ListItem
                        classes={{
                            selected: "bg-primary"
                        }}
                        selected = {window.location.pathname.includes("/settings") ? true : false}
                        button className="text-white" onClick={() => redirectTo("/settings")}>
                        <ListItemIcon
                            classes={{
                                root: "text-white"
                            }}
                        >{<i className="fa fa-cog"></i>}</ListItemIcon>
                        <ListItemText primary={"Settings"} className="text-white" />
                    </ListItem>
                    <ListItem
                        classes={{
                            selected: "bg-primary"
                        }}
                        button className="text-white" onClick={() => redirectTo("/quick-help")}>
                        <ListItemIcon
                            classes={{
                                root: "text-white"
                            }}
                        >{<i className="fa fa-info pl-1"></i>}</ListItemIcon>
                        <ListItemText primary={"Quick Help"} className="text-white" />
                    </ListItem>



                </List>
                <Divider />
            </Drawer>
        </React.Fragment>
    )
}

export default withRouter(Header)