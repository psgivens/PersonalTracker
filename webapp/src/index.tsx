import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store as ReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CrudlSaga } from 'src/jscommon/actions/CrudlSaga';
import { CrudlDatabaseWorker } from 'src/jscommon/workers/CrudlDatabaseWorker';
// import { PomodoroManagementSaga } from './actions/PomodoroManagementSaga';
import createPomodoroSaga from './actions/PomodoroSaga';
import App from './App';
import './index.css';
import * as state from './reducers';
import { reducers } from './reducers';
import registerServiceWorker from './registerServiceWorker';
// import { DatabaseWorker } from './workers/DatabaseWorker';

const sagaMiddleware = createSagaMiddleware()

const store: ReduxStore<state.All> = createStore(reducers, state.initialState, applyMiddleware(sagaMiddleware))

const crudlDatabaseWorker = new CrudlDatabaseWorker(store.dispatch)

const pomodoroManagementSaga = new CrudlSaga(crudlDatabaseWorker, "Pomodoros", "PomodoroManagement")
sagaMiddleware.run(() => pomodoroManagementSaga.saga())

sagaMiddleware.run(createPomodoroSaga(store.dispatch))

// const databaseWorker = new DatabaseWorker(store.dispatch)
// const pomodoroManagementSaga = new PomodoroManagementSaga(databaseWorker)
// sagaMiddleware.run(() => pomodoroManagementSaga.saga())
// sagaMiddleware.run(createPomodoroSaga(store.dispatch))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
