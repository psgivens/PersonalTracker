import * as React from 'react'

import { Link } from "react-router-dom";
import { connectContainer } from './mainMenu/mainMenuContainer';

import * as container from './mainMenu/mainMenuContainer'


type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps


const MainMenu: React.SFC<ThisProps> = ({ isAuthenticated } : ThisProps ) => {
    const menuItems = isAuthenticated 
        ? (<> 
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/Pomodoros">Pomodoros</Link>
            <Link className="navbar-item" to="/Ping">Ping</Link>
            <Link className="navbar-item" to="/Values">Values</Link>
            </>)
        : (<> 
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/Ping">Ping</Link>
            <Link className="navbar-item" to="/Login">Login</Link>
        </>)

    return (<nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="my-important-menu" >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div className="navbar-menu" id="my-important-menu">
                <div className="navbar-end">
                    {menuItems}
                </div>
            </div>
        </nav>)
}


export default connectContainer(MainMenu)
