import * as React from 'react'
import { NavLink } from 'react-router-dom';
import * as container from './authenticated/authenticatedContainer'
import MainMenu from './MainMenu';

type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps
  & { children: any }

const Authenticated: React.SFC<ThisProps> = ({ children, logout } : ThisProps ) => {
  return (<>    
      <MainMenu />
      <div id='authenticated'>
        <aside id="sidebar"> 
          <div>
          <p className="menu-label">
            Services
          </p>
          <ul className="menu-list">
            <li><NavLink activeClassName="is-active" to="/Home">Home</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Pomodoros">Pomodoros</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Ping">Ping</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Values">Values</NavLink></li>
          </ul>
          </div>       
        </aside>
        {children}
      </div>
    </>);
  }

export default container.connectContainer(Authenticated)
