import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LibraryLogo from '../assets/north_logo.svg'
import { Link } from "react-router-dom";


const Nav = ({numberOfItems}) => {
    function openMenu() {
        document.body.classList += " menu--open";
    }
    function closeMenu(){
        document.body.classList.remove('menu--open');
    }
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} className="nav_logo--img" alt="" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link nav__link--primary">Books</Link>
                    </li>
                    <li className="nav__icon nav__list">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon='shopping-cart' />
                          { numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>}
                        </Link>
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
                            <Link to="/" className="menu__link">
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className="menu__link">
                                Books
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className="menu__link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav