import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

function Support() {
     // Declare dispatch and history
     const dispatch = useDispatch();
     const history = useHistory();
 
     // Stores input data on local state
     let [supportScore, setSupportScore] = useState(0);
 
     // Updates feedback reducer with input value
     const handleSupportScore = (event) => {
         event.preventDefault();
         dispatch({
             type: 'ADD_FEEDBACK_SCORE',
             payload: supportScore
         });
         // history.push
         history.push('/comments');
     }
 
     return (
         <>
             <h1>How well are you being supported?</h1>
             <form onSubmit={(event) => handleSupportScore(event)}>
                 <input type="number" 
                     onChange={(event) => {setSupportScore(event.target.value)}} 
                     placeholder="Enter a number 0 - 5"
                     required/>
                 <button type="submit">Next</button>
             </form>
         </>
     );
}

export default Support;