/* eslint fp/no-class: 0 */
/* eslint fp/no-this: 0 */
/* eslint fp/no-nil: 0 */
/* eslint fp/no-unused-expression: 0 */
/* eslint better/no-ifs: 0 */
/* eslint better/explicit-return: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react';

const hasInit = lifeCycle => lifeCycle && lifeCycle.init && typeof lifeCycle.init === 'function';
const hasPropsUpdated = lifeCycle => lifeCycle &&
  lifeCycle.propsUpdated && typeof lifeCycle.propsUpdated === 'function';
const hasCleanup = lifeCycle => lifeCycle &&
  lifeCycle.cleanup && typeof lifeCycle.cleanup === 'function';
const hasShouldComponentRerender = lifeCycle => lifeCycle &&
  lifeCycle.shouldComponentRerender && typeof lifeCycle.shouldComponentRerender === 'function';

/**
 * applyLifecycle is a higher order component that takes
 * an object with lifecycle methods and returns a
 * higher order function that takes a component to add lifecycle to.
 * @export
 * @param {any} lifeCycle - object that has these properties (optional)
 * {
 *    init: (initialProps) => {},
 *    propsUpdated: (nextProps, currentProps) => {},
 *    shouldComponentRerender: (nextProps, currentProps) => true,
 *    cleanup: (props) => {}
 * }
 * init - Has to be a function that takes one argument,
 * initialProps (arg) - Props that the component was initialised with.
 * This is very similar to componentWillMount in React. This fires in the
 * first render. Do any thing like dispatching an action to load data here.
 * propsUpdated - Has to be a function that takes two arguments,
 * nextProps (arg) - The next set of props when the props are updating
 * currentProps (arg) - The current set of props
 * This is very similar to componentWillReceiveProps in react. This fires when
 * props change.
 * shouldComponentRerender - Has to be a function that takes two arguments,
 * nextProps (arg) - The next set of props when the props are updating
 * currentProps (arg) - The current set of props
 * This has to be return true or false. If it returns true then the
 * component re-renders. If it returns false then the component does not re-render
 * This is very similar to shouldComponentUpdate in React. This fires when
 * props change.
 * cleanup - Has to be a function that takes one argument.
 * props (arg) - The current set of props
 * This is very similar to componentWillUnmount in react. This fires when
 * component un mounts. Do any cleanup related work here.
 * @returns a higher order function that takes the component to add lifecycle to
 */
export default function applyLifecycle(lifeCycle) {
  return function LifeCycleComponentFactory(ComponentToAddLifecycle) {
    class ComponentWithLifeCycle extends React.Component {
      componentWillMount() {
        if (hasInit(lifeCycle)) {
          lifeCycle.init(this.props);
        }
      }
      componentWillReceiveProps(nextProps) {
        if (hasPropsUpdated(lifeCycle)) {
          lifeCycle.propsUpdated(nextProps, this.props);
        }
      }
      shouldComponentUpdate(nextProps) {
        if (hasShouldComponentRerender(lifeCycle)) {
          return lifeCycle.shouldComponentRerender(nextProps, this.props);
        }
        return true;
      }
      componentWillUnmount() {
        if (hasCleanup(lifeCycle)) {
          lifeCycle.cleanup(this.props);
        }
      }
      render() {
        return <ComponentToAddLifecycle {...this.props} />;
      }
    }
    return ComponentWithLifeCycle;
  };
}
