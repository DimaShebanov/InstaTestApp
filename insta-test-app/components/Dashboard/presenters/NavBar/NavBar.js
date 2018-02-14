import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class NavBar extends Component {
  render() {
    return (
      <View
        style = {styles.navContainer}
      >
        <Text> textInComponentNAVBAR </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    navContainer : {
        height : 100,
        backgroundColor: '#000',
        width: '100%'
    }
})

export default NavBar