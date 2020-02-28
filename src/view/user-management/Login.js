
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
  Alert,
  SafeAreaView,

} from 'react-native';

import {Actions} from 'react-native-router-flux';




export default class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      pusername: 'Username',
      ppassword: 'Password',
    };
  }

  register(){
    Actions.register();
  }
  lupaPass(){
    Actions.lupaPass();
  }
  interest(){
    Actions.interest();
  }


  render (){
    return (


        <SafeAreaView style={styles.container} >
        <View style={styles.menuLogin}>
              <View style={{flexDirection:'row',justifyContent:'center',width:'100%', marginBottom:20}}>
              <Image style={styles.image} source={require('./../../src/icon/logo.png')}/>
              <Text style={{top:20,fontSize:26, color:'#0089BF'}}>Venzy</Text>
              </View>
        <View>

          <TextInput style={styles.inputBox}
          onSubmitEditing={()=> this.password.focus()}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.state.pusername}
          onFocus={() => this.setState({

          })}
          placeholderTextColor = "#0089BF"
          selectionColor="#0089BF"
          keyboardType="default"/>
        <Image source={require('./../../src/icon/user.png')} style={{width:35,height:41, position:'absolute',top:-12, left:30, backgroundColor:'white'}}/>
        </View>
        <View style={{marginTop:10}}>
          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.state.ppassword}
          onFocus={() => this.setState({

          })}
          secureTextEntry={true}
          placeholderTextColor = "#0089BF"
          ref={(input) => this.password = input}
          />
        <Image source={require('./../../src/icon/key.png')} style={{width:35,height:35, position:'absolute',top:-12, left:30, backgroundColor:'white'}}/>
        </View>

                  <TouchableOpacity onPress={this.lupaPass}>
                    <Text style={styles.textLupaPass}>Forget Password ?</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.interest} style={styles.button}>
                    <Text style={styles.buttonText}> Login </Text>
                  </TouchableOpacity>

                    <View style={styles.registerLink}>
                        <Text style={styles.textRegister}> Don't have an account ?</Text>
                          <TouchableOpacity onPress={this.register}>
                            <Text style={styles.textRegister}> Register </Text>
                          </TouchableOpacity>
                    </View>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
        <View style={styles.barAuth}>
                <TouchableOpacity style={styles.buttonAuth}>
                  <Image style={{width:'20%',height:'83%',position:'absolute',left:4}} source={require('./../../src/icon/Google.png')}/>
                  <Text style={styles.authText}>Sign In With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAuthFb}>
                  <Image style={{width:'20%',height:'84%',position:'absolute',left:4}} source={require('./../../src/icon/Facebook.png')}/>
                  <Text style={styles.authText}>Sign In With Facebook</Text>
                </TouchableOpacity>
        </View>
        </View>

        <View style={styles.fingerprintView}>
          <Image style={styles.fingerprintImage} source={require('./../../src/icon/fingerprint.png')}/>
        </View>

        </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  justifyContent:'center'
  },
  menuLogin:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
    marginBottom:100,
    marginTop:100
  },
  barAuth:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: 'white',
    bottom:80,
    width:395,
  },
  buttonAuth:{
    borderRadius:25,
    borderWidth:2,
    borderColor: '#0089BF',
    width:195,
    height:50,
    justifyContent:'center',
  },
  authText:{
    left:45,
    color:'#0089BF',
  },
  buttonAuthFb:{
    borderRadius:25,
    borderWidth:2,
    borderColor: '#0089BF',
    width:198,
    height:50,
    justifyContent:'center',
  },
  textLupaPass: {
    fontSize: 14,
    marginLeft: 210,
    color:'#0089BF',
    fontWeight:'bold'
  },
  button: {
    width:200,
    backgroundColor:'transparent',
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 13,
    borderWidth:2,
    borderColor: '#0089BF',
},
  inputBox: {
    width:300,
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#0089BF',
    borderWidth:2,
    borderColor: '#0089BF',
    fontWeight: 'bold',
    marginVertical: 10,
},
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#0089BF',
    fontSize: 20,
    textAlign:'center',
    fontWeight:'bold'
},
 registerLink:{
  alignItems:'flex-end',
  justifyContent :'center',
  paddingVertical:16,
  flexDirection:'row'
},
 textRegister:{
 color:'#0089BF',
 fontWeight:'bold'
},
 image:{
  width:100,
  height:100,

},
fingerprintView:{
  height:55,
  flexDirection: 'row',
  backgroundColor: 'white',
  justifyContent:'center',
  bottom:20
},
fingerprintImage:{
  width:'10%',
  height:'100%'
}
});
