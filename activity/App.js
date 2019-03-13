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

var Dimensionsee = require("Dimensions");

var productData = require("../test/data");

var imageSource = require('../image/ic_launcher.png');

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                {this.getImageViews()}

                <Image style={styles.image} source={require('./image/ic_launcher.png')} />


                {/*<Image style={styles.image} source={{uri:'https://ddsc2.b0.upaiyun.com/common/displayScreen/%E5%8F%8C%E5%8D%81%E4%B8%80%E5%BC%B9%E5%B1%8F.jpg'}} />*/}

                {/*<TextInput style={inputStyle.inputTxt}/>*/}

                {/*<Text>*/}
                {/*当前屏幕宽度：{Dimensionsee.get('window').width}*/}
                {/*当前屏幕高度：{Dimensionsee.get('window').height}*/}
                {/*</Text>*/}

                <TextInput style={styles.textinput} keyboardType={'number-pad'} password={true}/>

            </View>
        );
    }

    // 创建九宫格图片
    getImageViews(){
        var arrayData = [];
        for (var i = 0; i < productData.data.length; i++){
            var data = productData.data[i];
            arrayData.push(
                <View key={i} style={proStyles.product}>
                    <Image style={proStyles.imageview} source={{uri:data.imgUrl}} />
                    <Text style={proStyles.textview}>
                        {data.title}
                    </Text>
                </View>
            );
        }
        return arrayData;
    }
}

var colunm = 3;
var productWidth = 80;
var hMargin = (Dimensionsee.get('window').width - colunm * productWidth) / (colunm + 1);

const proStyles = StyleSheet.create({
    product:{
        // flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginLeft:hMargin,
        marginTop: 20
    },
    imageview:{
        width: 80,
        height: 100,
    },
    textview:{

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'gray',
        marginTop:50,
    },
    image:{
        width:100,
        height:100,
    },
    textinput:{
        width:300,
        height:50,
        borderWidth:1,
        borderColor:'red',
        marginTop:20,
    }
});
