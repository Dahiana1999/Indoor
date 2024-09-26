import React from 'react'

function Header() {
  return (
    <div id='header' className="header">
      <h1 className='header_h1'>TRT <img src="src/IMG/1.png" className="header_img" alt="logo"/></h1>
      <ul className='nav'>
        <li className='nav_li'>Inicio</li>
        <li className='nav_li'>Sobre mi</li>
        <li className='nav_li'>Cuidado y salud</li>   
        <li className='nav_li'>Ciclismo</li>
        <li className='nav_li'>Contacto</li>
        <a href='#' className='icons'> <i class="fa-brands fa-facebook"></i> </a>
        <a href='#' className='icons'> <i class="fa-brands fa-instagram"></i> </a>
        <a href='#' className='icons'> <i class="fa-brands fa-youtube"></i> </a>
      </ul>
    </div>
  )
}

export default Header 