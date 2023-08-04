import React from "react";
import Undraw from '../assets/undraw_reading_time_re_phf7.svg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Canada's most awared online library platform</h1>
                        <h2>Find your dream book with <span className="blue">Library</span></h2>
                        <a href="/">
                            <button className="btn btn__style">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={Undraw} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing