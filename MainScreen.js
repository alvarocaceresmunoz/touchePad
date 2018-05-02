import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container, Grid, Row, Col, Button, Text} from 'native-base'
import {StackNavigator} from 'react-navigation'

class CustomButton extends Component {
  render() {
    return (
      <Button style={[styles.button, {backgroundColor:this.props.color}]}>
        <Text>{this.props.text}</Text>
      </Button>
    )
  }
}

export default class MainScreen extends Component {
  render() {
    return (
      <Grid>
        <Row size={10} style={{justifyContent:'center'}}>
          <Button onPress={() => this.props.navigation.navigate('Settings')}>
            <Text>Settings</Text>
          </Button>
        </Row>
        <Row size={90}>
          <Col style={{padding:10}}>
            <CustomButton color='green' text='1'/>
            <CustomButton color='green' text='2'/>
            <CustomButton color='green' text='3'/>
            <CustomButton color='green' text='4'/>
            <CustomButton color='green' text='5'/>
          </Col>
          <Col style={{padding:10}}>
            <CustomButton color='green' text='6'/>
            <CustomButton color='green' text='7'/>
            <CustomButton color='green' text='8'/>
            <CustomButton color='green' text='9'/>
            <CustomButton color='green' text='10'/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex:1,
    width:'100%',
    justifyContent:'center',
    marginVertical:10,
  }
}) 