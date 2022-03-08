import { Link } from 'react-router-dom';

function VaxTable({ vaxxes, id }){
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
        <div id='add-vax-div'><Link to={`/addvax/${id}`}><button className='table-button'>Add Vaccination</button></Link></div>
    </div>
)

}

export default VaxTable;