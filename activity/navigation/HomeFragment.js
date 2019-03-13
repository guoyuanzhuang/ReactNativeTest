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
    Button
} from 'react-native';

export default class HomeFragment extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button
                    title="点击跳转"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: 'gray',
    },
});
