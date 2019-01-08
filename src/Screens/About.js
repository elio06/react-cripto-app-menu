import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { Header, Left, Icon}  from 'native-base';

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
          <Icon name="person" style={{ fontSize:24, color: tintColor, paddingTop: 30, paddingBottom: 30}} />
        )
    }
    render() {
    return (
        <View>
            <Header>
                <Left>
                    <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()}/>
                </Left>
            </Header>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    <Icon name='person' /> Información
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.body}>
                    Nombre: Elliot Ajcuc Chamale {"\n"}{"\n"}
                    e-mail: elio.aj06@gmail.com {"\n"}{"\n"}
                    Creditos: Indrek Lasn. Let’s Build: Cryptocurrency Native Mobile App With React Native + Redux.
                </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    },
    bodyContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    body: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        color: 'gray',
    }
})

export default SettingsScreen;