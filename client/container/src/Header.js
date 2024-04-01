import './Header.css'

import React from 'react'
import { Link } from 'react-router-dom'
import PassportLogin from './PassportLogin'

const Header = (props) => {
    

    return (
        <div>
            <ul>
                <li>Welcome {props.userProfile.name ? props.userProfile.name : "Guest"} </li>
                <li><Link to="/">Home</Link></li>
                <li><PassportLogin userProfile={props.userProfile}/></li>
            </ul>
        </div>
    )
}

export default Header