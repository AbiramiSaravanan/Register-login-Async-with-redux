import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
AsyncStorage,
} from 'react-native';
import { Carousel } from '@ant-design/react-native';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Container, Item, Input, Icon, Header,Button,Content,Thumbnail,List,ListItem,Left, Right, Body,Separator,Tab, Tabs,Card,CardItem, Title} from 'native-base';
import CartScreen from './CartScreen';

export class Individual extends Component {

  constructor(props){
    super(props)
    this.state={}
  }
  state={
    title:"",
    price:""
  }
 
  alertmsg=()=>{
    //function to make two option alert

    AsyncStorage.getItem('sa_cart').then((out1)=>{
      console.log(out1)
      let newCart=[]
      if(out1==null){ //first time
       
          newCart.push({title:this.state.title, price:this.state.price})
        
          console.log(newCart)
          AsyncStorage.setItem('sa_cart',JSON.stringify(newCart))
      }
      else{
            
      }
    })


    // Alert.alert(
    //   //title
    //   'Hello',
    //   //body
    //   'Product added to the cart successfully',
    //   [
    //     {text: 'ok', onPress: () => console.log('Yes Pressed')},
    //     {text: 'cancel', onPress: () => console.log('No Pressed'), style: 'cancel'},
    //   ],
    //   { cancelable: false }
    //   //clicking out side of alert will not cancel
    // );
  }


  componentWillMount(){
    this.setState({title:"Salamon Shirt", price:"$500",offer:"43%"})
  }

  render() {
    return (
      <ScrollView>
      <View>
          {/* <View style={{alignContent:'flex-end'}}>
          <TouchableHighlight onPress={()=>{}}>
          <Icon 
  name='heart'/>
   </TouchableHighlight>
  </View>  */}
        <View>
         
        <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >

<View
              style={[styles.containerHorizontal]}
            >
             <Image source={{uri: 'https://i.pinimg.com/236x/bb/9f/78/bb9f78e70cf54834e5e14f26cde6756e.jpg'}} style={{height: 350, width: 240,marginLeft:55}}/>
            </View>
            <View
              style={[styles.containerHorizontal]}
            >
               <Image source={{uri: 'https://i.pinimg.com/236x/bb/9f/78/bb9f78e70cf54834e5e14f26cde6756e.jpg'}} style={{height: 350, width: 240,marginLeft:55}}/>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                
              ]}
            >
               <Image source={{uri: 'https://i.pinimg.com/236x/bb/9f/78/bb9f78e70cf54834e5e14f26cde6756e.jpg'}} style={{height: 350, width: 240,marginLeft:55}}/>
            </View>
            <View
              style={[styles.containerHorizontal]}
            >
              <Image source={{uri: 'https://i.pinimg.com/236x/bb/9f/78/bb9f78e70cf54834e5e14f26cde6756e.jpg'}} style={{height: 350, width: 240,marginLeft:55}}/>
            </View>
            <View
              style={[
                styles.containerHorizontal,
               
              ]}
            >
              <Image source={{uri: 'https://i.pinimg.com/236x/bb/9f/78/bb9f78e70cf54834e5e14f26cde6756e.jpg'}} style={{height: 350, width: 240,marginLeft:55}}/>
            </View>
          </Carousel>
         
