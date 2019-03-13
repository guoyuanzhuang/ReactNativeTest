/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,


} from 'react-native';

export default class ListViewActivity extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>

                <Text> ListViw </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexWrap: 'wrap',
        backgroundColor: '#f5f5f5',
    },
    listStyle: {
        // 主轴方向
        flexDirection:'row',
        flexWrap:'wrap',
    },

});
