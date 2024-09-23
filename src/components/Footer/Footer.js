import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
    <h3>&copy; Wefo {new Date().getFullYear()}</h3>
   </footer>
  )
}

export default Footer

