import React, {Component} from 'react'
import {getLanguageVariableAction} from '../actions/languageActions'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'

import {BLACK, JAPONICA, WHISKEY} from '../theme/colors'
import Button from '../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  headerContainer: {
    backgroundColor: BLACK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 30,
    borderBottomWidth: 3,
    borderBottomColor: WHISKEY
  },
  headerTitle: {fontSize: 25, fontWeight: 'bold'},
  flatList: {margin: 5},
  categoryContainer: {
    alignItems: 'center',
    width: '50%',
    marginVertical: 10
  },
  categoryName: {position: 'absolute', height: 20, width: 100},
  toggleButton: {
    position: 'absolute',
    borderRadius: 5,
    paddingVertical: 5,
    bottom: 80,
    right: 30,
    width: 60,
    backgroundColor: JAPONICA,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 5, width: 5}, // IOS
    shadowOpacity: 5, // IOS
    shadowRadius: 5, // IOS
    elevation: 5 // Android
  }
})

// eslint-disable-next-line react/prefer-stateless-function
class HomeScreen extends Component {


  componentDidMount() {
    const {getLanguageVariables} = this.props
    getLanguageVariables()
  }

  toggleImageBackground = () => {

  }

  render() {

    const {languageVariables} = this.props

    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title={languageVariables['play_online']}
        />
        <Button
          style={styles.button}
          title={languageVariables['play_with_ai']}
        />
        <Button
          style={styles.button}
          title={languageVariables['setting']}
          onPress={() => this.props.navigation.navigate('Setting')}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    languageVariables: state.language.variable
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLanguageVariables: () => {
      dispatch(getLanguageVariableAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
