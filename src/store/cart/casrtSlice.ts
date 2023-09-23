import { createSlice } from "@reduxjs/toolkit"

interface Ingredient {
    id: string,
    ingredient: string,
    quantity: string
}

interface Product {
    id: string,
    nane: string,
    price: number,
    ingredients: Ingredient[]
}

interface CartItem extends Product {
    qty: number
}

interface Cart {
    cartItems: CartItem[],
    totalAmount: number
}

const cartState : Cart = {
    cartItems: [],
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addToCart: (state, action) => {
            const {id, qty} = action.payload
            const cartItemIndex = state.cartItems.find(e => e.id === id)}

        }
    }
})