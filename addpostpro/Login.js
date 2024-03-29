import React from 'react';
import { View,StyleSheet} from "react-native";
import { Input,Button,Card,Text } from 'react-native-elements';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
//import Registration from './Registration'
import {loginUser} from './actions/authActions';
import {connect} from 'react-redux';
 class Login extends React.Component {
   constructor(){
     super();
     this.state = {
       email : "",
       password : "",
       errors : {}
     };
    //  this._bootstrapAsync();
   }
  

  //  _bootstrapAsync = async () => {
  //   const userToken = await AsyncStorage.getItem('jwtToken');
  //   console.log(userToken);
  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   this.props.navigation.navigate(userToken ? 'Main' : 'Login');
  //  }


  handlepress = () => {
    console.log("I entered login function");
    const userLogin = {
      email : this.state.email,
      password : this.state.password
    }
     this.props.loginUser(userLogin);
    

    // setTimeout(() =>this.props.navigation.navigate('Main'), 2000);
  }
  


  
    render() {
       const { navigate } = this.props.navigation; //navigate = this.props.navigation.navigate
       console.log("this.props.loginUser-----------------------")
       console.log(this.props.loginUser)
      return (
        <View  style={{height: hp('130%'),backgroundColor:'#f2efef'}}>
          <View style={{paddingTop:hp('25%')}}>
            <Card>
             <Text  style={{fontWeight: 'bold',fontSize:25,textAlign:'center',paddingTop:hp('3%')}}>
               Bharati Stores
             </Text>
            <View style={{flexDirection: 'column',paddingTop:hp('5%')}}>
             <Input onChangeText={email => this.setState({ email })}
              placeholder='Email'/>
             <View style={{paddingTop:hp('3%')}}>
             <Input secureTextEntry={true} onChangeText={password => this.setState({ password })}
              placeholder='Password'/>
              </View>
              </View>
             <View style={{flexDirection: 'column',paddingTop:hp('5%')}}>
             <Button  style={styles.Button} onPress={() => this.handlepress()}
              title="Login"
              type="solid"/>
             <View style={{paddingTop:hp('2%')}}>
              <Button
               title="ForgetPassword.?"
               type="clear"/>
              </View> 
              <View style={{paddingTop:hp('1.5%'),flexDirection:'column',display:'flex'}}>
              <Text style={{textAlign:'center',fontWeight:'bold'}}>
                Don't have an Account..?
              </Text>
             <Button 
              title="Register"
              type="clear" onPress={() => this.props.navigation.navigate('registration')}/>
              </View>
             </View>
             </Card>
             </View>
             </View>
        
      
        
      );
    }
}
  const styles = StyleSheet.create({
  
       Button: {
       height:10,
        width:20,
      padding:5,
  marginRight:20
 }
});

const mapStateToProps = (state) => ({
  auth : state.auth,
});
 export default connect(mapStateToProps, {loginUser})(Login);