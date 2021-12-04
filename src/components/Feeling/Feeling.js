import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Feeling() {
    // Declare dispatch
    const dispatch = useDispatch();

    // Feedback reducer
    const feedbackReducer = useSelector(store => store.artistReducer);

    // Stores input data on local state
    let [feelingScore, setFeelingScore] = useState(0);

    // Updates feedback reducer with input value
    const handleFeelingScore = () => {
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScore
        })
    }

    // User will input value
    // Value is stored in feedbackReducer
    // This repeats for every form
    return (
        <>
            <h1>How are you feeling today?</h1>
            <form>
                <input type="number" 
                    value={feelingScore}
                    onChange={(event) => {setFeelingScore(event.target.value)}} />
                <button onSubmit={handleFeelingScore}>Next</button>
            </form>
        </>
    );
}

export default Feeling;