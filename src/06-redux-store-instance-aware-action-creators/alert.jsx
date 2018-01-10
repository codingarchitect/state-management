/* eslint fp/no-nil: 1 */
/* eslint fp/no-unused-expression: 1 */
/* eslint better/explicit-return: 1 */
import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import PropTypes from 'prop-types';

import multiConnect from '../multi-instance/multi-connect';
import wrapActionCreators from '../multi-instance/wrap-action-creators';
import applyLifeCycle from '../apply-lifecycle.jsx';
import store from '../store';
import alertStore from './alert-store';

const Alert = ({ message, type, visibility, actions: { setVisibility } }) => (visibility &&
  <BootstrapAlert bsStyle={type} onDismiss={() => setVisibility(false)}>
    {message}
  </BootstrapAlert>);

Alert.propTypes = {
  /** message to display */
  message: PropTypes.string,
  /** visibility of alert */
  visibility: PropTypes.bool.isRequired,
  /** Alert component display type, can be success, warning, danger, info
   *  Defalt is info
   */
  type: PropTypes.string,
  /**
   * Handler to close the alert.
   * Typically the handler sets  message prop to undefined to close the alert
   */
  setVisibility: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  message: null,
  type: 'info',
};

const AlertWithLifeCycle = applyLifeCycle({
  init: (props) => {
    const wrappedActionCreators = wrapActionCreators(alertStore.actionCreators, props.id);
    store.dispatch(wrappedActionCreators.setMessage(props.initialMessage));
    store.dispatch(wrappedActionCreators.setVisibility(props.initialVisibility));
  },
})(Alert);

export default multiConnect(alertStore.selectors,
  alertStore.actionCreators, 'ReduxStoreMultiInstanceAware')(AlertWithLifeCycle);
