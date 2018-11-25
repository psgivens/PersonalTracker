import * as React from 'react'
import MainMenu from './MainMenu';

type ThisProps = {} & {
    children: any
}

const Unauthenticated: React.SFC<ThisProps> = ({ children } : ThisProps ) => {

     return (
        <div className={'FancyBorder FancyBorder-red'}>
            <MainMenu />
            {children}
        </div>
    );
  }

export default Unauthenticated
