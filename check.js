import React, {Component} from 'react';
import badge from './assets/badges/Artboard_1.svg';
import starpoints from './assets/starpoints.png'
import downArrow from './assets/downArrow.png'
import moment from 'moment';
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
import Bagdes from './badges';
export default class Check extends Component{
  constructor(props){
    super(props);

        this.state={

    }
  }
  time(){
    let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;

    let obj={
      Monday:currentstudent.getJson().time.mon,
      Tuesday:currentstudent.getJson().time.tues,
      Wednesday:currentstudent.getJson().time.wed,
      Thursday:currentstudent.getJson().time.thur,
      Friday:currentstudent.getJson().time.fri,
      Saturday:currentstudent.getJson().time.sat,
      Sunday:currentstudent.getJson().time.sun
    }
    return(obj[moment().format('dddd')])
  }


render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;
  let homeworks = state.componentList.getList('homework', currentstudent.getJson()._id)
  const backgroundStyle = {
    backgroundColor: "white",//isDarkMode ? Colors.darker : Colors.lighter,
    height:700,
    marginBottom:-10,
    width:'100%',
    borderRadius:25,
    display:'flex',
    alignItems:"center",
    
    zindex:500
    
  };
  return (
    <View  style={backgroundStyle}>
      
      <TouchableOpacity onPress={()=>{app.dispatch({fog:false, bottom:-700, check:false})}}style={{  zIndex:600, position:"absolute", right:10, top:10 }}><Image source={downArrow}/></TouchableOpacity>
    <Text style={{marginTop:30, fontSize:27}}>Practice</Text>
    <Text style={{fontSize:30}}>{moment().format("MMM Do")}</Text>
    <View style={{marginTop:30,  borderWidth:1, width:300, height:350, padding:10 }}>
      {homeworks.map((homework, index)=>
      <View key={index} style={{marginBottom:10}}>
        
        <Text style={{fontSize:23}}>{homework.getJson().title}</Text>
        <Text style={{color:'blue', marginBottom:5}}>{homework.getJson().hwlink}</Text>
        {homework.getJson().description!==""&&(<Text style={{color:'grey', fontSize:17}}>Notes: {homework.getJson().description}</Text>)}
        

      </View>
  )}
    </View>
    <View style={{position:"absolute", bottom:80, display:'flex', alignItems:'center'}}>
      <Text>Log Minutes</Text>
      <View style={{ width:150, height:43, borderRadius:25, zIndex:600,  justifyContent:"center", alignItems:"center", backgroundColor:"grey",}}><Text>
        {this.time()}
        </Text></View>
      <TouchableOpacity style={{ width:150, height:43, borderRadius:25, zIndex:600,  justifyContent:"center", alignItems:"center", backgroundColor:"#696eb5",}}><Text style={{color:"black"}}>Mark Complete</Text></TouchableOpacity>


    </View>
    
 </View>
  );
}
  
};

