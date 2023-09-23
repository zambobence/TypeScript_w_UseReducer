import {Icon, Text} from '@chakra-ui/react'
import {BiCartAlt} from 'react-icons/bi'

type Props = {
    products: number
}

function CartIcon({products}: Props) {
  return (
    <div>
        <Icon as={BiCartAlt} />
        {products && <Text>{products}</Text>}
    </div>
  )
}

export default CartIcon