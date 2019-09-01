import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import Button from '../../components/Button'
import {getLanguageAction} from '../../actions/languageActions'
import {connect} from 'react-redux'
class Setting extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Button
                onPress={()=> this.props.navigation.navigate('LanguageSelector')}
                title={this.props.languageVariables['select_language']}
              />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    languageVariables: state.language.variable
  }
}

export default connect(mapStateToProps)(Setting)
