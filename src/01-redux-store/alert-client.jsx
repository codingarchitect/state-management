// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import { connect } from 'react-redux';

import AlertStore from './alert-store';
import Alert from './alert.jsx';

const AlertClient = () => (
  <div>
    <h2>Alert Client - Redux Store</h2>
    <Alert type="danger" />
  </div>
  );

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  dispatch(AlertStore.actionCreators.setVisibility(true));
  dispatch(AlertStore.actionCreators.setMessage('This is an error message'));
  return {};
};

export const EnhancedAlertClient = connect(mapStateToProps, mapDispatchToProps)(AlertClient);

export default EnhancedAlertClient;
