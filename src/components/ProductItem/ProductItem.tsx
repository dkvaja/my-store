import React, { useEffect } from 'react'
import { ProductItemBox } from './ProductItem.styles';
import { CartItemsTypes } from '../../pages/Store'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/productSlice';
import { RootState } from '../../store';


type Props = {
    item: CartItemsTypes,
}

const ProductItem: React.FC<Props> = ({ item }) => {
    const cartData: any = useSelector<RootState>(state => state?.getProductData?.cartProducts)

    let navigate = useNavigate();
    const dispatch = useDispatch()


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

    return (
        <ProductItemBox>
            <div className='action-area' onClick={() => navigate(`/product/${item?.id}`)}>
                <img src={item?.image} alt={item?.title} />
                <div>
                    <h3>{item?.title}</h3>
                    <p>{item?.description}</p>
                    <h3>${item?.price}</h3>
                </div>
            </div>
            <Button variant='contained' onClick={() => handleAddToCart(item)} >Add To Cart</Button>
        </ProductItemBox >
    )
}

export default ProductItem
