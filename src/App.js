import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
