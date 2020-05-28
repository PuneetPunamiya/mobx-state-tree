import React from 'react';
import './App.css';
import WishListView from './WishList';
import {WishList} from '../models/WishList';
// import {setInterval} from 'timers';

const App = () => {

  const wishList = WishList.create({
    items: [
      {
        "name": "asd",
        "price": 1,
      },
      {
        "name": "qwe",
        "price": 123,
      },
    ]
  })

  // setInterval(() => {
  //   wishList.items[0].changePrice(wishList.items[0].price + 1)
  // }, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">WishList</h1>
        <WishListView wishlist={wishList} />
      </header>
    </div>
  );
}

export default App;
