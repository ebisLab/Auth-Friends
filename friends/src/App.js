import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './component/Login'


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Sign Up folks</h1>
      {/* <Login /> */}
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={GasPrices} />

    </div>
    </Router>
    
  );
}

export default App;
