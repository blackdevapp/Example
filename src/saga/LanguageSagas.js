import AsyncStorage from '@react-native-community/async-storage'
import {put, takeLatest} from 'redux-saga/effects'
import {
  getLanguageVariableAction,
  loadLanguageVariablesAction,
  setLanguageAction,
  setLanguageSagaAction
} from '../actions/languageActions'

import languages from '../assets/language'

const LANGUAGE_KEY = 'default_lang'

// eslint-disable-next-line import/prefer-default-export
export function* getLanguageVariableSaga() {
  try {
    const currentLang = yield AsyncStorage.getItem(LANGUAGE_KEY)

    if (currentLang) {
      const languageVariables = languages[currentLang]
      yield put(loadLanguageVariablesAction(languageVariables))

      yield put(setLanguageAction(currentLang))

    } else {
      const languageVariables = languages['fa']
      yield put(loadLanguageVariablesAction(languageVariables))

      yield AsyncStorage.setItem(
        LANGUAGE_KEY,
        'fa'
      )
    }


  } catch (error) {
    console.log(error)
  }
}

export function* setLanguageSaga({payload}) {
  try {
    yield AsyncStorage.setItem(LANGUAGE_KEY, payload)

    const languageVariables = languages[payload]
    yield put(loadLanguageVariablesAction(languageVariables))

    yield put(setLanguageAction(payload))

  } catch (error) {
    console.log(error)
  }
}

export default [
  takeLatest(getLanguageVariableAction, getLanguageVariableSaga),
  takeLatest(setLanguageSagaAction, setLanguageSaga),
]
