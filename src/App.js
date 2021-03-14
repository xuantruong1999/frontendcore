import React from 'react';
import './css/App.css';
import Product from './Components/Product';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './Components/AppProvider';
import SideBar from './Components/SideBar';
class App extends React.Component {
  render(){
    return (
     <AppProvider>
        <Router>
          <Header />
          <div className="container">
            <div className="row">
              <SideBar />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/products" component={ Product } />
                </Switch>
            </div>
          </div>
          <Footer />
        </Router>
     </AppProvider>
    );
  }
}
export default App;