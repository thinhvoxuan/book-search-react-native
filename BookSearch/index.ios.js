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
    NavigatorIOS,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
import SearchScreen from './SearchScreen';
import ViewPager from 'react-native-viewpager';

var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

class BookSearch extends Component {
    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });

        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
        };
    }
    render(){
        return (
            <View style={styles.container}>
                <ViewPager
                    ref={(viewpager) => {this.viewpager = viewpager}}
                    style={this.props.style}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={false}
                    autoPlay={false}/>

                <TouchableHighlight style={styles.button} onPress={() => {
                    this.viewpager.goToPage(2);
                  }}>
                    <Text>Click</Text>
                </TouchableHighlight>
            </View>
        )
    }
    _renderPage(data: Object, pageID: number) {
        return (
            <Image
                source={{uri: data}}
                style={styles.page}/>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        width: deviceWidth,
    },
    button: {
        padding: 10,
    },
});

AppRegistry.registerComponent('BookSearch', () => BookSearch);
