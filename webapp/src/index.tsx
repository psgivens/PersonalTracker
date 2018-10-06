import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, Store as ReduxStore } from 'redux'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware } from 'redux'

import { PomodoroManagementSaga } from './actions/PomodoroManagementSaga'

import createSagaMiddleware from 'redux-saga'

import * as state from './reducers'

import { reducers } from './reducers'

import { DatabaseWorker } from './workers/DatabaseWorker'

import createPomodoroSaga from './actions/PomodoroSaga'

// import { DatabaseWorkerEvent } from './data/PomodoroData'

const sagaMiddleware = createSagaMiddleware()

const store: ReduxStore<state.All> = createStore(reducers, state.initialState, applyMiddleware(sagaMiddleware))


const databaseWorker = new DatabaseWorker(store.dispatch)
// databaseWorker.post({ 
//   item: {
//     actual: "Actually did the thing",
//     id: Math.floor(Math.random() * 1000000000),
//     planned: "Doing the thing",
//     startTime: Date.now(),
//     userId: "psgivens",
//     version: 0
//   },
//     type: "INSERT_ITEM",
//   })
//   .then((event:DatabaseWorkerEvent) =>{
//     // tslint:disable-next-line:no-console
//     console.log("index.tsx call to postToDb: " + JSON.stringify(event))
//   })


const pomodoroManagementSaga = new PomodoroManagementSaga(databaseWorker)
sagaMiddleware.run(() => pomodoroManagementSaga.saga())
sagaMiddleware.run(createPomodoroSaga(store.dispatch))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
