import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button } from "@mui/material";

function Comments() {
    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // Stores input data on local state
    let [commentsScore, setCommentsScore] = useState('');

    // Updates feedback reducer with input value
    const handleCommentsScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEEDBACK_SCORE',
            payload: commentsScore
        });
        // history.push
        history.push('/review');
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={(event) => handleCommentsScore(event)}>
                <TextField id="filled-basic" label="Leave a comment" variant="standard" type="text"
                onChange={(event) => {setCommentsScore(event.target.value)}}/>
                <div>
                    <Button variant="contained" type="submit">Next</Button>
                </div>
            </form>
        </>
    );
}

export default Comments;