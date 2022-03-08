import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddVax({ user, vaccines, setVaccines, currentPetId }){
let history = useHistory();
const [ newVaxForm, setNewVaxForm ] = useState({
    name: '', 
    description: '', 
    date_received: '',
    expiration_date: '',
    name_of_vet_clinic: '',
    user_id: user.id,
    pet_id: currentPetId
})

console.log(user.id)
console.log(currentPetId)

console.log(newVaxForm)

function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setNewVaxForm({...newVaxForm, [key]: value})
}

function addAVaccine(e){
    e.preventDefault();
    fetch('/vaccinations', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newVaxForm)
    })
    console.log(newVaxForm)
    // .then(res => {
    //     if (res.ok) {
    //         res.json()
    //         .then(data => {
    //             setVaccines([...vaccines, data])
    //             setNewVaxForm({
    //                 name: '', 
    //                 description: '', 
    //                 date_received: '',
    //                 expiration_date: '',
    //                 name_of_vet_clinic: '',
    //                 user_id: user.id,
    //                 pet_id: currentPetId
    //             })
    //             history.push(`/pets/${currentPetId}`)
    //         })
    //     } else {
    //         res.json()
    //         .then(response => console.log(response))
    //     }
    // })
}

    return(
        <div>
            <div><h2>Add Your Pet's Vaccinations</h2></div>
                <div id='new-vax-form-container'>
                    <form id='new-vax-form' onSubmit={addAVaccine}>
                    <input name="name" placeholder="Name of Vaccination" className="user-input" onChange={handleChange}></input>
                    <input name="description" placeholder="Description" className="user-input" onChange={handleChange}></input>
                    <p>Format YYYY/MM/DD</p>
                    <input name="date_received" placeholder="Date Received" className="user-input" onChange={handleChange}></input>
                    <p>Format YYYY/MM/DD</p>
                    <input name="expiration_date" placeholder="Expiration Date" className="user-input" onChange={handleChange}></input>
                    <input name="name_of_vet_clinic" placeholder="Issuing Vet Clinic" className="user-input" onChange={handleChange}></input>
                    <input type="submit" value="Save" className="form-button"></input>
                    </form>
                </div>
        </div>
        

    )
}

export default AddVax;