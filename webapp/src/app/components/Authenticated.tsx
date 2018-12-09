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
      <aside id="sidebar"> left-sidebar </aside>
      <div id="nextbar" className='FullHeight' >
      <div  className='FancyBorder FancyBorder-red'>        
        {children}
      </div>
      </div>
      </div>
    </>);
  }

export default container.connectContainer(Authenticated)
