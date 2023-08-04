import React from 'react'

export default function Explore() {
  return (
    <section id="explore">
        <div className="container">
            <div className="row row__column">
            <h2 className="section__title">Explore more <span className="blue">Books</span></h2>
            <a href="/books">
                <button className="btn btn__style">
                    Browse Books
                </button>
            </a>
        </div></div>
    </section>
  )
}
