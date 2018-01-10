/* eslint fp/no-rest-parameters: 0 */
const wrapActionCreator = actionCreator =>
  (...args) => ({ ...actionCreator(...args), meta: { id: args[args.length - 1] } });

/**
 * wrapActionCreators takes an object whose values are actionCreators and
 * wraps the actions with additional metadata id something like below
 * (action) => ({ ...action, meta: { id } })
 * This is used to handle state for multiple instances of the same
 * component
 * @param {*} actionCreators - object whose values are actionCreators
 */
const wrapActionCreators = actionCreators => ((typeof actionCreators === 'function') ?
  wrapActionCreator(actionCreators) :
  Object.keys(actionCreators).reduce((wrappedActionCreators, key) => ({
    ...wrappedActionCreators,
    [key]: wrapActionCreator(actionCreators[key]),
  }), {}));

export default wrapActionCreators;