        </View>
        
         
 
        
      <View>
         <Card style={{width:355,height:180}} >
            <View style={{padding:10}}>
            <Text style={{fontSize:20}}>{this.state.title}{"\n"}</Text>
            <CardItem style={styles.rate}>
            <Text style={{fontSize:22,color:'black'}}>{this.state.price}</Text>  
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize:17,color:'green',marginLeft:10}}>$700</Text>
            <Text style={{fontSize:17,color:'black',marginLeft:15}}>{this.state.offer}</Text>
            </CardItem>
            <Text style={{fontSize:15,color:'red'}}>Hurry up! only few left</Text>
            <Text style={{fontSize:15,color:'black'}}>FREE DELIVERY in two days</Text>
            <Text>{"\n"}</Text>
            <View style={styles.sharesimilar}>
            <Button style={{backgroundColor:'#4B87C8',width:150,paddingLeft:40, textAlign:'center',}}>
            <View style={styles.iconcontent}>
            <Icon
            name='share' />
            <Text style={{fontSize:20}}>Share</Text>
            </View>
            </Button>
           <Button style={{backgroundColor:'skyblue',width:150,paddingLeft:50,textAlign:'center',}}>
           <View style={styles.iconcontent}>
            <Icon
            name='home' 
            />
           <Text style={{fontSize:20}}>Similar</Text>
          </View>
        </Button>
            </View>
            
            </View>
            </Card>
            </View>

            <View>
          <Card style={{width:355,height:180}} >
            <View style={{flex:1,flexDirection:'column',padding:10}}>
            <View style={{flex:1,flexDirection:'row'}}>
            <View style={styles.offer}>
           <Text>Special Price: get 15% offer(price inclusive of discount) </Text>
           </View>
           <Button rounded style={{width:35,height:35,backgroundColor:'green',paddingLeft:10}}><Text style={{color:'white'}}>TC</Text></Button>
           </View>
           <View style={{flex:1,flexDirection:'row'}}>
           <View style={styles.offer}>
           <Text>Special Price: get extra 10% offer(price inclusive of discount) </Text></View>
           <Button rounded style={{width:35,height:35,backgroundColor:'green',paddingLeft:10}}><Text style={{color:'white'}}>TC</Text></Button>
           </View>
           <View style={{flex:1,flexDirection:'row'}}>
           <View style={styles.offer}>
           <Text>Bank offer: get 15% offer with Axis Bank Buzz Credit card </Text></View>
           <Button rounded style={{width:35,height:35,backgroundColor:'green', paddingLeft:10}}><Text style={{color:'white'}}>TC</Text></Button>
           </View>
           </View>
           </Card>
            </View>
            
            <View>

            </View>

            <View>
             <Card style={{height:50,padding:10,width:355}}>
               <View style={styles.sizebutton}>
               <TouchableOpacity style={styles.size}>
    <Text style={styles.sizebuttoncontent}>S</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.size}>
    <Text style={styles.sizebuttoncontent}>M</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.size}>
    <Text style={styles.sizebuttoncontent}>L</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.size}>
    <Text style={styles.sizebuttoncontent}>XL</Text>
</TouchableOpacity>
               </View>
             </Card>
           </View>
           
          
            <View >
<Card style={{width:355,height:180}} >

<Text style={{fontWeight:'bold',paddingLeft:10}}>Deliver To:{"\n"}</Text>
<View style={{flex:1,flexDirection:'row',paddingLeft:10}}>
<Text style={{display:'flex',
    flexDirection: 'column',
    minWidth:wp('8%'),
    maxWidth:wp('45%'),
    minHeight:hp('8%'),
    maxHeight:hp('20%'),
    textAlign: 'justify',}}>Abc,manaparai,Trichy,123456</Text>
<View style={{paddingLeft:55}}>
      <Button style={{backgroundColor:'#EAEDF1',borderRightColor:'black',width:100,padding:25}}><Text style={styles.change}>Change</Text></Button>
      </View>  
      </View>
      <View style={styles.cartbuy}>
      <Button style={{padding:23,width:120,backgroundColor:'#F1EEDC',borderColor:'grey'}}  onPress={this.alertmsg} >
          <Text style={{color:'black',textAlign:'center'}}  >Add to Cart</Text>
          </Button>
        <Button style={{padding:23,width:120,backgroundColor:'#F1EEDC',borderColor:'grey'}}>
          <Text style={{color:'black',textAlign:'center'}}  >Buy Now</Text>
        </Button>
      </View>
      <Button style={{padding:23,width:120,backgroundColor:'#F1EEDC',borderColor:'grey'}} onPress={() => this.props.navigation.navigate('cart')}>
          <Text style={{color:'black',textAlign:'center'}}  >show cart</Text>
        </Button>
    
</Card>
</View>

          
           </View>
           </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
 
  cardrow:{
    width:280,
    height:400,
    
  
  },
  cartbuy:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  description:{
    textAlign:'center',
  },
  des:{
    display:'flex',
    flexDirection: 'column',
    minHeight:hp('4%'),
    maxHeight:hp('8%'),
    minWidth:wp('30%'),
    maxWidth:wp('70%'),
    textAlign: 'justify',
    fontWeight:'bold',
    paddingLeft:20,
  },
  size:{
   
  height:30,
  width:40,
  backgroundColor:'grey',
  

  
  },

  sizebutton:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

sizebuttoncontent:{
textAlign:'center',
fontWeight:'bold',
fontSize:15,
color:'white',
paddingTop:5,
},

change:{
  textAlign:'center',
},

  wrapper: {
    backgroundColor: '#fff',
    
    
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 450,
  
    
  },

  
  text: {
    color: '#fff',
    fontSize: 36,
  },

  offer:{
    display:'flex',
    flexDirection: 'column',
    minWidth:hp('8%'),
    maxWidth:hp('45%'),
    textAlign: 'justify',
  },

  rate:{
    flex: 1,
    flexDirection: 'row',
    
  
  },

  sharesimilar:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },

  iconcontent:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingRight:30,
  },

 
}); 


const Rootstack = createStackNavigator({
  individualproduct:Individual,
  
  cart:CartScreen,
},
{
  initialRouteName: 'individualproduct',
  
}

);


const AppContainer = createAppContainer(Rootstack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}