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

var Dimensions = require("Dimensions")
var Screen_width = Dimensions.get("window").width
var Screen_Height =  Dimensions.get("window").height

export default class ActiveView extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            models:new ListView.DataSource({
                rowHasChanged:(row1 ,row2) => row1 !== row2
            }),
            loaded:false
        };
        this.fetchData();
    }
    fetchData(){
        fetch(Urls.ACTIVE_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData)

                let arr = responseData.result.items;
                this.setState({
                    models:this.state.models.cloneWithRows(arr),
                    loaded:true,

                });
            })
            .done();

    }
    renderTweetList(model,rowId){

        return(
            //只能包裹一个View
            <TouchableHighlight
                underlayColor={'rgba(34,26,38,0.1)'}
            >
                {/*最外层View*/}
                <View  style={styles.itemOutside}>
                    {/*内容View*/}
                    <View style={styles.itemInside}>

                        {/*图片*/}
                        <Image source={{uri:model.img}}
                               style={styles.Icon}></Image>

                        {/*右侧内容 从上到下布局*/}
                        <View style={styles.itemRight}>
                            {/*标题*/}
                            <Text style={styles.itemRightTitle} numberOfLines={2}>{model.title}</Text>

                            {/*报名*/}
                            <View style={styles.itemRightBaomingPP}>

                                {/*正在报名*/}
                                <View style={styles.itemRightBaomingP}>
                                    <Text style={styles.itemRightBaoming}>正在报名</Text>
                                </View>

                                {/*其它*/}
                                <View style={styles.itemRightOtherP}>
                                    <Text style={styles.itemRightOther}>其他</Text>
                                </View>

                            </View>

                            {/*时间 人数*/}
                            <View style={styles.itemRightTimeP}>
                                {/*时间*/}
                                <Text style={styles.itemRightTime}>{model.startDate}</Text>
                                {/*人数*/}
                                <Text style={styles.itemRightPeopleNumber}>{model.applyCount}人参与</Text>
                            </View>


                        </View>


                    </View>
                    <View style={styles.bottomLine}/>


                </View>


            </TouchableHighlight>
        )



    }

    render() {
        if(!this.state.loaded){
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator
                            size='large'
                            color='blue'
                        />
                    </View>
                </View>
            );
        }

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
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSpace: {
        marginTop: 64,
    },
    bottomSpace:{
        marginBottom:49,
    },


    itemOutside:{
        flexDirection: 'column',
    },
    itemInside:{
        flexDirection: 'row',
        marginTop:15,
        // marginLeft:15,
        // marginRight:15,
        paddingRight:15,
        paddingLeft:15,
    },
    Icon:{
        width:90,
        height:90,
        marginBottom:15,
    },
    itemRight:{
        flexDirection: 'column',
        marginLeft:8,
        marginBottom:15,
        justifyContent:'space-between'

    },
    itemRightTitle:{
        fontSize:15,
        color:'#111111',
        width:Screen_width - 130
    },
    itemRightBaomingPP:{
        flexDirection: 'row',
    },
    itemRightBaomingP:{
        borderWidth:1,
        borderColor:Colors.APP_THEME_COLOR,
    },
    itemRightBaoming:{
        color:Colors.APP_THEME_COLOR,
        fontSize:10,
        margin:3,
    },
    itemRightOtherP:{
        backgroundColor:Colors.SYSTEMGRAY_COLOR,
        marginLeft:8,


    },
    itemRightOther:{
        fontSize:10,
        margin:3,
        color:'#A5A5A5'


    },
    itemRightTimeP:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    itemRightTime:{
        fontSize:14,
        color:'#6C6C6C'

    },
    itemRightPeopleNumber:{
        color:'#6C6C6C',
        marginLeft:15,

    },
    bottomLine:{
        height:1,
        backgroundColor:'#E3E3E3'
    },


});
