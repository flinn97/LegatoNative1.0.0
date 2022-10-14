
import React, { Component } from 'react';
import logo from './assets/logo.png'
import {
  SafeAreaView,
  ScrollView,Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Profile from './profileTag';

class Menu extends Component{
  constructor(props) {
    //create state
    super(props);
    this.state = {
        
    };
}
render(){
  app=this.props.app;
  state=app.state;
  dispatch=app.dispatch;
  return(
    
    <View style={{ height:'100%', backgroundColor:'white', width:300, zIndex:700, top:60,left:state.positionSideBar, position:'absolute', paddingTop:50, display:'flex', alignItems:'center' }}>

      <Image source={logo}/>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20, backgroundColor:state.switchCase==="dash"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"dash"})}}  style={{  }}><Text style={{color:"black", fontSize:20,}}>Dashboard</Text></TouchableOpacity></View>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="goals"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"goals"})}}  style={{  }}><Text style={{color:"black", fontSize:20,}}>Goals</Text></TouchableOpacity></View>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="practice"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"practice"})}}  style={{ }}><Text style={{color:"black", fontSize:20,}}>Practice</Text></TouchableOpacity></View>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="chat"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"chat"})}}  style={{   }}><Text style={{color:"black", fontSize:20,}}>Messaging</Text></TouchableOpacity></View>
      <View style={{wdisplay:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="tools"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-225, switchCase:"tools"})}}  style={{   }}><Text style={{color:"black", fontSize:20,}}>Tools</Text></TouchableOpacity></View>
      <View style={{display:'flex', alignItems:'center', position:'absolute', bottom:150}}>
      <Profile app={app} />
      <Text>Switch student</Text>
      </View>
      </View>
  )
}
}
export default Menu;
