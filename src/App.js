import React, { Component } from 'react';
// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
import routes from './routes.js';

import './App.css';

class App extends Component {



  render() {
    return (
      <div className="parent">
        <header><Header /></header>
        <div className="App">

        {routes}

        </div>
      </div>
    );
  }
}

export default App;
