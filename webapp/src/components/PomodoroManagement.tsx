
import * as React from 'react';

import { PomodoroIdb } from '../data/PomodoroData'

import * as container from './pomodoroManagement/PomodoroManagementConnect'

import { connect } from 'react-redux';

type ThisProps = container.StateProps & container.ConnectedDispatch & container.AttributeProps


/*************** TODO Remove *******************/
const SecondStyle = {
  backgroundColor: "green"
}

const poms:PomodoroIdb[] = [
  {
    actual: "Checked out a movie",
    id: 1,
    planned: "Checking out a movie",
    startTime: 1,
    userId: "1",    
    version: 1  
  }
]
/*************** end Remove *******************/

// TODO: Add error-boundaries
// https://reactjs.org/docs/error-boundaries.html

type ComponentState = {} & {
}

class PomodoroManagementComp extends React.Component<ThisProps, ComponentState> {
// const PomodoroManagementComp: React.SFC<ThisProps> = ( {pomodoros}:ThisProps ) => 
constructor (props:ThisProps) {
  super (props)
  this.state = {
  }
  // this.onActualChange = this.onActualChange.bind(this)
  // this.onPlannedChange = this.onPlannedChange.bind(this)
  // this.onClick = this.onClick.bind(this)

  this.props.loadItems!()
}

  public render () {
  return (<div className="container-fluid" >
    <section className="hero is-primary">
      <div className="hero-body" style={SecondStyle}>
        <p className="title" style={SecondStyle}>
          Pomodoro Management
        </p>
        <p className="subtitle">
          List and edit <strong>Pomodoros</strong>
        </p>
      </div>
    </section>    
    <section className="section">
      <table className="table">
        <thead>
          <tr>
            <th>Planned</th>
            <th>Actual</th>
            <th>Start</th>
          </tr>
        </thead>
        <tbody>
        {poms.map((pomodoro:PomodoroIdb)=>
          <tr key={pomodoro.id}>
            <td>{pomodoro.planned}</td>
            <td>{pomodoro.actual}</td>
            <td>{(new Date(pomodoro.startTime)).toLocaleString()}</td>
          </tr>)}

        {this.props.pomodoros.map((pomodoro:PomodoroIdb)=>
          <tr key={pomodoro.id}>
            <td>{pomodoro.planned}</td>
            <td>{pomodoro.actual}</td>
            <td>{(new Date(pomodoro.startTime)).toLocaleString()}</td>
          </tr>)}

        </tbody>
      </table>
    </section>
  </div>)
  }
}

export default connect<{}, {}, container.AttributeProps>(container.mapStateToProps, container.mapDispatchToProps) (PomodoroManagementComp)
