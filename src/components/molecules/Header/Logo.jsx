import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo flex'>
      <Link to="/">
        <img src="https://ed.team/images/logo/logo-monocolor.svg" alt="Logo" />
      </Link>
    </div>
  )
}

export default Logo
