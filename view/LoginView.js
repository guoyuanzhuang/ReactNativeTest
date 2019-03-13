import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity

} from 'react-native';

type Props = {};
export default class LoginView extends Component<Props> {

    //状态机--可改变
    constructor(props) {
        super(props);
        this.state = {
            showText: '初始化状态'
        };
    }

    //状态机--不可改变
    static defaultProps={
        name:'张三',
        age:18
    }

    renderPress(event){
        this.setState({
            showText: event
        })
        // alert(event)
    }

    render() {

        // let display = this.state.showText

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.renderPress('点击状态')}
                    onPressIn={()=>this.renderPress('按下状态')}
                    onPressOut={()=>this.renderPress('抬起状态')}
                    onLongPress={()=>this.renderPress('长按状态')}>
                    <Text> 点击我 </Text>
                </TouchableOpacity>

                <Text> {this.state.showText} </Text>

                <Text> {this.props.name} </Text>

                <Text> {this.props.age} </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#f5f5f5',
    },

});

module.exports = LoginView;
