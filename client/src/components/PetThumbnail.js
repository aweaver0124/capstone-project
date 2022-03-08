import { Link } from 'react-router-dom';

function PetThumbnail({ name, image, pet, onDelete }){

    console.log(pet)
function handleDelete() {
    fetch(`/pets/${pet.id}`, {
        method: 'DELETE'
        })
    .then(onDelete(pet));
}

    return(
        <div className='pet-thumbnail'>
            <Link to={`/pets/${pet.id}`}>
            <div className='pet-thumbnail-image'>
               <img src={image} alt='user-pet' height='300px' width='280px' />
            </div>
            </Link>
            <h1 id='pet-name'>{name}</h1>
            <button className='table-button' onClick={handleDelete}> X </button>
            
        </div>
    )
}

export default PetThumbnail;