// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import Alert from './alert.jsx';
import multiAlertStore from './multi-alert-store';
import store from '../store';

const showNewAlert = () => store.dispatch(
  multiAlertStore.makeMultiInstanceActionCreators('multiStoreClientNewAlert').setVisibility(true));

const AlertClient = () => (
  <div>
    <h2>Alert Client - Redux Store - Multi Store Client</h2>
    { /*
    <Alert
      initialMessage="This is an error message"
      initialVisibility
      type="danger"
      id="multiStoreClientErrorAlert"
    />
    <Alert
      initialMessage="This is an info message"
      initialVisibility
      type="info"
      id="multiStoreClientInfoAlert"
    />
    <Alert
      initialMessage="This is an warning message"
      initialVisibility
      type="warning"
      id="multiStoreClientWarningAlert"
    />
    <Alert
      initialMessage="This is an success message"
      initialVisibility
      type="success"
      id="multiStoreClientSuccessAlert"
    />
    */ }
    <Alert
      initialMessage="This is an success message"
      initialVisibility={false}
      type="success"
      id="multiStoreClientNewAlert"
    />
    <button onClick={showNewAlert}>Show New Alert</button>
  </div>
  );

export default AlertClient;
