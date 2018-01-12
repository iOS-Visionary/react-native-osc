/**
 * Created by yixue on 2018/1/11.
 */
/**
 * Created by yixue on 2018/1/9.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    Image,
} from 'react-native';

import * as Urls from '../constants/Urls'
import * as Colors from  '../constants/Colors'
import OCModel from './InteractionOCModel'
import OCView from './InteractionOCView'

var Dimensions = require("Dimensions")
var Screen_width = Dimensions.get("window").width
var Screen_Height =  Dimensions.get("window").height

export default class InteractionView extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            models:new ListView.DataSource({
                rowHasChanged:(row1 ,row2) => row1 !== row2
            }),
        };

    }

    componentWillMount() {
        this.setState({
            models:this.state.models.cloneWithRows(['引用原生对象','引用原生View'])
        })
    }

    customPush(rowId){
        console.log(rowId);
        if(rowId == 0){
            this.props.navigator.push({
                title:'使用OCModel',
                component:OCModel,

            })
        }else {
            this.props.navigator.push({
                title:'使用OCView',
                component:OCView,

            })
        }


    }
    renderTweetList(model,rowId){


        return(
            //只能包裹一个View
            <TouchableHighlight
                underlayColor={'rgba(34,26,38,0.1)'}
                onPress={() => this.customPush(rowId)}

            >
                {/*最外层View*/}
                <View  style={styles.itemOutside}>
                    <Text style={styles.itemTitle}>{model}</Text>
                    <View style={styles.bottomLine}></View>
                </View>
            </TouchableHighlight>
        )



    }

    render() {

        return (
            <View style={[styles.container,styles.headerSpace,styles.bottomSpace]}>
                <ListView
                    dataSource={this.state.models}
                    renderRow={(rowData, sectionId, rowId) => this.renderTweetList(rowData,rowId)}
                />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop:0,
    },
    headerSpace: {
        marginTop: 0,
    },
    bottomSpace:{
        marginBottom:49,
    },


    itemOutside:{
        flexDirection: 'column',

    },

    itemTitle:{
        fontSize:17,
        color:'#6C6C6C',
        margin:15,

    },
    bottomLine:{
        height:0.5,
        backgroundColor:'#E3E3E3'
    },



});
