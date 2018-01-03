/* eslint better/no-ifs: 1 */
import alertStore from './alert-store';

const initialState = {};

const actionCreators = {
  [alertStore.actions.setMessage]: (message, id) =>
    ({ ...alertStore.actionCreators.setMessage(message), meta: { id } }),
  [alertStore.actions.setVisibility]: (visibility, id) =>
    ({ ...alertStore.actionCreators.setVisibility(visibility), meta: { id } }),
};

const reducer = (state = initialState, action) => {
  if (!action.meta || !action.meta.id) return state;
  switch (action.type) {
    case alertStore.actions.setMessage:
    case alertStore.actions.setVisibility:
      return {
        ...state,
        [action.meta.id]: alertStore.reducer(state[action.meta.id], action),
      };
    default:
      break;
  }
  return state;
};

const selectors = {
  visibility: (state, id) => alertStore.selectors.visibility(state &&
    state.ReduxStoreMultiInstance && state.ReduxStoreMultiInstance[id] ?
    state.ReduxStoreMultiInstance[id] : alertStore.initialState),
  message: (state, id) => alertStore.selectors.message(state &&
      state.ReduxStoreMultiInstance && state.ReduxStoreMultiInstance[id] ?
      state.ReduxStoreMultiInstance[id] : alertStore.initialState),
};

export default {
  initialState,
  actions: alertStore.actions,
  actionCreators,
  reducer,
  selectors,
};
