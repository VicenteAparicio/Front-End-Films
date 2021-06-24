// IMPORT MOTORS
import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
// IMPORT ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'


//IMPORT COMPONENTS

// IMPORT STYLES
import '../../Global.css';
import { LOGOUT } from '../../redux/types';

const Navbar = (props) => {


    const Logout = () => {
        props.dispatch({type:LOGOUT});
    }

    // const Deploymenu = () => {}

    if (props.logData.token){

        return (
            <div id="navbar">
                <div className="menuDeploy" >
                    {/* <FontAwesomeIcon className="coffe" icon={faBars} onClick={()=>Deploymenu()}/>  */}
                    <ul id="navLinkBox" className="linksContainer" >
                        <li><FontAwesomeIcon className="coffe" icon={faCoffee}/></li>
                        
                        <li><NavLink className="links" to="#">{props.logData?.user.name.toUpperCase()}</NavLink></li>
                        <li><NavLink className="links" onClick={()=>Logout()} to="/login" >LOGOUT</NavLink></li>
                    </ul>
                </div>
            </div>
        )

    } else {

        return (
            <div id="navbar">
                <div className="menuDeploy" >
                    {/* <FontAwesomeIcon className="coffe" icon={faBars} onClick={()=>Deploymenu()}/> */}
                    <div id="navLinkBox" className="linksContainer" >
                        <NavLink className="links" to="/">HOME</NavLink>
                        <NavLink className="links" to="/login">LOGIN</NavLink>
                        <NavLink className="links" to="/register">REGISTER</NavLink>
                    </div>
                </div>
            </div>
        )
}
}

export default connect((state)=>(
    {logData:state.credentials}
))(Navbar);