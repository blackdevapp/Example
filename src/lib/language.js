import {storeData, retrieveData} from './storage'

currentLang = getLanguage()
const LanguageVariable =  require(`../assets/language/${getLanguage()}`)

export async function getLanguage() {
  debugger
  const currentLang =await retrieveData(LANGUAGE_KEY)
      if(!currentLang){
        setLanguage('fa')
        return 'fa'
      }

      return currentLang
}

export function setLanguage(language) {
  storeData(LANGUAGE_KEY, language).catch((err)=>{
    console.log(err)
  })
}

export default function getLocal(string) {
  return LanguageVariable[string]
}
