import React from 'react'
import Textbox from './textbox'
const submain = () => {

   
    

    const details = [
        {
            "header": 'Backlog',
            "writeup":['Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup', 'Pixel Perfect Designs: UI must be exactly like the mockup','Pixel Perfect Designs: UI must be exactly like the mockup']
        },
        {
            "header": 'Added Test Case',
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
                    
                    <li class="project-deadline"><i className="far fa-calendar"></i><p>Project Deadline: 10-june-2020</p></li>
                    </ul>
                </div>
            
                <div className="submain-grids  submain-grids-design2">
                    
                            { details.map( ( head ) => (
                    <Textbox key={head.i} head={head} />
                            ) ) }
                           
                        
                    
                    
                    
                    
                    
                    
                    
                    
                    <div class="grid ">
                                <div className="grid-design2">
                                        <div className="heading-div">
                                    
                                            <span>Quick Overview</span>
                                            
                                            <span>...</span>
                                    
                                        </div>
                                </div>
                            
                            <div className="overview-grid">
                                <div className="sub-empty-area">
                                <div className="box-1">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="number">20</span>
                                    <span className="case">Total Modules</span>
                                </div>
                                <div className="box-2">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="number">30</span>
                                    <span className="case">Improvements</span></div>
                                <div className="box-3">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="number">10</span>
                                    <span className="case">Total Modules Test</span>
                                </div>
                                <div className="box-4">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="number">30</span>
                                    <span className="case">Total Failed</span>
                                </div>
                                <div className="box-5">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="number">20</span>
                                    <span className="case">Total Passed</span>
                                </div>
                                    <div className="box-6">
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="number">20</span>
                                    <span className="case">Total Untested</span>
                                </div>
                                </div>
                            </div> 
                                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default submain
