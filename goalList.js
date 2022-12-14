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
import Checkbox from './checkbox.js';

export default class GoalsList extends Component{
  constructor(props){
    super(props);
    this.check=this.check.bind(this);
        this.state={
          check: false,

    }
  }

  check(c){
    this.setState({check:c})
  }


render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;
  let goals = state.componentList.getList("goal", currentstudent.getJson()._id);
  let mainGoals = state.componentList.getList("mainGoal", currentstudent.getJson()._id);
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{width:'100%', paddingLeft:70}}>
      
    {mainGoals.map((main, index)=>
    <View style={{marginTop:20}} key = {index}>
      <View style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
    <Text > 
    <Checkbox checked={main.getJson().complete} check={this.check}  labelColor="green" color="green"/> 
    
    </Text>
    <Text style={{marginBottom:5,fontSize:20, marginLeft:10}}>{main.getJson().title}</Text>  
    </View>
    {goals.map((goal, index)=>
    <View key={index}>
    {goal.getJson().mainID===main.getJson()._id &&(
      <View style={{marginLeft:35, marginTop:5, display:'flex', flexDirection:'row',  alignItems:'center'}}>
    <Text  > 
      <Checkbox checked={main.getJson().complete} check={this.check} />
      
      </Text>
      <Text style={{marginBottom:5,fontSize:20, marginLeft:10}}>{goal.getJson().title}</Text></View>
      )}
    </View>
    )}
    </View>
  )}

    
 </View>
  );
}
  
};

