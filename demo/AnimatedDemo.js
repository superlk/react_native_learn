import React from 'react';
import {Animated, Text, View} from 'react-native'

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 10000,
            }
        ).start();
    }
    render(){
        let { fadeAnim } =this.state;
        return(
            <Animated.View
            style={{
                ...this.props.style,
                opacity:fadeAnim
            }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default class AnimatedDemo extends React.Component{
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <FadeInView
                style={{width:250,height:50,backgroundColor:'powderblue'}}
                >
                    <Text style={{fontSize:28,textAlign:"center",margin:10}}>Fading</Text>

                </FadeInView>
            </View>
        )
    }

}
