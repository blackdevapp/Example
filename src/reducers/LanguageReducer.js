import {handleActions} from 'redux-actions'
import {loadLanguageVariablesAction, setLanguageAction,} from '../actions/languageActions'

export default handleActions({
  [loadLanguageVariablesAction]: (state, {payload}) => {
    if (!payload) return state

    return {
      ...state,
      variable: payload,
    }
  },
  [setLanguageAction]: (state, {payload}) => {
    if (!payload) return state
    debugger
    return {
      ...state,
      language: payload,
    }
  }
}, {
  language: 'fa',
  variable: {},
})
