import React from 'react'
import GHlogo from '../images/github-logo.png'
import Hlogo from '../images/Hlogo.png'
import WClogo from '../images/WClogo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <section className="Footer">

      <div className="footer-Links">
        <Link to="/about"><h3>About</h3></Link>
        <Link to="/contacts"><h3>Contacts</h3></Link>
      </div>
      <a href="https://github.com/FilipeTeixeira09/MTG-project"><img className="footer-gh" src={`${GHlogo}`}></img></a>
      <div className="footer-brands">
        <a href="https://company.wizards.com/pt-BR"><img className="footer-logos" src={`${WClogo}`}></img></a>
        <a href="https://products.hasbro.com/pt-pt"><img className="footer-logos" src={`${Hlogo}`}></img></a>
      </div>
    </section>
  )
}

export default Footer