import React, { Platform } from 'react-native';
import _ from 'underscore';

import AnotherComponent from '../components/AnotherComponent'
import Home from '../components/Home'

module.exports = function (scene) {
    var componentMap = {
        'Home': {
            title: 'Home',
            name: 'Home',
            component: Home
        },
        'AnotherComponent': {
            title: 'AnotherComponent',
            name: 'AnotherComponent',
            component: AnotherComponent
        }
    }
    var component = componentMap[scene];
    var params = Platform.OS === 'ios' ? { passProps: scene.params } : scene.params;
    return _.extend(component, params);
}
