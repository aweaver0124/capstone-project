import { Link } from 'react-router-dom';


function PetThumbnail({ key, name, image, pet, onDelete }){

function handleDelete() {
    fetch(`/pets/${pet.id}`, {
        method: 'DELETE'
        })
    .then(onDelete(pet));
}

console.log(pet)



    return(
        <div className='pet-thumbnail'>
            <Link to={`/pets/${pet.id}`}>
            <div className='pet-thumbnail-image' onClick={handleDelete}>
               <img src={image} alt='user-pet' height='300px' width='280px' />
            </div>
            </Link>
            <h1 id='pet-name'>{name}</h1>
            <button id='delete-button' onClick={handleDelete}> X </button>
            
        </div>
    )
}

export default PetThumbnail;