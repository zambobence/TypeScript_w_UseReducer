import {useState} from 'react'
import { Product } from '../Types'
import {Heading, Text, Button, GridItem} from '@chakra-ui/react'
import useCart from '../shared/use-cart'

type Props = {
    data: Product,
}

export default function ProductItem({data}: Props) {

    const {addToCart} = useCart()
    const [amount, setAmount] = useState<number>(1)
    const handleAddToCart = () => {
        addToCart(data, amount)
    }

  return (
    <GridItem colSpan={{base:"6", md: "2", lg: "1" }}>
        <Heading>{data.name}</Heading>
        <Text>{data.price}</Text>
        <input type='number' value={amount} name="amount" onChange={(e) => setAmount(e.target.value)} />
        <Button onClick={handleAddToCart}>Add to Cart</Button>
    </GridItem>
  )
}