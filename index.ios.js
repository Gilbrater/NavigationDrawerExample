/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    NavigatorIOS,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Drawer from 'react-native-drawer'
import Home from './components/Home'
import Menu from './components/Menu'

class NavigationDrawerExample extends Component {
  render() {
    return (
        <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={<Menu />}
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('NavigationDrawerExample', () => NavigationDrawerExample);
