export type Ingredient = {
    id: string,
    ingredient: string,
    quantity: string
}

export type Product = {
    id: string,
    name: string,
    price: number,
    ingredients: Ingredient[]
}

export type CartItem  = {
    id: string,
    name: string,
    price: number,
    ingredients: Ingredient[]
    qty: number
}

export type Cart = {
    cartItems: CartItem[],
    totalAmount: number,
}