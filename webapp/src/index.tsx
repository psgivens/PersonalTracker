import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, Store as ReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createPomodoroSaga from 'src/core/actions/PomodoroSaga'
import { CrudlSaga } from 'src/jscommon/actions/CrudlSaga'
import { CrudlDatabaseWorker } from 'src/jscommon/workers/CrudlDatabaseWorker'
import App from './App'
import * as state from './core/reducers'
import { reducers } from './core/reducers'
import './index.css'
import { PingSaga } from './jscommon/actions/PingSaga'
import registerServiceWorker from './registerServiceWorker'

const sagaMiddleware = createSagaMiddleware()

const store: ReduxStore<state.All> = createStore(reducers, state.initialState, applyMiddleware(sagaMiddleware))
const crudlDatabaseWorker = new CrudlDatabaseWorker(store.dispatch)
const pomodoroManagementSaga = new CrudlSaga(crudlDatabaseWorker, "Pomodoros", "PomodoroManagement")
sagaMiddleware.run(() => pomodoroManagementSaga.saga())
sagaMiddleware.run(createPomodoroSaga(store.dispatch))
const pingSaga = new PingSaga()
sagaMiddleware.run(() => pingSaga.saga())

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
