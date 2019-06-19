/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import TextDemo from './demo/TextDemo'
import {Button, StyleSheet, Text, View} from 'react-native';
// import Movies from "./demo/Movies";


type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions={  //静态方法
        title:'Home1',
        headerBackTitle:'返回哈哈' // 返回按钮，多了没法显示
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>HomePage</Text>
                <Button title={'Go to Page1 '}
                        onPress={()=>{
                            navigation.navigate('Page1',{name:'动态的'})
                        }}/>
                <Button title={'Go to Page2 '}
                        onPress={()=>{
                            navigation.navigate('Page2')
                        }}/>
                <Button title={'Go to Page3 '}
                        onPress={()=>{
                            navigation.navigate('Page3',{title:"ddd"})
                        }}/>
                <Button title={'Go to bottom '}
                        onPress={()=>{
                            navigation.navigate('Bottom')
                        }}/>
                <Button title={'Go to Top '}
                        onPress={()=>{
                            navigation.navigate('Top')
                        }}/>
                <Button title={'Go to DrawerNav '}
                        onPress={()=>{
                            navigation.navigate('DrawerNav')
                        }}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
