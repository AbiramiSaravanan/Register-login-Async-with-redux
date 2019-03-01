import React from 'react';
import { ScrollView, StyleSheet,Image,TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Content,Text,Icon,Right,Card,CardItem,Form,Item,Input,Button,Toast,Footer, Container } from 'native-base';
import { Tile } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Hitcher',
  };

  render() {
    return (
      <Container>
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
         <Tile>
         imageSrc={require('C:\Users\Abirami\Desktop\pexels-photo-531880.jpeg')}
            <Item>
              <Input placeholder="Username"/>
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button onPress={()=> Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay'
            })}>>
            <Text style={{textAlign:'center'}}>sign in</Text>
          </Button>
          </Tile>
          </Card>


      
      </Content>
      <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor:'grey',
    
  },
  

}); 
