import React from 'react'
import './Page.css'

export default function Page( props ) {

    return (
        <div className="page">
            {props.children }
        </div>
    )
}
