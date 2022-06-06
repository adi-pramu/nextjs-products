import { Box, Button, FormHelperText, LinearProgress, Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import { useStyles } from "../../helper/styles";
const { useMutation } = require("@apollo/client");
const { SET_SUBSCRIPTION } = require("../../helper/schema");

const Subscribe = () => {
    const classes = useStyles();
    const [addSubscription, { data, loading, error }] = useMutation(SET_SUBSCRIPTION);
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        addSubscription({ variables: { email: email } });
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // if (loading) return <h1>Submitting...</h1>

    if (loading) return (
        <>
            <Box className={classes.backgroundColor}>
                <LinearProgress />
                <h1>Subscription</h1>

                        <TextField id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="email-text" fullWidth />
                        <FormHelperText id="email-text">We will never share your email.</FormHelperText>

                    <br/>
                    <br/>
                    <Button onClick={()=>handleClick()} variant="contained" color="primary">
                        Submit
                    </Button>

                {data && 
                    <>
                        {data.subscribe.status.response === "Success" ? (
                            // <h2>{data.subscribe.status.message}</h2>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success">
                                {data.subscribe.status.message}
                                </Alert>
                            </Snackbar>
                        ) : (
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error">
                                {data.subscribe.status.message}
                                </Alert>
                            </Snackbar>
                        )}
                        
                    </>
                }
            </Box>
        </>
    )

    if (error) return <h1>Submission error! {error.message}</h1>
    console.log(data);

    return (
        <>
            <Box className={classes.backgroundColor}>
                <h1>Subscription</h1>

                        <TextField id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="email-text" fullWidth />
                        <FormHelperText id="email-text">We will never share your email.</FormHelperText>

                    <br/>
                    <br/>
                    <Button onClick={()=>handleClick()} variant="contained" color="primary">
                        Submit
                    </Button>

                {data && 
                    <>
                        {data.subscribe.status.response === "Success" ? (
                            // <h2>{data.subscribe.status.message}</h2>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success">
                                {data.subscribe.status.message}
                                </Alert>
                            </Snackbar>
                        ) : (
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error">
                                {data.subscribe.status.message}
                                </Alert>
                            </Snackbar>
                        )}
                        
                    </>
                }
            </Box>
        </>
    )
}
export default Subscribe