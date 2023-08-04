import React from 'react'
import footerLogo from '../assets/north_logo--white.svg'

export default function Footer() {
  return (
    <footer>
        <div className="container">
        <div className="row row__column">
            <a href="/">
                <figure className='footer__logo'>
                    <img src={footerLogo} alt="" className="footer__logo--img" />
                </figure>
            </a>
            <div className="footer__list">
                <a href="/" className='footer__link'>Home</a>
                <span className='footer__link no-cursor'>About</span>
                <a href="/" className='footer__link'>Books</a> <a href="/" className='footer__link'>Contacts</a>
            </div>
            <div className="footer__copyright">
            Copyright © 2023
            </div>
        </div>
        </div>
    </footer>
  )
}
