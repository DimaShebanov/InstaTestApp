import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

class Button extends Component {
  render () {
    const iconSize = 40;
    const { name, currentRoute, iconName, onPress } = this.props;
    const { container } = styles;
    
    const isDisabled = name === currentRoute;
    const finalStyles = {
        ...container,
        ...isDisabled ? styles.inactive : {}
    };
    
    return (
        <TouchableOpacity
            style = {finalStyles}
            disabled = {isDisabled}
            onPress = {onPress}
        >
            <MaterialIcons
                name = {iconName}
                size = {iconSize}
            />
        </TouchableOpacity>
    )
  }
}

const styles = {
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        backgroundColor : '#ecf0f1'
    },
    inactive : {
        backgroundColor : '#7f8c8d'
    }
}


export default Button;