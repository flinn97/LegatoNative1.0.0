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

export default class PracticeChecks extends Component{
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
    <View style={{display:'flex', flexDirection:'row'}}>
      <View > 
      <Text>Mon</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.mon} check={this.check} /> 
    </Text>
    <Text>{currentstudent.getJson().time.mon}</Text>
    </View>
    <View > 
      <Text>Tues</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.tues} check={this.check} /> 
    </Text>
    <Text>{currentstudent.getJson().time.tues}</Text>
    </View>
    <View > 
      <Text>Wed</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.wed} check={this.check} /> 
    </Text>
    <Text>{currentstudent.getJson().time.wed}</Text>
    </View>
    <View > 
      <Text>Thur</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.thur} check={this.check} />
    </Text> 
    <Text>{currentstudent.getJson().time.thur}</Text>
    </View>
    <View > 
      <Text>Fri</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.fri} check={this.check} /> 
    </Text>
    <Text>{currentstudent.getJson().time.fri}</Text>
    </View>
    <View > 
      <Text>Sat</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.sat} check={this.check} /> 
    </Text>
    <Text>{currentstudent.getJson().time.sat}</Text>
    </View>
    <View > 
      <Text>Sun</Text>
      <Text>
    <Checkbox checked={currentstudent.getJson().checked.sun} check={this.check} /> 
    </Text>
    <Text>{currentstudent.getJson().time.sun}</Text>
    </View>

    

 </View>

  );
}
  
};

