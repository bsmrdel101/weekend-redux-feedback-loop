import { useHistory } from "react-router";
import { Button } from "@mui/material";

function Home() {
    const history = useHistory();
    
    const handleStart = () => {
        history.push('/feeling')
    }
    return (
        <>
            <h1>Click to submit feedback</h1>
            <Button variant="outlined" onClick={handleStart}>Start</Button>
        </>
    );
}

export default Home;