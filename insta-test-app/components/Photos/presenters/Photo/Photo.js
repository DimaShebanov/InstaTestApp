import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

class Photo extends Component {
    render () {
        const { item } = this.props.data;
        return (
        <View style = {styles.containerStyle}>
            <Image
                source = {{uri : item.uri}}
                style = {styles.imageStyle}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        height : 300,
        alignItems: 'center',
        justifyContent : 'center'
    },
    imageStyle : {
        width : '80%',
        height : 250,
    }
})

export default renderItem = item => (
    <Photo
        data = {item}
    />
);