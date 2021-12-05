import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button } from "@mui/material";

function Understanding() {
    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // Stores input data on local state
    let [understandingScore, setUnderstandingScore] = useState(0);

    // Updates feedback reducer with input value
    const handleUnderstandingScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEEDBACK_SCORE',
            payload: understandingScore
        });
        // history.push
        history.push('/support');
    }

    return (
        <>
            <h1>How well are you Understanding the content?</h1>
            <form onSubmit={(event) => handleUnderstandingScore(event)}>
                <TextField id="filled-basic" label="Enter a number" variant="standard" type="number"
                onChange={(event) => {setUnderstandingScore(event.target.value)}} required/>
                <div>
                    <Button variant="contained" type="submit">Next</Button>
                </div>
            </form>
        </>
    );
}

export default Understanding;