import { useSelector, useDispatch } from "react-redux";

function Feeling() {
    // Declare dispatch
    const dispatch = useDispatch();

    const feedbackReducer = useSelector(store => store.artistReducer);

    // User will input value
    // Value is stored in feedbackReducer
    // This repeats for every form
    return (
        <>
            <h1>How are you feeling today?</h1>
            <input type="number"></input>
            <button>Next</button>
        </>
    );
}

export default Feeling;