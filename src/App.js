import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/products" component={ProductList} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
  );
};

export default App;