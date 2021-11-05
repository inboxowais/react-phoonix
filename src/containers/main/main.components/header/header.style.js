import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    avatar: {
        borderRadius: 100,
        backgroundColor:"#ffffff",
        width:40,
        height:40
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
}))
