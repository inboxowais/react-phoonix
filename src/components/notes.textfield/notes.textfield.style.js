import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
  textColor: {
    color: theme.palette.secondary.main,
  },
  nooutline: {
    outline: 'none',
  },
  noBorder: {
    border: 'none',
  },
  iconColor: {
    color: theme.palette.secondary.main,
  },
  input: {
    height: 8,
  },
}))