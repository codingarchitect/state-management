/* eslint fp/no-rest-parameters: 0 */
const wrapActionCreator = (actionCreator, id) =>
  (...args) => ({ ...actionCreator(...args), meta: { id } });

/**
 * wrapActionCreators takes an object whose values are actionCreators and
 * wraps the actions with additional metadata id something like below
 * (action) => ({ ...action, meta: { id } })
 * This is used to handle state for multiple instances of the same
 * component
 * @param {*} actionCreators - object whose values are actionCreators
 * @param {*} id - unique identifier for a component
 */
const wrapActionCreators = (actionCreators, id) => ((typeof actionCreators === 'function') ?
  wrapActionCreator(actionCreators, id) :
  Object.keys(actionCreators).reduce((wrappedActionCreators, key) => ({
    ...wrappedActionCreators,
    [key]: wrapActionCreator(actionCreators[key], id),
  }), {}));

export default wrapActionCreators;
