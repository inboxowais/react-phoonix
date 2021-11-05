import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  label: {
    display: 'block',
  },
  input: {
    width: "100%",
    position: "relative",
    pointerEvents:"none"
  },
  borderRadiusFull : {
    //borderRadius: '20px 20px 20px 20px'
  },
  borderRadiusPartial: {
    //borderRadius: '20px 20px 0px 0px'
  },
  paperRoot: {
    width: '100%',
    height: '40px',
    border: "1px solid #112950",
    position: "relative",
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    backgroundColor:"transparent",
    borderRadius:"12px"

  },
  listItem: {
    paddingTop: '9px',
    paddingBottom: '9px',
    paddingRight: '9px',
    paddingLeft: '12px'
  },
  listbox: {
    margin: "auto",
    zIndex: theme.zIndex.modal,
    top: '7vh',
    paddingLeft: '0px',
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 240,
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
    color:"#ffffff",
    fontWeight:"bolder"
  }
}));

