// IMPORT MOTORS
import React from 'react';
import {connect} from 'react-redux';
// IMPORT COMPONENTS
import Allmovies from '../Allmovies/allmovies';
import Moviedetail from '../Moviedetail/moviedetail';
import Createmovies from '../Adminsel/Createmovies/createmovies';
import Allusers from '../Adminsel/Allusers/allusers';



const Visual = (props) => {
    switch (props.adminAction) {
        case "allmovies":
            return (
                <div className="visualContainer">
                    <Allmovies/>
                </div>
            )
        case "createmovies":
            return(
                <div className="visualContainer">
                    <Createmovies/>
                </div>
            )
        case "allusers":
            return(
                <div className="visualContainer">
                    <Allusers/>
                </div>
            )
        case "moviedetail":
            return(
                <div className="visualContainer">
                    <Moviedetail/>
                </div>
            )
        default:
            return (
                <div>

                </div>
            )
    }


}

export default connect((state)=>(
    {adminAction: state.adminActions}
))(Visual);