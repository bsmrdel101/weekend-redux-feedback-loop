import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Feeling() {
    // Declare dispatch
    const dispatch = useDispatch();

    // Stores input data
    let [feelingNumber, setFeelingNumber] = useState(0);

    const feedbackReducer = useSelector(store => store.artistReducer);

    // User will input value
    // Value is stored in feedbackReducer
    // This repeats for every form
    return (
        <>
            <h1>How are you feeling today?</h1>
            <input type="number" 
            value={feelingNumber}/>
            <button>Next</button>
        </>
    );
}

export default Feeling;