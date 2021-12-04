import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Feeling() {
    // Declare dispatch
    const dispatch = useDispatch();

    // Feedback reducer
    const feedbackReducer = useSelector(store => store.artistReducer);

    const handleFeelingScore = () => {
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScore
        })
    }

    // Stores input data on local state
    let [feelingScore, setFeelingScore] = useState(0);

    // const handleScoreChange = (event) => {
        
    // }

    // User will input value
    // Value is stored in feedbackReducer
    // This repeats for every form
    return (
        <>
            <h1>How are you feeling today?</h1>
            <form>
                <input type="number" 
                    value={feelingScore}/>
                <button onSubmit={handleFeelingScore}>Next</button>
            </form>
        </>
    );
}

export default Feeling;