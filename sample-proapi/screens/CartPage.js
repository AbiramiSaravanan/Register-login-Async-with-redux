import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/Shop-context';
//import MainNavigation from '../components/MainNavigation';
// import { removeProductFromCart } from '../store/actions';
//import './Cart.css';
import { List,ListItem } from 'native-base';
import {Text,View,Button} from 'react-native';

class CartPage extends Component {
  static contextType = ShopContext;

  componentDidMount() {
    console.log("this.context:::::::::::::::::::::::::::")
    console.log(this.context);
    console.log(this.props.children);
    
  }

  render() {
    return (
      <ShopContext.Consumer>
        {context =>(
          <List>
          {console.log(",,,,,,,,,,,,,,,,,,,,,,,",this.context.cart)}
            {context.cart.map(cartItem => (
              <ListItem  key={cartItem.id}>
              
              
                <View>
                  <Text>{cartItem.title} - ${cartItem.price} (
                  {cartItem.quantity})</Text>
                </View>
                <View>
                  <Button title="Remove from Cart"
                    onPress={context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    
                  </Button>
              
              
             </View></ListItem>
            ))}
           </List>
        )}
        
           </ShopContext.Consumer>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default CartPage;