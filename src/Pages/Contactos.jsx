import React from 'react'
import './Contactos.css'

function Contactos() {
  return (
    <div className='Contactos'>
    <h1 className='Contactos_h1'>Escríbenos</h1>
    <form action="" className='form'>
        <label>Nombre</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Mensaje</label>
        <textarea rows="5" />
        <button type="submit">Enviar</button>
    </form>
    </div>
  )
}

export default Contactos