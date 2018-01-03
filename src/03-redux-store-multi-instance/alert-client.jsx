// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import Alert from './alert.jsx';

const AlertClient = () => (
  <div>
    <h2>Alert Client - Redux Store - Multi Instance</h2>
    <Alert
      initialMessage="This is an error message"
      initialVisibility
      type="danger"
      id="multiInstanceErrorAlert"
    />
    <Alert
      initialMessage="This is an info message"
      initialVisibility
      type="info"
      id="multiInstanceInfoAlert"
    />
    <Alert
      initialMessage="This is an warning message"
      initialVisibility
      type="warning"
      id="multiInstanceWarningAlert"
    />
    <Alert
      initialMessage="This is an success message"
      initialVisibility
      type="success"
      id="multiInstanceSuccessAlert"
    />
  </div>
  );

export default AlertClient;
