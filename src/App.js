import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import { books } from './data'
import BookInfo from "./pages/BookInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart (book) {
    setCart([...cart, {...book, quantity: 1}])

    // test code
    // checking the cart if there's a duplicate
    // const dupeItem = cart.find(item => +item.id === +book.id);
    // if(dupeItem) {
    //   // returning the item if there's a duplicate + the quantity
    //   setCart(cart.map((item) => {
    //     if (item.id === dupeItem.id) {
    //       return {
    //         ...item, quantity: item.quantity + 1,
    //       };
    //     } else {
    //       // else if there's no duplicate add the item to the cart or return the item
    //       return item;
    //     }
    //   }))
    //   // dupeItem.quantity += 1;
    // } else {
    //   // return all the books and add quantity on it.
    //   setCart([...cart, { ...book, quantity: 1}]
    //   )
    // }
    // console.log(dupeItem) 
    //spreading the cart plus adding quantity to the book
    // setCart([...cart ,{...book, quantity: 1}]);
    // console.log('item added', book);
  }
// to change the quantity of books in the cart
  function changeQuantity(book, quantity) {
    // console.log(book, quantity)
    setCart(
      cart.map(item => item.id === book.id 
        ? { ...item , quantity: +quantity } 
        : item
    ))
  }
//removing items and updating the cart
  function removeItem (item) {
    setCart(cart.filter(book => book.id !== item.id))
console.log('remove item', item)
  }

  function numberOfItems () {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
   <Router>

    <div className="App">
     <Nav numberOfItems={numberOfItems()} />
    <Routes>
     <Route path="/"  element={<Home />} />
     {/* passed the books in data on the Books page to make it cleaner */}
     <Route path="/books" element={<Books books={books}/>} />
     {/* making it dynamic to view each books */}
     <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
     <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />

    </Routes>
     <Footer />
      {/* <Home /> */}
    </div>
   </Router>
    
  );
}

export default App;
