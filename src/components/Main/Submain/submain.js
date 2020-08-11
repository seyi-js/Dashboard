import React from 'react'

const submain = () => {
    return (
        <div className="submain">
            <div className="submain-1">
                <div className="submain-header">
                    <ul className="left">
                        <li>Overview</li>
                        <li>Teams</li>
                        <li>Modules</li>
                        <li>Files</li>
                        <li>Progress</li>
                        

                    </ul>
                    <ul className="right">
                    <li>All Task</li>
                        <li>
                        <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                            <p>All Modules</p>
                        </li>
                    <li><i className="far fa-clock"></i><p>Project Deadline: 6weeks</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default submain
