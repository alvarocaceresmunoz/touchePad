import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container, Grid, Row, Col, Button, Text} from 'native-base'
import {StackNavigator} from 'react-navigation'
import MainScreen from './MainScreen'
import SettingsScreen from './SettingsScreen'

const App = StackNavigator(
  {
    Main: {screen: MainScreen},
    Settings: {screen: SettingsScreen}
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main'
  }
)

export default App