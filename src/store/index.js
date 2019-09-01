import configureStore from './ConfigureStore'
import reducers from '../reducers'
import sagas from '../saga'

export default () => {
  const { store } = configureStore(reducers, sagas)

  return store
}

