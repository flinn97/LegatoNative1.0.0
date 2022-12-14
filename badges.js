import React, {Component} from 'react';
// import badge from './assets/badges/Artboard_1.svg';

import badge from './assets/badges/badge1.png';
import starpoints from './assets/starpoints.png'
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
import StarPointPic from './starPointPic';
export default class Bagdes extends Component{
  constructor(props){
    super(props);

        this.state={
   

    }
  }


render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;
  let badges = state.componentList.getList('badge', currentstudent.getJson()._id);
  // const isDarkMode = useColorScheme() === 'dark';
 
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
    
    {badges.map ((badgeObj, index)=>
    <View  key ={index}>
     <TouchableOpacity onPress={()=>{app.dispatch({popupSwitch:"viewBadge", currentBadge:badgeObj})}}><Image style={{width:80, margin:10, height:80}} source={badge} /></TouchableOpacity> 
</View>
    )}
    
 </View>
  );
}
  
};

