import React from 'react'
import Book from './ui/Book'
import { books} from '../data'


export default function Featured() {
    // console.log(books);
    // console.log(books.filter((book) => book.rating === 5 ).slice(0, 4))
    const getFiveStarBooks = books.filter((book) => book.rating === 5 ).slice(0, 4)
    // function getFiveStarBooks () {
    //     console.log(books.filter((book) => book.rating === 5 ))
    // }

  return (
            <section id="features">
                <div className="container">
                    <div className="row">
                        <h2 className="section__title">
                            Featured <span className="blue">Books</span>
                        </h2>
                        <div className="books">
                            {
                            getFiveStarBooks.map((book) => 
                                <Book key={book.id} book={book} />
                            )}
                            {/* <Book title='Cracking the code interviews' price="$15.00" salePrice="$10.00" /> */}
                        </div>
                    </div>
                </div>
            </section>
  )
}
