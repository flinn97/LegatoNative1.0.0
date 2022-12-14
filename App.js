import React, {Component} from 'react';
import Menu from './menu';

import ComponentListInterface from './npm/componentListInterface';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import authService from './services/authService';
import Dispatch from './dispatch';
class App extends Component{
  constructor(props){
    super(props);
    this.dispatch=this.dispatch.bind(this);
    this.menuSlide= this.menuSlide.bind(this);
        this.state={
      componentListInterface:new ComponentListInterface(this.dispatch),
      componentList: undefined,
      positionSideBar:-300,
      color:"white",
      currentuser:undefined,
      switchCase: 'dash',
      fog: false,
      bottom: -700,
          check:false

    }
  }

  async menuSlide(){
    if(this.state.positionSideBar===-300){
      for(let i=-300; i<=0; i+=25){
        const delay = ms => new Promise(res => setTimeout(res, ms));
                await delay(1);
        this.setState({
          positionSideBar:i,
          fog:true,          
        })
      }
    }
    else{
      for(let i=0; i>=-300; i-=25){
        const delay = ms => new Promise(res => setTimeout(res, ms));
                await delay(1);
        this.setState({
          positionSideBar:i,
          fog:false
        })
      }
    }
  }
  dispatch(obj){
    this.setState({...obj});

  }
  async componentDidMount(){
    let componentList= await this.state.componentListInterface.createComponentList();
    this.setState({
      componentList:componentList
    })

  }
render(){
  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: this.state.color,//isDarkMode ? Colors.darker : Colors.lighter,
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    position:'relative'
  };
  return (
    <View style={backgroundStyle}>
      
     
      {this.state.currentuser===undefined?(
      <TouchableOpacity  onPress={async ()=>{
        let user = await authService.login("test@legato.com", "dragon", this.state.componentList, true, false);
        if(user){
          await authService.getAllTheDataForTheUser("test@legato.com", this.state.componentList, '1665687487874.1384', 'legato@gmail.com', this.dispatch);
          
        }
        
      }}  style={{ width:80, height:30, borderRadius:4,  justifyContent:"center", alignItems:"center", backgroundColor:"#696eb5"}}><Text style={{color:"black"}}>touchme</Text></TouchableOpacity>
      ):(<Dispatch app={{state:this.state, dispatch:this.dispatch}} menuSlide={this.menuSlide}/>)}
 </View>
  );
}
  
};

export default App;
