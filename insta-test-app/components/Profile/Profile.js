import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Button,
    Image
} from 'react-native';
import { editUser } from '../../redux/actions/profile';
import Camera from '../../presenters/Camera'
import Picker from '../../presenters/Picker';
import Avatar from './presenters/Avatar';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';

class Profile extends Component {
    constructor (props) {
        super(props);
    
        const { 
            avatarURI = '',
            surname = '',
            name = '',
        } = props.user;

        this.state = {
            isPickerShown : false,
            isCameraShown : false,
            isEditing : false,
            avatarURI,
            surname,
            name,
        };

        console.log(this.state);
        this.handleCapturePhoto = this.handleCapturePhoto.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUserChoise = this.handleUserChoise.bind(this);
        this.cancelEditing = this.cancelEditing.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.togglePicker = this.togglePicker.bind(this);
        this.toggleCamera = this.toggleCamera.bind(this);
        this.pickImage = this.pickImage.bind(this);
    }

    handleInputChange = field => text => {
        this.setState({ [field] : text });
    }

    cancelEditing = () => {
        const { name, surname, avatarURI } = this.props.user;
        this.setState({
            isEditing : false,
            avatarURI,
            surname,
            name
        });
    }

    submitEditing = () => {
        const { name, surname, avatarURI } = this.state;
        this.props.onEditSave({ name, surname, avatarURI });
        this.toggleEditing();
    }

    toggleEditing = () => {
        const isEditing = !this.state.isEditing;
        this.setState({ isEditing });
    };

    togglePicker = () => {
        const isPickerShown = !this.state.isPickerShown;
        this.setState({ isPickerShown });
    }

    handleCapturePhoto = photo => {
        this.setState({
            isCameraShown : false,
            avatarURI : photo,
        });
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
        });
    
        if (!result.cancelled) {
            this.setState({
                avatarURI : result.uri
            });
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
            };
            actions[choise]();
        }
        this.togglePicker();
    }

    render () {
        const {
            buttonsContainer,
            scrollContainer,
            fieldsContainer,
            container,
            editing,
            header,
            camera,
            input
        } = styles;

        const {
            isCameraShown,
            isPickerShown,
            isEditing,
            avatarURI,
            surname,
            name,
        } = this.state;
        
        const EditingButtons = () => (
            <View style = { buttonsContainer } >
                <Button
                    onPress = { this.cancelEditing }
                    title = 'Cancel'
                    color = '#c0392b'
                />
                <Button
                    onPress = { this.submitEditing }
                    title = 'Save'
                    color = '#2ecc71'
                />
            </View>
        );
        const EditButton = () => (
            <View style = { buttonsContainer } >
                <Button
                    onPress = { this.toggleEditing }
                    title = 'Edit'
                />
            </View>
        );

        const MyCamera = () => (
            <View style = { camera }>
                <Camera onCapture = { this.handleCapturePhoto }/>
            </View> 
        );

        // console.log(this.state);
        const editStyle = isEditing ? editing : {};
        const finalInputStyle = { ...input, ...editStyle }

        return (
            <View style = { container }>
                <Text style = { header }>
                    Profile
                </Text>
                <View style = { scrollContainer }>
                    <Avatar
                        onPress = { this.togglePicker }
                        src = { avatarURI }
                        isDisabled = { !isEditing }
                    />
                    <View style = { fieldsContainer }>
                        <TextInput
                            onChangeText = { this.handleInputChange('name') }
                            placeholderTextColor = '#ecf0f1'
                            style = { finalInputStyle }
                            editable = { isEditing }
                            autoCorrect = { false }
                            placeholder = 'name'
                            value = { name }
                        />
                        <TextInput
                            onChangeText = { this.handleInputChange('surname') }
                            placeholderTextColor = '#ecf0f1'
                            style = { finalInputStyle }
                            editable = { isEditing }
                            autoCorrect = { false }
                            placeholder = 'surname'
                            value = { surname }
                        />
                        { isEditing ? <EditingButtons/> : <EditButton/>  }
                    </View>
                    { isCameraShown ? <MyCamera/> : null }
                    { isPickerShown ? <Picker onChoose = { this.handleUserChoise }/> : null }
                </View>
            </View>
        )
    }
}


const styles = {
    container : {
        flex : 1,
        width: '100%',
    },
    scrollContainer : {
        width: '100%',
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    fieldsContainer : {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonsContainer : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    header : {
        textAlign : 'center',
        padding: 10,
        backgroundColor: '#7f8c8d'
    },
    input : {
        padding: 10,
        marginTop: 10,
        width: '60%',
        borderRadius: 5,
        borderWidth: 1
    },
    editing : {
        borderBottomWidth : 3
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
};

export default connect(
    state => ({
        user : state.profile
    }),
    dispatch => ({
        onEditSave : userInfo => dispatch(editUser(userInfo))
    })
)(Profile);
