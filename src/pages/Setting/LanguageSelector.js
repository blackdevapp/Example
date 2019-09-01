import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
import {setLanguageSagaAction} from '../../actions/languageActions'
import {connect} from 'react-redux'

 class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.language.language || 'en'
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
    this.props.setLanguage(value)
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="فارسی" value="fa" />
              <Picker.Item label="English" value="en" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: (value) => {
      dispatch(setLanguageSagaAction(value))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LanguageSelector)
