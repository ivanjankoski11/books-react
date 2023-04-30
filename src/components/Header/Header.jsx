import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className='py-3'>
        <div className='container'>
          <div className='flex'>
            <Link className='text-white text-decoration-none me-3' to={'/'} >Home</Link>
            <Link className='text-white text-decoration-none me-3' to={'/books'}>Books</Link>
            <Link className='text-white text-decoration-none' to={'/authors'}>Authors</Link>
          </div>
        </div>
      </Navbar>
  )
}

export default Header