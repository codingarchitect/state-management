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
  errorVisible,
  infoVisible,
  warningVisible,
  successVisible,
  clearError,
  clearInfo,
  clearWarning,
  clearSuccess,
}) => (
  <div>
    <h1>Alert Client</h1>
    <Alert message={errorMessage} alertVisible={errorVisible} type="danger" close={clearError} />
    <Alert message={infoMessage} alertVisible={infoVisible} type="info" close={clearInfo} />
    <Alert message={warningMessage} alertVisible={warningVisible} type="warning" close={clearWarning} />
    <Alert message={successMessage} alertVisible={successVisible} type="success" close={clearSuccess} />
  </div>
  );

export const EnhancedAlertSample = compose(
  withState('errorMessage', 'setErrorMessage', 'This is an error message.' /* Initial errorMessage */),
  withState('infoMessage', 'setInfoMessage', 'This is an info message.' /* Initial infoMessage */),
  withState('warningMessage', 'setWarningMessage', 'This is a warning.' /* Initial warningMessage */),
  withState('successMessage', 'setSuccessMessage', 'This is an success message.' /* Initial successMessage */),
  withState('errorVisible', 'setErrorVisible', true /* Initial errorMessage visibility */),
  withState('infoVisible', 'setInfoVisible', true /* Initial infoMessage visibility */),
  withState('warningVisible', 'setWarningVisible', true /* Initial warningMessage visibility */),
  withState('successVisible', 'setSuccessVisible', true /* Initial successMessage  visibility */),
  withHandlers({
    clearError: ({ setErrorVisible }) => () => setErrorVisible(false),
    clearInfo: ({ setInfoVisible }) => () => setInfoVisible(false),
    clearWarning: ({ setWarningVisible }) => () => setWarningVisible(false),
    clearSuccess: ({ setSuccessVisible }) => () => setSuccessVisible(false),
  }),
)(AlertClient);

AlertClient.propTypes = {
  errorMessage: PropTypes.string,
  infoMessage: PropTypes.string,
  warningMessage: PropTypes.string,
  successMessage: PropTypes.string,
  errorVisible: PropTypes.bool,
  infoVisible: PropTypes.bool,
  warningVisible: PropTypes.bool,
  successVisible: PropTypes.bool,
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
  errorVisible: true,
  infoVisible: true,
  warningVisible: true,
  successVisible: true,
};

export default EnhancedAlertSample;
