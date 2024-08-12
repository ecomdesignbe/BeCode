import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const title = 'Bonjour <strong>les gens</strong>'
const style = {color: 'red', backgroundColor : 'blue'}
const showTitle = false
const todos = [
  'Presenter React',
  'Presenter JSX',
  'Créer des composants'
]

function App() {

  const handleClick = (e) => {
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
    alert("J'ai cliqué sur le titre")
  }

  return <>

    <Title color="darkorange" id="monId" className="maClasse" data-demo="demo">Mon composant</Title>

    {showTitle ? 
      <h1 id="title" className="title" style={style} onClick={handleClick}> {title} </h1> : 
      <p>demo</p>
    }

    <input type="text"></input>
    
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste expedita est architecto nulla tenetur ex rem dolores aspernatur repellat eos animi harum porro sed, labore nisi minus, fuga libero incidunt quos aliquid! Esse magnam suscipit sed a! Adipisci, suscipit et! Illo rem nostrum quisquam id architecto rerum, tenetur ipsum pariatur. Numquam error veritatis facilis. Eaque veniam dolorem impedit vitae maiores debitis unde omnis praesentium ipsum, totam architecto adipisci saepe voluptates. Porro suscipit unde, laborum nisi ipsa voluptas iste accusamus, amet accusantium soluta omnis illo itaque repellendus, facilis eos nemo sint consequuntur? Quos beatae corrupti assumenda harum sint adipisci fugiat.      
    </p>

    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title ({color, hidden, ...props}) {
  if(hidden) {
    return null
  }

  return <h1 style={{color : color}} {...props} />
}

export default App

/*
const title = 'Bonjour <strong>les gens</strong>'
function App() {
  return <>
    <h1 id="title" className="title" dangerouslySetInnerHTML={{__html: title}}>
      {title}
    </h1> 
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste expedita est architecto nulla tenetur ex rem dolores aspernatur repellat eos animi harum porro sed, labore nisi minus, fuga libero incidunt quos aliquid! Esse magnam suscipit sed a! Adipisci, suscipit et! Illo rem nostrum quisquam id architecto rerum, tenetur ipsum pariatur. Numquam error veritatis facilis. Eaque veniam dolorem impedit vitae maiores debitis unde omnis praesentium ipsum, totam architecto adipisci saepe voluptates. Porro suscipit unde, laborum nisi ipsa voluptas iste accusamus, amet accusantium soluta omnis illo itaque repellendus, facilis eos nemo sint consequuntur? Quos beatae corrupti assumenda harum sint adipisci fugiat.      
    </p>
  </>
}*/



