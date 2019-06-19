import React, {Component} from 'react';
import {StyleSheet, Text, View, ActionSheetIOS, AlertIOS, Dimensions, TouchableOpacity,NetInfo} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class APIDemo extends Component<Props> {
    constructor(props) {
        super(props);
    }

    show = () => {
        // 获取网络类型
        NetInfo.fetch().done((value)=>{
            alert(value)
        });

        // 获取是否链接
        NetInfo.isConnected.fetch().done((isConnected)=>{
            alert(isConnected)
        })
        // 添加网络状态变化监听
        NetInfo.addEventListener('change',(reachability)=>{
            alert(reachability)
        })
        //

        ActionSheetIOS.showActionSheetWithOptions({
            options: [
                "大电话",
                "不打电话",
                "测试",
                "取消"
            ],
            cancelButtonIndex: 3,  // 取消按钮位置
            destructiveButtonIndex:0  //不能使用的按钮位置
        }, (index) => {
            AlertIOS.alert(index)
        })

    };
    share = () => {
        ActionSheetIOS.showShareActionSheetWithOptions({
            url: "https://code.facebook.com",
        }, (err) => {
            AlertIOS.alert(err)
        }, (success) => {
            AlertIOS.alert(success)
        })
    };


    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.show}>
                    弹出分类
                </Text>
                <Text onPress={this.share}>
                    分享
                </Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
});
