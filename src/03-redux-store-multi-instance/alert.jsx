/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
import React from 'react';
import { connect } from 'react-redux';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import PropTypes from 'prop-types';

import AlertStore from './multi-alert-store';

const Alert = ({ message, type, alertVisible, actions: { close } }) => (alertVisible &&
  <BootstrapAlert bsStyle={type} onDismiss={close}>
    {message}
  </BootstrapAlert>);

const mapStateToProps = (state, { id }) => ({
  message: AlertStore.selectors.message(state, id),
  alertVisible: AlertStore.selectors.visibility(state, id),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(AlertStore.actionCreators.setVisibility(ownProps.initialVisibility, ownProps.id));
  dispatch(AlertStore.actionCreators.setMessage(ownProps.initialMessage, ownProps.id));
  return {
    actions: {
      close: () => dispatch(AlertStore.actionCreators.setVisibility(false, ownProps.id)),
    },
  };
};

Alert.propTypes = {
  /** message to display */
  message: PropTypes.string,
  /** visibility of alert */
  alertVisible: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
