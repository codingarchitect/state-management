/* eslint fp/no-nil: 1 */
import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Alert = ({ message, type, close }) => ((message) ?
    (
      <BootstrapAlert bsStyle={type} onDismiss={close}>
        {message}
      </BootstrapAlert>
    ) : null);

Alert.propTypes = {
  /** message to display */
  message: PropTypes.string,
  /** Alert component display type, can be success, warning, danger, info
   *  Defalt is info
   */
  type: PropTypes.string,
  /**
   * Handler to close the alert.
   * Typically the handler sets  message prop to undefined to close the alert
   */
  close: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  message: null,
  type: 'info',
};

export default Alert;
