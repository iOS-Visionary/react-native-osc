/**
 * Created by yixue on 2018/1/12.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


var Dimensions = require("Dimensions")
var Screen_width = Dimensions.get("window").width
var Screen_Height =  Dimensions.get("window").height

export default class InteractionReactView extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    虽然我是React创建的View类,但是是用OC实例化的。
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:300,
        width:Screen_width,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
