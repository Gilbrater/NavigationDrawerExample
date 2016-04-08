import React, { View, Text } from 'react-native';

import styles from '../styles/home'

class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

module.exports = Home;
