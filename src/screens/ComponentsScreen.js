import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ComponentsScreen = ({ navigation }) => {
    const myName = 'Nilo';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
            <Button 
                onPress={() => navigation.navigate('Image')}
                title='Go to image' />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;