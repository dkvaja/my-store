import { Button } from '@mui/material'
import React from 'react'
import { CartItemsTypes } from '../../pages/Store';
import { CartItemWrapper } from './CartItem.styles';

type Props = {
    item: CartItemsTypes,
    addToCart: (clickedItem: CartItemsTypes) => void,
    removeFromCart: (id: number) => void
}


const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <CartItemWrapper>
            <div>
                <h3>{item?.title}</h3>
                <div className='info' >
                    <p>Price: ${item?.price}</p>
                    <p>Total: ${`${(item?.amount * item?.price).toFixed(2)}`}</p>
                </div>
                <div className='button-group'>
                    <Button size='small' disableElevation variant='contained' onClick={() => removeFromCart(item?.id)}>-
                    </Button>
                    <p>{item?.amount}</p>
                    <Button size='small' disableElevation variant='contained' onClick={() => addToCart(item)}>+
                    </Button>

                </div>
            </div>
            <img src={item?.image} alt={item?.title} />
        </CartItemWrapper>
    )
}

export default CartItem
