import { useState, useEffect } from 'react';
import PetThumbnail from './PetThumbnail';

function UserHome( {user} ){
    const [pets, setPets] = useState([]);

    useEffect(() => {
        if (user.id) {
         fetch('/pets')
          .then(res => res.json())
          .then(workouts => setPets(workouts))
         }
       }, [user])

       console.log(pets)

      const petThumbnail = pets.map(pet => {
           return <PetThumbnail name={pet.name}  image={pet.image} />
       })

       if (petThumbnail.length > 0){
           return (
            <div>
                <h2>Welcome, {user.first_name}!</h2>
                <div id='pet-thumbnail-holder' style={{height:'500px'}}>
                    <h2 id='my-pets'>My Pets</h2>
                    {petThumbnail}
                </div>
            </div>
           )
       } else {
        return (
            <div>
                <h2>Welcome, {user.first_name}!</h2>
                <div id='pet-thumbnail-holder' style={{height:'500px'}}>
                    <h2 id='my-pets'>My Pets</h2>
                    <h3>You haven't added any pets yet!</h3>
                </div>
            </div>
        )
       }
    }

export default UserHome;