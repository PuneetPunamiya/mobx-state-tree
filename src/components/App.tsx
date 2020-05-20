import React from 'react';
import './App.css';
import {WishList} from '../models/WishList'
import WishListView from './WishListView';

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

  console.log(wishList.items)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">WishList</h1>
        <WishListView items={wishList} />
      </header>
    </div>
  );
}

export default App;
