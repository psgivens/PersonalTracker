import { combineReducers } from 'redux';
import { createInitialState, crudlReducer, CrudlState } from 'src/jscommon/reducers/CrudlReducers';
import { PomodoroEvent } from '../actions/PomodoroSaga';

export const initialState:All = { 
  pomodoro: { type: "NOT_RUNNING" },
  pomodoros: createInitialState()
}

export type PomodoroTimerState = {
    type: "NOT_RUNNING"
  } | {
    type: "RUNNING"
    remaining: number
    timerId: number
  } | {
    type: "BREAK"
    length: "Short" | "Long"
    remaining: number
    timerId: number
  }
  
  export const initialPomodoroTimerState:PomodoroTimerState = {
    type: "NOT_RUNNING"
  }

  export type All = {} & {
    pomodoros: CrudlState,
    pomodoro: PomodoroTimerState
  }  

function pomodoroReducers(state:PomodoroTimerState = { type: "NOT_RUNNING" }, action: PomodoroEvent): PomodoroTimerState {
    switch(action.type) {
      case "POMODORO_TIMER_STARTED":
        return {
          remaining: 25 * 60,               
          timerId: action.timerId,
          type: "RUNNING"      
        } 
      case "POMODORO_TIMER_STOPPED":
        return {
          type: "NOT_RUNNING"      
        } 
      case "POMODORO_TICKED":
        const prev = state
        if (prev.type === "RUNNING") {
          return {
            ...prev, remaining: prev.remaining-1 }
        }
        else { return state }
      default:
        return state
    }
  }
  
  export const reducers = combineReducers( {
    pomodoro: pomodoroReducers,
    pomodoros: crudlReducer("Pomodoros")
  })


