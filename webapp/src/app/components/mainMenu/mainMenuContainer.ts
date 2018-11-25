import { connect } from 'react-redux';
import * as redux from 'redux';
import * as state from 'src/core/reducers/index';
import { AuthenticationCommand, AuthenticationCommands } from 'src/jscommon/actions/AuthenticationSaga';

export type AttributeProps = {} & {    
}
  
export type StateProps = {} & {
    isAuthenticated?: boolean
}
  
export type ConnectedDispatch = {} & {
    logout?:() => void
}

const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => {
    return {
        isAuthenticated: state1.auth.isAuthenticated,
    } }

const mapDispatchToProps = (dispatch: redux.Dispatch<AuthenticationCommand>): ConnectedDispatch => {
    return {
        logout: () => dispatch(AuthenticationCommands.logout())
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps>(mapStateToProps, mapDispatchToProps)
  
