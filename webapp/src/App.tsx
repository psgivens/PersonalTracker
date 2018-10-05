import * as React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch   } from "react-router-dom"

import logo from './logo.svg'

import Welcome from './components/Welcome'

import MainMenu from './app/MainMenu'

import './css/sample.css'

import PomodoroManagement from './components/PomodoroManagement';

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and chill.
//         </p>
//       </div>
//     );
//   }
// }

type BasicProps = {} & {}

const App: React.SFC<BasicProps> = () => 
    (<Router>
        <>
        <img src={logo} className="App-logo" alt="logo" />
          <MainMenu />
          <Switch>
            <Route path="/Home" component={ Welcome } />
            {/* <Route path="/CounterDemo" component={ CounterDemo } />
            <Route path="/ListDemo" component={ ListDemo } />
            <Route path="/PomodoroDemo" component={ PomodoroDemo } />            
            <Route path="/ThirdDemo" component={ ThirdDemo } />*/}
            <Route path="/Pomodoros" component={ PomodoroManagement } />
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
