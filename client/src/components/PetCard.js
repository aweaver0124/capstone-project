import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import VaxTable from './VaxTable';

function PetCard(){
const params = useParams();
const [currentPet, setCurrentPet] = useState({vaccinations: []})
const [showForm, setShowForm] = useState(false)
const [updatePetForm, setUpdatePetForm] = useState({
    age: '',
    personality: '',
})

useEffect(() => {
    if (params.petId) {
        fetch(`/pets/${params.petId}`)
        .then(res => res.json())
        .then(data => setCurrentPet(data))
    }
}, [params.petId])

function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setUpdatePetForm({...updatePetForm, [key]: value})
}

function handleUpdate(){
    
    fetch(`/pets/${params.petId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatePetForm)
    })
    .then(res => {
        if (res.ok) {
            res.json().then(updatePetForm)
            setShowForm(false)
        } else {
            res.json()
            .then(response => console.log(response))
        }
    })
}

function handleForm(){
    setShowForm(true)
}

function showFormTrue(){
    return(
        <div>
            <form id='update-pet-form' onSubmit={handleUpdate}>
            <input name="age" placeholder="Age" className="user-input" onChange={handleChange}></input>
            <input name="personality" placeholder="Personality" className="user-input" onChange={handleChange}></input>
            <input type="submit" value="Save" className="form-button"></input>
            </form>
        </div>
    )
}

const vaxxes = currentPet.vaccinations.map(vax => {
    return(
            <tr>
                <td>{vax.name}</td>
                <td>{vax.description}</td>
                <td>{vax.date_received}</td>
                <td>{vax.expiration_date}</td>
                <td>{vax.name_of_vet_clinic}</td>
                <td><button className='table-button'> Remove </button></td>
            </tr>
    )
})
    return(
        <div id='pet-card'>
            <section id='pet-info'>
                <div className='pet-card-image'>
                  <img className='pet-image' src={currentPet.image} alt="current pet" width='330px' height='400px'/>
                </div>
                <div className='pet-info-div'>
                   <h2>{currentPet.name}</h2>
                   <ul>
                       <li><b>Breed</b>: {currentPet.breed}</li>
                       <li><b>Age</b>: {currentPet.age}</li>
                       <li><b>Gender</b>: {currentPet.gender}</li>
                       <li><b>Personality</b>: {currentPet.personality}</li>
                   </ul>
                   <div id='edit-pet'> <button className='button' onClick={handleForm}> Edit </button></div>
                   {showForm ? showFormTrue() : <div></div>}
                </div>
            </section> 
            <section id='vax-section'>
                <h3>Vaccinations</h3>
                {vaxxes < 1 ? <div id='empty-vaxxes'><p>You haven't added any vaccinations yet!</p><Link to={'/add-a-vax'}><button className='table-button'>Add Vaccination</button></Link></div> : <VaxTable vaxxes={vaxxes}/> }
            </section> 
        </div>
     )
}

export default PetCard;