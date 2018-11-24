import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, Store as ReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createPomodoroSaga from 'src/core/actions/PomodoroSaga'
import { CrudlSaga } from 'src/jscommon/actions/CrudlSaga'
import { CrudlDatabaseWorker } from 'src/jscommon/workers/CrudlDatabaseWorker'
import App from './App'
import { ValuesSaga } from './core/actions/ValuesSaga';
import * as state from './core/reducers'
import { reducers } from './core/reducers'
import { AuthenticationSaga } from './jscommon/actions/AuthenticationSaga';
import { PingSaga } from './jscommon/actions/PingSaga'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const sagaMiddleware = createSagaMiddleware()

const store: ReduxStore<state.All> = createStore(reducers, state.initialState, applyMiddleware(sagaMiddleware))
const crudlDatabaseWorker = new CrudlDatabaseWorker(store.dispatch)
const pomodoroManagementSaga = new CrudlSaga(crudlDatabaseWorker, "Pomodoros", "PomodoroManagement")
sagaMiddleware.run(() => pomodoroManagementSaga.saga())
sagaMiddleware.run(createPomodoroSaga(store.dispatch))
const pingSaga = new PingSaga()
sagaMiddleware.run(() => pingSaga.saga())
const authenticationSaga = new AuthenticationSaga()
sagaMiddleware.run(() => authenticationSaga.saga())
const valuesSaga = new ValuesSaga()
sagaMiddleware.run(() => valuesSaga.saga())

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
