import React from 'react'

export default function Contact() {
  return (
    <div>
        <h2>Contactez-nous</h2>
        <form>
            <label htmlFor='nom'>Nom</label>
            <input type='text' id='nom'></input>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email'></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='30' rows='10'></textarea>
            <button type='submit'>Envoyer</button>
        </form>
    </div>
  )
}
