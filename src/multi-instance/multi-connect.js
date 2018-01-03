import _ from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import bindActionCreators from './bind-action-creators';

const makeSelector = (reducerPath, id) => state => (reducerPath ?
  _.get(state, reducerPath)[id] : state[id]);
const isPropSelectorsValid = propSelectors =>
  propSelectors && typeof propSelectors === 'object';
const makeMapStateToProps = (propSelectors, reducerPath) => (state, { id }) =>
  ((isPropSelectorsValid(propSelectors)) ? Object.keys(propSelectors)
      .reduce((newPropSelectors, propName) => ({
        ...newPropSelectors,
        [propName]: createSelector(makeSelector(reducerPath, id), propSelectors[propName])(state),
      }), {}) : propSelectors);

const isActionCreatorsValid = actionCreators => actionCreators && typeof actionCreators === 'object';
const makeBindActionCreators = actionCreators => (dispatch, { id }) =>
  (isActionCreatorsValid(actionCreators) ?
    ({ actions: bindActionCreators(actionCreators, dispatch, id) }) :
    actionCreators);

/**
 * This function is very similar to redux connect.
 * A higher order component which internally uses redux connect
 * It takes a propSeletors object, whose values are single instance selectors
 * this is used to create a new mapStateToProps function that uses multi instance selectors
 * It also takes an actionCreators object, whose values are action creators
 * this is used to create a new mapPropsToDispatch function that wraps the
 * actions with id metadata for multiple instances.
 * @param {*} propSelectors - optional - object, whose values are single instance selectors
 * this is used to create a new mapStateToProps function that uses multi instance selectors
 * @param {*} actionCreators - optional - object, whose values are action creators
 * this is used to create a new mapPropsToDispatch function that wraps the
 * actions with id metadata for multiple instances.
 * @param {*} reducerPath - optional - string - If the reducer key is nested deep in the
 * reducer hierarchy, please use this param ex: 'ui.widgets.counter'
 */
const multiConnect = (propSelectors, actionCreators, reducerPath) => componentToConnect =>
  connect(
    makeMapStateToProps(propSelectors, reducerPath),
    makeBindActionCreators(actionCreators))(componentToConnect);

export default multiConnect;
