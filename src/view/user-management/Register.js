
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
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



var radio_props = [
  {label: 'Male ', value: 0},
  {label: 'Female', value: 1}
];



export default class Register extends Component{
  constructor(props) {
   super(props);
   this.state = {
      username: '',
      email:'',
      password:'',
      vpassword:'',
      pnumber:'',
      pusername:'Username',
      pemail:'Email',
      ppassword:'Password',
      pvpassword:'Validate Password',
      ppnumber:'+62',
   };
  }

  login(){
    Actions.login();
  }


  render () {
    return (
        <View style={styles.container} >

        <View style={{flexDirection:'row',justifyContent:'center',width:'100%'}}>
        <Image style={styles.image} source={require('./../../src/icon/logo.png')}/>
        <Text style={{top:20,fontSize:26, color:'#0089BF'}}>Venzy</Text>
        </View>




        <TextInput style={styles.inputBox}
          onSubmitEditing={()=> this.password.focus()}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.state.pusername}
          onFocus={() => this.setState({

          })}
          placeholderTextColor = "#0089BF"
          selectionColor="#fff"
          keyboardType="default"/>

        <TextInput style={styles.inputBox}
          onSubmitEditing={()=> this.password.focus()}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.state.pemail}
          onFocus={() => this.setState({


          })}
          placeholderTextColor = "#0089BF"
          selectionColor="#fff"
          keyboardType="email-address"/>

        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.state.ppassword}
          onFocus={() => this.setState({


          })}
          secureTextEntry={true}
          placeholderTextColor = "#0089BF"
          ref={(input) => this.password = input}
          />

        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={this.state.pvpassword}
          onFocus={() => this.setState({

          })}
          onchange={this.handlevpassword}
          secureTextEntry={true}
          placeholderTextColor = "#0089BF"
          ref={(input) => this.password = input}
          />

        {!!this.state.passwordError && (
          <Text style={{fontSize:8, color: 'red'}}>{this.state.passwordError}</Text>
        )}
        <View style={{flexDirection:'row', justifyContent:'flex-start',width:'70%'}}>
        <RadioForm
          radio_props={radio_props}
          animation={true}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#0089BF'}
          initial={0}
          labelStyle={{marginRight:10}}
          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        <TextInput style={styles.inputBox}
        onSubmitEditing={()=> this.password.focus()}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={this.state.ppnumber}
        onFocus={() => this.setState({


        })}
        placeholderTextColor = "#0089BF"
        selectionColor="#fff"
        keyboardType="numeric"/>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>
        <View style={styles.loginLink}>
        <Text style={styles.text}> Already have an account ?</Text><TouchableOpacity onPress={this.login}><Text style={styles.text}> Log in </Text>
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
  backgroundColor:'transparent',
  borderRadius: 25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#0089BF',
  borderBottomWidth:1,
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
 }
});
