function PetThumbnail({ name, image }){

    function handleClick(){

    }
    return(
        <div className='pet-thumbnail' onClick={handleClick}>
            <div className='pet-thumbnail-image'>
               <img src={image} alt='user-pet' height='300px' width='280px' />
            </div>
            <h1 id='pet-name'>{name}</h1>
        </div>
    )
}

export default PetThumbnail;