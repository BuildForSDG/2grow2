import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftMenu from './widgets/leftMenu'
import Bureau from './components/regions/bureau'
import Jobs from './components/regions/jobs'
import Dashboard from './components/regions/bureau/dashboard'
import EmployersManagement from './components/regions/bureau/employersManagment'
import JobSeekersManagement from './components/regions/bureau/candidatesManagment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <LeftMenu />
      <div style={{marginTop:'3%',padding:'1%'}}>
        <Switch>
          <Route path="/dashboard">
          {/* <Dashboard /> */}
          <div style={{marginTop : '20%',marginLeft : "40%"}}>Dashboard under construction...</div>

          </Route>
          <Route path="/information">
            <div style={{marginTop : '20%',marginLeft : "40%"}}>Not sure yet what to display here</div>
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>

          <Route path="/employers">
            <EmployersManagement />
          </Route>
          <Route path="/employers">
            <JobSeekersManagement />
          </Route>

          <Route path="/">
            <div style={{marginTop : '20%',marginLeft : "40%"}}> Login page under construction...</div>
          </Route>

        </Switch>
        </div>

    </Router>
  );
}

export default App;
