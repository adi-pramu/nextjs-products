import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "../../helper/styles";
const { useMutation } = require("@apollo/client");
const { SET_SUBSCRIPTION } = require("../../helper/schema");

const Subscribe = () => {
    const classes = useStyles();
    const [addSubscription, { data, loading, error }] = useMutation(SET_SUBSCRIPTION);
    const [email, setEmail] = useState("");

    if (loading) return <h1>Submitting...</h1>
    if (error) return <h1>Submission error! {error.message}</h1>

    return (
        <>
            <Box className={classes.backgroundColor}>
                <h1>Subscription</h1>

                <form>
                    <FormControl>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="email-text" />
                        <FormHelperText id="email-text">We will never share your email.</FormHelperText>
                    </FormControl>

                    <br/>
                    <br/>
                    <Button onClick={() => addSubscription({ variables: { email: email } })} variant="contained" color="primary">
                        Click Here
                    </Button>
                </form>

                {data && 
                    <>
                        <h2>{data.subscribe.status.message}</h2>
                    </>
                }
            </Box>
        </>
    )
}
export default Subscribe