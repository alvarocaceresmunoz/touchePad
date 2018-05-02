import React, {Component} from 'react'
import {Body, Right, Container, Button, Icon, Text, Left, Header, Content, Title} from 'native-base'
import {StackNavigator} from 'react-navigation'

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.navigate('Main')}>
              <Icon name='arrow-back'></Icon>
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
        </Header>
        <Content>
          <Text>All your settings</Text>
        </Content>
      </Container>
    )
  }
}
