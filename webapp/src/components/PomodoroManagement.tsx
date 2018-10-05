
import * as React from 'react';

import { PomodoroIdb } from '../data/PomodoroData'

type BasicProps = {} & {}

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

const PomodoroManagement: React.SFC<BasicProps> = ( ) => 
  (<div className="container-fluid" >
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

        </tbody>
      </table>
    </section>
  </div>)

export default PomodoroManagement
