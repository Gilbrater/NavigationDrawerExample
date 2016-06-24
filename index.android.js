/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry, BackAndroid, Navigator, StyleSheet, ToolbarAndroid, Text, View } from 'react-native';

import Drawer from 'react-native-drawer'
import Menu from './components/Menu'
import Home from './components/Home'
import AnotherComponent from './components/AnotherComponent'
import navHelper from './helpers/navigation'

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'Home') {
        return (
           <View style={{flex: 1}}>
                <ToolbarAndroid
                    actions={[]}
                    navIcon={require('./images/menu.png')}
                    onIconClicked={() => {this._drawer.open()}}
                    style={styles.toolbar}
                    titleColor="white"
                    title="Home" />
                    <Home navigator={navigationOperations}/>
            </View>
        );
    } else if (route.name === 'AnotherComponent') {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    actions={[]}
                    onIconClicked={navigationOperations.pop}
                    navIcon={require('./images/back.png')}
                    style={styles.toolbar}
                    titleColor="white"
                    title="AnotherComponent" />
                    <AnotherComponent navigator={navigationOperations}/>
            </View>
        );
    }
};

class NavigationDrawerExample extends Component {
    _navigate(route) {
        this._navigator.push(navHelper(route));
        this._drawer.close();
    }

    render() {
        var initialRoute = {name: 'Home'};
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
                })}
                >
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    style={styles.container}
                    initialRoute={initialRoute}
                    configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                    renderScene={RouteMapper}/>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  },
  toolbar: {
      backgroundColor: '#333',
      height: 56,
  }
});

AppRegistry.registerComponent('NavigationDrawerExample', () => NavigationDrawerExample);
