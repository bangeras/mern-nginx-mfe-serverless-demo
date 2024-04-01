import React from 'react'

const PassportLogin = (props) => {
    const isAuthenticated = false

    function handleLogin(){
        // Authenticate using via passport api in the Node backend
        // Open google login page
        console.log("handleLogin called..")
        window.open("http://localhost:80/auth/google", "_self");
    }

    function handleLogout(){
        console.log("handleLogout called..")
        window.open("http://localhost:80/auth/logout", "_self");
    }

    return (
        <div>
            { props.userProfile.name ? (
                <a onClick={handleLogout}>Logout</a>
                ) : (
                <a onClick={handleLogin}>Login</a>
                )
            }
        </div>
    )
}

export default PassportLogin