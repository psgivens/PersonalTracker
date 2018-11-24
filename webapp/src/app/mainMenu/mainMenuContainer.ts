import { connect } from 'react-redux';
import * as redux from 'redux';
import * as state from 'src/core/reducers/index';

export type AttributeProps = {} & {    
}
  
export type StateProps = {} & {
    isAuthenticated?: boolean
}
  
export type ConnectedDispatch = {} & {
    getValues?:() => void
}

const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => {
    return {
        isAuthenticated: state1.auth.isAuthenticated,
    } }

const mapDispatchToProps = (dispatch: redux.Dispatch<any>): ConnectedDispatch => {
    return {
        // getValues: () => dispatch(ValuesCommands.getValues())
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps>(mapStateToProps, mapDispatchToProps)
  
