import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Animated, AppRegistry } from 'react-native';

const { width } = Dimensions.get('window');

const photos = [
  require('./../../../src/icon/Gambar2.png'),
  require('./../../../src/icon/Gambar3.png'),
  require('./../../../src/icon/Gambar4.png'),
  require('./../../../src/icon/Gambar2.png'),
];

const SCROLLVIEW_REF = 'scrollView'

export default class ScrollViewHome extends Component {

  state={height:0, autoPlay: false}
  
  constructor(props){
    super(props)

  }

  componentDidMount(){
      if(this.state.autoPlay) this._startAutoPlay() 
  }

  scrollX = new Animated.Value(0) 

  render() {

    let position = Animated.divide(this.scrollX, width);
    const containerHeight = 200;
    const childHeight =100;
    const margin = (containerHeight - childHeight ) / 2

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:400 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView
           contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
            horizontal={true}
            pagingEnabled={true} 
            showsHorizontalScrollIndicator={false}
            ref ={SCROLLVIEW_REF}
            onScroll={Animated.event( 
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] 
            )} 
            
            >
            {photos.map((source, i) => { 
              return ( 
                <Image
                  key={i} 
                  style={{ width: 350,borderRadius:10, marginLeft:28, marginRight:13}}
                  source={source}
                />
              );
            })}
          </ScrollView>
           <View
              style={{ flexDirection: 'row' }} 
              >
              {photos.map((_, i) => { 
                let opacity = position.interpolate({
                  inputRange: [i - 1, i, i + 1], 
                  outputRange: [0.3, 1, 0.3], 
                  extrapolate: 'clamp' 
                });
                return (
                  <Animated.View 
                    key={i} 
                    style={{ opacity, height: 5, width: 5, backgroundColor: '#595959', margin: 5, borderRadius: 5 }}
                  />
                );
              })}
          </View>
      </View>
      
    </View>
    );
  }
  _onScroll(event){
    let{y} = event.nativeEvent.contentOffset, offset, position = Math.floor(y/this.state.height)
    if (y == this._preScrollY) return;
    this._preScrollY = y
    offset = y/this.state.height - position

    if(offset === 0){
      this._cunrentIndex = position
      this._timerId = setInterval(this._goToNextSlide,5000)
    }
  }

  _startAutoPlay(){
    this._timerId = setInterval(this._goToNextSlide,5000)
  }
  
  _goToNextSlide(){
    let nextIndex = this.currentIndex +1 % this._childrenCount;

    this.refs[SCROLLVIEW_REF].scrollTo({y:this.state.height+nextIndex})
  }
}



AppRegistry.registerComponent('ScrollViewHome', () => ScrollViewHome );
