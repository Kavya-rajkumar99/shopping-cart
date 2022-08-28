import React, { createContext,useEffect,useReducer} from 'react'
import './cart.css'
import ContextCart from './ContextCart';
import { products } from './Products';
import { reducer } from './Reducer';
export const CartContext = createContext()

const initialState = {
    items : products,
    totalAmount : 0,
    totalItems : 0
}

const Cart = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state,"In Cart")
    const removeItem = (id) =>{
        return dispatch({
            type : "REMOVE_ITEM",
            payload : id
        })
    }
    const clearCart = () =>{
        return dispatch({
            type:"CLEAR_CART",
        })
    }
    const increment = (id)=>{
        return dispatch({
            type:"INCREMENT",
            payload : id
        })
    }

    const decrement = (id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })   
    }

    useEffect(()=>{
       dispatch({
        type : "GET_TOTAL"
       })
    },[state.items])
  return (
    <>
    <CartContext.Provider value={{...state, removeItem,clearCart,increment,decrement}}>
    <ContextCart />
    </CartContext.Provider>
    </>
  )
}

export default Cart