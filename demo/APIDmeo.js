import React, {Component} from 'react';
import {StyleSheet, Text, View, PixelRatio, AlertIOS, Dimensions,TouchableOpacity} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class APIDemo extends Component<Props> {
    constructor(props) {
        super(props);
    }

    show=(value)=>{
        // AlertIOS.alert(">>>",value)
        AlertIOS.prompt("test")
    }


    render() {
        return (
            <View style={styles.container}>
               <TouchableOpacity
                   onPress={this.show.bind(this, 'hahhaha')}
                   underlayColor="#E1F6FF"
               >
                   <Text>Alert</Text>
               </TouchableOpacity>

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
