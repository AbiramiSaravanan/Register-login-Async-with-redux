import React from 'react';
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
  
} from 'react-native';
import { } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import {  } from 'react-native-elements';
import { Container, Item, Input, Icon, Header,Button,Content,Thumbnail,List,ListItem,Left, Right, Body,Separator,Tab, Tabs,Card,CardItem, Title} from 'native-base';
import { WebBrowser } from 'expo';
import { Rating, AirbnbRating } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Details from './Details';
import Producttwo from './Producttwo';





  export  class HomeScreen extends React.Component {
  
  

  static navigationOptions = {

    title:null,
    
  };

  

  render() {
   
    
    return (

      <Container>
        
        <Header searchBar rounded>
       <Left>
      <Icon name='menu'/>
      </Left>
          
          <Item style={styles.searchbar}>
            <Icon name="ios-search" /> 
            <Input placeholder="Search" />
          <Icon name="cart" />
          </Item>
          
        </Header>
        <Content>
        <Tabs>
          <Tab heading="ALL">
          <Content>
            <Text>{"\n"}</Text>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'grey'}}>------ OUR POPULAR PRODUCTS ------</Text>
            <Text>{"\n"}</Text>
          <Card>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')}>
            <CardItem cardBody>
            
            
              <Image  source={{uri: 'https://i.ytimg.com/vi/ac0XpJceIXo/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>

            </Card>

            <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-626675236-index-extreme-1521650990.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </Card><Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://scstylecaster.files.wordpress.com/2016/03/street-style-two-toned-jean-jacket.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </Card>
            <Card>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.greatbuyz.com/blog/wp-content/uploads/2018/05/For-Childrens-Clothes-Online-660x400.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </Card>


          </Content>
           </Tab>


          <Tab heading="MAN">
          <View >
         <View style={styles.twocardsinglerow}>
           <Card style={styles.cardrow} >
           <TouchableHighlight onPress={() => this.props.navigation.navigate('individualproduct')}>
           <CardItem cardBody>
              <Image source={{uri: 'https://i.pinimg.com/236x/bb/9f/78/bb9f78e70cf54834e5e14f26cde6756e.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
             <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           
           </Card>
           <Card style={styles.cardrow}>
           <TouchableHighlight onPress={() => {
            // const pushAction = StackActions.push({
            //   routeName: 'individualproduct',
            //   params: {"shirt":"Salmon", "price":"500"},
            // });
             this.props.navigation.navigate('individualproduct',{params:"hi"})}
             
             }>
           <CardItem cardBody>
              <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/c2/1d/aa/c21daa62cffcf32aecc85583c829838f.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>

         </View>
         <View style={styles.twocardsinglerow}>
           <Card style={styles.cardrow} >
           <TouchableHighlight onPress={() => this.props.navigation.navigate('individualproduct')}>
           <CardItem cardBody>
              <Image source={{uri: 'https://www.sufivilla.com/wp-content/uploads/2018/09/Roadster-Men-Navy-Blue-Beige-Regular-Fit-Checked-Casual-Shirtt.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>
           <Card style={styles.cardrow}>
           <TouchableHighlight onPress={() => this.props.navigation.navigate('individualproduct')}>
           <CardItem cardBody>
              <Image source={{uri: 'https://assets.jassets.com/h_533,q_95,w_391/v1/assets/images/productImage/2018/7/6/5d979f4e-6923-4e79-b1bc-c541a1cfe7a51530830918683-1.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
            </Card>
            </View>

            <Card style={height=400}>
            <CardItem cardBody>
              <Image source={{uri: 'https://d224nth7ac0evy.cloudfront.net/blog/cache/840x620/magefan_blog/Blog-Ideas-Man.jpg'}} style={{height: 270, width: null, flex: 1}}/>
            </CardItem>
           
            </Card>

            <View style={styles.twocardsinglerow}>
           <Card style={styles.cardrow} >
           <TouchableHighlight onPress={() => this.props.navigation.navigate('individualproduct')}>

           <CardItem cardBody>
              <Image source={{uri: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/556296.jpg?X56'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>
           <Card style={styles.cardrow}>
           <TouchableHighlight onPress={() => this.props.navigation.navigate('individualproduct')}>
          <CardItem cardBody>
              <Image source={{uri: 'https://cdn.webshopapp.com/shops/201242/files/227697530/roy-robson-robson-grey-marbled-coat.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
            </Card>
            </View>
            
            </View>
         </Tab>



          <Tab heading="WOMAN">
          <View >

          <Card style={height=400}>
            <CardItem cardBody>
              <Image source={{uri: 'https://blog.befunky.com/wp-content/uploads/2015/11/hellofall4.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
           
            </Card>

         <View style={styles.twocardsinglerow}>
           <Card style={styles.cardrow} >
           <CardItem cardBody>
              <Image source={{uri: 'http://www.bnyconline.com/common/images/products/large/CAW348-8506_1.JPG'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'http://www.bnyconline.com/common/images/products/large/CAW001-1584_1.JPG'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>

         </View>
         <View style={styles.twocardsinglerow}>
           <Card style={styles.cardrow} >
           <CardItem cardBody>
              <Image source={{uri: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1382567/2016/6/15/11465994028754-Marie-Claire-Women-Shirts-6161465994028342-1.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'https://logoshirtsdirect.com/wp-content/uploads/2015/07/Calvin_Klein_13CK018_Model_Shot_High-e1438194708660.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
            </Card>
            </View>

            

            <View style={styles.twocardsinglerow}>
           <Card style={styles.cardrow} >
           <CardItem cardBody>
              <Image source={{uri: 'http://assets.myntassets.com/assets/images/2472770/2018/4/16/11523871771015-Anouk-Women-Kurta-Sets-4971523871770872-1.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
           </Card>
           <Card style={styles.cardrow}>
           <CardItem cardBody>
              <Image source={{uri: 'http://assets.myntassets.com/assets/images/1959685/2018/4/13/11523618856320-Vishudh-Women-Navy-Blue-Printed-Anarkali-Kurta-5201523618856141-1.jpg'}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
            <Text style={styles.description}>$32,000</Text>  
            </Card>
            </View>
            
            </View>
          
          </Tab>
          <Tab heading="KIDS">
          <View >

<Card style={height=400}>
  <CardItem cardBody>
    <Image source={{uri: 'https://fashionista.com/.image/t_share/MTM2MTE1NjM4NjE0NjYxNTk4/20367-2-bln-03b-aj--20_188_a4jpg.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
 
  </Card>

<View style={styles.twocardsinglerow}>
 <Card style={styles.cardrow} >
 <CardItem cardBody>
    <Image source={{uri: 'https://assets.abfrlcdn.com/img/app/categorymedia/production/7/76-37-6470.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
  <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
  <Text style={styles.description}>$32,000</Text>  
 </Card>
 <Card style={styles.cardrow}>
 <CardItem cardBody>
    <Image source={{uri: 'https://i.pinimg.com/originals/66/33/1a/66331a40d3ede4c1ba4fa3977ac7c8cb.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
  <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
  <Text style={styles.description}>$32,000</Text>  
 </Card>

</View>
<View style={styles.twocardsinglerow}>
 <Card style={styles.cardrow} >
 <CardItem cardBody>
    <Image source={{uri: 'https://i.pinimg.com/originals/17/ba/68/17ba68288e303bcc46f5daf3187ddbb3.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
  <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
  <Text style={styles.description}>$32,000</Text>  
 </Card>
 <Card style={styles.cardrow}>
 <CardItem cardBody>
    <Image source={{uri: 'http://designersoutfits.com/wp-content/uploads/2016/03/dresses-ideas-for-kids-girls-for-summer-15.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
  <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
  <Text style={styles.description}>$32,000</Text>  
  </Card>
  </View>

  

  <View style={styles.twocardsinglerow}>
 <Card style={styles.cardrow} >
 <CardItem cardBody>
    <Image source={{uri: 'https://i.pinimg.com/originals/a9/9a/0b/a99a0bdc93ec7a99c1a30915d8d17fc8.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
  <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
  <Text style={styles.description}>$32,000</Text>  
 </Card>
 <Card style={styles.cardrow}>
 <CardItem cardBody>
    <Image source={{uri: 'https://assets.abfrlcdn.com/img/app/categorymedia/production/7/77-37-6475.jpg'}} style={{height: 250, width: null, flex: 1}}/>
  </CardItem>
  <Text style={styles.description}>Salamon Shirt{"\n"}</Text>
  <Text style={styles.description}>$32,000</Text>  
  </Card>
  </View>
  
  </View>
          
          </Tab>
        </Tabs>
         
         
          <Card>
            <CardItem cardBody>
              <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height: 250, width: 200, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="share" />
                  <Text>12 shares</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
         
          <AirbnbRating
  count={5}
  reviews={[ "Bad", "OK", "Good", "Very Good","Extraordinary"]}
  defaultRating={5}
  size={20}
/>

<Card>
            <CardItem header bordered style={styles.blue}>
              <Text style={{textAlign:'center'}}>ABOUT US</Text>
            </CardItem>
            <CardItem bordered style={styles.blue}>
              <Body >
                <Text >
                  SOURCE FOR ALL BOOKS {"\n"} 
                  
                  AT{"\n"}
                  San Francisco,{"\n"}
                  California{"\n"}
                  +54-3433-32323.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered style={styles.blue}>
              <Text style={styles.red}>KnOwLeDgE pOoL</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>


      
)
    }
  }

  const styles = StyleSheet.create({
    red: {
      color:'red',
      fontWeight: 'bold',
      textAlign:'center',
      justifyContent: 'center',
    },
    blue:{
      backgroundColor:'grey',
      textAlign:'center',
      
    },
    topics:{
      backgroundColor:'grey',
      fontWeight:'bold',
    },
    searchbar:{
     marginRight:20,
    },
    twocardsinglerow:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    cardrow:{
      width:170,
      height:300,
    },
   description:{
     textAlign:'center',
     fontWeight:'bold',
   },

  }); 

  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }
  const Rootstack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    individualproduct:Details,
    secondpro:Producttwo,
   
    
  },
  {
    initialRouteName: 'Home',
  }
  
  );
  
  
  const AppContainer = createAppContainer(Rootstack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }