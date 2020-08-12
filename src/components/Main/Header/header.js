import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import '../../../App.css'

const header = () => {
    return (
        <div className="header">
            <div className="svg-bar">
            <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#03293d" stroke-width="2"/>
            <path d="M0,14 15,14" stroke="#03293d" stroke-width="1"/>
            <path d="M0,23 25,23" stroke="#03293d" stroke-width="0.5"/>
        </svg>
            </div>
            <div className="fcmb">
            <img src="../images/download.png"/>
                <h3>FCMB: Mobile Banking ...</h3>
            </div>
            <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="others">
                <i className="far fa-bell others-child"></i>
                <div className="owner ">
                <i className="fas fa-shield-alt"></i><p>Owner</p>
                </div>
                <i className="fas fa-award others-child"></i>
               
            </div>
            <div className="profile-image">
                <img src="../images/owner.jpeg" width="40"/>
                <div className="name-email">
                    <span className="name">John Doe</span>
                    <span className="email">johndoe@hotmail.com</span>
                </div>
                <i className="fas fa-chevron-down"></i>
            </div>
            
        </div>
    )
}

export default header
