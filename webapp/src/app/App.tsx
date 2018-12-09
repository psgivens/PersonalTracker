import * as React from 'react'
import { BrowserRouter as Router, Route, Switch   } from "react-router-dom"
import WebappPingComponent from 'src/core/components/WebappPing';
import Login from '../core/components/Login';
import PomodoroManagement from '../core/components/PomodoroManagement';
import ValuesComponent from '../core/components/ValuesComponent';
import Welcome from '../core/components/Welcome'

import ProtectedRoute from '../jscommon/controls/ProtectedRoute';

import './css/sample.css'

import './App.css'

type BasicProps = {} & {}

const App: React.SFC<BasicProps> = () => 
    (<Router>
        <>
          <Switch>
            <ProtectedRoute path="/Ping" component={ WebappPingComponent } />
            <ProtectedRoute path="/Values" component={ ValuesComponent } />
            <ProtectedRoute path="/Pomodoros" component={ PomodoroManagement } />
            <Route path="/Home" component={ Welcome } />
            <Route path="/Login" component={ Login } />
            <Route path="/" component={ Welcome } />                      
          </Switch>
        </>
    </Router>)

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( (el:any) => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target:any = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});


export default App;
