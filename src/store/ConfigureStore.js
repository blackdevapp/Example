import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
import Reducers from '../reducers'
import Sagas from '../saga'

import {NavigationMiddleware} from '../navigation/Navigation'


const sagaMiddleware = createSagaMiddleware()

const middleware = [
  NavigationMiddleware,
  sagaMiddleware
]

const composeEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
)

const store = createStore(Reducers,
  composeEnhancers)


sagaMiddleware.run(Sagas.bind(null, store))


export default store
