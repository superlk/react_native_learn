/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, PixelRatio} from 'react-native';

const onPet = 1 / PixelRatio.get();

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getInitalState = () => {
        return {
            show: false
        }
    };
    getValue = (text) => {
        this.setState({
            show: true,
            value: text
        })
    };
    hide = (val) => {
        alert(val)
        this.setState({
            show: false,
            value: val
        })
    };

    render() {
        // alert(this.state.value)
        return (
            <View style={styles.flex}>
                <View style={[styles.flexDirection, styles.inputHight]}>
                    <View style={styles.flex}>
                        <TextInput
                            style={styles.input}
                            returnkeyType="search"
                            placeholder='输入关键字'
                            onEndEditing={this.hide.bind(this, this.state.value)}
                            value={this.state.value}
                            onChangeText={this.getValue}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.hide.bind(this, this.state.value)}> 搜索</Text>
                    </View>
                </View>
                {this.state.value ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this, this.state.value + '庄')}
                              numberOfLines={1}>{this.state.value}庄</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '庄2')}
                              numberOfLines={1}>{this.state.value}庄2</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '庄3')}
                              numberOfLines={1}>{this.state.value}庄3</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '庄4')}
                              numberOfLines={1}>{this.state.value}庄4</Text>
                        {/*<Text>{this.state.value}</Text>*/}

                    </View>
                    : null}
            </View>
        )
    }
}


export default class TextInputDemo extends Component {
    render() {
        return (
            <View style={[styles.flex, styles.topStatus]}>
                <Search>

                </Search>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    flexDirection: {
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        height: 80,
    },
    topStatus: {
        marginTop: 25
    },
    flex: {
        flex: 1
    },

    input: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
