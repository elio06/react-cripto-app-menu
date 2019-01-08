import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './../Store';
import { Headers, CryptoContainer } from './../components';

import { Header, Left, Icon}  from 'native-base';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="home" style={{ fontSize:24, color: tintColor, paddingTop: 30, paddingBottom: 30}} />
    )
  }
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header>
            <Left>
              <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()}/>
            </Left>
          </Header>
          <Headers />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

export default HomeScreen;