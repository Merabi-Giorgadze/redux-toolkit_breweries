import React from 'react'
import { Link } from 'react-router-dom'

const NavBar:React.FC = () => {
  return (
    <nav style={{display: 'flex', width: '200px', justifyContent: 'space-evenly', marginBottom: '20px'}}>
     <Link to={'/breweries'}>Breweries</Link>
     <Link to={'/'}>Home</Link>
    </nav>
  )
}

export default NavBar