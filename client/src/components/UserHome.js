
import PetThumbnail from './PetThumbnail';

function UserHome({ user, pets, setPets }){

       function onDelete(petToDelete) {
           setPets(pets.filter(pet => pet.id !== petToDelete.id))
    }

      const petThumbnail = pets.map(pet => {
           return <PetThumbnail key={pet.id} pet={pet} name={pet.name} pets={pets} image={pet.image} onDelete={onDelete} />
       })

       if (petThumbnail.length > 0){
           return (
            <div>
                <h2 id='welcome-message'>Welcome, {user.first_name}!</h2>
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