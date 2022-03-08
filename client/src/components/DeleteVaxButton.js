function DeleteVaxButton({ vax, onDelete }){

const today = new Date()
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
console.log(date)

function autoRemoveVax(){
    if (vax.expiration_date < date){
        fetch(`/vaccinations/${vax.id}`, {
            method: 'DELETE'
        })
        .then(onDelete(vax));
        window.location.reload(true);
    }
}
autoRemoveVax();


    function handleDelete(){
        fetch(`/vaccinations/${vax.id}`, {
            method: 'DELETE'
        })
        .then(onDelete(vax));
        window.location.reload(true);
    }
    return (
        <button className='table-button' onClick={handleDelete}>Remove</button>
    )
}

export default DeleteVaxButton;