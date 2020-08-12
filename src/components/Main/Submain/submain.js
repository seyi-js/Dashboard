import React from 'react'

const submain = () => {

   
    

    const details = [
        {
            "header": 'Backlog',
            "writeup":['Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup','Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup','Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup']
        },
        {
            "header": 'Todo',
            "writeup":['Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup']
        },
        {
            "header": 'In Progress',
            "writeup":[]
        },
        {
            "header": 'In Review',
            "writeup":[]
        },
        {
            "header": 'Done',
            "writeup":[]
        },
    ]
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
                    <li class="all-task">All Task</li>
                        <li className="all-modules">
                        <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                            <p>All Modules</p>
                        </li>
                    <li class="project-deadline"><i className="far fa-clock"></i><p>Project Deadline: 6weeks</p></li>
                    </ul>
                </div>
            
                <div className="submain-grids">
                    
                            { details.map( ( head ) => (
                    <div key={head.i} class="grid">
                        <div>
                            <span>{head.header}</span>
                            
                            <span>...</span>
                            
                                    </div>
                                    <div className="plus"><i className="fas fa-plus"></i></div>
                        
                            { (head.writeup.length !== 0) ? head.writeup.map( writeup => (
                                (writeup.length !== 0 )?
                                        <div className="text-box">
                                            <p key={ head.i }>{ writeup }</p>
                                        </div>
                                    :null) ) :null }
                                    
                    </div>
                    ))}
                </div>
            
            </div>
        </div>
    )
}

export default submain
