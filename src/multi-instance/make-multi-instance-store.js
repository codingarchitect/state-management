import makeMultiInstanceSelectors from './make-multi-instance-selectors';
import wrapActionCreators from './wrap-action-creators';

/**
 * takes a single instance store and makes it multi instance
 * @param {*} store - An object which should have the following propeerties
 * actions - An object with action types as properties ex:
 * { increment: 'INCREMENT', decrement: 'DECREMENT' }
 * actionCreators - An object with action creators as properties ex:
 * {
 *  increment: () => { type: actions.increment },
 *  decrement: () => { type: actions.decrement },
 * }
 * reducer - A normal single instance reducer function
 * selectors - An object whose values are selectors
 * initialState - Store / Reducer's initialState
 * @param {*} reducerPath - If the reducer key is nested deep in the
 * reducer hierarchy, please use this param ex: 'ui.widgets.counter'
 */
const makeMultiInstanceStore = (store, reducerPath) => {
  const {
    actions,
    actionCreators,
    reducer,
    selectors,
    initialState,
  } = store;

  const isValidAction = action => action && Object.keys(actions).includes(action.type) &&
    action.meta && action.meta.id;
  const multiInstanceReducer = (state = {}, action) => (isValidAction(action) ? {
    ...state,
    [action.meta.id]: reducer(state[action.meta.id], action),
  } : state);

  return {
    actions,
    actionCreators,
    reducer: multiInstanceReducer,
    selectors: makeMultiInstanceSelectors(selectors, initialState, reducerPath),
    initialState,
    makeMultiInstanceActionCreators: id => wrapActionCreators(actionCreators, id),
  };
};

export default makeMultiInstanceStore;
