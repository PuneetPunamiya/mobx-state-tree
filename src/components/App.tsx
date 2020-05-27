import React from 'react';
import './App.css';
import {WishListView} from './WishList';
import {WishList} from '../models/WishList';

const App = () => {

  const wishList = WishList.create({
    items: [
      {
        "name": "asd",
        "price": 123,
      },
      {
        "name": "qwe",
        "price": 123,
      },
    ]
  })

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
