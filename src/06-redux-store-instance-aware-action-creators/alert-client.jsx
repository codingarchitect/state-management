// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import Alert from './alert.jsx';
import multiAlertStore from './multi-alert-store';
import store from '../store';

const showNewAlert = () => store.dispatch(
  multiAlertStore.idAwareActionCreators.setVisibility(true, 'idAwareActionCreatorsNewAlert'));

const AlertClient = () => (
  <div>
    <h2>Alert Client - Redux Store - Id Aware Client</h2>
    { /*
    <Alert
      initialMessage="This is an error message"
      initialVisibility
      type="danger"
      id="instanceWareActionCreatorsErrorAlert"
    />
    <Alert
      initialMessage="This is an info message"
      initialVisibility
      type="info"
      id="instanceWareActionCreatorsInfoAlert"
    />
    <Alert
      initialMessage="This is an warning message"
      initialVisibility
      type="warning"
      id="instanceWareActionCreatorsWarningAlert"
    />
    <Alert
      initialMessage="This is an success message"
      initialVisibility
      type="success"
      id="instanceWareActionCreatorsSuccessAlert"
    />
    */ }
    <Alert
      initialMessage="This is an success message"
      initialVisibility={false}
      type="success"
      id="idAwareActionCreatorsNewAlert"
    />
    <button onClick={showNewAlert}>Show New Alert</button>
  </div>
  );

export default AlertClient;
