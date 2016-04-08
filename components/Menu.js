import React, { ListView } from 'react-native';

import Button from 'react-native-button';

import styles from '../styles/menu'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(['Home', 'AnotherComponent'])
        });
    }

    _renderMenuItem(item) {
        return(
            <Button style={styles.menuItem} onPress={()=> this._onItemSelect(item)}>{item}</Button>
        );
    }

    _onItemSelect(item) {
        // Add the code to push a scene in navigation stack, we’ll do it in a few
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(item) => this._renderMenuItem(item)}
            />
        );
    }
}

module.exports = Menu;
