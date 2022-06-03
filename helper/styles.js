import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backgroundColor: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '50px',
        [theme.breakpoints.down('sm')]: {
            padding: '30px',
            margin: '20px'
        }
    }
}))