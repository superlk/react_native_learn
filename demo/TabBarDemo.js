import React, {Component} from 'react';
import {StyleSheet, Text, View, PixelRatio, TouchableHighlight, TouchableOpacity, Image,TabBarIOS} from 'react-native';


export default class TabBarDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [
                'http://www.ituring.com.cn/bookcover/1442.796.jpg',
                'http://www.ituring.com.cn/bookcover/1668.553.jpg',
                'http://www.ituring.com.cn/bookcover/1521.260.jpg'
            ],
            count: 0
        }
    }



    render() {
        return (
            <TabBarIOS>

            </TabBarIOS>

        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
        marginTop: 25
    },
});
