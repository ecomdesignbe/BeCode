import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {
    const {id} = useParams()
        
    return (
        <div>
            <h2>Article avec id : {id}</h2>
        </div>
    )
}
