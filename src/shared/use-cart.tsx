import React, { useReducer } from 'react';
import { Cart, Product, CartItem } from '../Types';

type Props = {};

type AddToCart = {
  type: 'ADD_TO_CART'; payload: Product & { qty: number } 
}

type RemoveFromCart = {
  type: 'REMOVE_FROM_CART'; payload: { id: string }
}
type CartAction = AddToCart | RemoveFromCart


// Define the initial cart state
const initialCart: Cart = { cartItems: [], totalAmount: 0 };

// Create a reducer function with type inference
const cartReducer = (state: Cart, action: CartAction): Cart => {
  console.log(state)
  console.log(action.payload)
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, qty } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
        if (!existingItem) {
          console.log("Not found")
          console.log(action.payload)
        // Add a new item to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload}],
        };
      }
      else  {
        console.log(action.payload)
        // Update the quantity of an existing item in the cart
        existingItem.qty += qty
        console.log(existingItem)
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id ? existingItem : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
    }
    case 'REMOVE_FROM_CART': {
      const { id } = action.payload;
      // Remove the item with the specified ID from the cart
      const updatedCartItems = state.cartItems.filter((item) => item.id !== id);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    default:
      return state;
  }
};

function useCart(props: Props) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (product: Product, qty: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, qty } });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  return {
    cartState,
    addToCart,
    removeFromCart,
  };
}

export default useCart;
