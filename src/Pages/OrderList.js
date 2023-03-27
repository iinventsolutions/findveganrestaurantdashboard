import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PrintIcon from '@mui/icons-material/Print';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { HeaderSearch } from '../Components/Navbar';
import SearchIcon from '@material-ui/icons/Search';
import OrderState from '../Components/OrderStateItem';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ForwardIcon from '@mui/icons-material/Forward';
import OrderListItem from '../Components/OrderListItem';
import { DataStore } from 'aws-amplify';
import { Order } from '../models';
import { Grid } from '@material-ui/core';
import { OrderDish } from '../models';
import Table from '../Components/Table';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
import { useOrderContext } from '../Contexts/OrderContex';
import { Box } from '@mui/material';


const OrderList = () => {

  const { restaurant } = useRestaurantContex();
  const { clickedOrderId } = useOrderContext();

  const [orders, setOrders] = useState()
  const [orderDishes, setOrderDishes] = useState()

  // Operations to get order details
  async function getOrderDishes() {
    const allOrderDishes = await DataStore.query(OrderDish, od => od.orderID.eq(clickedOrderId), {
      include: {
        dish: true // include the "Dish" model in the result set
      }
    });
    // console.log(allOrderDishes);
  
    // Iterate over each OrderDish object and wait for its "dish" property to resolve
    const orderDishesWithDish = await Promise.all(allOrderDishes?.map(async (od) => {
      const dish = await od.Dish;
      return { ...od, dish };
    }));
    
    setOrderDishes(orderDishesWithDish);
    console.log("Order Dishes Kings Grill: ",orderDishesWithDish);
  }

  useEffect(() => {
    getOrderDishes()
  }, [clickedOrderId])
  
  // Operations to get order details ends

  useEffect(() => {
    if(!restaurant?.id){
      return;
    }
    console.log("restaurant id is: ",restaurant?.id)
    DataStore.query(Order, (o)=> o.orderRestaurantId.eq(restaurant?.id)).then(setOrders)
    // window.location.reload()
  }, [restaurant])

  useEffect(() => {
    try {
      const subscription = DataStore.observe(Order).subscribe(msg => {
        // console.log('Model:', msg.model.name, 'Operation:', msg.opType, 'Element:', msg.element);
        if(msg.opType === 'INSERT' || msg.opType === 'UPDATE'){
          console.log(msg.opType)
        }
      });
      return () => subscription.unsubscribe();
    } catch (error) {
      console.error('Error observing orders:', error);
    }
  }, [])
  

  if(!orderDishes){
    return null
  }


  console.log(orders)
  console.log("ORDER DISHES FROM LIST: ", orderDishes)
  console.log("Clicked order id: ", clickedOrderId)
  


  return (
    <ComponentWrapper>
      {/* <Header>
        <LineOne>
          <p>Orders</p>
          <HeaderButtons>
            <CustBottom>
              <PrintIcon />
              <p>PRINT</p>
            </CustBottom>
            <CustBottom>
              <p>EXPORT</p>
              <ArrowDropDownIcon />
            </CustBottom>
            <CustBottom style={{backgroundColor: '#67CA95'}}>
              <AddIcon style={{color: 'white'}}/>
              <p style={{color: 'white'}}>CREATE ORDER</p>
            </CustBottom>
          </HeaderButtons>
        </LineOne>

        <Divider style={{ color: 'black', width: '98%' }}/>
        <LineTwo>
          <HeaderSearch>
              <SearchIcon style={{fontSize: 15}}/>
              <input type="text" placeholder="Search by orders parameters..." />
          </HeaderSearch>
          <HeaderSearch className='searchStyle'>
              <input type="date" placeholder="Date Start" />
          </HeaderSearch>
          <HeaderSearch className='searchStyle'>
              <input type="date"  placeholder="Date End" />
          </HeaderSearch>
          <HeaderSearch className='searchStyle'>
              <LocationOnOutlinedIcon style={{fontSize: 15}}/>
              <input type="text" placeholder="Store" />
          </HeaderSearch>
        </LineTwo>
        <LineThree>
          <OrderState title='ALL' icon={<FolderCopyIcon style={{ fontSize: '18px' }}/>} number={36}/>
          <OrderState title='PICKUPS' icon={<ForwardIcon style={{ fontSize: '18px' }}/>} number={31}/>
          <OrderState title='RETURNS' icon={<ForwardIcon className='icStyle' style={{ fontSize: '18px' }}/>} number={30}/>
        </LineThree>
      </Header> */}

      {/* <OrderStatus>
          <div tabindex="1">
            <p>All Status</p>
          </div>
          <div tabindex="2">
            <p>New Order</p>
          </div>
          <div tabindex="3">
            <p>In Progress</p>
          </div>
          <div tabindex="4">
            <p>Delivered</p>
          </div>
      </OrderStatus> */}
      <Header>
        <ArrowDown>
        </ArrowDown>

        {!clickedOrderId ? 'Click on a dish to display detals' : <table style={{width: '60%', paddingBottom: '20px'}}>
          <thead style={{width: '70%'}}>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {orderDishes?.map((dishItem) => (<tr>
              <td>{dishItem?.dish?.name}</td>
              <td>{dishItem.quantity}</td>
              <td>{dishItem.dish.price}</td>
              <td>{dishItem.quantity*dishItem.dish.price}</td>
              {/* <td>{dishItem.subtotal}</td> */}
            </tr>))}
          </tbody>
        </table>}
        
      </Header>
      <OrderListWrapper>
        <Table orderData={orders}/>
      </OrderListWrapper>
    </ComponentWrapper>
  )
}

