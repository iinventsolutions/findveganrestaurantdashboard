import React, {useState, useEffect} from 'react';
import { Space, Table, Tag } from 'antd';
import { DataStore } from 'aws-amplify';
import { UserMobile, Order } from '../models';
import { useNavigate } from 'react-router-dom';
import { useRestaurantContex } from '../Contexts/RestaurantContext';



const TableAnt = () => { 

  const { restaurant } = useRestaurantContex();

  const [orders, setOrders] = useState()

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
    else if(status === "DECLINED"){
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
    return <p>{customerNames[customerId]?.toUpperCase()}</p>;
  };


const columns = [
  {
    title: 'OrderID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date and Time',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: convertDate
  },
  {
    title: 'Customer Name',
    dataIndex: 'usermobileID',
    key: 'usermobileID',
    render: getCustomerName
  },
  {
    title: 'Amount',
    dataIndex: 'subtotal',
    key: 'subtotal',
    render: (amount) => <p>GHS {amount}</p>
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: orderStatus,
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
  },
  // {
  //   title: 'Time',
  //   dataIndex: 'time',
  //   key: convertTime,
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.customename}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    orderid: '#55555',
    date: '26 March 2020',
    subtotal: 120,
    customername: 'Baah Lawrence Darko',
    age: 32,
    payment: 'Cash',
    status: 'Accepted',
    time: '12:28',
    // address: 'New York No. 1 Lake Park',
    // tags: ['nice', 'developer'],
  },
  {
    key: '2',
    orderid: '#55556',
    date: '26 March 2020',
    subtotal: 120,
    customername: 'Jim Green',
    age: 42,
    payment: 'Mobile Money',
    status: 'Delivered',
    time: '12:28',
    // address: 'London No. 1 Lake Park',
    // tags: ['loser'],
  },
  {
    key: '3',
    orderid: '#55557',
    date: '26 March 2020',
    subtotal: 120,
    customername: 'Joe Black',
    age: 32,
    payment: 'Cash',
    status: 'Declined',
    time: '12:28',
    // address: 'Sydney No. 1 Lake Park',
    // tags: ['cool', 'teacher'],
  },
];


  return(
    <Table 
        onRow= {(orderObj)=>({
            onClick: () => navigate(orderObj.id)
        })}
        columns={columns} 
        dataSource={orders} 
        rowKey='id' />
  )

 }

// const TableAnt = () => <Table onClick={handleClick} columns={columns} dataSource={data} />;

export default TableAnt