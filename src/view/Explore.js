import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    TouchableHighlight,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';



export default class Explore extends Component {

    render() {
        return (
            <>
         <View style={{flex:1}}>

                     <View style={{ width: '100%', flexDirection: 'row', height: 55 }}>
                        <View style={styles.searchBar}>
                            <View style={styles.search}>
                                <TextInput placeholder="Search Event Here" placeholderTextColor="#8D8D8D" style={styles.searchInput} />
                                <Image source={require('./../../src/icon/search.png')} style={{ width: 25, height: 25, position: 'absolute', top: 8, left: 12 }} />
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity>
                                <Image source={require('./../../src/icon/Lonceng.png')} style={{ width: 30, height: 30, top: 10 }} />
                            </TouchableOpacity>
                            <Image source={require('./../../src/icon/redNotif.png')} style={{ width: 15, height: 15, bottom: 20, left: 15 }} />
                        </View>
                    </View>

            <View style={styles.container}>

            <View style={styles.mainMenu}>
                        <View style={{height:55, flexDirection:"row", justifyContent:"space-between", alignItems:"flex-start"}}>
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Education.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Entertainment.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Popular.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Map-01.png')} /> 
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Sports.png')} />
                        </View>

                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"flex-end"}}>
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Sports.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/BestRating-01.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Sports.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/BestRating-01.png')} />
                            <Image style={styles.imageButton}  source={require('./../../src/assets/icons/more-01.png')} />
                        </View>    
            </View>



                <ScrollView>
                    <View>
                        <Image source={require('./../../src/icon/Gambar1.png')} />
                    </View>
                    <View>
                        <Image source={require('./../../src/icon/Gambar2.png')} />
                    </View>
                    <View>
                        <Image source={require('./../../src/icon/Gambar3.png')} />
                    </View>
                    <View>
                        <Image source={require('./../../src/icon/Gambar4.png')} />
                    </View>



                </ScrollView>

            </View>

            <View style={styles.buttonBar}>
                <View style={styles.buttonNavbar}>
                    <TouchableOpacity title="Go Home" onPress={() => this.props.navigation.navigate('Home')} >
                        <Image style={styles.imageButton}  source={require('./../../src/assets/icons/Home.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonNavbar}>
                    <TouchableOpacity  title="Go Discovery" onPress={() => this.props.navigation.navigate('Discovery')} >
                        
                        <Image style={styles.imageButton} source={require('./../../src/assets/icons/DiscoverOn.png')} />
                        
                    </TouchableOpacity>
                </View>
                    
                <View style={styles.buttonNavbar}>
                    <TouchableOpacity title="Go Chat" onPress={() => this.props.navigation.navigate('Chat')} >
                        
                        <Image style={styles.imageButton} source={require('./../../src/assets/icons/Chat.png')} />
                        
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonNavbar}>
                    <TouchableOpacity title="Go Tickets" onPress={() => this.props.navigation.navigate('Tickets')} >
                       
                       <Image style={styles.imageButton} source={require('./../../src/assets/icons/Ticket.png')} />

                    </TouchableOpacity>
                </View>

                <View style={styles.buttonNavbar}>
                    <TouchableOpacity title="Go Profile" onPress={() => this.props.navigation.navigate('Profile')} >
                        
                        <Image style={styles.imageButton} source={require('./../../src/assets/icons/Account.png')} />
                        
                    </TouchableOpacity>
                </View>    
            </View>
            
        </View>   
        </>
        
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerBar:{

    },
    mainMenu: {
        height: 100,
        margin:10,
        justifyContent:"center"
    },
    searchBar: {
        marginHorizontal: 17,
        flexDirection: 'row',
        paddingTop: 5,
        width: 320

    },
    search: {
        flex: 1,
        position: 'relative',
    },
    searchInput: {
        borderWidth: 2,
        borderColor: '#8D8D8D',
        borderRadius: 12,
        height: 40,
        fontSize: 15,
        paddingLeft: 45,
        paddingRight: 14,

    },
    imageButton: {
        width: 35,
        height: 35,
        
       
    },
    buttonBar: {
        height: 50,
        flexDirection: 'row',
        borderColor: '#C2C2C2',
        borderWidth: 1,
        
    },
    buttonNavbar: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        
    },
    textStyle: {
        fontSize: 15,
        color: '#545454',
        bottom: 10
    },
});
