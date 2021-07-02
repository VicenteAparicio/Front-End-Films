import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// IMPORT ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const Allusers = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        allUsers();
    },[]);

    useEffect(()=>{
    });

    const allUsers = async () => {
        try{
            let res = await axios.get('http://localhost:3005/users/allUsers', {headers: {'Authorization': `Basic ${props.logData.token}`}});
            setUsers(res.data)
        } catch (err) {
            console.log({message: err.message})
        }
    }

    const deleteUser = async (userId) => {
        
        try{
            let body = {
                "id": userId
            }
            await axios.post('http://localhost:3005/users/delete', body, {headers: {'Authorization': `Basic ${props.logData.token}`}})
        } catch (err) {
            console.log({message: err.message})
        }
        allUsers();
    }

    if (props.logData.user?.isAdmin){
        return (
            <div className="allusersContainer">
                        
                <div className="usersBox">
                    {users.map((user, index)=>(
                        
                        <div className="userCard" key={index}>
                            
                            <div className="userData">
                                <div className="usersName">{user.name}</div>
                                <div className="usersInfo">{user.lastname}</div>
                                <div className="usersInfo">{user.email}</div>
                                <div className="usersInfo">{user.country}</div>
                                <div className="usersInfo">{user.city}</div>
                            </div>
                            <div className="userButton" onClick={()=>deleteUser(user.id)}><FontAwesomeIcon className="faIcons" icon={faMinusSquare}/></div>
                        
                        </div>
                    ))}
                </div>
    
            </div>
                
        )
    }
}

export default connect((state)=>(
    {logData:state.credentials}
))(Allusers);