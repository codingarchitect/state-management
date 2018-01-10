/* eslint fp/no-unused-expression: 1 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';

import ReduxStoreAlertStore from './01-redux-store/alert-store';
import ReduxStoreWithInitialPropsAlertStore from './02-redux-store-with-initial-props/alert-store';
import ReduxStoreMultiInstanceAlertStore from './03-redux-store-multi-instance/multi-alert-store';
import ReduxStoreMultiConnectAlertStore from './04-redux-store-multi-connect/multi-alert-store';
import ReduxStoreMultiStoreClientAlertStore from
  './05-redux-store-multi-store-client/multi-alert-store';
import ReduxStoreInstanceAwareActionCreatorsStore from
  './06-redux-store-instance-aware-action-creators/multi-alert-store';


const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver, makeStateDriver } = cycleMiddleware;

const store = createStore(combineReducers(
  { ReduxStore: ReduxStoreAlertStore.reducer,
    ReduxStoreWithInitialProps: ReduxStoreWithInitialPropsAlertStore.reducer,
    ReduxStoreMultiInstance: ReduxStoreMultiInstanceAlertStore.reducer,
    ReduxStoreMultiConnect: ReduxStoreMultiConnectAlertStore.reducer,
    ReduxStoreMultiStoreClient: ReduxStoreMultiStoreClientAlertStore.reducer,
    ReduxStoreMultiInstanceAware: ReduxStoreInstanceAwareActionCreatorsStore.reducer }),
  {},
  applyMiddleware(cycleMiddleware));

function attachCycle(cycle) {
  return run(cycle, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    Time: timeDriver,
    HTTP: makeHTTPDriver(),
  });
}

function main(sources) {
  const pong$ = sources.ACTION
    .filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' })
    .debug();

  return {
    ACTION: pong$,
  };
}

attachCycle(main);

export default store;
