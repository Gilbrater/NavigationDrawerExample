import React, { View, Text } from 'react-native';

import styles from '../styles/home'

class AnotherComponent extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>AnotherComponent Screen</Text>
            </View>
        );
    }
}

module.exports = AnotherComponent;
