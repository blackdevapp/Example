import { combineReducers } from 'redux'

import NavigationReducer from './NavigationReducer'
import LanguageReducer from './LanguageReducer'

export default combineReducers({
  nav: NavigationReducer,
  language: LanguageReducer,
})
