import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.secondary.main,
    fontWeight: 'bolder',
  },
  closeIcon: {
    background: theme.palette.secondary.main,
    color: '#ffffff',
    borderRadius: 100,
    cursor: 'pointer',
    //position: 'absolute',
    top: 10,
    right: 10,
    width: 34,
    height: 34,
  },
}))
