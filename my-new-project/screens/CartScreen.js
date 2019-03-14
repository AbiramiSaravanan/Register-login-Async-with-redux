import React, { Component } from 'react'
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
export default class CartScreen extends Component {

    state={
        items:[]
    }

componentWillMount(){
    AsyncStorage.getItem('sa_cart').then((out)=>{
        let res = JSON.parse(out)
        this.setState({items:res})
    })
}

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
            {
                this.state.items.length>0?
                this.state.items.map((item, index)=>{
                    return(
                        <TouchableOpacity key={index} style={{ height: 50, marginTop: 25,backgroundColor:'white',width:200, marginLeft:80}}  onPress={() => this.props.navigation.navigate('home')}>
                        <Text >{item.title}</Text>
                        <Text >{item.price}</Text>                        
                    </TouchableOpacity>
                    )
                }):<View/>
            }
        </View>
    )
  }
}


