import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {  } from 'react-native-elements';
import { Title, Form,Input ,Item,Button,Icon} from 'native-base';
import { Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ToastAndroid,
ImageBackground,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
export class SettingsScreen extends React.Component {
  static navigationOptions = {
   header:null,
  };


  _twoOptionAlertHandler=()=>{
    //function to make two option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'vela seiyathey',
      [
        {text: 'ok', onPress: () => console.log('Yes Pressed')},
        {text: 'cancel', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }

  _toastWithDurationHandler=()=>{
    //function to make Toast With Duration
    ToastAndroid.show('Login agathu', ToastAndroid.SHORT);
  }
  
  render() {
    return (
<View style={styles.full}>

<Image source={{uri: 'https://www.freepnglogos.com/uploads/wonder-woman-logo-32.png'}}
       style={{width: 100, height: 100,marginLeft:130,marginTop:60}} />
         
         <TextInput
        style={{color:'white',height: 50, borderColor: 'gray', borderWidth: 2,borderRightWidth:1,width:250,marginLeft:55,marginTop:10,textAlign:'center'}}
       placeholder={'Username'}
       placeholderTextColor={'white'}
      />
      <TextInput
        style={{color:'white',height: 50, borderColor: 'gray', borderWidth: 2,borderRightWidth:1,width:250,marginLeft:55,marginTop:65,textAlign:'center'}}
       placeholder={'Password'}
       placeholderTextColor={'white'}
       placeholderStyle={{}}
       
      />
      <Text>{"\n"}</Text>
      <Text style={styles.forget}  onPress={() => Linking.openURL('http://google.com')}>Forget Password?</Text>
     <TouchableOpacity style={{ height: 50, marginTop: 25,backgroundColor:'white',width:200, marginLeft:80}}  onPress={() => this.props.navigation.navigate('home')}>
    <Text style={styles.logbutton}>LOG IN </Text>
</TouchableOpacity>
<Text>{"\n"}</Text>
<Text style={styles.else}>--------- connect with ---------</Text>

<Text>{"\n"}</Text>
<View style={styles.twobuttoncontainer}>
<Button style={styles.fbbutton} title='Generate Toast With Duration' 
           onPress={this._toastWithDurationHandler} >
           <View style={styles.icontext}>
           <Icon
  name='home' />
<Text style={styles.fb}>
 FACEBOOK</Text>
 
 </View>
</Button>
<Button style={styles.gbutton} onPress={this._twoOptionAlertHandler}>
<View style={styles.icontext}>
           <Icon
  name='home' />
<Text style={styles.g}>GOOGLE</Text>
</View>
</Button>
</View>
 </View>
 


      );
    }
  }

  const styles = StyleSheet.create({
    
    full:{
      flex:1,
      backgroundColor:'#2c3e50',
      
    },
    logbutton:{
      textAlign:'center',
      fontSize:23,
      fontWeight:'bold',
      paddingTop:12,
    },
    forget:{
      textAlign:'center',
      color:'white',
    },
    else:{
      textAlign:'center',
      color:'white',
    },
    fbbutton:{
      backgroundColor:'#4867AA',
      width:150,
     paddingLeft:40,
      textAlign:'center',
    },
    gbutton:{
      
      backgroundColor:'#DD5144',
      width:150,
      paddingLeft:50,
      textAlign:'center',
    },
    fb:{
textAlign:'center',
color:'white',
paddingTop:5,
    },
    g:{
      textAlign:'center',
      color:'white',
      paddingTop:5,
    },
twobuttoncontainer:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly'
  
},
icontext:{
  
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingRight:30,
},
    
   
  }); 

  const stemstack = createStackNavigator({
    login: SettingsScreen,
    home: HomeScreen,
  },
  {
    initialRouteName: 'login',
  }
  
  );
  
  
  const AppContainer = createAppContainer(stemstack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }