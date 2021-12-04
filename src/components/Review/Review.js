import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function Review() {
    const feedbackResults = useSelector((store) => store.feedbackReducer);

    // Declare history
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/submission');
        // push feedback into the database
        
        // clear feedback reducer                
    }

    return (
        <>
            <h1>Review your feedback</h1>
            <p>Feeling: {feedbackResults[0]}</p>
            <p>Understanding: {feedbackResults[1]}</p>
            <p>Support: {feedbackResults[2]}</p>
            <p>Comments: {feedbackResults[3]}</p>
            <button onClick={handleSubmit}>Submit Feedback</button>
        </>
    );
}

export default Review;