import { useSelector } from "react-redux";

function Review() {
    const feedbackResults = useSelector((store) => store.feedbackReducer);

    return (
        <>
            <h1>Review your feedback</h1>
            <p>Feeling: {feedbackResults[0]}</p>
            <p>Understanding: {feedbackResults[1]}</p>
            <p>Support: {feedbackResults[2]}</p>
            <p>Comments: {feedbackResults[3]}</p>
        </>
    );
}

export default Review;