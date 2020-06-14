import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header.js'
import Rating from './Rating.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class App extends Component{

  render(){
    return (
      <div>
        {/* <Header /> */}
        <Router>
          <Switch>
            {/* exact path so don't a;ways render initial path */}
            <Route exact path="/" component={Header} />
            <Route exact path="/Rating" component={Rating} />
          </Switch>
        </Router>
      </div>
    )
  }

}

export default App;
