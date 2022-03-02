import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

console.log(currentPet.image)



    return(
       <div id='pet-card'>
           <section id='pet-info'>
               <img src={currentPet.image} alt="current pet" />
               <h2>{currentPet.name}</h2>
               <ul>
                   {/* <li>{currentPet.user}</li>   */}
                    <li>Breed: {currentPet.breed}</li>
                   <li>Age: {currentPet.age}</li>
                   <li>Gender: {currentPet.gender}</li>
                   <li>Personality: {currentPet.personality}</li>
               </ul>
           </section> 
           <section id='vax-section'>
               <h3>Vaccinations</h3>
           </section> 
       </div>
    )
}

export default PetCard;