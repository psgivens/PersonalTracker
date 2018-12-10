import * as React from 'react'
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
      <div className='FullHeight'>
        <aside id="sidebar"> 
        <p className="menu-label">
    General
  </p>
  <ul className="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p className="menu-label">
    Administration
  </p>
  <ul className="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a className="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p className="menu-label">
    Transactions
  </p>
  <ul className="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
        

        </aside>
        <div id="nextbar" className='FullHeight' >
          <div  className='FancyBorder FancyBorder-red'>        
            {children}
          </div>
        </div>
      </div>
    </>);
  }

export default container.connectContainer(Authenticated)
