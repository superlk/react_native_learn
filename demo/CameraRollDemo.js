import React, {Component} from 'react';
import {StyleSheet, Text, View, CameraRoll} from 'react-native';

let imgURL = 'http://vczero.github.io/lvtu/img/city.jpg';

export default class CameraRollDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    saveImg = (img1) => {
        // alert(img1)
       CameraRoll.saveToCameraRoll(img1).then((result) => {
            alert("success", result)
        }).catch((error) => {
            alert("error", error)
        })

    };


    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.saveImg.bind(this, imgURL)}>
                    保存图片
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
