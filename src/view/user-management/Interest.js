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
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';


 export default class Interest extends Component{
   home(){
     Actions.home();
   }


  render (){
    return (
        <View style={styles.container}>

        <View style={{alignItems:'center'}}>
          <Text style={styles.head}>Pick Your Interest</Text>
          <Text style={styles.title}>Pick at least 5 category to continue</Text>
          </View>
          <ScrollView>
        <View style={styles.menu}>
                  <View style={styles.titleInterest}>
                        <Image style={{width:50,height:56}} source={require('./../../src/icon/Music.png')}/>
                        <Text style={styles.text}>Music</Text>
                  </View>
                  <View style={{height:80,marginBottom:10}}>
                      <View style={{flex:1,alignItems:'center'}}>
                                <View style={styles.interest}>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> POP </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Rock </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Indie </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> K-POP </Text>
                                          </TouchableOpacity>
                                </View>
                      </View>
                      <View style={{flex:1,alignItems:'center'}}>
                          <View style={styles.interest}>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> POP </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Rock </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Indie </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> K-POP </Text>
                                    </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={styles.titleInterest}>
                        <Image style={{width:55,height:55}} source={require('./../../src/icon/Sport.png')}/>
                        <Text style={styles.text}>Sport</Text>
                  </View>
                  <View style={{height:80,marginBottom:10}}>
                      <View style={{flex:1,alignItems:'center'}}>
                                <View style={styles.interest}>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> POP </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Rock </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Indie </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> K-POP </Text>
                                          </TouchableOpacity>
                                </View>
                      </View>
                      <View style={{flex:1,alignItems:'center'}}>
                          <View style={styles.interest}>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> POP </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Rock </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Indie </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> K-POP </Text>
                                    </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={styles.titleInterest}>
                        <Image style={{width:50,height:55}} source={require('./../../src/icon/Education.png')}/>
                        <Text style={styles.text}>Education</Text>
                  </View>
                  <View style={{height:80,marginBottom:10}}>
                      <View style={{flex:1,alignItems:'center'}}>
                                <View style={styles.interest}>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> POP </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Rock </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Indie </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> K-POP </Text>
                                          </TouchableOpacity>
                                </View>
                      </View>
                      <View style={{flex:1,alignItems:'center'}}>
                          <View style={styles.interest}>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> POP </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Rock </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Indie </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> K-POP </Text>
                                    </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={styles.titleInterest}>
                        <Image style={{width:56,height:55}} source={require('./../../src/icon/Art.png')}/>
                        <Text style={styles.text}>Art and Culture </Text>
                  </View>
                  <View style={{height:80}}>
                      <View style={{flex:1,alignItems:'center'}}>
                                <View style={styles.interest}>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> POP </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Rock </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> Indie </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity  style={styles.buttonSelect}>
                                            <Text style={styles.textButton}> K-POP </Text>
                                          </TouchableOpacity>
                                </View>
                      </View>
                      <View style={{flex:1,alignItems:'center'}}>
                          <View style={styles.interest}>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> POP </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Rock </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> Indie </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={styles.buttonSelect}>
                                      <Text style={styles.textButton}> K-POP </Text>
                                    </TouchableOpacity>
                          </View>
                      </View>
                  </View>
        </View>
        </ScrollView>
        <View style={styles.buttonArea}>
        <TouchableOpacity  onPress={this.home} style={styles.button}>
          <Text style={styles.textButton}> Next </Text>
        </TouchableOpacity>
        </View>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  },
  textButton: {
    color:'white',
    fontSize:16
  },
  titleInterest:{
    flexDirection:'row',
    width:250,
    height:65,
    justifyContent:'flex-start',
  },
  title:{
    color:'#0089BF',
    fontSize:16,
  },
  head:{
    color:'#0089BF',
    fontSize:20,
    fontWeight:'bold'
  },
  text:{
    color:'#0089BF',
    fontSize:20,
    paddingLeft:5
  },
  menu:{
    margin:20,
    flex:1,
    width:'100%',
    alignItems:'flex-start'
  },
  buttonSelect:{
    width: '80%',
    height:'35%',
    backgroundColor:'#DBDBDB',
    borderRadius: 40,
    marginVertical: 5,
    paddingVertical: 5,
    borderWidth:1,
    borderColor: '#DBDBDB',
    alignItems:'center',
    margin:5
  },
  button: {
    width:100,
    backgroundColor:'#0089BF',
    borderRadius: 30,
    marginVertical: 10,
    paddingVertical: 13,
    borderWidth:1,
    borderColor: '#0089BF',
    alignItems:'center'
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
 scrollView:{
   backgroundColor: 'pink',
   marginHorizontal: 20,
 },
 buttonArea:{
   alignItems:'center',
   width:'100%'
 },
 interest:{
   width:100,
   height:100,
   flexDirection:'row'
 },

  });
