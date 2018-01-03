// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import Alert from './alert.jsx';
import alertStore from './alert-store';
import wrapActionCreators from '../multi-instance/wrap-action-creators';
import store from '../store';

const showNewAlert = () => store.dispatch(wrapActionCreators(alertStore.actionCreators, 'multiConnectNewAlert')
  .setVisibility(true));

const AlertClient = () => (
  <div>
    <h2>Alert Client - Redux Store - Multi Connect</h2>
    { /*
    <Alert
      initialMessage="This is an error message"
      initialVisibility
      type="danger"
      id="multiConnectErrorAlert"
    />
    <Alert
      initialMessage="This is an info message"
      initialVisibility
      type="info"
      id="multiConnectInfoAlert"
    />
    <Alert
      initialMessage="This is an warning message"
      initialVisibility
      type="warning"
      id="multiConnectWarningAlert"
    />
    <Alert
      initialMessage="This is an success message"
      initialVisibility
      type="success"
      id="multiConnectSuccessAlert"
    />
    */ }
    <Alert
      initialMessage="This is an success message"
      initialVisibility={false}
      type="success"
      id="multiConnectNewAlert"
    />
    <button onClick={showNewAlert}>Show New Alert</button>
  </div>
  );

export default AlertClient;
