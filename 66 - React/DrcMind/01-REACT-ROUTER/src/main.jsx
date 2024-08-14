import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Link, RouterProvider, Outlet } from 'react-router-dom'
import Article from './Article.jsx'
import PageErreur from './PageErreur.jsx'
import Contact from './Contact.jsx'
import Emploi from './Emploi.jsx'
import Erreur404 from './Erreur404.jsx'

const route = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <PageErreur />
  },  
  {
    path : '/apropos',
    element : (
      <>
        <h1>A propos</h1>
        <p>Je suis un paragraphe</p>
        <Link to='/'>Retour accueil</Link>
        <div style={{
          display: "flex",
          gap : "1rem"
        }}>
          <Link to='/apropos/contact'>Contact</Link>
          <Link to='/apropos/emploi'>Emploi</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: '/apropos/contact',
        element : <Contact />
      },
      {
        path: '/apropos/emploi',
        element : <Emploi />
      },
    ]
  },  
  {
    path : '/blog',
    element : 
      <>
        <h2>Liste des articles</h2>
        <Link to={'/blog/200'}>Article 1</Link>
      </>
  },  
  {
    path : '/blog/:id',
    element : <Article />           
  },  
  {
    path : '*',
    element : <Erreur404 />           
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
