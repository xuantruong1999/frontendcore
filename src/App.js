import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import './Sass/app.scss';
import Login from './components/Login';
import PrivateRoute from './components/modules/PrivateRoute';
import CartContainer from './containers/CartContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main id="main" className="my-4">
          <Container fluid>
           <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users/Login" component={Login} />
              <PrivateRoute exact path="/products" component={ProductContainer} />
              <PrivateRoute exact path="/cart" component={CartContainer} />
              <PrivateRoute path='/product/details/:id' exact component={ProductDetailsContainer} />
              <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
