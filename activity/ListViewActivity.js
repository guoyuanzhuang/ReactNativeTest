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

var imageJson = require('../test/data');

var imgWidth = require('Dimensions').get('window').width;

export default class ListViewActivity extends Component{

    constructor(props) {
        super(props);
        // 初始化数据源(rowHasChanged是优化的一种手段，只有当r1 !== r2的时候才会重新渲染)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(imageJson.data),
        };
    }

    //渲染数据
    _renderRow(rowData, sectionId, rowId) {
        console.log(rowData, sectionId, rowId);
        return (
            <TouchableOpacity
                onPress={()=>alert(rowId)}>
                <View style={itemStyle.itemSty}>
                    {/*rowData.imgUrl*/}

                    <Text style={itemStyle.textStyle}>{rowData.title}</Text>

                    <Image style={itemStyle.imageStyle} source={{uri:'http://ddsc2.b0.upaiyun.com/common/displayScreen/huafeitanping.jpg'}}/>

                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <Text> ListViw </Text>

                <ListView contentContainerStyle={styles.listStyle}
                          dataSource={this.state.dataSource}
                          //renderRow方法重写
                          renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
                          showsVerticalScrollIndicator={false}
                />

            </View>
        );
    }
}

var colunm = 3;
var productWidth = 120;
var hMargin = (imgWidth - colunm * productWidth) / (colunm + 1);

const itemStyle = StyleSheet.create({
    imageStyle:{
        width:50,
        height:50,
    },

    itemSty:{
        width:productWidth,
        height:productWidth,
        marginLeft:hMargin,
        marginTop:hMargin*2,
        alignItems:'center',
    },

    textStyle:{
        marginTop:5,
    }
});

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
