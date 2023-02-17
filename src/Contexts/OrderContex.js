import React, {createContext, useContext, useEffect, useState} from 'react'
import { DataStore } from 'aws-amplify';
import { OrderDish, Order } from '../models';


export const OrderContext = createContext();

export const OrderContextProvider = ({children}) => {

    const getOrder = async(id)=>{
        const order = await DataStore.query(Order, id);
        const OrderDishes = await DataStore.query(OrderDish, (od)=> od.orderID.eq(id))

        return {...order, dishes: OrderDishes}
     }

    return(
        <OrderContext.Provider value={{getOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrderContext = () => useContext(OrderContext);