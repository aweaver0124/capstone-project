function DeleteVaxButton({ vax, onDelete }){

    function handleDelete(){
        fetch(`/vaccinations/${vax.id}`, {
            method: 'DELETE'
        })
        .then(onDelete(vax));
        window.location.reload(true);
    }
    return (
        <button onClick={handleDelete}>Remove</button>
    )
}

export default DeleteVaxButton;