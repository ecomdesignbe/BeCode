import React, {useState} from 'react'
import { useEffect } from 'react'

export default function Compteur(props) {
    
    const [compteur, setCompteur] = useState(5)

    const incrementer = () => {
        setCompteur(compteur + 1)
    }

    const decrementer = () => {
        setCompteur(compteur - 1)
    }

    useEffect(() => {
        console.log('Je suis rendu')
    })
    
    return (
        <>
        {
            props.age ? <p>Vous avez {props.age} ans</p> : null
        }
            <div className='compteur'>
                <button onClick={incrementer}>+</button>

                <p className={compteur < 0 && "erreur"}>{compteur}</p>

                <button onClick={decrementer}>-</button>
                
                {/* 
                    COMMENTAIRE JSX
                    <h1>Bonjour {props.nom}</h1>
                    <h2>Vous avez {props.age} ans</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, asperiores!
                    </p>
                */}

            </div>
        </>
    )
}
