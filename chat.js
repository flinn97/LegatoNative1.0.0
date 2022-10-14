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
import Send from './send';
export default class Chat extends Component{
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
  let posts = state.componentList.getList("post", currentstudent.getJson()._id);
  let mainGoals = state.componentList.getList("mainGoal", currentstudent.getJson()._id);

  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white",//isDarkMode ? Colors.darker : Colors.lighter,
    height:'100%',
    width:'100%',
    display:'flex',
    alignItems:"center",
    marginTop:220,
    
    
  };
  return (
    <View  style={backgroundStyle}>
    
   <PostList app={app} />
   <Send app={app} />
 </View>
  );
}
  
};

