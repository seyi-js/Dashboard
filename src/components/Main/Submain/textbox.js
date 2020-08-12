import React from 'react'

const textbox = ({head}) => {
    return (
        <div key={head.i} class="grid">
        <div className="heading-div">
            <span>{head.header}</span>
            
            <span>...</span>
            
                    </div>
                    <div className="plus"><i className="fas fa-plus"></i></div>
        
            { (head.writeup.length !== 0) ? head.writeup.map( writeup => (
                (writeup.length !== 0 )?
                        <div className="text-box">
                        <p key={ head.i }>{ writeup }</p>
                        <span>...</span>
                        <i className="far fa-clock"><span>Due Aug 13</span></i>
                        <img src=""/>
                        </div>
                    :null) ) :<div className="empty-array"></div> }
                    
    </div>
    )
}

export default textbox
