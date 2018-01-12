/**
 * Created by yixue on 2018/1/11.
 */
import React, { Component, PropTypes } from 'react';
import { requireNativeComponent ,View} from 'react-native';

// requireNativeComponent 自动把这个组件提供给 "RCTScrollView"
// var RCTOCView = requireNativeComponent('OCView');

export default class TestOCView extends Component {

    render() {
        return <View/>
        return <RCTOCView {...this.props} style={{width:300,height:300,backgroundColor:'#F5F5F5'}} />;
    }

}

TestOCView.propTypes = {
    /**
     * 属性类型，其实不写也可以，js会自动转换类型
     */
    // autoScrollTimeInterval: PropTypes.number,
    // imageURLStringsGroup: PropTypes.array,
    // autoScroll: PropTypes.bool,

    // oonTouchBanner: PropTypes.func
};

module.exports = TestOCView;