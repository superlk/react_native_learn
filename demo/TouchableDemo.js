
import React, {Component} from 'react';
import {StyleSheet, Text, View, PixelRatio, TouchableHighlight,TouchableOpacity} from 'react-native';


export default class TouchableDemo extends Component<Props> {
    show = (text) => {
        alert(text)
    }

    render() {
        return (
            <View style={styles.flex_1}>
                <View>
                    <TouchableOpacity
                        onPress={this.show.bind(this, 'hahhaha')}
                        underlayColor="#E1F6FF"
                    >
                        <Text> 点击</Text>
                    </TouchableOpacity>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
        marginTop:25
    },
});
