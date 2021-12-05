import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function Admin() {
    const feedbackResults = useSelector((store) => store.feedbackReducer);

    // Declare dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        getFeedback();
      }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback',
        }).then((response) => {
            console.log('response: ', response);
        }).catch((error) => {
            console.log('error: ', error);
        })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{feedbackResults[0]}</td>
                    </tr>
                </tbody>
                <tfoot />
            </table>
        </>
    );
}

export default Admin;