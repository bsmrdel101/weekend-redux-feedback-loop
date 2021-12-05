import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";

function Review() {
    const feedbackResults = useSelector((store) => store.feedbackReducer);

    const addFeedback = () => {
      axios({
        method: 'POST',
        url: '/feedback',
        data: feedbackResults
      }).then((response) => {
        console.log('response: ', response);
      }).catch((error) => {
        console.log('error: ', error);
      })
    }

    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        // push feedback into the database
        addFeedback();
        // clear feedback reducer           
        dispatch({
            type: 'CLEAR_FEEDBACK'
        })     
        history.push('/submission');
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