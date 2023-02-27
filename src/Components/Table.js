import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Space, Table, Tag } from 'antd';
import { DataStore } from 'aws-amplify';
import { UserMobile, Order } from '../models';
import { useNavigate } from 'react-router-dom';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
// import format from 'date-fns/format';



const TableAnt = () => { 

 

  const { restaurant } = useRestaurantContex();

  const [orders, setOrders] = useState({})

  const navigate = useNavigate();
  const [customerNames, setCustomerNames] = useState({})

  useEffect(() => {
    if(!restaurant?.id){
      return;
    }
    console.log("restaurant id is: ",restaurant?.id)
    DataStore.query(Order, (o)=> o.orderRestaurantId.eq(restaurant?.id)).then(setOrders)

  }, [restaurant?.id])

  // useEffect(() => {
  //   const subscription = DataStore.observe(Order).subscribe((msg) => {
  //     console.log(msg)
  //   })

  //   return () => subscription.unsubscribe();
  // }, [])
  


 console.log("Order data: ", orders)


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
    console.log('all customer names: ', customerNames)
    return <p>{customerNames[customerId]?.toUpperCase()}</p>;
  };

  const changeOrderStatus = async(id, thestate) => { 
    let btnState = thestate
    const orderState = await DataStore.query(Order, id);
    await DataStore.save(
      Order.copyOf(orderState, updated => {
        updated.status = btnState
      })
    ); 

    navigate(-1)
   }

// const columns = [
//   {
//     title: 'OrderID',
//     dataIndex: 'id',
//     key: 'id',
//     className: 'custom-header-cell',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Date and Time',
//     dataIndex: 'createdAt',
//     key: 'createdAt',
//     render: convertDate
//   },
//   {
//     title: 'Customer Name',
//     dataIndex: 'usermobileID',
//     key: 'usermobileID',
//     render: getCustomerName
//   },
//   {
//     title: 'Amount',
//     dataIndex: 'subtotal',
//     key: 'subtotal',
//     render: (amount) => <p>GHS {amount}</p>
//   },
//   {
//     title: 'Status',
//     key: 'status',
//     dataIndex: 'status',
//     render: orderStatus,
//   },
//   {
//     title: 'Payment',
//     dataIndex: 'payment',
//     key: 'payment',
//   },
//   // {
//   //   title: 'Time',
//   //   dataIndex: 'time',
//   //   key: convertTime,
//   // },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Accept {record.customename}</a>
//         <a>Decline</a>
//       </Space>
//     ),
//   },
// ];

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
    // valueFormatter: (params) => format(new Date(params.value), 'yyyy-MM-dd hh:mm a'),
    sortable: false,
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
            onCellDoubleClick={()=>{}}
            onRowClick={(row) => {navigate(row.id)}}
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