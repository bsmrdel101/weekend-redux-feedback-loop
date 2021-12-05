import { useHistory } from "react-router";

function Submission() {
    // Declare history
    const history = useHistory();

    const handleReset = () => {
        history.push('/feeling');
    }
    
    return (
        <>
            <h1>Thank you for your feedback!</h1>
            <button onClick={handleReset}>Leave new feedback</button>
        </>
    );
}

export default Submission;