import React, { useEffect } from 'react'
import { FavoriteProductsWrapper } from './favorite.styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { Grid } from '@mui/material';
import ProductItem from '../../components/ProductItem/ProductItem';
import { CartItemsTypes } from '../Store'

const FavoriteProducts: React.FC = () => {
    const favoriteProducts: any = useSelector<RootState>(state => state?.getProductData?.favoriteProducts)

    return (
        <FavoriteProductsWrapper>
            <Grid container spacing={3} >
                {
                    favoriteProducts?.map((product: CartItemsTypes) => (
                        <Grid item key={product?.id} xs={12} sm={3} >
                            <ProductItem item={product} />
                        </Grid>))
                }
            </Grid>
        </FavoriteProductsWrapper>
    )
}

export default FavoriteProducts
