import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems} from 'react-navigation';

import HomeScreen from './src/Screens/Crypto';
import SettingsScreen from './src/Screens/About';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#ff8d00'}}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Información: SettingsScreen
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
   activeTintColor: 'white'
  }
})