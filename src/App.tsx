import { useState, useEffect } from 'react'
import './App.css'
import { Product } from './Types'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import CartModal from './components/CartModal'
import useCart from './shared/use-cart'

function App() {

  const [products, setProducts] = useState <Product[]> ([])
  const [cartOpen, setCartOpen] = useState <boolean>(false)

  const {cartState} = useCart()

  const toggleCart = () => {
    setCartOpen(prevState => !prevState)
  }

  useEffect(() => {
    const fetchProuducts: () => void = async () => {
        const response = await fetch('http://localhost:3000/menu')
        if (!response.ok){
            throw Error (err.msg || "Something went wrong.")
        }
        const responseData = await response.json()
        console.log(responseData.products)
        setProducts(responseData.products)
    }
    fetchProuducts()
  },[])
  
  
  return (
    <>
      {cartOpen && <CartModal closeCart={() => setCartOpen(false)} />}
      <Navbar />
      <p>{JSON.stringify(cartState)}</p>
      <ProductList products={products} />
    </>
  )
}

export default App
