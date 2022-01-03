import { Typography } from '@mui/material'
import React from 'react'
import { CartItemsTypes } from '../../pages/Store'
import CartItem from '../CartItem'
import { CartWrapper } from './Cart.styles'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store'
import { addToCart } from '../../redux/slices/productSlice'

type Props = {
    cartItems: CartItemsTypes[],
    removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {

    const cartData: any = useSelector<RootState>(state => state?.getProductData?.cartProducts)

    const dispatch = useDispatch()

    const handleAddToCart = (item: CartItemsTypes) => {
        const isItemPresent = cartData.find((items: CartItemsTypes) => items?.id === item?.id)
        let updatedCartData = []
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

    const handleRemoveFromCart = (id: number) => {
        let updatedCartData = cartData.reduce((acc: any, item: CartItemsTypes) => {
            if (item?.id === id) {
                if (item.amount === 1) return acc;
                return [...acc, { ...item, amount: item?.amount - 1 }];
            }
            else {
                return [...acc, item]
            }
        }, [] as CartItemsTypes[])
        dispatch(addToCart(updatedCartData))
    }

    const calculateTotal = (items: CartItemsTypes[]) =>
        items.reduce((acc: number, item) => acc + item?.amount * item?.price, 0)

    const total = cartData.length > 0 ? <h2>Total: ${calculateTotal(cartData).toFixed(2)}</h2> : null

    return (
        <CartWrapper>
            <Typography variant='h4' >
                Your Cart
            </Typography>
            {cartData?.length === 0 ? <p>Your cart is empty</p> : null}
            {cartData?.map((product: CartItemsTypes) => (
                <CartItem
                    key={product?.id}
                    item={product}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            ))}
            <Typography align='center'>
                {total}
            </Typography>

        </CartWrapper>
    )
}

export default Cart
