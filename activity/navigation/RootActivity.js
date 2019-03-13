/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
} from "react-navigation";
import HomeFragment from "./HomeFragment";
import ProductFragment from "./ProductFragment";
import MineFragment from "./MineFragment";

import {
    View,
    Image, StyleSheet,
} from 'react-native';
import FindFragment from "./FindFragment";
import LoginActivity from "../LoginActivity";

export default class RootActivity extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

// TAB路由页面配置
const TabRouteConfigs = {
    Home: {
        screen: HomeFragment,
        navigationOptions: {
            title: '首页',
            tabBarIcon: ({tintColor,focused}) => (
                 focused
                    ?
                    <Image source={require('../../image/btn_tabbar_tuijian_press.png')} style={styles.image} />
                    :
                    <Image source={require('../../image/btn_tabbar_tuijian_nor.png')} style={styles.image} />  //style={[styles.image, {tintColor: tintColor}]}
            ),
        }
    },
    Product: {
        screen: ProductFragment,
        navigationOptions: {
            title: '产品',
            tabBarIcon: ({tintColor,focused}) => (
                focused
                    ?
                    <Image source={require('../../image/btn_tabbar_list_press.png')} style={styles.image} />
                    :
                    <Image source={require('../../image/btn_tabbar_list_normal.png')} style={styles.image} />  //style={[styles.image, {tintColor: tintColor}]}
            ),
        },
    },
    Mine: {
        screen: MineFragment,
        navigationOptions: {
            title: '我的',
            tabBarIcon: ({tintColor,focused}) => (
                focused
                    ?
                    <Image source={require('../../image/btn_tabbar_wode_press.png')} style={styles.image} />
                    :
                    <Image source={require('../../image/btn_tabbar_wode_nor.png')} style={styles.image} />  //style={[styles.image, {tintColor: tintColor}]}
            ),
        },
    },
    Find: {
        screen: FindFragment,
        navigationOptions: {
            title: '发现',
            tabBarIcon: ({tintColor,focused}) => (
                focused
                    ?
                    <Image source={require('../../image/btn_tabbar_faxian_press.png')} style={styles.image} />
                    :
                    <Image source={require('../../image/btn_tabbar_faxian_nor.png')} style={styles.image} />  //style={[styles.image, {tintColor: tintColor}]}
            ),
        },
    }
};

const styles = StyleSheet.create({
    image:{
        width: 25,
        height: 25,
    }
});

//TAB路由公共配置
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    lazy: true,  //懒加载
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
};

//创建TAB路由
const Tab = createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

// 路由器公共配置
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '点点搜财',
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {color: '#333333'},
    }
};

// 路由页面配置
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    },
    Login: {
        screen: LoginActivity,
    }
};

// 创建页面路由
const Navigator = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);


