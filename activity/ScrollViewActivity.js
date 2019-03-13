/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ListView,
} from 'react-native';

var imageJson = require('../test/data');
var display = require('Dimensions');
var imageWidth = display.get('window').width;
var imageFile = require('../image/banner01.jpg');

export default class ScrollViewActivity extends Component {
    //变量状态机
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        };
    }

    //常亮状态机
    static defaultProps = {
        duration: 2000,
    }

    //耗时操作
    componentDidMount() {
        this.startTimer();
    }

    render() {
        return (
            <View style={styles.container}>
                {/*https://www.baidu.com/img/bd_logo1.png*/}
                {/*<Image style={styles.imageView} source={{uri:''}} />*/}
                {/*<Image style={styles.imageView} source={imageFile} />*/}

                <ScrollView style={styles.scrollContent}
                            ref='scrollView'
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            onMomentumScrollEnd={(e) => this.onAmimationEnd(e)}
                            onScrollBeginDrag={() => this.onScrollBeginDrag()}
                            onScrollEndDrag={() => this.onScrollEndDrag()} >

                    {this.renderImages()}

                </ScrollView>
                <View style={styles.indicatorContent}>
                    {this.renderImagesIndicator()}
                </View>

            </View>

        );
    }

    // 初始化轮播数据
    renderImages() {
        var imageArr = [];
        for (var i = 0; i < imageJson.data.length; i++) {
            var imageSigle = imageJson.data[i];
            console.log('image url>>>' + imageSigle.imgUrl);
            imageArr.push(
                <View key={i}>
                    <Image style={styles.imageView} source={{uri: imageSigle.imgUrl}}/>
                    <Text>{imageSigle.title}</Text>
                </View>
            );
        }
        return imageArr;
    }

    //初始化指示器
    renderImagesIndicator() {
        var imageArr = [];
        for (var i = 0; i < imageJson.data.length; i++) {
            let indicatorColor = (i == this.state.currentPage)?{backgroundColor:'red'}:{backgroundColor:'gray'};
            console.log('indicatorColor>>>' + indicatorColor)
            imageArr.push(
                <View key={i}>
                    <Image style={[styles.textIndicator, indicatorColor]}></Image>
                </View>
            );
        }
        return imageArr;
    }

    //滑动结束
    onAmimationEnd(e) {
        //滑动偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //滑动当前页数 取整
        let pageIndex = Math.floor(offsetX / imageWidth);
        //更改状态机
        this.setState({
            currentPage : pageIndex
        });
        console.log('当前页码>>>' + this.state.currentPage);
    }
    //开始拖拽
    onScrollBeginDrag(){
        this.timer && clearTimeout(this.timer);
    }
    //停止拖拽
    onScrollEndDrag(){
        this.timer && this.startTimer();
    }

    /**通过定时器实现自动播放轮播图 */
    startTimer(){
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(
            ()=>{
                console.log('开启定时器');
                let imageCount = imageJson.data.length;
                //设置当前页
                let activePage = 0;
                //判断
                if(this.state.currentPage >= imageCount - 1){
                    activePage = 0;
                }else{
                    activePage = this.state.currentPage + 1;
                }
                //更新状态机
                this.setState({
                    currentPage : activePage
                });
                //让ScrollView滚动
                let offsetX = activePage * imageWidth;
                scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true});
            },
            this.props.duration
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flexDirection:'column',
    },
    scrollContent: {

    },
    imageView: {
        width: imageWidth,
        height: 200,
    },
    indicatorContent: {
        width: imageWidth,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        //绝对位置
        position: 'absolute',
        bottom: 0,
    },
    textIndicator: {
        width: 10,
        height: 10,
        // backgroundColor: indicatorColor,
        marginLeft: 20,
        borderRadius: 5,
    },
});
