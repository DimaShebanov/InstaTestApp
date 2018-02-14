import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

class Button extends Component {
  render () {
    const iconSize = 40;
    const { name, currentRoute, iconName } = this.props;
    
    const isDisabled = name === currentRoute;

    const { container } = styles;
    
    const finalStyles = {
        ...container,
        ...styles[isDisabled ? 'inactive' : 'active']
    };

    return (
        <TouchableOpacity
            style = {finalStyles}
            disabled = {isDisabled}
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
    },
    inactive : {
        backgroundColor : 'gray'
    },
    active : {
        backgroundColor : 'white'
    }
}


export default Button;