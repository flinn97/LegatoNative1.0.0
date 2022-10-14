import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import GoalsList from './goalList';
import PostList from './postList';
import PracticeChecks from './practiceChecks';
import PracticeList from './practiceList';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import CircularProgress from 'react-native-circular-progress-indicator';
import ProgressCircle from './progressCircle';
export default class Send extends Component{
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
 
  return (
    <View  style={{position:'absolute', bottom:150, flexDirection:'row', justifyContent:'center'}}>
      <TextInput
        style={{width:200, height:30, borderWidth:1}}
        // onChangeText={onChangeText}
        // value={text}
      />
    <Text style={{marginTop:5}}>Send</Text>
   
 </View>
  );
}
  
};

