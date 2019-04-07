import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image } from 'react-native';

import Home from './Home';
import Explore from './Explore';
import DevCamera from './DevCamera';
import Profile from './Profile';

const ModTabs = createBottomTabNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if (opt.focused) {
                    return (
                        <Image source={require('../assets/home.png')} style={{ width:23, height:23 }} />
                    );
                } else {
                    return (
                        <Image source={require('../assets/home_off.png')} style={{ width:23, height:23 }} />
                    );
                }
            }
        }
    },
    Explore:{
        screen: Explore,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if (opt.focused) {
                    return (
                        <Image source={require('../assets/search.png')} style={{ width:23, height:23 }} />
                    );
                } else {
                    return (
                        <Image source={require('../assets/search_off.png')} style={{ width:23, height:23 }} />
                    );
                }
            }
        }
    },
    DevCamera:{
        screen: DevCamera,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if (opt.focused) {
                    return (
                        <Image source={require('../assets/camera.png')} style={{ width:23, height:23 }} />
                    );
                } else {
                    return (
                        <Image source={require('../assets/camera_off.png')} style={{ width:23, height:23 }} />
                    );
                }
            }
        }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
            tabBarIcon:(opt)=>{
                if (opt.focused) {
                    return (
                        <Image source={require('../assets/profile.png')} style={{ width:23, height:23 }} />
                    );
                } else {
                    return (
                        <Image source={require('../assets/profile_off.png')} style={{ width:23, height:23 }} />
                    );
                }
            }
        }
    }
}, {
    tabBarOptions:{
        showLabel: false,
        activeBackgroundColor:'#333333',
        inactiveBackgroundColor:'#CCCCCC'
    }
});

const Tabs = createAppContainer(ModTabs);

export default Tabs;