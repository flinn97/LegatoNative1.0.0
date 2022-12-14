import React, {Component} from 'react';
import Fog from './fog';
import Menu from './menu';
import Check from './check';
import Menu1 from './assets/menu-1.png';
import Menu2 from './assets/greenMenu.png';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Dash from './dash';
import Goals from './goals';
import Practice from './practice';
import Chat from './chat';
import Tools from './tools';
import ViewProfile from './viewProfile';
import ViewBadge from './viewBadge';
export default class Dispatch extends Component{
  constructor(props){
    super(props);

        this.state={
   

    }
  }


render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;
  
  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white",//isDarkMode ? Colors.darker : Colors.lighter,
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    positio:'relative'
  };
  return (
    <View  style={backgroundStyle}>
                <TouchableOpacity  onPress={this.props.menuSlide}  style={{ position:"absolute", left:25, top:70,zIndex:state.check? 0:800,  justifyContent:"center", alignItems:"center", }}><Image source={state.positionSideBar===0? Menu2:Menu1} /></TouchableOpacity>

    {state.check &&(
    <View style={{position:'absolute', bottom:state.bottom, zIndex:500, width:"95%"}}>
      <Check app={app} />
    </View>
    )}
    {state.popupSwitch==="viewBadge"&&(<ViewBadge app={app}/>)}
    {state.popupSwitch==="profile"&&(<ViewProfile app={app}/>)}
     <Menu app={app}/>
    {state.fog && (<Fog />)}
    {state.switchCase==="dash" && (<Dash app={app}/>)}
    {state.switchCase==="goals"&&(<Goals app={app}/>)}
    {state.switchCase==="practice"&&(<Practice app={app}/>)}
    {state.switchCase==="chat"&& (<Chat app={app}/>)}
    {state.switchCase==="tools"&& (<Tools app={app}/>)}
 </View>
  );
}
  
};

