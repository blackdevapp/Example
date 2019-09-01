import {AsyncStorage} from 'react-native';

const storeData = async ({key,value}) => {
  try {
    await AsyncStorage.setItem(key,value);
  } catch (error) {
    // Error saving data
  }
};

const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};

export {
  storeData,
  retrieveData,
}
