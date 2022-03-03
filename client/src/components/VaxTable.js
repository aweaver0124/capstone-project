import { Link } from 'react-router-dom';

function VaxTable({ vaxxes }){
return(
    <div id='vax-container'>
        <div id='table-container'>
            <table id='vax-table'>
                <thead>
                    <tr id='header-row'>
                        <th className='header' style={{width:'200px'}}>Vaccine Name</th>
                        <th className='header' style={{width:'200px'}}>Description</th>
                        <th className='header' style={{width:'200px'}}>Date Received</th>
                        <th className='header' style={{width:'200px'}}>Expiration Date</th>
                        <th className='header' style={{width:'200px'}}>Clinic Name</th>
                        <th className='action-button' style={{width:'100px'}}>Actions</th>
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