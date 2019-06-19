import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class ChatScreen extends Component {
    static navigationOptions = {
        title: '第二页',
    };


    render() {
        const {params} = this.props.navigation.state;//接收参数
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );

    }


}
