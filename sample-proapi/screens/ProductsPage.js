import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/Shop-context';
//import MainTabNavigator from '../components/MainTabNavigator';
// import { addProductToCart } from '../store/actions';
//import './Products.css';
import { List,ListItem } from 'native-base';
import {View,Button,Text} from 'react-native';

class ProductsPage extends Component {
  componentDidMount(){
    console.log("::::::::::::::::;",this.context)
  }
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          
           
              <List>
                {context.products.map(product => (
                  <ListItem key={product.id}>
                    <View>
                      <Text>{product.title} - ${product.price}</Text>
                    </View>
                    <View>
                      <Button title="Add to Cart"
                        onPress={context.addProductToCart.bind(this, product)}
                      >
                        
                      </Button>
                    </View>
                  </ListItem>
                ))}
              </List>
          
          
        )}
      </ShopContext.Consumer>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

export default ProductsPage;
