import React from 'react';
import { BrowserRouter as Router, switch, route } from 'react-router-dom';
import Header from './components/Header'
import ProductDetails from './components/productDetail';
import ProductListing from './components/productListing';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetails}/>
      </Router>
    </div>
  )
}

export default App
