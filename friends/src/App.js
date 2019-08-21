import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import './App.css';
import Login from './component/Login'
import PrivateRoute from './component/PrivateRoute';
import Friends from './component/Friends';



const ProtectedRoute = ({component: Component, ...rest}) => {


  return  <Route {...rest} render ={ props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
     
    } else {
      return <Redirect to = '/login' />;
    }
  }} />


}
// const ProtectedRoute = (props) => {
//   const propsWComp = {...props, component: undefined};
//   return <Route {...propsWoutComp} render = {props => {
//     if (localStorage.getItem('token')) {
//       return <props.component {...props } />;

//     } else {
//       <Redirect to ='/login/' />;
//     }
//   }} />
  
// };

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Sign Up folks</h1>
      {/* <Login /> */}
      <Route exact path="/" component={Login} /> 
      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/friends" component={Friends} />

    </div>
    </Router>
    
  );
}
//i<3Lambd4

export default App;
