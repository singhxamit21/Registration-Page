
import React from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App ">
    <Router className="navbar navbar-light bg-light container-fluid  ">
    <div >
      <ul className="list-unstyled fs-5 p-3 mb-2 bg-primary text-white text-center fw-bold" >
        <li>
          <Link className="text-decoration-none link-light d-inline p-2 " to="/">Register</Link>
        </li>
        <li>
          <Link className="text-decoration-none link-light d-inline p-2" to="/login">login</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
   </div>
  );
}

export default App;
