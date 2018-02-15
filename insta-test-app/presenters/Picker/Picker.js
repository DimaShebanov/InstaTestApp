import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Picker extends Component {
    constructor(props) {
        super(props)

        this.handleChoise = this.handleChoise.bind(this);
    }


    handleChoise = option => () => {
        this.props.onChoose(option);
    }


    render() {
        return (
        <View style = {styles.overlay}>
            <View style = {styles.container}>
                <TouchableOpacity
                    style = {styles.option}
                    onPress = {this.handleChoise('take')}
                >
                    <Text
                        style = {styles.text}
                    >
                        Take a photo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.option}
                    onPress = {this.handleChoise('choose')}
                >
                    <Text
                        style = {styles.text}
                    >
                        Choose photo from gallery
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.option}
                    onPress = {this.handleChoise('cancel')}
                >
                    <Text
                        style = {{...styles.cancelText, ...styles.text}}
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