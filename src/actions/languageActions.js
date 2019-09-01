import ReduxNamespacedActions from 'redux-namespaced-actions'

const { createAction } = ReduxNamespacedActions('language')

export const setLanguageAction = createAction('SET_LANGUAGE')
export const setLanguageSagaAction = createAction('SET_LANGUAGE_SAGA')
export const getLanguageAction = createAction('GET_LANGUAGE')
export const getLanguageVariableAction = createAction('GET_LANGUAGE_VARIABLE')
export const loadLanguageVariablesAction = createAction('LOAD_LANGUAGE_VARIABLES')
