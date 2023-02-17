import React, {useState, useEffect} from 'react'
import { DataStore } from 'aws-amplify';
import { useParams } from "react-router-dom"
import { Order, UserMobile, OrderDish } from '../models';
import { useOrderContext } from '../Contexts/OrderContex';


const OrderDetails = () => {

  const { id } = useParams();

  // const { getOrder } =  useOrderContext();

  const [orderDetails, setOrderDetails] = useState(null)
  const [customerDetails, setCustomerDetails] = useState(null)
  const [orderDishes, setOrderDishes] = useState()
  // const [order, setOrder] = useState()
  
  const getOrderDetails = async() => { 
    const results = await DataStore.query(Order, id)
    setOrderDetails(results)
    console.log("order details: ",results)
   }



  useEffect(() => {
    // getOrder(id).then(setOrder);
    getOrderDetails();
    console.log("order details: ", orderDetails)
  }, [id])


  useEffect(() => {
    if(orderDetails?.id){
      DataStore.query(UserMobile, orderDetails?.usermobileID).then(setCustomerDetails)
    }
  }, [orderDetails?.id])

  // useEffect(() => {
  //   if(orderDetails?.id)
  //   DataStore.query(OrderDish, (od)=> od.orderID.eq(orderDetails?.id)).then(setOrderDishes)
  // }, [orderDetails?.id])

  async function getOrderDishes() {
    const orderDishes = await DataStore.query(OrderDish, od => od.orderID.eq(orderDetails?.id), {
      include: {
        dish: true // include the "Dish" model in the result set
      }
    });
    console.log(orderDishes);
  
    // Iterate over each OrderDish object and wait for its "dish" property to resolve
    const orderDishesWithDish = await Promise.all(orderDishes.map(async (od) => {
      const dish = await od.Dish;
      return { ...od, dish };
    }));
  
    setOrderDishes(orderDishesWithDish)
    console.log("Order Dishes Kings Grill: ",orderDishesWithDish);

  }

  useEffect(() => {
    getOrderDishes()
  }, [orderDetails?.id])
  
  
  
  // console.log("Order Dishes Kings Grill: ", orderDishes)


  // useEffect(() => {
  //   // getOrder();
  //   getUserDetails();
  // }, [id])

  // const food = orderDetails?.orderDishes
  
  // console.log("The details: ",orderDetails[0]?.orderDishes?.values?.quantity)
  return (
    <div>
      <p>Customer Name: {customerDetails?.name}</p>
      <p>Address: {customerDetails?.address}</p>

      {orderDishes?.map(orderitem =>( 
        <p key={orderitem?.dish?.id}>{orderitem?.dish?.name} x {orderitem?.quantity}</p>
      ))}

      <p>Total: {orderDetails?.subtotal?.toFixed(2)}</p>
      
    </div>
  )
}

export default OrderDetails