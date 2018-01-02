const initialState = {
  visible: false,
  message: '',
};

const actions = {
  setMessage: 'setMessage',
  setVisibility: 'setVisibility',
};

const actionCreators = {
  [actions.setMessage]: message => ({ type: actions.setMessage, payload: message }),
  [actions.setVisibility]: visibility => ({ type: actions.setVisibility, payload: visibility }),
};

const setMessageHandler = (state, action) => ({
  ...state,
  message: action.payload,
});

const setVisibilityHandler = (state, action) => ({
  ...state,
  visibility: action.payload,
});

const handlers = {
  [actions.setMessage]: setMessageHandler,
  [actions.setVisibility]: setVisibilityHandler,
};

const reducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};

const selectors = {
  message: state => state.ReduxStoreWithInitialProps.message,
  visibility: state => state.ReduxStoreWithInitialProps.visibility,
};

const store = {
  initialState,
  actions,
  actionCreators,
  reducer,
  selectors,
};

export default store;
