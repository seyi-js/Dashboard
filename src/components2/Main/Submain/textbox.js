import React from 'react'
import TextCase from './TextCase'
const textbox = ({head}) => {

    const cases = [ {
        "case": "Pixel Perfect Designs: UI must be exactly like the mockup. Pixel Perfect Designs: UI must be exactly like the mockup",
        "option": 'pass',
        "color": '#4dbd98'
    },
    {
        "case": "Pixel Perfect Designs: UI must be exactly like the mockup. Pixel Perfect Designs: UI must be exactly like the mockup",
        "option": 'failed',
        "color": '#eb0e43'
        },
        {
            "case": "Pixel Perfect Designs: UI must be exactly like the mockup. Pixel Perfect Designs: UI must be exactly like the mockup",
            "option": 'reset',
            "color": '#f15832'
        },
        
    {
        "case": "Pixel Perfect Designs: UI must be exactly like the mockup. Pixel Perfect Designs: UI must be exactly like the mockup",
        "option": 'failed',
        "color": '#eb0e43'

        },
        {
            "case": "Pixel Perfect Designs: UI must be exactly like the mockup. Pixel Perfect Designs: UI must be exactly like the mockup",
            "option": 'failed',
            "color": '#eb0e43'
    
        },
        {
            "case": "Pixel Perfect Designs: UI must be exactly like the mockup. Pixel Perfect Designs: UI must be exactly like the mockup",
            "option": 'failed',
            "color": '#eb0e43'
    
         },
      
    ]


    return (
        <>
        <div key={ head.i } class="grid ">
            <div className="grid-design2">
                    <div className="heading-div">
                
                        <span>{head.header}</span>
                        
                        <span>...</span>
                
                    </div>
            </div>
        
            { (head.writeup.length !== 0) ? head.writeup.map( writeup => (
                (writeup.length !== 0 )?
                        <div className="text-box">
                            <p key={ head.i }>{ writeup }</p>
                            <span>...</span>
                            <i className="far fa-clock"><span>Due Aug 13</span></i>
                            <img src=""/>
                        </div>
                    : null ) ) : <div className="empty-array empty-array-design2">
                    { cases.map( c => (
                        <TextCase key={c.i} c={c}/>
                    ) ) }
                        <div className="new-testcase">
                            <button className="new-testcase-button">New Test Case</button>
                            <button className="test-button">Test</button>
                        </div>
                </div> }
                    
            </div>
       
            </>
    )
}

export default textbox
