// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import Alert from './alert.jsx';

const AlertClient = () => (
  <div>
    <h2>Alert Client - Redux Store - With Initial Props</h2>
    <Alert
      initialMessage="This is an error message"
      initialVisibility
      type="danger"
    />
  </div>
  );

export default AlertClient;
