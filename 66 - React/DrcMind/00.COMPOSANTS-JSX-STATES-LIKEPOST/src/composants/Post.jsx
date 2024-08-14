import React from 'react'

export default function Post({ data , liker, suppression }) {
  return (
    <div className={data.liker ? 'post active' : 'post'}>
        <div>
            <h2>{data.titre}</h2>
            <p>{data.description}</p>
        </div>
        <div className='btn'>
            <button onClick={ () => liker(data)}>
                {data.liker ? "Déjà Liker" : "Liker"}
            </button>
            <button className='delete' onClick={ () => suppression(data.id )}>Effacer</button>
        </div>
    </div>
  )
}
