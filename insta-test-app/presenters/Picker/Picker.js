import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Picker extends Component {
    constructor (props) {
        super(props);

        this.handleChoise = this.handleChoise.bind(this);
    }

    handleChoise = option => () => {
        this.props.onChoose( option );
    }

    render() {
        const {
            cancelText,
            container,
            overlay,
            option,
            text
        } = styles;

        return (
        <View style = { overlay }>
            <View style = { container }>
                <TouchableOpacity
                    style = { option }
                    onPress = { this.handleChoise('take') }
                >
                    <Text
                        style = { text }
                    >
                        Take a photo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = { option }
                    onPress = { this.handleChoise('choose') }
                >
                    <Text
                        style = { text }
                    >
                        Choose photo from gallery
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = { option }
                    onPress = { this.handleChoise('cancel') }
                >
                    <Text
                        style = { { ...cancelText, ...text } }
                    >
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = {
    overlay : {
        position : 'absolute',
        top : 0, 
        left : 0,
        width : '100%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center',
    },
    container : {
        width : '70%',
        justifyContent : 'center',
        backgroundColor : '#bdc3c7',
        height : '30%',
        borderWidth : 1,
        borderColor : '#2c3e50',
        borderRadius : 3
    },
    option : {
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
        fontSize : 20
    },
    cancelText : {
        color : '#c0392b'
    }
};

export default Picker;