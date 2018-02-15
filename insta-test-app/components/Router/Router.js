import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StatusBar, StyleSheet } from 'react-native'
import Photos from '../../components/Photos';
import NavBar from '../../presenters/NavBar';

class Dashboard extends Component {
    render () {
        const { route } = this.props;
        const routes = {
            'photos' : () => (<Photos/>),
            // 'profile' : <Profile/>
        };
        const curScreen = routes[route] || routes.photos;
        return (
            <View style = {styles.container}>
                <StatusBar
                    hidden = {true}
                />
                {curScreen()}
                <NavBar/>
            </View>
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
)(Dashboard);
