// TODO: Find a way to avoid fp/no-nil
/* eslint fp/no-nil: 1 */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import Alert from './alert.jsx';

const AlertClient = ({
  errorMessage,
  infoMessage,
  warningMessage,
  successMessage,
  clearError,
  clearInfo,
  clearWarning,
  clearSuccess,
}) => (
  <div>
    <h1>Alert Client</h1>
    <Alert message={errorMessage} type="danger" close={clearError} />
    <Alert message={infoMessage} type="info" close={clearInfo} />
    <Alert message={warningMessage} type="warning" close={clearWarning} />
    <Alert message={successMessage} type="success" close={clearSuccess} />
  </div>
  );

export const EnhancedAlertSample = compose(
  withState('errorMessage', 'setErrorMessage', 'This is an error message.' /* Initial errorMessage */),
  withState('infoMessage', 'setInfoMessage', 'This is an info message.' /* Initial infoMessage */),
  withState('warningMessage', 'setWarningMessage', 'This is a warning.' /* Initial warningMessage */),
  withState('successMessage', 'setSuccessMessage', 'This is an success message.' /* Initial successMessage */),
  withHandlers({
    clearError: ({ setErrorMessage }) => () => setErrorMessage(null),
    clearInfo: ({ setInfoMessage }) => () => setInfoMessage(null),
    clearWarning: ({ setWarningMessage }) => () => setWarningMessage(null),
    clearSuccess: ({ setSuccessMessage }) => () => setSuccessMessage(null),
  }),
)(AlertClient);

AlertClient.propTypes = {
  errorMessage: PropTypes.string,
  infoMessage: PropTypes.string,
  warningMessage: PropTypes.string,
  successMessage: PropTypes.string,
  clearError: PropTypes.func.isRequired,
  clearInfo: PropTypes.func.isRequired,
  clearWarning: PropTypes.func.isRequired,
  clearSuccess: PropTypes.func.isRequired,
};

AlertClient.defaultProps = {
  errorMessage: '',
  infoMessage: '',
  warningMessage: '',
  successMessage: '',
};

export default EnhancedAlertSample;
