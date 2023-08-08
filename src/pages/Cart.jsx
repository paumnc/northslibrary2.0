import React, { useEffect, useState } from 'react'
import EmptyCart from '../assets/emptycart-2.0.svg'
import { Link } from 'react-router-dom';


export default function Cart({ cart, changeQuantity, removeItem}) {

  const subTotal = () => {
    let price = 0;
    cart.forEach((item) => {
        price += +((item.salePrice || item.originalPrice) * item.quantity)
 
    });
    return price.toFixed(2)
  }


  

  return (
   <div id="books__body">
    <main id="books__main">
        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                <h2 className="cart__title">
                    Cart</h2>
                </div>
                <div className="cart">
                    <div className="cart__header">
                        <span className="cart__book">Book</span>
                        <span className="cart__quantity">Quantity</span>
                        <span className="cart__total">Price</span>
                    </div>
                    <div className="cart__body">
                        {
                            cart.map(book => {
                                return(
                                    <div className="cart__item">
                                    <div className="cart__book">
                                        <img src={book.url} alt="" className='cart__book--img' />
                                        <div className="cart__book--info">
                                            <span className="cart__book--title">
                                               {book.title}
                                            </span>
                                            <span className="cart__book--price">$
                                               {
                                               ( book.salePrice || book.originalPrice).toFixed(2)
                                               }
                                            </span>
                                            <span onClick={() => removeItem(book)} className="cart__book--remove">Remove</span>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input type="number" min={0} max={99} className='cart__input' 
                                        value={book.quantity}
                                        onChange={(event) => changeQuantity(book, event.target.value)}/>
                                    </div>
                                    <div className="cart__total">$
                                        {(( book.salePrice || book.originalPrice)* book.quantity).toFixed(2) }
                                    </div>
                                </div>
                                )
                            })
                        }
                       
                    </div>
                  {  cart.length == 0  && (<div className="cart__empty">
                        <img src={EmptyCart} alt="" className="cart__empty--img" />
                        <h2 className='cart__empty--header'>You don't have any books in your cart!
                        </h2>
                        <Link to="/books">
                        <button className="btn btn__style">Browse books</button>
                        </Link>
                    </div>)}
                </div>
               { cart.length > 0 && ( <div className="total">
                    <div className="total__item total__sub-total">
                        <span>Subtotal</span>
                        <span>${subTotal()}</span>
                    </div>
                    <div className="total__item total__tax">
                        <span>Tax</span>
                        <span>${(subTotal() * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__price">
                        <span>Total</span>
                        <span>${(+subTotal() + (+(subTotal() * 0.1))).toFixed(2)}</span>
                    </div>
                    <button className="btn btn__style btn__checkout no-cursor" onClick={() => alert(`Not implemented`)}>
                        Proceed to checkout
                    </button>

                </div>)}
            </div>
        </div>
    </main>
   </div>
  )
}
