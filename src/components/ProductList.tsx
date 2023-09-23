import React, { useEffect } from 'react'
import { Product } from '../Types'
import ProductGrid from './ProductGrid'
import {Heading, Box, HStack} from '@chakra-ui/react'

type Props = {
    products: [],
    addToCart: () => void
}

const ProductList = ({products}: Props) => {

    
    return (
    <div>ProductList
      {products.map(e => 
      <Box key={e.category}>
        <HStack>
          <Heading>{e.category}</Heading>
        </HStack>
          <ProductGrid products={e.items} />
      </Box>)}
    </div>
  )
}

export default ProductList