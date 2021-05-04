import React from 'react';
import './css/App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProductContainer from './containers/ProductContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Container fluid>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/products" component={ProductContainer} />
              </Switch>
        </Container>
        <Footer />
      </Router>
    );
  }
}
export default App;

// npx json-server --watch -p 3000  .\src\data\json-server-data.json