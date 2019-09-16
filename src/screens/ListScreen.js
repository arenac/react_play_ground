import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 16 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 34 },
        { name: 'Friend #5', age: 1 },
        { name: 'Friend #6', age: 2 },
        { name: 'Friend #7', age: 3 },
        { name: 'Friend #8', age: 14 },
        { name: 'Friend #9', age: 60 },
        { name: 'Friend #10', age: 21 },
    ];

    return <FlatList
        // horizontal={false}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }}
    />
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;