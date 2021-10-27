import './App.css';
import AdminLayout from './layouts/Admin'
import AuthLayout from './layouts/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import React from 'react'

//functional component
const App = () =>{
  return (
    <Router> 
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/" render={(props) => <AuthLayout {...props} />} />
        <Route path="/">
          404
        </Route>
      </Switch>
    </Router>
  );
  
}

export default App;