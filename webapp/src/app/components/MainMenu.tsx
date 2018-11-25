import * as React from 'react'
import { Link } from "react-router-dom";
import { connectContainer } from './mainMenu/mainMenuContainer';
import * as container from './mainMenu/mainMenuContainer'


type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps


const MainMenu: React.SFC<ThisProps> = ({ isAuthenticated, logout } : ThisProps ) => {
    const onLogoutPressed = (event: React.SyntheticEvent<any>) => {
        event.preventDefault()
        logout!()
      }
    const menuItems = isAuthenticated 
        ? (<> 
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/Pomodoros">Pomodoros</Link>
            <Link className="navbar-item" to="/Ping">Ping</Link>
            <Link className="navbar-item" to="/Values">Values</Link>
            <a className="navbar-item" onClick={onLogoutPressed}>Logout</a>
            </>)
        : (<> 
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/Login">Login</Link>
        </>)

    return (<>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
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
        </nav>

        </>)
}


export default connectContainer(MainMenu)
