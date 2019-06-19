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

class Header extends Component<Props> {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>
                        网易
                    </Text>
                    <Text style={styles.font_2}>
                        新闻
                    </Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        )
    }
}


class List extends Component {
    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

class ImportantNews extends Component {
    constructor(props) {
        super(props);

    }

    show = ((title) => {
        alert(title)
    });


    render() {
        let news = [];
        for (let i in this.props.news) {
            let text = (
                <Text
                    onPress={this.show.bind(this, this.props.news[i])}
                    numberOfLines={2}
                    style={styles.news_item}
                >
                    {this.props.news[i]}
                </Text>
            );
            news.push(text)
        }

        return (
            <View style={styles.flex_1}>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        )
    }
}

export default class TextDemo extends Component<Props> {
    render() {
        return (
            <View style={styles.flex_1}>
                <Header/>
                <List title="哈哈打哈哈上档次"> </List>
                <List title="哈苏打粉次董杉菜"> </List>
                <List title="阿斯顿发多少啊的"> </List>
                <List title="sad 发都撒到生的"> </List>
                <ImportantNews news={['1,我饿就收到货擦拭我饿就收到货擦拭我饿就收到货擦拭我饿就收到货擦拭我饿就收到货擦拭我饿就收到货擦拭我饿就收到货擦拭','2,是倒海翻江撒谎地方','3,萨顿饭撒','4,萨法介绍的积分卡上交电费']}>
                </ImportantNews>
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
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: '#EF2D36',
        alignItems: 'center' /* text水平剧中*/
    },
    flex_1: {
        flex: 1
    },

    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    font_1: {
        color: '#CD1D1C'
    },
    font_2: {
        color: '#FFF',
        backgroundColor: "#CD1D1C"
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        backgroundColor: '#ddd',
        justifyContent: 'center'
    },
    list_item_font: {
        fontSize: 16
    },
    news_title:{
        fontSize:20,
        fontWeight: 'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginRight:15
    },
    news_item:{
      marginLeft:10,
      marginRight:10,
      fontSize:15,
      lineHeight:20,
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(), /* PixelRatio的get方法用于获取高清设备的像素比*/
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    }
});
