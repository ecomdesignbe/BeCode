import React from 'react'

export default function Navbar({ nombreLiker }) {
  return (
    <div className='entete'>
        <h3>Les post liker sont : { nombreLiker }</h3>
    </div>
  )
}
