import React, { PureComponent} from 'react';
import { StyleSheet } from 'react-native'
import { Button as RNEButton } from 'react-native-elements';

export default class Button extends PureComponent{
  onPress = ()=>{
    const { onPress } = this.props
    if(onPress){
      onPress()
    }
  }

  render() {
    const props = this.props
    return(
      <RNEButton
        buttonStyle={Styles.button}
        onPress={this.onPress}
        title={props.title}
        disabled={props.disabled}
        titleStyle={Styles.title}
        type="outline"
        raised

      />
    )
  }
}

const Styles = StyleSheet.create({
  button:{
    minWidth: 100,
    minHeight: 50,
  },
  title:{
    fontSize: 18,
  }
})
