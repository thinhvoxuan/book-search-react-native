/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TextInput,
    NavigatorIOS
} from 'react-native';

import SearchScreen from './SearchScreen';

class BookSearch extends Component {
    render(){
        return (
            <NavigatorIOS
                initialRoute={{
                    component: SearchScreen,
                    title: 'Search'
                }}
                style={styles.navContainer}
            />
        )
    }
}

var styles = StyleSheet.create({
    navContainer: {
        flex: 1
    }
});

AppRegistry.registerComponent('BookSearch', () => BookSearch);