export default OrderList

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid red; */
  height: 150px;
  background-color: #D2D2D2;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: scroll;
  box-shadow: rgb(157, 157, 157) 3px 3px 8px 3px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;



  scrollbar-width: none;

::-webkit-scrollbar {
      display: none;
  }
`
const ArrowDown = styled.div`
  /* margin-top: 0px; */
  /* display: flex; */
  background-color: #fff;
  width: 60px;
  z-index: 0;
  height: 25px;
  -webkit-clip-path: polygon(50% 100%, 0 0, 99% 0);
  clip-path: polygon(50% 100%, 0 0, 99% 0);

  box-shadow: rgb(157, 157, 157) 2px 2px 6px 2px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`
const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  width: 70%;
  height: 40px;
  background-color: #B3B3B3;
  /* border: 1px solid red; */

  >p{
    text-align: left;
    color: #fff;
  }
`

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
`

const CustBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #E2E2E2;
    height: 28px;
    /* width: 75px; */
    padding: 10px;

    > p{
      font-size: 10px;
      font-weight: bold;
    }
`

const LineOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 100%;
    /* margin-top: 10px; */
    padding: 10px 10px;

    > p {
      font-size: 24px;
      font-weight: bold;
    }
`

const LineTwo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1em;
    padding: 10px 10px;
`
const HeaderSearch = styled.div`
    display: flex;
    opacity: 1;
    border-radius: 3px;
    background-color: #fff;
    text-align: left;
    padding: 5px 5px;
    color: gray;
    /* justify-content: space-around; */
    height: 25px;
    /* border: 1px solid gray; */

    >input {
        background-color: transparent;
        outline: none;
        color: #797D8C;
        text-align: left;
        border: none;
        font-size: 10px;
        /* min-width: 10vw; */
    }

`

const LineThree = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    padding: 10px 10px;
    gap: 2rem;
`
const OrderStatus = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    /* border: 1px solid red; */
    margin-top: 30px;
    margin-bottom: 10px;

    > div {
      display: flex;
      padding: 10px 10px;
      border-radius: 2px;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus{
        background-color: #D7F7D7;
      }

      &:hover {
        /* background-color: #D7F7D7; */
      }

      > p {
        font-size: 12px;
        font-weight: bold;
        color: #797D8C;
        opacity: 0.8;
      }
    }
`

const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  /* height: 400px; */
`

const OrderListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #F2A54A;
  padding: 0px 20px;

  > p{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
  }
`

const OrderListBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 360px;
    /* border: 1px solid #E2E2E2; */
    contain: content;
    overflow: auto;
    margin-top: 10px;
`

// GPT Table
// const TableContainer = styled.div`
//   display: table;
//   width: 100%;
//   max-width: 100%;
//   margin-bottom: 1rem;
//   background-color: transparent;
// `;

// const TableHead = styled.div`
//   display: table-header-group;
//   vertical-align: middle;
//   border-color: inherit;
// `;

// const TableRow = styled.div`
//   display: table-row;
//   vertical-align: inherit;
//   border-color: inherit;
// `;

// const TableHeading = styled.div`
//   display: table-cell;
//   vertical-align: inherit;
//   border-color: inherit;
//   font-weight: bold;
//   padding: 0.75rem;
// `;

// const TableData = styled.div`
//   display: table-cell;
//   vertical-align: inherit;
//   border-color: inherit;
//   padding: 0.75rem;
// `;