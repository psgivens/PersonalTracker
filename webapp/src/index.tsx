import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, Store as ReduxStore } from 'redux'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import * as state from './reducers'

import { reducers } from './reducers'

// import { DatabaseWorker } from './workers/DatabaseWorker'

// import { DatabaseWorkerEvent } from './data/PomodoroData'

const store: ReduxStore<state.All> = createStore(reducers, state.initialState)

// const databaseWorker = new DatabaseWorker(store.dispatch)
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


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
