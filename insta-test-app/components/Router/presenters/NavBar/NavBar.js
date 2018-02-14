import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Button from './presenters/Button';

export class NavBar extends Component {
    render () {
        const { currentRoute } = this.props;

        return (
        <View
            style = {styles.navContainer}
        >
            <Button
                name = 'dashboard'
                iconName = 'dashboard'
                currentScreen = {currentRoute}
            />
            <Button
                name = 'profile'
                iconName = 'account-box'
                currentScreen = {currentRoute}
            />
        </View>
        )
    }
}

const styles = {
    navContainer : {
        height : 70,
        width: '100%',
        flexDirection : 'row',
    }
};

export default connect(
    state => ({
        currentRoute: state.routing
    }),
    dispatch => ({})
)(NavBar);