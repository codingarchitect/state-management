import _ from 'lodash';
import { createSelector } from 'reselect';

const isPropSelectorsValid = propSelectors => propSelectors && typeof propSelectors === 'object';

const makeSelector = (reducerPath, id, initialState) => state => ((reducerPath ?
  _.get(state, reducerPath)[id] : state[id]) || initialState);

/**
 * makeMultiInstanceSelectors takes an object where the values are selectors
 * It returns a new object where the values are selectors composed using
 * reselect taking care of an unique identifier and a reducer path
 * something like below
 * { prop1: state => state.prop1 } gets converted to
 * { prop1: createSelector(state => ((reducerPath ?
 *    _.get(state, reducerPath)[id] : state[id]) || initialState)), originalSelector)}
 * @param {*} propSelectors - object where the values are selectors
 * @param {*} initialState - state to use if selector returns undefined
 * @param {*} reducerPath - optional, reducer path in the store like ui.widgets.counter
 */
const makeMultiInstanceSelectors = (propSelectors, initialState, reducerPath) =>
((isPropSelectorsValid(propSelectors)) ? Object.keys(propSelectors)
    .reduce((newPropSelectors, propName) => ({
      ...newPropSelectors,
      [propName]: id => createSelector(makeSelector(reducerPath, id, initialState),
        propSelectors[propName]),
    }), {}) : propSelectors);

export default makeMultiInstanceSelectors;
