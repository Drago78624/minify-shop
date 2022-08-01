import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='footer'>
        <p>&copy;copyright Minify-shop 1999-{new Date().getFullYear()}</p>
    </footer>
  )
}
