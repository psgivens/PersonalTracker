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
            Bootstrapping Services
          </p>
          <ul className="menu-list">
            <li><NavLink activeClassName="is-active" to="/Home">Home</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Pomodoros">Pomodoros</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Ping">Ping</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Values">Values</NavLink></li>
          </ul>
          <p className="menu-label">
            Planned Services
          </p>
          <ul className="menu-list">
            <li><NavLink activeClassName="is-active" to="/People">People</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Groups">Groups</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Interactions">Interactions</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Issues">Issues</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/ActionItems">Action Items</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Planning">Planning</NavLink></li>
            <li><NavLink activeClassName="is-active" to="/Execution">Execution</NavLink></li>
          </ul>
          </div>       
        </aside>
        <div className="appcontent">
          {children}
        </div>
      </div>
      <aside id="statusbar">
          (1) | (9) | (7)
      </aside>
    </>);
  }

export default container.connectContainer(Authenticated)
