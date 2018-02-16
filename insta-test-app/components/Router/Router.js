import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import NavBar from '../../presenters/NavBar';
import Photos from '../../components/Photos';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';

class Router extends Component {
    render () {
        const { route } = this.props;
        const routes = {
            'photos' : () => (<Photos/>),
            'profile' : () =>( <Profile/>)
        };
        const CurScreen = routes[route] || routes.photos;
        return (
            <KeyboardAvoidingView
                style = {styles.container}
                behavior = 'padding'
            >
                <StatusBar
                    hidden = {true}
                />
                <CurScreen/>
                <NavBar/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#95a5a6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default connect(
    state => ({
        route: state.routing
    }),
    dispatch => ({})
)(Router);
