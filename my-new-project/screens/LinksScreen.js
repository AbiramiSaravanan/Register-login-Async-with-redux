import React from 'react';
import { ScrollView, StyleSheet,Image,Alert,Keyboard,TextInput,AsyncStorage} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Content,Text,Icon,Right,Card,CardItem,Form,Item,Button,Toast,Footer, Container } from 'native-base';
import { Tile } from 'react-native-elements';

export default class LinksScreen extends React.Component {
constructor(props){
  super(props)
  this.state={
uname:'',pwd:''
  };

}


  static navigationOptions = {
    title: 'Hitcher',
  };

 

  saveddata=()=>{
const{uname,pwd}=this.state;

let myArray={
  uname:uname,
  pwd:pwd
}

AsyncStorage.setItem('myArray',JSON.stringify(myArray));


Keyboard.dismiss();


    Alert.
      alert(uname+ ' '+pwd),
      [
        {text: 'ok', onPress: () => console.log('Yes Pressed')},
        {text: 'cancel', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    
  }

  showData=async()=>{
    let myArray=await AsyncStorage.getItem('myArray');
    let d=JSON.parse(myArray);
    alert(d.uname + ' ' + d.pwd);
  }

  render() {
   

    return (
      <ScrollView>
      <Content>
       <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-linkedin" />
              <Text>LinkedIn</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-facebook" />
              <Text>Facebook</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
              </CardItem>
              <CardItem>
              <Icon active name="logo-twitter" />
              <Text>Twitter</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             
             </CardItem>
             <CardItem>
              <Icon active name="logo-reddit" />
              <Text>Reddit</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             
             </CardItem>
           </Card>
           <Card>
           <Text style={{textAlign:'center'}}>else sign in</Text>
           </Card>
          
        
       <Card>
       <TextInput
        style={{color:'white',height: 50, borderColor: 'gray', borderWidth: 2,borderRightWidth:1,width:250,marginLeft:55,marginTop:10,textAlign:'center'}}
       placeholder={'Username'}
       placeholderTextColor={'black'}
       onChangeText={(uname) => this.setState({uname})}
     />
      <TextInput
        style={{color:'white',height: 50, borderColor: 'gray', borderWidth: 2,borderRightWidth:1,width:250,marginLeft:55,marginTop:65,textAlign:'center'}}
       placeholder={'Password'}
       placeholderTextColor={'black'}
       onChangeText={(pwd) => this.setState({pwd})}
       
      />
            <Button onPress={this.saveddata}>
            <Text style={{textAlign:'center'}}   >save data</Text>
          </Button>
          <Button onPress={this.showData}>
            <Text style={{textAlign:'center'}}>display 
            
            
            data</Text>
          </Button>
         
          </Card>


      
      </Content>
      </ScrollView>
    );
  }
}


