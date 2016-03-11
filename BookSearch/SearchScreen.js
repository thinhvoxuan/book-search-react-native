import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TextInput,
    NavigatorIOS
} from 'react-native';


import ResultsScreen from './ResultsScreen';

class SearchScreen extends Component {

    gotoResultsScreen(event){
        this.props.navigator.push({
            title: 'Result',
            component: ResultsScreen,
            passProps: {
                searchPhrase : event.nativeEvent.text
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headline}>
                    BookBrowser
                </Text>
                <Text style={styles.label}>
                    Find books containing:
                </Text>
                <TextInput
                    returnKeyType="search"
                    placeholder="e.g. JavaScript or Mobile"
                    style={styles.textInput}
                    enablesReturnKeyAutomatically={true}
                    onEndEditing={ event => this.gotoResultsScreen(event) }
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5AC8FA'
    },
    headline: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 28,
    }, label: {
        fontSize: 24,
        fontWeight: 'normal',
        color: '#fff',
        marginBottom: 8
    },
    textInput: {
        borderColor: '#8E8E93',
        borderWidth: 0.5,
        backgroundColor: '#fff',
        height: 40,
        marginLeft: 60,
        marginRight: 60,
        padding: 8
    }
});

export default SearchScreen;

