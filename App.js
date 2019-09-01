import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {MenuProvider} from 'react-native-popup-menu'
import store from './src/store/ConfigureStore'
import AppNavigator from './src/navigation/RootNavigator'

type Props = {};
window.store = store
export default class App extends Component<Props> {
  render() {
    return (
      <MenuProvider>
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
      </MenuProvider>
    )
  }
}

