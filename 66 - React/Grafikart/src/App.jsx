import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const style = {color : 'red', backgroundColor : 'darkgrey'}
const showTitle = false
const todos = [
  'Présenter React',
  'Présenter JSX',
  'Créer des composants'
]


function App() {

  return <>
    {showTitle ? 
      <h1 id='title' className='title' style={style}>{title}</h1> :
      <p>demo</p>
    }

    <Title color='green' id='monID' className='maClass' data-demo='demo'>Mon composant</Title>
    
    <input type='text'></input>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad optio, consequatur sed reprehenderit cupiditate velit rem qui minus magnam natus tenetur doloribus ipsam! Quod dicta, ut repellat eum, illum voluptatibus quibusdam nemo ipsum delectus, est repudiandae. Error illo, repudiandae ex saepe enim dolor molestiae labore sapiente aliquid quisquam optio. Dolore.
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


  return <h1 style={{color: color}} {...props} /> 
}

export default App
