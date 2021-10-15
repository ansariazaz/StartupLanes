import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import Verify from './Component/Verify';
import Profile from './Component/Profile';
import Register from './Component/Register';
import Invester from './Component/Invester';


function App() {
  return (
    <div>
     
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/Profile" component={Profile}></Route>
          <Route path="/Verify" component={Verify} exact></Route>
          <Route path="/Register" component={Register} exact></Route>
          <Route path="/Invester" component={Invester} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
