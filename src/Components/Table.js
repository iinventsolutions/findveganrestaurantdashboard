import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Space, Table, Tag } from 'antd';
import { DataStore } from 'aws-amplify';
import { UserMobile, Order } from '../models';
import { useNavigate } from 'react-router-dom';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useOrderContext } from '../Contexts/OrderContex';
// import format from 'date-fns/format';



const TableAnt = () => { 

 

  const { restaurant } = useRestaurantContex();
  const { setClickedOrderId } = useOrderContext();


  const [orders, setOrders] = useState({})

  const navigate = useNavigate();
  const [customerNames, setCustomerNames] = useState({})
  const [refreshState, setRefreshState] = useState(false)

  const getOrderList = async() => { 
    if(!restaurant?.id){
      return;
    }
    console.log("restaurant id is: ",restaurant?.id)
    await DataStore.query(Order, (o)=> o.orderRestaurantId.eq(restaurant?.id)).then(setOrders)
   }

  useEffect(() => {
    getOrderList()
  }, [restaurant?.id])

  useEffect(() => {
    try {
      const subscription = DataStore.observe(Order).subscribe(msg => {
        console.log(msg)
        // console.log('Model:', msg.model.name, 'Operation:', msg.opType, 'Element:', msg.element);
        if(msg.opType === 'INSERT' && msg.element.orderRestaurantId == restaurant?.id){
          setOrders((existingOrders)=> [msg.element, ...existingOrders])
        }
        else if(msg.opType === 'UPDATE'){
          getOrderList();
        }
      });
      return () => subscription.unsubscribe();
    } catch (error) {
      console.error('Error observing orders:', error);
    }
  }, [])
  


//  console.log("Order data: ", orders)


  const orderStatus = (status) => { 
    if(status === "Accepted"){
      return <Tag color='green'>{status}</Tag>
    }
    else if(status === "DELIVERED"){
      return <Tag color='green'>{status}</Tag>
    }
    else if(status === "RESTAURANT_DECLINED"){
      return <Tag color='red'>{status}</Tag>
    }
    else if(status === "ACCEPTED"){
      return <Tag color='green'>{status}</Tag>
    }
    else if(status === "NEW"){
      return <Tag color='yellow'>{status}</Tag>
    }

    // let color = 'green'
    // const orderColor = {
    //   NEW : 'green',
    //   ACCEPTED : 'blue'
    // }

    // if(orderData.orderStatus==orderColor.NEW){
    //   color = 
    // }

    return <Tag color='default'>{status}</Tag>
  
   }

  const convertDate = (awsdate) => { 
   const date = new Date(awsdate)

   const formattedDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  return(
    <p>{formattedDate}</p>
  )
    
   }

   const getCustomerName = (customerId) => {
    if (!customerNames[customerId]) {
      DataStore.query(UserMobile, customerId).then((customer) => {
        setCustomerNames(prevCustomerNames => ({
          ...prevCustomerNames,
          [customerId]: customer?.name,
        }));
      });
    }
    // console.log('all customer names: ', customerNames)
    return <p>{customerNames[customerId]?.toUpperCase()}</p>;
    // return customerNames[customerId]?.toUpperCase()
  };

  const changeOrderStatus = async(id, thestate) => { 
    let btnState = thestate
    const orderState = await DataStore.query(Order, id);
    await DataStore.save(
      Order.copyOf(orderState, updated => {
        updated.status = btnState
      })
    ); 

    // navigate(-1)
    setRefreshState(!refreshState)
   }



// For mui

const columns = [
  {
    field: 'id',
    headerName: 'OrderID',
    renderCell: (params) => <a>#{params.value}</a>,
    sortable: false,
    // flex: 1,
  },
  {
    field: 'createdAt',
    headerName: 'Date and Time',
    type: 'dateTime',
    renderCell: (params) => convertDate(params.value),
    sortable: true,
    flex: 2,
  },
  {
    field: 'usermobileID',
    headerName: 'Customer Name',
    renderCell: (params) => getCustomerName(params.value),
    sortable: false,
    flex: 1.5,
  },
  {
    field: 'subtotal',
    headerName: 'Amount',
    type: 'number',
    renderCell: (params) => <p>GHS {params.value}</p>,
    align: "left",
    headerAlign: "left",
    sortable: true,
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: (params) => orderStatus(params.value),
    sortable: true,
    flex: 1.5,
  },
  {
    field: 'payment',
    headerName: 'Payment',
    sortable: false,
    flex: 1.5,
    renderCell: (params) => (
      <MomoLabel>
        <h5>Mobile money</h5>
      </MomoLabel>
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: (params) => (
      <Space size="middle">
      <a onClick={(event) => {
        event.preventDefault();
        changeOrderStatus(params?.row?.id, 'ACCEPTED' );
        }}>Accept</a>
      <a onClick={(event) => {
        event.preventDefault();
        changeOrderStatus(params?.row?.id, 'RESTAURANT_DECLINED' );
        }}>Decline</a>
      </Space>
    ),
    sortable: false,
    flex: 1.5,
  },
];


console.log("the rows object is: ", orders)

  // let inversedOrders = orders.reverse()

  return(
    // <Table 
    //     onRow= {(orderObj)=>({
    //         onClick: () => navigate(orderObj.id)
    //     })}
    //     columns={columns} 
    //     dataSource={orders} 
    //     rowKey='id' />

    <Box sx={{ height: 450, width: '100%' }}>
          <DataGrid
            rows={orders}
            // loading={orderDishes?.rows.length === 0}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
            checkboxSelection={true}
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            // getRowId={getRowId}
            onCellDoubleClick={(row) => {navigate(row.id)}}
            onRowClick={(row) => {setClickedOrderId(row.id)}}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
  )

 }

// const TableAnt = () => <Table onClick={handleClick} columns={columns} dataSource={data} />;

export default TableAnt

const MomoLabel = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: #2FA94E;
  
  >h5{
    color: #fff;
  }
`