import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Headers = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Criptomoneda App
            </Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    headerContainer: {
        display: "flex",
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

const {
    headerContainer,
    header
} = estilo;

export default Headers;