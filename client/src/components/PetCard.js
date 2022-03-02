import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import VaxTable from './VaxTable';

function PetCard({ pets }){
const params = useParams();
const [ currentPet, setCurrentPet ] = useState(pets.find(pet => pet.id === parseInt(params.petId)))

useEffect(() => {
    if (params.petId) {
        fetch(`/pets/${params.petId}`)
        .then(res => res.json())
        .then(data => setCurrentPet(data))
    }
}, [params.petId])

const vaxxes = currentPet.vaccinations.map(vax => {
    return(
            <tr>
                <td>{vax.name}</td>
                <td>{vax.description}</td>
                <td>{vax.date_received}</td>
                <td>{vax.expiration_date}</td>
                <td>{vax.name_of_vet_clinic}</td>
                <td><button> X </button></td>
            </tr>
    )
})

    return(
       <div id='pet-card'>
           <section id='pet-info'>
               <img src={currentPet.image} alt="current pet" />
               <h2>{currentPet.name}</h2>
               <ul>
                   {/* <li>{currentPet.user}</li>   */}
                    <li><b>Breed</b>: {currentPet.breed}</li>
                   <li><b>Age</b>: {currentPet.age}</li>
                   <li><b>Gender</b>: {currentPet.gender}</li>
                   <li><b>Personality</b>: {currentPet.personality}</li>
               </ul>
           </section> 
           <section id='vax-section'>
               <h3>Vaccinations</h3>
               <VaxTable vaxxes={vaxxes}/>
           </section> 
       </div>
    )
}

export default PetCard;