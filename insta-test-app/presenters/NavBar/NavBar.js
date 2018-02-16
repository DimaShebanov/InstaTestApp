import { onGo } from '../../redux/actions/routing';
import { Text, View } from 'react-native';
import Button from './presenters/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NavBar extends Component {
    constructor (props) {
      super(props);
    
      this.handlePress = this.handlePress.bind(this);
    }
    
    handlePress = target => () => {
        this.props.onGoTo(target);
    }

    render () {
        const { currentRoute } = this.props;

        return (
        <View
            style = { styles.navContainer }
        >
            <Button
                name = 'photos'
                iconName = 'dashboard'
                currentRoute = { currentRoute }
                onPress = { this.handlePress('photos') }
            />
            <Button
                name = 'profile'
                iconName = 'account-box'
                currentRoute = { currentRoute }
                onPress = { this.handlePress('profile') }
            />
        </View>
        );
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
    dispatch => ({
        onGoTo : route => dispatch( onGo( route ) )
    })
)(NavBar);
