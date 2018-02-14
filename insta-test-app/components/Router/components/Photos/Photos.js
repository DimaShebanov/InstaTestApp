import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, Button } from 'react-native';
import { ImagePicker } from 'expo';

class Photos extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
            </View>
        )
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#f2f2f3'
    }
});


export default Photos;
