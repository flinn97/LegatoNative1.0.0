import React, {Component} from 'react';
import badge from './assets/badges/Artboard_1.svg';
import starpoints from './assets/starpoints.png'
import ProgressBar from './progressBar';
import moment from "moment";

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
export default class Dash extends Component{
  constructor(props){
    super(props);
    this.menuSlide=this.menuSlide.bind(this);
        this.state={
          bottom: -100,
          check:false
          

    }
  }

  async menuSlide(){
    let app=this.props.app;
     await app.dispatch({
        check:true
      })  

      for(let i=-650; i<=0; i+=50){
        const delay = ms => new Promise(res => setTimeout(res, ms));
                await delay(1);
                app.dispatch({
          bottom:i,
        })
      }
      this.props.app.dispatch({fog:true});
    

  }


render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;
  let sp = state.componentList.getComponent('starpoints', currentstudent.getJson()._id);
  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white",//isDarkMode ? Colors.darker : Colors.lighter,
    height:'100%',
    width:'100%',
    display:'flex',
    alignItems:"center",
    marginTop:200,
    
  };
  return (
    <View  style={backgroundStyle}>
    <StarPointPic app={app} />
    <Text>{sp.getJson().starpoints} points</Text>
    <ProgressBar app={app} amount={parseInt(sp.getJson().starpoints)/parseInt(sp.getJson().starpointGoal)*100}/>
    <Text>{currentstudent.getJson().daysPracticed} days practiced</Text>
    <Text>{currentstudent.getJson().timeTotal} time practiced</Text>

    <Text style={{alignSelf:"flex-start", marginLeft:50}}>Badge Collection</Text>
    <Bagdes app={app} />
    <View style={{position:"absolute", bottom: 275, }}>
    <Text>{moment().format("MMM Do")}</Text>
    <TouchableOpacity  onPress={this.menuSlide}  style={{ width:150, height:50, borderRadius:25, zIndex:600,  justifyContent:"center", alignItems:"center", backgroundColor:"#696eb5",}}><Text style={{color:"black"}}>Record Homework</Text></TouchableOpacity>

    </View>
    
 </View>
  );
}
  
};

