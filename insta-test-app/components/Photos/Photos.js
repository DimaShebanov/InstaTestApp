import { 
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { addPhoto } from '../../redux/actions/photos';
import Photo from './presenters/Photo/Photo';
import Picker from '../../presenters/Picker';
import Camera from '../../presenters/Camera';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';

class Photos extends Component {
    constructor (props) {
      super(props);
    
      this.state = {
         isPickerShown : false,
         isCameraShown : false
      };

      this.handleCapturePhoto = this.handleCapturePhoto.bind(this);
      this.handleUserChoise = this.handleUserChoise.bind(this);
      this.togglePicker = this.togglePicker.bind(this);
      this.keyExtractor = this.keyExtractor.bind(this);
      this.toggleCamera = this.toggleCamera.bind(this);
      this.pickImage = this.pickImage.bind(this);
    }

    togglePicker = () => {
        const isPickerShown = !this.state.isPickerShown;
        this.setState({ isPickerShown });
    }

    handleCapturePhoto = photo => {
        this.props.onAddPhoto(photo);
        this.toggleCamera();
    }

    keyExtractor = item => item.id;

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
        });
    
        if (!result.cancelled) {
            this.props.onAddPhoto(result.uri);
        }
    };

    toggleCamera = () => {
        const isCameraShown = !this.state.isCameraShown;
        this.setState({ isCameraShown });
    }

    handleUserChoise = choise => {
        if(choise !== 'cancel') {
            const actions = {
                'take' : this.toggleCamera,
                'choose' : this.pickImage
            }
            actions[choise]();
        }
        this.togglePicker();
    }

    render() {
        const { photos } = this.props;
        const { isPickerShown, isCameraShown } = this.state;
        const {
            addButtonIcon,
            addButton,
            container,
            camera,
            header,
            list
        } = styles;

        const MyCamera = () => (
            <View style = { camera }>
                <Camera onCapture = { this.handleCapturePhoto }/>
            </View> 
        );

        const Button = () => (
            <TouchableOpacity
                onPress = { this.togglePicker }
                style = { addButton }
            >
                <MaterialIcons
                    name = 'add'
                    size = { 40 }
                    style = { addButtonIcon }
                />
            </TouchableOpacity>
        );

        return (
            <View style = { container }>
                <Text
                    style = { header }
                >
                    Photos
                </Text>
                { isCameraShown ? null : <Button/>}
                { isCameraShown ? <MyCamera/> : null }
                <FlatList
                    data = { photos }
                    renderItem = { Photo }
                    style = { list }
                    keyExtractor = {this.keyExtractor}
                />
                { isPickerShown ? <Picker onChoose = { this.handleUserChoise }/> : null }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        width : '100%',
    },
    header : {
        textAlign : 'center',
        padding: 10,
        backgroundColor: '#7f8c8d'
    },
    addButton : {
        borderRadius : 50,
        backgroundColor : '#34495e',
        width : 60,
        height : 60,
        position: 'absolute',
        bottom : 30,
        right: 30,
        zIndex : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    addButtonIcon : {
        color : '#ecf0f1'
    },
    camera : {
        position : 'absolute',
        top : 0, 
        left : 0,
        width : '100%',
        height : '100%',
        backgroundColor: 'red',
        zIndex : 30
    }
});


export default connect(
    state => ({
        photos: state.photos
    }),
    dispatch => ({
        onAddPhoto : photo => dispatch(addPhoto(photo))
    })
)(Photos);
