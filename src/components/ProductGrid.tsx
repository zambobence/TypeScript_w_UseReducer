import React from 'react'
import {Grid, GridItem, Heading} from '@chakra-ui/react'
import { Product } from '../Types'
import ProductItem from './ProductItem'

type Props = {
    products: Product[],
}

const ProductGrid = ({products}: Props) => {

    let content

    if (!products || products.length === 0){
        content = <GridItem colSpan={6}>
            <Heading></Heading>
            </GridItem>
    } else {
        content = products.map(e => <ProductItem key={e.id} data={e} />)
    }
    return (
        <Grid templateColumns="repeat(6, 1fr)">
            {content}
        </Grid>
    )
}

export default ProductGrid