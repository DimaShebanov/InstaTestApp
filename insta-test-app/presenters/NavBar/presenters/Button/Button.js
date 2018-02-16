import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

class Button extends Component {
  render () {
    const iconSize = 40;
    const { name, currentRoute, iconName, onPress } = this.props;
    const { container, inactive } = styles;
    
    const isDisabled = name === currentRoute;
    const finalStyles = {
        ...container,
        ...isDisabled ? inactive : {}
    };
    
    return (
        <TouchableOpacity
            style = { finalStyles }
            disabled = { isDisabled }
            onPress = { onPress }
        >
            <MaterialIcons
                name = { iconName }
                size = { iconSize }
            />
        </TouchableOpacity>
    );
  }
}

const styles = {
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        backgroundColor : '#ecf0f1',
        borderStyle: 'solid',
        borderWidth : 1,
        borderBottomWidth : 0
    },
    inactive : {
        backgroundColor : '#7f8c8d'
    }
};


export default Button;
