import { useState } from 'react'
import './App.css'
import Compteur from './composants/Compteur'
import Navbar from './composants/Navbar'
import Post from './composants/Post'

function App() {
//  const age = 44
//  const nom = 'Steve'

    const [posts, setPosts] = useState([
        {
            id: 1,
            titre: "Mario",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        },
        {
            id: 2,
            titre: "Luigi",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        },
        {
            id: 3,
            titre: "Toad",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        },
        {
            id: 4,
            titre: "Bowser",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        },
        {
            id: 5,
            titre: "Peach",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        },
        {
            id: 6,
            titre: "Link",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        },
        {
            id: 7,
            titre: "Pikachu",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, incidunt.",
            liker : false
        }        
    ])

    const liker = (data) => {
        const donneeCopier = [...posts]
        const index = posts.indexOf(data)
        donneeCopier[index] = {...posts[index], liker:!posts[index].liker }
        setPosts(donneeCopier)
        console.log(donneeCopier)
    }

    const effacerPost = (id) => {
        const nouvelleDonnee = posts.filter(p => p.id != id )
        setPosts(nouvelleDonnee)
    }

    const nombreLiker = posts.filter(p => p.liker )
    
    return (
        <div className="App">
            <Navbar nombreLiker={nombreLiker.length} />
            {
                posts.map(p => <Post data={p} key={p.id} liker={liker} suppression={effacerPost} />)
            }            
        
        {/* 
            <Compteur />
            {
                age > 20 && <Compteur age={age} />
            }
            <Compteur />
            <Compteur />
            <Compteur />        
        */}
        
        </div>        
    )
}

export default App