/**
 * Created by yixue on 2018/1/11.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';
import Interaction from './InteractionView'


export default class InteractionRoot extends Component<{}> {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                 // itemWrapperStyle={'blue'}
                initialRoute = {{
                    title:'原生交互',
                    component:Interaction,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop:0,
    },

});