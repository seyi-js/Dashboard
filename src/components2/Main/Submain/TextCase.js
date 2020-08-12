import React from 'react'

const TextCase = ({c}) => {
    return (
        <div className="cases">
                            <span>{ c.case }</span>
            <button style={{backgroundColor: c.color}}>{ c.option }
                <i className="fas fa-chevron-down chevron-down"></i> </button>
        </div>
    )
}

export default TextCase
