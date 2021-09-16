import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from "react-bootstrap";
import ProductDetailsContainer from "./containers/ProductDetailsContainer";
import './Sass/app.scss';
import Login from './components/Login';
import { connect } from 'react-redux';

const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Router {...rest} render={() => {
      return isAuthenticated ? Component : <Redirect to="/users/Login" />
    }} />
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main id="main" className="my-4">
          <Container fluid>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={ProductContainer} />
              <Route path='/product/details/:id' exact component={ProductDetailsContainer} />
              <Route path="/users/Login" component={Login} />
              
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    );
  }
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.userLogin.isLogin,
})

export default connect(mapStatetoProps, null)(App);