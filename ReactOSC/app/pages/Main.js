/**
 * Created by yixue on 2018/1/9.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

import Active from './ActiveRoot'
import Tweet from './TweetRoot'
import Inter from './InteractionRoot'
import * as Colors from '../constants/Colors'

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            seletedTabBarItem:'project',
        }
    }
    render(){
        return(
            <TabBarIOS tintColor={Colors.APP_THEME_COLOR}>
                <TabBarIOS.Item
                    renderAsOriginal={true}
                    icon={{uri:'task_normal.png', scale:3}}
                    selectedIcon={{uri:'task_selected.png', scale:3}}
                    title='综合'
                    selected={this.state.seletedTabBarItem == 'project'}
                    onPress={() => this.setState({seletedTabBarItem:'project'})}
                >
                    <Active/>
                </TabBarIOS.Item>


                <TabBarIOS.Item
                    renderAsOriginal={true}
                    icon={{uri:'tweet_normal.png', scale:3}}
                    selectedIcon={{uri:'tweet_selected.png', scale:3}}
                    title='动弹'
                    selected={this.state.seletedTabBarItem == 'task'}
                    onPress={() => this.setState({seletedTabBarItem:'task'})}
                >
                    <Tweet/>
                </TabBarIOS.Item>



                <TabBarIOS.Item
                    renderAsOriginal={true}
                    icon={{uri:'project_normal.png', scale:3}}
                    selectedIcon={{uri:'project_selected.png', scale:3}}
                    title='交互'
                    selected={this.state.seletedTabBarItem == ' interaction'}
                    onPress={() => this.setState({seletedTabBarItem:' interaction'})}
                >
                    <Inter/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}