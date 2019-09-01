import { createReactNavigationReduxMiddleware, createNavigationReducer,createReduxContainer  } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import RootNavigator from './RootNavigator'

const AppNavigator = createNavigationReducer (RootNavigator)

const NavigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});
const Navigation = connect(mapStateToProps)(App);

export {
  Navigation,
  NavigationMiddleware
}
