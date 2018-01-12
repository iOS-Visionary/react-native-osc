/**
 * Created by yixue on 2018/1/11.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    requireNativeComponent,
} from 'react-native';




// var TestScrollView = require('./TestScrollView');

// requireNativeComponent 自动把这个组件提供给 "TestScrollView"
// var TestScrollView = requireNativeComponent('TestScrollView', TestScrollView);

// var bannerImgs = [
//     'http://upload-images.jianshu.io/upload_images/2321678-ba5bf97ec3462662.png?imageMogr2/auto-orient/strip%7CimageView2/2',
//     'http://upload-images.jianshu.io/upload_images/1487291-2aec9e634117c24b.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/480/q/100',
//     'http://f.hiphotos.baidu.com/zhidao/pic/item/e7cd7b899e510fb37a4f2df3db33c895d1430c7b.jpg'
// ];
//
// var TestScrollViewConsts = require('react-native').UIManager.TestScrollView.Constants;


// var TestOCView = require('./TestOCView')

var RCTOCView = requireNativeComponent('OCView');
export default class InteractionOCView extends Component<{}> {
    render() {
        return (
         <RCTOCView {...this.props} style={styles.container} />


            /**
             *
             * <TestOCView/> <TestScrollView style={styles.container}
             autoScrollTimeInterval = {2}
             imageURLStringsGroup = {bannerImgs}
             pageControlAliment = {TestScrollViewConsts.SDCycleScrollViewPageContolAliment.right}

             />
             * */

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
