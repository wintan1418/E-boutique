import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/productDetail';
import ProductListing from './components/productListing';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
     <Routes>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/products/:productId" exact component={ProductDetails}/>
        <Route>404 not found</Route>
     </Routes>
       
      </Router>
    </div>
  );
};

export default App;
