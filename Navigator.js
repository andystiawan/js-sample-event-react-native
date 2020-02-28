import React from 'react';
import 'react-native-gesture-handler';
import Button from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './src/view/Home';
import Profile from './src/view/Profile';
import Chat from './src/view/Message';
import Discovery from './src/view/Explore';
import Tickets from './src/view/Tickets';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const Navigator = createStackNavigator({
    Home: { 
    screen: Home,
    navigationOptions:{
        headerShown:false,
    }, 
},
    Profile: {
        screen: Profile,
        navigationOptions:{
            headerShown:false,
            
        },
    },
    
    Chat: {screen: Chat},
  
    Discovery: {
        screen: Discovery,
        navigationOptions:{
                
        },            
    },

    Tickets: {screen: Tickets},
  
});

export default createAppContainer(Navigator);

