import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LibraryLogo from '../assets/north_logo.svg'


const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }
    function closeMenu(){
        document.body.classList.remove('menu--open');
    }
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} className="nav_logo--img" alt="" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">Home</a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link nav__link--primary">Books</a>
                    </li>
                    <li className="nav__icon nav__list">
                        <a href="/cart" className="nav__link">
                            <FontAwesomeIcon icon='shopping-cart' />
                            <span className="cart__length">2</span>
                        </a>
                    </li>
                    <button  onClick={openMenu} className="btn__menu btn__icon">
                    <FontAwesomeIcon icon='bars' />
                    </button>
                </ul>
                <div className="menu__backdrop" >
                    <button onClick={closeMenu} className="btn__menu btn__menu--close icon" >
                        <FontAwesomeIcon icon='times' />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link">
                                Home
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">
                                Books
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">
                                Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav