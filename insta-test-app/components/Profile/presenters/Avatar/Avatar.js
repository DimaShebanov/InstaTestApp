import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

class Avatar extends Component {
    render() {
        const { src, onPress, isDisabled } = this.props;
        const { container, image, text } = styles;
        const Avatar = () => (
            <Image
                source = { { uri : src } }
                style = { image }
            />
        );

        const NoAvatar = () => (
            <Text>No avatar uploaded</Text>
        );

        return (
            <TouchableOpacity
                disabled = { isDisabled }
                onPress = { onPress }
                style = { container }
            >
                { src ? <Avatar/> : <NoAvatar/> }
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height: 120,
        width: 120,
        borderRadius: 100,
        overflow : 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth : 1,
        borderColor: '#95a5a6',
        backgroundColor: '#bdc3c7'
    },
    image : {
        width: '100%',
        height: '100%'
    },
})

export default Avatar;
