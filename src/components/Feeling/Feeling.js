import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

function Feeling() {
    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // Stores input data on local state
    let [feelingScore, setFeelingScore] = useState(0);

    // Updates feedback reducer with input value
    const handleFeelingScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEEDBACK_SCORE',
            payload: feelingScore
        });
        // history.push
        history.push('/understanding');
    }

    // User will input value
    // Value is stored in feedbackReducer
    // This repeats for every form
    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={(event) => handleFeelingScore(event)}>
                <input type="number" 
                    // value={feelingScore}
                    onChange={(event) => {setFeelingScore(event.target.value)}} 
                    required/>
                {/* <button onClick={handleFeelingScore}>Next</button> */}
                <button type="submit">Next</button>
            </form>
        </>
    );
}

export default Feeling;