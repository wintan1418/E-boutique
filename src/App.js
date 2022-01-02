import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetails from './components/productDetail';
import ProductListing from './components/productListing';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/product/:productId" exact component={ProductDetails}/>
        <Route>404 not found</Route>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
