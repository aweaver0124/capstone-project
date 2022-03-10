import { useState } from 'react';
import { useHistory, NavLink } from "react-router-dom";

function Signup( {setUser} ) {
    let history = useHistory();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        state: '',
        password: ''
    })
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(setUser)
                history.push("/")
                setFormData({
                    first_name: '',
                    last_name: '',
                    username: '',
                    state: '',
                    password: ''
                })
            } else {
                res.json().then(errorResponse => setErrors(errorResponse.errors))
            }
        })
    }

    return(
        
            <div id='signup-container'>
                <h2>Sign Up!</h2>
                <form id='signup-form' onSubmit={handleSubmit}>
                    <p className='label'><strong>First Name</strong></p>
                    <input name="first_name" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='label'><strong>Last Name</strong></p>
                    <input name="last_name" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='label'><strong>Username</strong></p>
                    <input name="username" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='label'><strong>Password</strong></p>
                    <input name="password" type="password" placeholder="" className="user-input" onChange={handleChange}></input>
                    <p className='label'><strong>State</strong></p>
                    <select name="state" placeholder="" className="user-input" onChange={handleChange}>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                    </select>
                    {errors.length > 0 ? <div className="error-container">{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>}
                    <div className='submit-form-button'><input type="submit" value="Sign Up" className="form-button"></input></div>
                </form>
                <div id="call-to-login">
                    <p>Already a member? <NavLink
                                to="/login" 
                                exact
                                activeStyle={{
                                textDecoration: "underline",
                                }}>Log in here. </NavLink></p>
                </div>
            </div>
   
    )
}

export default Signup;