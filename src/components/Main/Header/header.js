import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import '../../../App.css'

const header = () => {
    return (
        <div className="header">
            <div className="svg-bar">
                <h1>Here</h1>
            </div>
            <div className="fcmb">
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
                <img src="../images/10.jpg" />
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
