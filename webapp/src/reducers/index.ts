// import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';
import { PomodoroIdb } from '../data/PomodoroData'

import { PomodoroManagementEvent } from '../actions/PomodoroManagementSaga'

import { PomodoroEvent } from '../actions/PomodoroSaga'

export const initialState:All = { 
  pomodoro: { type: "NOT_RUNNING" },
  pomodoros: [
    {
      actual: "Initialized the database",
      id: 1,
      planned: "Initializing teh database",
      startTime: 1,
      userId: "1",    
      version: 1  
    }
  ]
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
  
//   type PomodoroTimerStates = {} & {
//     [name:string]: PomodoroTimerState
//   }

  export type All = {} & {
    pomodoros: PomodoroIdb[],
    pomodoro: PomodoroTimerState
  }  

function pomodoroReducers(state:All, action: PomodoroEvent): All {
    switch(action.type) {
      case "POMODORO_TIMER_STARTED":
        return { ...state, pomodoro: {
          remaining: 25 * 60,               
          timerId: action.timerId,
          type: "RUNNING"      
        } }
      case "POMODORO_TIMER_STOPPED":
        return { ...state, pomodoro: {
          type: "NOT_RUNNING"      
        } }
      case "POMODORO_TICKED":
        const prev = state.pomodoro
        if (prev.type === "RUNNING") {
          return { ...state, pomodoro: {
            ...prev, remaining: prev.remaining-1 }}
        }
        else { return state }
      default:
        return state
    }
  }
  
  
  function pomodoroManagmentReducers(state:All, action: PomodoroManagementEvent): All {
    switch(action.type) {
      case "POMODORO_ITEMSLOADED":
        return { ...state, pomodoros: action.items }
      case "POMODORO_ITEMADDED":
        return { ...state, pomodoros:[...state.pomodoros, action.item]}
      default:
        return { ...state, pomodoros: state.pomodoros ? state.pomodoros : [] }
    }
  }
  
  export const reducers = reduceReducers( pomodoroManagmentReducers, pomodoroReducers)