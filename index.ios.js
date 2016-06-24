/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native';

import Drawer from 'react-native-drawer'
import Home from './components/Home'
import Menu from './components/Menu'
import navHelper from './helpers/navigation'

class NavigationDrawerExample extends Component {
    _navigate(route) {
        this._navigator.push(navHelper(route));
        this._drawer.close();
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<Menu navigate={(route) => { this._navigate(route)} }/>}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={{
                    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
                    main: {paddingLeft: 3}
                }}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}>
                <NavigatorIOS
                    ref={(ref) => this._navigator = ref}
                    style={{flex: 1}}
                    initialRoute={{
                        title: 'Home',
                        component: Home,
                        leftButtonIcon: require('./images/menu.png'),
                        onLeftButtonPress: () => { this._drawer.open() }
                    }}/>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('NavigationDrawerExample', () => NavigationDrawerExample);
