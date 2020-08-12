import React from 'react'
import "../../App.css"
export const sidenav = () => {
    return (
        <div className="side-nav-bar">
            <div className="logo">
            <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#fff" stroke-width="2"/>
            <path d="M0,14 15,14" stroke="#fff" stroke-width="1"/>
            <path d="M0,20 30,18" stroke="#fff" stroke-width="1"/>
            <path d="M0,23 25,23" stroke="#fff" stroke-width="7"/>
        </svg>
            </div>
            <div className="side-nav-1">
                <a className=""><i className="fas fa-home"></i></a>
                <a className="active"><i className="fas fa-code-branch"></i></a>
                <a><i className="fas fa-user-friends"></i></a>
                <a><i className="fas fa-credit-card"></i></a>

        </div>
                <div className="side-nav-2">
                    <p className="user-1">PW</p>
                    <p className="user-2">PW</p>
                    <p className="user-3">PW</p>
                    <p className="user-4">PW</p>
                    <p className="user-5">AS</p>

                </div>
                <div className="side-nav-footer">
                <a><i className="fas fa-chevron-right"></i></a>
                    

                </div>
            </div>
    )
}


export default sidenav