import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

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
            type: 'ADD_UNDERSTANDING_SCORE',
            payload: understandingScore
        });
        // history.push
        history.push('/support');
    }

    return (
        <>
            <h1>How well are you Understanding the content?</h1>
            <form onSubmit={(event) => handleUnderstandingScore(event)}>
                <input type="number" 
                    value={understandingScore}
                    onChange={(event) => {setUnderstandingScore(event.target.value)}} />
                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default Understanding;