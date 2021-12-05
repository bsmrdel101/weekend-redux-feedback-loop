import { useSelector, useDispatch } from "react-redux";

function Admin() {
    const feedbackResults = useSelector((store) => store.feedbackReducer);

    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

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