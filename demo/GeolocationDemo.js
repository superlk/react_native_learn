import React, {Component} from 'react';
import {StyleSheet, Text, View,SectionList,FlatList,Button, CameraRoll} from 'react-native';

let imgURL = 'http://vczero.github.io/lvtu/img/city.jpg';

export default class CameraRollDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    saveImg = () => {
        // alert(img1)
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        }).then((result)=>{
            alert("success",result)
        }).catch((error)=>{
            alert("error",error)
        })

    };


    render() {
        return (
            <View style={styles.container}>
            <Button title={"Fetch"} onPress={this.saveImg()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
