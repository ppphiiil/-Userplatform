import React from 'react'
import './_ButtonPrimary.scss'

export default function ButtonPrimary( { text } ) {
    return (
        <button className="primary-btn">{ text }</button>
    )
}
