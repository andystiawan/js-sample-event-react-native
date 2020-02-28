
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator,
  Button,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {Actions} from 'react-native-router-flux';





export default class LupaPass extends Component{


  login(){
    Actions.login();
  }

  render (){
    return (
        <View style={styles.container} >

        <View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
        <Image style={styles.image} source={require('./../../src/icon/logo.png')}/>
        <Text style={{top:20,fontSize:26, color:'#0089BF'}}>Venzy</Text>
        </View>

        <TextInput style={styles.inputBox}
        onSubmitEditing={()=> this.password.focus()}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Email"
        placeholderTextColor = "#0089BF"
        selectionColor="#fff"
        keyboardType="email-address"/>

        <TextInput style={styles.inputBox}
        onSubmitEditing={()=> this.password.focus()}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Username"
        onFocus={() => this.setState({

        })}
        placeholderTextColor = "#0089BF"
        selectionColor="#fff"
        keyboardType="default"/>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Send </Text>
        </TouchableOpacity>


        <View style={styles.loginLink}>
        <Text style={styles.text}> Already remamber your account ?</Text><TouchableOpacity onPress={this.login}><Text style={styles.text}> Log in </Text>
        </TouchableOpacity>
        </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  },
  text: {
    color:'#0089BF',
    fontSize:15
  },
  button: {
  width:200,
  backgroundColor:'transparent',
  borderRadius: 30,
  marginVertical: 10,
  paddingVertical: 13,
  borderWidth:1,
  borderColor: '#0089BF',
},
  inputBox: {
  width:300,
  backgroundColor:'rgba(255, 255,255,0.2)',
  borderRadius: 25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#0089BF',
  borderWidth:1,
  borderColor: '#0089BF',
  fontWeight: 'bold',
  marginVertical: 10,
  },
  buttonText: {
  fontSize:16,
  fontWeight:'500',
  color:'#0089BF',
  fontSize: 20,
  textAlign:'center'
},
  loginLink:{
  alignItems:'flex-end',
  justifyContent :'center',
  paddingVertical:16,
  flexDirection:'row'
},
image:{
 width:100,
 height:100,
},
});
