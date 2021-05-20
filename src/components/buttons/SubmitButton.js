import React from 'react'
import './SubmitButton.css'

export default function SubmitButton( props ) {



    return (
        <div>
            <button className="submit-btn"> { props.text }</button>
        </div>
    )
}
