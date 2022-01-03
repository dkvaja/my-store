import { Backdrop, Badge, CircularProgress, Drawer, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Wrapper, StyledButton } from './store.styles'
import ProductItem from "../../components/ProductItem/ProductItem";
import Cart from '../../components/Cart/index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store";
import { capitalizeFirstChar } from '../../helpers/index';
import { getProductData } from "../../redux/slices/productSlice";

export type CartItemsTypes = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  rating: any,
  amount: number
}


const Store = () => {

  // Redux Selectors
  const userInfo: any = useSelector<RootState>(state => state?.getUserData?.user)
  const productData: any = useSelector<RootState>(state => state?.getProductData)

  // States
  const [cartItems, setCartItems] = useState([] as CartItemsTypes[])
  const dispatch = useDispatch()

  // Life Cycle Hooks
  useEffect(() => {
    dispatch(getProductData())
  }, [])


  // Helper Methods


  // Handle Add Product
  const handleAddToCart = (clickedItem: CartItemsTypes) => {
    setCartItems(prevState => {
      const isItemPresent = prevState.find(item => item?.id === clickedItem?.id)
      if (isItemPresent) {
        return prevState.map(product =>
          product?.id === clickedItem?.id ? { ...product, amount: product?.amount + 1 } : product
        )
      }

      return [...prevState, { ...clickedItem, amount: 1 }]
    })
  };

  // Handle Remove Product
  const handleRemoveFromCart = (id: number) => {

    setCartItems(prevState => (
      prevState.reduce((acc, item) => {
        if (item?.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item?.amount - 1 }];
        }
        else {
          return [...acc, item]
        }
      }, [] as CartItemsTypes[])
    ))

  };

  // Loader
  if (productData?.isLoading)
    return (
      <Backdrop
        sx={{ color: 'primary', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )

  // Return Method
  return (
    <Wrapper>
      {
        userInfo &&
        <Typography variant='h3' sx={{ mb: 3 }}>
          Welcome{" "}
          {
            capitalizeFirstChar(userInfo?.name?.firstname + " " + userInfo?.name?.lastname)
          }!
        </Typography>
      }
      <Grid container spacing={3} >
        {
          productData?.products?.map((product: CartItemsTypes) => (
            <Grid item key={product?.id} xs={12} sm={3} >
              <ProductItem item={product} />
            </Grid>))
        }
      </Grid>
    </Wrapper>
  );
};

export default Store;
