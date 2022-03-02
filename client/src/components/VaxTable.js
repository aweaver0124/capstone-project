import { Link } from 'react-router-dom';

function VaxTable({ vaxxes }){
return(
    <div id='vax-container'>
        <div id='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Vaccine Name</th>
                        <th>Description</th>
                        <th>Date Received</th>
                        <th>Expiration Date</th>
                        <th>Clinic Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vaxxes}
                </tbody>
            </table>
        </div>
        <Link to={'/add-a-vax'}><button>Add Vaccination</button></Link>
    </div>
)

}

export default VaxTable;