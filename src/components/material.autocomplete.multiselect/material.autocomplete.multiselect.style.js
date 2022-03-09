import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    label: {
        display: 'block',
    },
    input: {
        width: "100%",
        position: "relative"
    },
    inputSelected: {
        width: "27%",
        position: "relative"
    },
    borderRadiusFull: {
        //borderRadius: '20px 20px 20px 20px'
    },
    borderRadiusPartial: {
        //borderRadius: '20px 20px 0px 0px'
    },
    paperRoot: {
        width: '100%',
        minHeight: '40px',
        border: '1px',
        position: "relative",
        boxShadow: '0px 4px 6px -2px rgb(90 85 85 / 20%)',
        outline: 'none',
        background: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center'
    },
    listItem: {
        paddingTop: '9px',
        paddingBottom: '9px',
        paddingRight: '9px',
        paddingLeft: '12px'
    },
    listbox: {
        margin: "auto",
        zIndex: theme.zIndex.modal,//TODO
        top: '7vh',
        paddingLeft: '0px',
        position: 'absolute',
        listStyle: 'none',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 250,
        border: '0px solid rgba(0,0,0,.25)',
        '& li[data-focus="true"]': {
            backgroundColor: '#0026b3',// '#4a8df6',
            color: theme.palette.background.paper,
            cursor: 'pointer',
        },
        '& li:active': {
            backgroundColor: "#0026b3", // theme.palette.secondary.main,
            color: theme.palette.background.paper
        }
    },
    secondaryBackground: {
        background: theme.palette.secondary.main,
        color: "#ffffff",
        fontWeight: "bolder"
    }
}));


