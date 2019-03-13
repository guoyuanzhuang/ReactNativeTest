/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image

} from 'react-native';

//引入自定义组件
var LoginView = require('../view/LoginView');

export default class LoginActivity extends Component{
    render() {
        return (
            <View style={styles.container}>
                <LoginView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'c*SDDDDDDDDDDDDDDDDDenter',
        flexWrap: 'wrap',
        backgroundColor: '#f5f5f5',
    },

});
