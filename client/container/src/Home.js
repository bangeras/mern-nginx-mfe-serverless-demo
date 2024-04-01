import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from './Header'; 
import Cookies from 'js-cookie' 
import Dashboard from './Dashboard';

const Home = (props) => {
    const [userProfile, setUserProfile] = useState('')
    // const [accessToken, setAccessToken] = useState('') 


    useEffect(() => {
        const userProfileJson = Cookies.get('userProfile')
        if (userProfileJson) {
            // Parse to remove j: injected by the express middleware in cookie values
            const userProfile = JSON.parse(userProfileJson.substring(2))

            setUserProfile(userProfile)
            console.log(userProfile)
        }
        
    }, [])

    return (
        <div>
            <Header userProfile={userProfile}></Header>

            <br/>Test Links <hr/>
            {/* <Link to="/header" > Header</Link> <br/> */}
            <Link to="/dashboard">Dashboard</Link><br/>
            {/* { userProfile.name  
                ? <Link to="/logout">Logout</Link>
                : <Link to="/login">Login</Link>
            } <br/> */}

            {userProfile.name  && <Dashboard />}
        </div>
    )
}

export default Home