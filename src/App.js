import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Contact from './Components/Contact';
import Index from './Components/index';
import Navbar from './Components/Navbar';
class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Index} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
