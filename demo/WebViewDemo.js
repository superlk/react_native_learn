import React, {Component} from 'react';
import {StyleSheet, Text, View, PixelRatio, WebView, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class WebViewDemo extends Component<Props> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <WebView
                // injectedJavaScript="alert('欢迎')"
                bounces={false}
                url='https://www.bilibili.com'
                style={{width:width,height:height}}
                >
                </WebView>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 25
    },
});
