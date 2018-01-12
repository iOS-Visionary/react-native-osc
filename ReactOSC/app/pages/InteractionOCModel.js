/**
 * Created by yixue on 2018/1/11.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

var OCModelParam = NativeModules.OCModelParam
var OCModelCallback = NativeModules.OCModelCallBack
var OCModelPromises = NativeModules.OCModelPromises

const { OCModelEmitter } = NativeModules;

const  myEmitter = new  NativeEventEmitter(OCModelEmitter)
export default class InteractionOCModel extends Component<{}> {



    testOCModelParam(){
        OCModelParam.reactParam('哈哈，我是React传过来的参数');
    }
    testOCModelCallBack(){
        OCModelCallback.Callback((OCParam) => {
            console.log(OCParam)
        })
    }
    async testOCModelPromises(){
        OCModelPromises.promisesParam().then((OCParam) =>{
            console.log(OCParam)
        }).catch((e) =>{
            console.log(e)
        })
    }


    testOCModelEmitter(){
        //调用方法原生方法 ，原生发通知监听
        OCModelEmitter.receiveNoti('https://www.baidu.com')


    }
    componentWillMount() {
    //    注册监听
        this.listener = myEmitter.addListener('testEmitter',this.showTestEmitterParam.bind(this))

    }

    componentWillUnmount() {
        this.listener && this.listener.remove();
        this.listener = null;
    }
    showTestEmitterParam(param){
        console.log(param)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={() => this.testOCModelParam()}>
                    点我向原生传普通参数
                </Text>
                <Text style={styles.welcome}
                      onPress={() => this.testOCModelCallBack()}>
                    点我向原生传一个匿名函数(callback方式)
                </Text>
                <Text style={styles.welcome}
                      onPress={() => this.testOCModelPromises()}>
                    点我向原生类block(error,data):(Promises方式)
                </Text>
                <Text style={styles.welcome}
                      onPress={() => this.testOCModelEmitter()}>
                    原生向React传参数(RCTEventEmitter方式 类似通知)
                </Text>


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