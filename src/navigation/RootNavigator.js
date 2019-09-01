import {createStackNavigator,createAppContainer} from 'react-navigation'
import {Animated, Easing} from 'react-native'
import HomeScreen from '../pages/Home'
import SettingScreen from '../pages/Setting/Setting'
import SelectLanguageScreen from '../pages/Setting/LanguageSelector'

import styles from './styles/NavigationStyles'

const RootNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Setting: {screen: SettingScreen},
    LanguageSelector: {screen: SelectLanguageScreen},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps
        const {index} = scene

        const width = layout.initWidth
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0]
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        })

        return {opacity, transform: [{translateX}]}
      }
    })
  }
)

export default createAppContainer(RootNavigator)
