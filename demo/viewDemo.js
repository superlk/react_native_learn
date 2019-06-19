/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PixelRatio} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class ViewDemo extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item, styles.center]}>
                    <Text>酒店</Text>
                </View>
                <View style={[styles.item,styles.lineLeftRight]}>
                    <View style={[styles.center, styles.flex,styles.lineCenter]}>
                        <Text>海外酒店</Text>
                    </View>
                    <View style={[styles.center, styles.flex,styles.lineCenter]}>
                        <Text>特惠酒店</Text>
                    </View>
                </View>
                <View style={[styles.item,styles.lineLeftRight]}>
                    <View style={[styles.center, styles.flex,styles.lineCenter]}>
                        <Text>团购</Text>
                    </View>
                    <View style={[styles.center, styles.flex,styles.lineCenter]}>
                        <Text>客栈.公寓</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF0067'
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(), /* PixelRatio的get方法用于获取高清设备的像素比*/
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    },
    lineCenter: {
        borderBottomWidth:1/PixelRatio.get(),
        borderColor: '#fff'
    }
});
