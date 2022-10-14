import React, {Component} from 'react';
import wolf from './assets/place1.png'
import place2 from './assets/place2.png'
import place3 from './assets/place3.png'
import place4 from './assets/place4.png'
import place5 from './assets/place5.png'
import place6 from './assets/place6.png'
import place7 from './assets/place7.png'


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

export default class PostList extends Component{
  constructor(props){
    super(props);
        this.state={
          check: false,

    }
  }

  pic(picURL){
    let pic;
    if(picURL){
    if(picURL.includes('place1')){
    
        pic=wolf
      
    }
    if(picURL.includes('place2')){
        pic=place2
    }
    if(picURL.includes('place3')){
        pic-=place3
    }
    if(picURL.includes('place4')){
        pic=place4
    }
    if(picURL.includes('place5')){
        pic=place5
    }
    if(picURL.includes('place6')){
        pic:place6
    }
    if(picURL.includes('place7')){
        pic=place7
    }
  }
  else{
    pic=wolf
  }
  return pic;
  }



render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;
  let posts = state.componentList.getList("post", currentstudent.getJson()._id);
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{width:"100%", padding:10}}>
      {posts.map((post, index)=>
      <View style={{display:'flex', flexDirection:'column', width:'100%'}} key={index}>
        {post.getJson().student?(
          <View style={{alignSelf:"flex-end", display:'flex', flexDirection:'row'}}>
            <View style={{backgroundColor:"blue"}}>
              <Text>{post.getJson().content}</Text>
            </View>
            <Image source={this.pic(post.getJson().picURL)} style={{width:50, height:50, borderRadius:100}}/>          </View>
        ):(<View style={{alignSelf:"flex-start", display:'flex', flexDirection:'row'}}>
           <Image source={this.pic(post.getJson().picURL)} style={{width:50, height:50, borderRadius:100}}/>
        <View style={{backgroundColor:"grey"}}>
          <Text>{post.getJson().content}</Text>
        </View>
       
      </View>)}


      </View>
  )}
    </View>
  );
}
  
};

