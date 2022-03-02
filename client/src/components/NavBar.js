import { NavLink, useHistory } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function NavBar( {user, setUser} ) {
    let history = useHistory();
    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(setUser(''))
        .then(history.push('/'))
    }

   if (user){
       return (
           <div id='nav-header'>
                <div id="logo-container">
                    <NavLink
                        to="/" 
                        exact
                        > 
                        <img className='logo-img' src={logo} alt="logo" width='200px' height='150px'/>
                    </NavLink>
                </div>
            <nav>
                <ul>
                    <li><NavLink
                        to="/" 
                        exact
                        > 
                    <button className='nav-button' style={{height: '30px', width: '70px'}}>Home</button>
                    </NavLink></li>
                    <li><NavLink
                        to="/add-a-pet" 
                        exact
                        activeStyle={{
                        textDecoration: "underline",
                        }}> 
                    <button className='nav-button' style={{height: '30px', width: '80px'}}>Add A Pet</button>
                    </NavLink></li>
                    <li><button className="nav-button" onClick={handleLogout} style={{height: '30px', width: '70px'}}>Logout</button></li>
                </ul>
            </nav>
        </div>
       )
   }

   return (
       <div id='nav-header'>
           <div id="logo-container">
                    <NavLink
                        to="/" 
                        exact
                        > 
                        <img className='logo-img' src={logo} alt="logo" width='200px' height='150px'/>
                    </NavLink>
                </div>
                <h1 id='app-name'>VaxTrack</h1>
           <nav>
                <ul>
                    <li><NavLink
                            to="/" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                            <button className='nav-button' style={{height: '30px', width: '70px'}}>Home</button>
                        </NavLink></li>
                    <li><NavLink
                            to="/login" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        <button className="nav-button" style={{height: '30px', width: '70px'}}>Login</button>
                        </NavLink></li>
                    <li><NavLink
                            to="/signup" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        <button className="nav-button" style={{height: '30px', width: '70px'}}>Signup</button>
                        </NavLink></li>
                </ul>
            </nav>
        </div>
   )
}

export default NavBar;