import * as React from 'react'
import * as container from './authenticated/authenticatedContainer'
import MainMenu from './MainMenu';

type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps
  & { children: any }

const Authenticated: React.SFC<ThisProps> = ({ children, logout } : ThisProps ) => {
  return (
    <div className={'FancyBorder FancyBorder-red'}>

      <MainMenu />

            {children}
        </div>
    );
  }

export default container.connectContainer(Authenticated)
