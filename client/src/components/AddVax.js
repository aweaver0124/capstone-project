import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function AddVax({ user, vaccines, setVaccines }){
const params = useParams();
let history = useHistory();
const [ newVaxForm, setNewVaxForm ] = useState({
    name: '', 
    description: '', 
    date_received: '',
    expiration_date: '',
    name_of_vet_clinic: '',
    user_id: user.id,
    pet_id: params.petId
})

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
    .then(res => {
        if (res.ok) {
            res.json()
            .then(data => {
                setVaccines([...vaccines, data])
                setNewVaxForm({
                    name: '', 
                    description: '', 
                    date_received: '',
                    expiration_date: '',
                    name_of_vet_clinic: '',
                    user_id: user.id,
                    pet_id: params.petId
                })
                history.push(`/pets/${params.petId}`)
            })
        } else {
            res.json()
            .then(response => console.log(response))
        }
    })
}

    return(
        <div id='new-vax-content-container'>
            <div><h2>Add Your Pet's Vaccinations</h2></div>
                <div id='new-vax-form-container'>
                    <form id='new-vax-form' onSubmit={addAVaccine}>
                    <p className='labe1'><strong>Name of Vaccination</strong></p>
                    <input name="name" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='labe1'><strong>Description</strong></p>
                    <input name="description" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='labe1'><strong>Date Received Format YYYY/MM/DD</strong></p>
                    <input name="date_received" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='labe1'><strong>Expiration Date Format YYYY/MM/DD</strong></p>
                    <input name="expiration_date" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='labe1'><strong>Issuing Vet Clinic</strong></p>
                    <input name="name_of_vet_clinic" placeholder="" className="user-input" onChange={handleChange}></input>
                    <input name="user_id" type="hidden" value={user.id}></input>
                    <input name="pet_id" type="hidden" value={params.petId}></input>
                    <div className='submit-form-button'><input type="submit" value="Save" className="form-button"></input></div>
                    </form>
                </div>
        </div>
        

    )
}

export default AddVax;