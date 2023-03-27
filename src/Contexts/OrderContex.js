import React, {createContext, useContext, useEffect, useState} from 'react'
import { DataStore } from 'aws-amplify';
import { OrderDish, Order } from '../models';


export const OrderContext = createContext();

export const OrderContextProvider = ({children}) => {

    const [checkLogin, setcheckLogin] = useState(true)
    const [clickedOrderId, setClickedOrderId] = useState(null)

    const getOrder = async(id)=>{
        const order = await DataStore.query(Order, id);
        const OrderDishes = await DataStore.query(OrderDish, (od)=> od.orderID.eq(id))

        return {...order, dishes: OrderDishes}
     }



    return(
        <OrderContext.Provider 
            value={{getOrder,
                    checkLogin, 
                    setcheckLogin,
                    clickedOrderId,
                    setClickedOrderId
                    }}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrderContext = () => useContext(OrderContext);