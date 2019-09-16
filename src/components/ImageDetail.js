import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={imageSource} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      },
      imageStyle: {
          alignContent: "center"
      }
});

export default ImageDetail;