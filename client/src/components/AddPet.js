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
                    <p className='lable'><strong>Pet Name</strong></p>
                    <input name="name" placeholder="" className="new-user-input" onChange={handleChange}></input>
                    <p className='lable'><strong>Dog or Cat</strong></p>
                    <select name="species" placeholder="" className="select-user-input" onChange={handleChange}>
                        <option>Dog</option>
                        <option>Cat</option>
                    </select>
                    <p className='lable'><strong>Image URL</strong></p>
                    <input name="image" placeholder="" className="new-user-input" onChange={handleChange}></input>
                    <p className='lable'><strong>Breed</strong></p>
                    <input name="breed" placeholder="" className="new-user-input" onChange={handleChange}></input>
                    <p className='lable'><strong>Age</strong></p>
                    <input name="age" placeholder="" className="new-user-input" onChange={handleChange}></input>
                    <p className='lable'><strong>Male of Female</strong></p>
                    <select name="gender" placeholder="" className="select-user-input" onChange={handleChange}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <p className='lable'><strong>Tell us about your pet!</strong></p>
                    <input name="personality" placeholder="" id="personality-field" onChange={handleChange}></input>
                    <div id='new-pet-button'><input type="submit" value="Add Pet" className="form-button"></input></div>
            </form>
        </div>
    </div>
)
}

export default AddPet;