import { useHistory } from "react-router";
import { Button } from "@mui/material";

function Submission() {
    // Declare history
    const history = useHistory();

    const handleReset = () => {
        history.push('/feeling');
    }
    
    return (
        <>
            <h1>Thank you for your feedback!</h1>
            <Button onClick={handleReset} variant="contained">Leave new feedback</Button>
        </>
    );
}

export default Submission;