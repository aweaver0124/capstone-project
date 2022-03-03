import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddPet({ pets, setPets, user }){
    let history = useHistory();
    const [petFormData, setPetFormData] = useState({
        name: '',
        species: '',
        image: '',
        breed: '',
        age: '',
        gender: '',
        personality: '',
        user_id: user.id
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setPetFormData({...petFormData, [key]: value})
    }


function createPet(e){
    e.preventDefault();
    fetch('/pets',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(petFormData)
    })
    .then(res => {
        if (res.ok) {
            res.json()
            .then(saved => {
                setPets([...pets, saved])
                setPetFormData({
                    name: '',
                    species: '',
                    image: '',
                    breed: '',
                    age: '',
                    gender: '',
                    personality: ''
                })
                history.push("/")
            })
        } else {
            res.json()
            .then(response => console.log(response))
        }
    })
}

return(
    <div>
        <div id='new-pet-form-div'>
            <h2>Add Your Pet</h2>
            <form id='new-pet-form' onSubmit={createPet}>
                    <input name="name" placeholder="Pet Name" className="user-input" onChange={handleChange}></input>
                    <input name="species" placeholder="Dog or Cat" className="user-input" onChange={handleChange}></input>
                    <input name="image" placeholder="Image URL" className="user-input" onChange={handleChange}></input>
                    <input name="breed" placeholder="Breed" className="user-input" onChange={handleChange}></input>
                    <input name="age" placeholder="Age" className="user-input" onChange={handleChange}></input>
                    <input name="gender" placeholder="Male of Female" className="user-input" onChange={handleChange}></input>
                    <input name="personality" placeholder="Personality" className="user-input" onChange={handleChange}></input>
                    <input type="submit" value="Add Pet" className="form-button"></input>
            </form>
        </div>
    </div>
)
}

export default AddPet;