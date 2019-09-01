import languageSagas from './LanguageSagas'
import {all} from 'redux-saga/effects'


export default function* saga() {
  yield all([
    ...languageSagas,
  ])
}
