import React from 'react'
import { ProductDetailWrapper } from './productDetail.styles';
import { useParams } from 'react-router-dom';
import { CartItemsTypes } from '../Store';
import { Backdrop, Button, Chip, CircularProgress, Grid, Typography, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { addToCart, addToFavorite, getSelectedProduct } from '../../redux/slices/productSlice';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const ProductDetail: React.FC = () => {

    const selectedProductData: any = useSelector<RootState>(state => state?.getProductData)
    const cartData: any = useSelector<RootState>(state => state?.getProductData?.cartProducts)

    const { productId } = useParams()
    const dispatch = useDispatch()

    // Life Cycle Hooks
    useEffect(() => {
        if (productId) {
            dispatch(getSelectedProduct(productId))
        }
    }, [productId])

    const handleAddToCart = (item: CartItemsTypes) => {
        if (item) {
            let updatedCartData = []
            const isItemPresent = cartData.find((items: CartItemsTypes) => items?.id === item?.id)
            if (isItemPresent) {
                updatedCartData = cartData.map((product: CartItemsTypes) =>
                    product?.id === item?.id ? { ...product, amount: product?.amount + 1 } : product
                )
            }
            else {
                updatedCartData = [...cartData, { ...item, amount: 1 }]
            }

            dispatch(addToCart(updatedCartData))
        }
    }

    const handleAddToFavorite = (item: CartItemsTypes) => {
        if (item) {
            const isItemPresent = cartData.find((items: CartItemsTypes) => items?.id === item?.id)
            if (isItemPresent) {
                return
            }
            dispatch(addToFavorite(item))
        }
    }


    // Loader
    if (selectedProductData?.isLoading)
        return (
            <Backdrop
                sx={{ color: 'primary', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )

    return (
        <ProductDetailWrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} className='center-grid-item' >
                    <img src={selectedProductData?.selectedProduct?.image} alt={selectedProductData?.selectedProduct?.title} />
                </Grid>
                <Grid item xs={12} md={6} lg={6} className='product-detail-box' >
                    <div className='product-detail'>
                        <Typography variant='h4' align='left' gutterBottom >{selectedProductData?.selectedProduct?.title}</Typography>
                        <Typography variant='body1' align='left' gutterBottom >{selectedProductData?.selectedProduct?.description}</Typography>
                        <Typography variant='h5' align='left' gutterBottom>${selectedProductData?.selectedProduct?.price}</Typography>
                    </div>
                    <div className='chip-container'>
                        <Chip label={selectedProductData?.selectedProduct?.category} />
                    </div>
                    <div className='button-group'>
                        <Button variant='contained' onClick={() => handleAddToCart(selectedProductData?.selectedProduct)}>
                            Add To Cart
                        </Button>
                        <IconButton color="primary" onClick={() => handleAddToFavorite(selectedProductData?.selectedProduct)} >
                            <FavoriteBorderRoundedIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </ProductDetailWrapper>
    )
}

export default ProductDetail
