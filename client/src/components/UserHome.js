function UserHome( {user} ){
    return (
        <div>
            <h1>User Home Page</h1>
            <h2>Welcome, {user.first_name} {user.last_name}</h2>
        </div>
    )
}

export default UserHome;