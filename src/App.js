import React from 'react';
import './css/App.css';
import Product from './function/Product';
import Header from './function/Header';
import About from './function/About';
import Home from './function/Home';
import Footer from './function/Footer';
import Contact from './function/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './function/AppProvider';
import AppContext from './function/AppProvider';

class App extends React.Component {
  render(){
    return (
     <AppProvider>
        <Router>
          <Header />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/products" component={ Product } />
                </Switch>
            </div>
          <Footer />
        </Router>
     </AppProvider>
    );
  }
}
export default App;