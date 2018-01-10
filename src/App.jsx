import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AlertClient from './00-props-only/alert-client.jsx';
import ReduxStoreAlertClient from './01-redux-store/alert-client.jsx';
import ReduxStoreWithInitialPropsAlertClient from
  './02-redux-store-with-initial-props/alert-client.jsx';
import ReduxStoreMultiInstanceAlertClient from
  './03-redux-store-multi-instance/alert-client.jsx';
import ReduxStoreMultiConnectAlertClient from
  './04-redux-store-multi-connect/alert-client.jsx';
import ReduxStoreMultiStoreClientAlertClient from
  './05-redux-store-multi-store-client/alert-client.jsx';
import ReduxStoreInstanceAwareAlertClient from
  './06-redux-store-instance-aware-action-creators/alert-client.jsx';

const App = ({ dispatch }) => (
  <div>
    <h1>Hello from react!</h1>
    <button onClick={() => dispatch({ type: 'PING' })}>Dispatch Ping</button>
    <div>Check the console to see if ping was mapped to pong by cycle on Dispatch Ping</div>
    <AlertClient />
    <ReduxStoreAlertClient />
    <ReduxStoreWithInitialPropsAlertClient />
    <ReduxStoreMultiInstanceAlertClient />
    <ReduxStoreMultiConnectAlertClient />
    <ReduxStoreMultiStoreClientAlertClient />
    <ReduxStoreInstanceAwareAlertClient />
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
