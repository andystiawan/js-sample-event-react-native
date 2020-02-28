/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import Navigator from './Navigator';


export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render (){ 
    return (
      <>
        <StatusBar barStyle="dark-content" />
        
           <Navigator/>
         
      </>
    );
  }
}

const styles = StyleSheet.create({
  
});


