import { bindActionCreators as originalBindActionCreator } from 'redux';

const wrapAction = (action, id) => ({ ...action, meta: { id } });
const wrapDispatch = (dispatch, id) => action => dispatch(wrapAction(action, id));
/**
 * bindActionCreators is a simlar to redux's bindActionCreators.
 * It takes an object whose values are actionCreators and
 * binds them to dispatch. In addition it also wraps the actions
 * with additional metadata id something like below
 * (action) => ({ ...action, meta: { id } })
 * This is used to handle state for multiple instances of the same
 * component
 * @param {*} actionCreators - object whose values are actionCreators
 * @param {*} dispatch - redux dispatch
 * @param {*} id - unique identifier for a component
 */
const bindActionCreators =
  (actionCreators, dispatch, id) => originalBindActionCreator(actionCreators,
    wrapDispatch(dispatch, id));

export default bindActionCreators;
