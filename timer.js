import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import GoalsList from './goalList';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import CircularProgress from 'react-native-circular-progress-indicator';
import ProgressCircle from './progressCircle';
export default class Timer extends Component{
  constructor(props){
    super(props);
        this.state={
          percent: "",
          

    }
  }




render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;

  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "green",//isDarkMode ? Colors.darker : Colors.lighter,
    height:300,
    width:'100%',
    display:'flex',
    alignItems:"center",
    
    
  };
  return (
    <View  style={backgroundStyle}>
    <Text>Timer</Text>
    <Text>minute</Text>
    <TouchableOpacity  onPress={this.props.menuSlide}  style={{ width:150, height:50, borderRadius:25,   justifyContent:"center", alignItems:"center", backgroundColor:"#696eb5",}}><Text style={{color:"black"}}>Start</Text></TouchableOpacity>
    <TouchableOpacity  onPress={this.props.menuSlide}  style={{ width:150, height:50, borderRadius:25,   justifyContent:"center", alignItems:"center", backgroundColor:"#696eb5",}}><Text style={{color:"black"}}>Stop</Text></TouchableOpacity>
    <TouchableOpacity  onPress={this.props.menuSlide}  style={{ width:150, height:50, borderRadius:25,   justifyContent:"center", alignItems:"center", backgroundColor:"#696eb5",}}><Text style={{color:"black"}}>Reset</Text></TouchableOpacity>


 </View>
  );
}
  
};

