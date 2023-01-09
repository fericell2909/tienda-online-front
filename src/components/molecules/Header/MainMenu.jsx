import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
  return (
    <>
        <nav>

            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
        </nav>
    </>
  )
}

export default MainMenu
