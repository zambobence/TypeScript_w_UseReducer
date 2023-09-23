import {Box, HStack, Heading} from '@chakra-ui/react'
import CartIcon from './CartIcon'
import {Cart} from '../Types'

type Props = {
    cartData: Cart,
}

const Navbar = ({cartData}: Props) => {
  return (
    <Box>
        <HStack>
            <Heading>Café-</Heading>
            <CartIcon products={cartData?.items.length}/>
        </HStack>
    </Box>
  )
}

export default Navbar