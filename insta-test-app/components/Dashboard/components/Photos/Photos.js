import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';

class Photos extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <Text>
                Photos hello
            </Text>
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#f2f2f3'
    }
})


export default Photos;
