import React from 'react'
import footerLogo from '../assets/north_logo--white.svg'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
        <div className="container">
        <div className="row row__column">
            <Link to="/">
                <figure className='footer__logo'>
                    <img src={footerLogo} alt="" className="footer__logo--img" />
                </figure>
            </Link>
            <div className="footer__list">
                <Link to="/" className='footer__link'>Home</Link>
                <span className='footer__link no-cursor'>About</span>
                <Link to="/books" className='footer__link'>Books</Link> <Link to="/" className='footer__link'>Contacts</Link>
            </div>
            <div className="footer__copyright">
            Copyright © 2023
            </div>
        </div>
        </div>
    </footer>
  )
}
